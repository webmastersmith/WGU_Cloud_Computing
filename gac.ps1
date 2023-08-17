

function gac {
  [CmdletBinding()] # allows you add mandatory fields.
  param([string]$Param1 = "minor change")
  Set-Location $PWD
  Write-Host $PWD
  git add .
  git commit -m "$Param1"
  git push
}
