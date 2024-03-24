# Bryon Smith 011185815

$dbType = "Microsoft.SqlServer.Management.Smo.Database"
$dbName = "ClientDB"
$sqlInstanceName = "SRV19-PRIMARY\SQLEXPRESS"
$tableName = "CustomerLeads"
try {
    # Remove old sql module due to function conflicts.
    if (Get-Module -Name sqlps) { Remove-Module sqlps }
    # install new sql module.
    Import-Module -Name SqlServer

    # If database exist, drop it.
    if (Get-SqlDatabase -Name $dbName -ServerInstance $sqlInstanceName -ErrorAction SilentlyContinue) {
        Write-Host "$($dbName) database exist!"
        # Drop Database.
        $dropQuery = "ALTER DATABASE $($dbName) SET SINGLE_USER WITH ROLLBACK IMMEDIATE; `
                      USE master; `
                      DROP DATABASE $($dbName)"
        Invoke-Sqlcmd -ServerInstance $sqlInstanceName -Database $dbName -Query $dropQuery
        Write-Host "$($dbName) has been dropped!"
    }
    # Create SQL database
    Write-Host "Creating Database $($dbName)"
    $dbObject = New-Object -TypeName $dbType -ArgumentList $sqlInstanceName, $dbName
    $dbObject.Create()
    # Create the table from SQL file
    Invoke-Sqlcmd -ServerInstance $sqlInstanceName -Database $dbName -InputFile $PSScriptRoot\CreateTable_CreateCustomerLeads.sql
    # Get Customer_Leads data from csv
    $customer_leads = Import-Csv $PSScriptRoot\NewClientData.csv
    $AllUsers = $customer_leads.count
    $count = 1
    $Insert = "INSERT INTO [$($tableName)] (first_name, last_name, city, county, zip, officePhone, mobilePhone)"
    ForEach ($u in $customer_leads) {
        # Show progress indeicator.
        $progress = "[SQL]: Adding new SQL user $($Name). $($count) of $($AllUsers)"
        Write-Progress -Activity "D411 Restore SQL DB" -Status $progress -PercentComplete (($count / $AllUsers) * 100)
        $values = "VALUES ( `
                '$($u.first_name)' `
                '$($u.last_name)' `
                '$($u.city)' `
                '$($u.county)' `
                '$($u.zip)' `
                '$($u.officePhone)' `
                '$($u.mobilePhone)')"      
        Invoke-Sqlcmd -Database $dbName -ServerInstance $sqlInstanceName -Query "$($Insert) $($values)"
        $count++
    }
    
}
catch {
    Write-Host "Something went wrong!"
    Write-Host $_
}