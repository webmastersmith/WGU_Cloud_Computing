# Bryon Smith 011185815

# $folderPath = $PSScriptRoot
$ADRoot = (Get-ADDomain).distinguishedName
# $DNSRoot = (Get-ADDomain).DNSRoot
$OUCanonicalName = "Finance"
$OUDisplayName = "Finance"
# OU=Finance,DC=consultingfirm,DC=com
$ADPath = "OU=$($OUCanonicalName),$($ADRoot)" 
$financeUsers = Import-Csv -Path "$PSScriptRoot\financePersonnel.csv"
# Write-Host $financeUsers
try {
  # check if OU 'finance' exist
  Write-Host -ForegroundColor Blue "[AD]: Starting Active Directory Tasks"
  if (-Not([ADSI]::Exists("LDAP://$($ADPath)"))) {
    # Create OU
    Write-Host "$($OUCanonicalName) Does not exist. Creating..."
    New-ADOrganizationalUnit -Name $OUCanonicalName -Path $ADRoot -DisplayName $OUDisplayName -ProtectedFromAccidentalDeletion $false
    Write-Host "$($OUCanonicalName) has been created."

    # Insert New Users in Active Directory from CSV file.
    $AllUsers = $financeUsers.count
    $count = 1  
    ForEach ($fu in $financeUsers) {
      $First = $fu.First_Name
      $Last = $fu.Last_Name
      $Name = "$($First) $($Last)"
      $SamAcct = $fu.samAccount
      $Zip = $fu.PostalCode
      $WorkPhone = $fu.OfficePhone
      $Mobile = $fu.MobilePhone
    
      # Show progress indeicator.
      $progress = "[AD]: Adding AD user $($Name). $($count) of $($AllUsers)"
      Write-Progress -Activity "D411 Restore AD" -Status $progress -PercentComplete (($count / $AllUsers) * 100)
      # Add User to AD  and show progress
      New-ADUser -GivenName $First `
        -Surname $Last `
        -Name $Name `
        -SamAccountName $SamAcct `
        -DisplayName $Name `
        -PostalCode $Zip `
        -OfficePhone $WorkPhone `
        -MobilePhone $Mobile `
        -Path $ADPath
      
      # increment counter
      $count++
    }
  }
  else {
    Write-Host "$($OUCanonicalName) already exists. Removing..."
    # Get-ADOrganizationalUnit -Filter 'Name -like "*"' | Format-Table
    # Remove the OU 
    Remove-ADOrganizationalUnit -Identity $ADPath -Confirm:$false -Recursive
    Write-Host "$($OUCanonicalName) removed. Please run script again."
    Exit
  }
  
  Write-Host "[AD] Restore Active Directory Task Completed with no errors."
  Write-Host "Writing File to ADResults.txt"
  # Output results to file.
  Get-ADUser -Filter * -SearchBase $ADPath -Properties DisplayName, PostalCode, OfficePhone, MobilePhone > .\AdResults.txt
}
catch {
  Write-Host "An error occurred:"
  Write-Host $_
}
