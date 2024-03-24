# Bryon Smith 011185815

$folderPath = $PSScriptRoot
$ADRoot = "DC=consultingfirm,DC=com"
$ADName = "Finance"
try {
  # check if OU 'finance' exist
  Write-Host -ForegroundColor Blue "[AD]: Starting Active Directory Tasks"
  if (Get-ADOrganizationalUnit -Filter "distinguishedName -eq $ADName") {
    Write-Host "OU Finance already exists."
  } else {
    New-ADOrganizationalUnit -Name $ADName -Path $ADRoot -DisplayName $ADName -ProtectedFromAccidentalDeletion $false
  }
}
catch {
  Write-Host "An error occurred:"
  Write-Host $_
}

