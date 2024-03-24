
param([string]$Param1 = "minor change")
  git add .
  git commit -m "$Param1"
  git push


