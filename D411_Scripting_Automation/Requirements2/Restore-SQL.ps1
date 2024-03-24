# Bryon Smith 011185815

$dbType = "Microsoft.SqlServer.Management.Smo.Server"
$dbName = "ClientDB"
$sqlInstanceName = "SRV19-PRIMARY\SQLEXPRESS"
$count = 1
try {
    # Remove old sql module due to function conflicts.
    if (Get-Module -Name sqlps) { Remove-Module sqlps }
    # install new sql module.
    Import-Module -Name SqlServer

    # Create SQL database
    $dbObject = New-Object -TypeName $dbType -ArgumentList $sqlInstanceName, $dbName
    $dbObject.Create()
    # Create the table from SQL file
    Invoke-Sqlcmd -ServerInstance $sqlInstanceName -Database $dbName -InputFile $PSScriptRoot\CreateTable_CreateCustomerLeads.sql
    # Get Customer_Leads data from csv
    $customer_leads = Import-Csv $PSScriptRoot\NewClientData.csv

    ForEach ($u in $customer_leads) {
        $First = $u.first_name
        $Last = $u.last_name
        $Name = "$($First) $($Last)"
        $City = $u.city
        $County = $u.county
        $Zip = $u.zip
        $WorkPhone = $u.officePhone
        $Mobile = $u.mobilePhone
      
        
        $count++
      }
  
    
}
catch {
    Write-Host "Something went wrong!"
    Write-Host $_
}