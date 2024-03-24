# Bryon Smith 011185815

# $folderPath = $PSScriptRoot
$ADRoot = (Get-ADDomain).distinguishedName
# $DNSRoot = (Get-ADDomain).DNSRoot
$OUCanonicalName = "Finance"
$OUDisplayName = "Finance"
$ADPath = "OU=$($OUCanonicalName),$($ADRoot)"
$financeUsers = Import-Csv -Path "$PSScriptRoot\financePersonnel.csv"
# Write-Host $financeUsers
try {
  # check if OU 'finance' exist
  Write-Host -ForegroundColor Blue "[AD]: Starting Active Directory Tasks"
  if (-Not([ADSI]::Exists("LDAP://$($ADPath)"))) {
    Write-Host "$($OUCanonicalName) Does not exist."
    # New-ADOrganizationalUnit -Name $OUCanonicalName -Path $ADRoot -DisplayName $OUDisplayName -ProtectedFromAccidentalDeletion $false
  }
  else {
    Write-Host "$($OUCanonicalName) already exists."
  }
}
catch {
  Write-Host "An error occurred:"
  Write-Host $_
}

ForEach ($fu in $financeUsers) {
  $First = $fu.First_Name
  $Last = $fu.Last_Name
  $Name = "$($First) $($Last)"
  $SamAcct = $fu.samAccount
  $Zip = $fu.PostalCode
  $WorkPhone = $fu.OfficePhone
  $Mobile = $fu.MobilePhone

  New-ADUser -GivenName $First `
             -Surname $Last `
             -Name $Name `
             
}