# Bryon Smith 011185815

$dbType = "Microsoft.SqlServer.Management.Smo.Server"
$dbName = "ClientDB"
$sqlInstanceName = "SRV19-PRIMARY\SQLEXPRESS"

try {
    # Remove old sql module due to function conflicts.
    if (Get-Module -Name sqlps) { Remove-Module sqlps }
    # install new sql module.
    Import-Module -Name SqlServer

    # Create SQL database
    $dbObject = New-Object -TypeName $dbType -ArgumentList $sqlInstanceName, $dbName
    $dbObject.Create()

    
}
catch {
    Write-Host "Something went wrong!"
    Write-Host $_
}