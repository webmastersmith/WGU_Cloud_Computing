# Bryon Smith 011185815

$dbName = "Microsoft.SqlServer.Management.Smo.Server"
$sqlInstanceName = "SRV19-PRIMARY\SQLEXPRESS"

try {
    # Remove old sql module due to function conflicts.
    if (Get-Module -Name sqlps) { Remove-Module sqlps }
    # install new sql module.
    Import-Module -Name SqlServer

    # Create SQL database
    $my_db = New-Object -TypeName $dbName -ArgumentList

    
}
catch {
    Write-Host "Something went wrong!"
    Write-Host $_
}