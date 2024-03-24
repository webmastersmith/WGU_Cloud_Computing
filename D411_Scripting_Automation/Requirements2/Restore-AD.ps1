# Bryon Smith 011185815

# $folderPath = $PSScriptRoot
$ADRoot = (Get-ADDomain).distinguishedName
# $DNSRoot = (Get-ADDomain).DNSRoot
$OUCanonicalName = "Finance"
$OUDisplayName = "Finance"
$ADPath = "OU=$($OUCanonicalName),$($ADRoot)"
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

