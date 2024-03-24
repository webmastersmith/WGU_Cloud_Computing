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
    # Create the table from SQL file
    Invoke-Sqlcmd -ServerInstance $sqlInstanceName -Database $dbName -InputFile $PSScriptRoot\CreateTable_CreateCustomerLeads.sql
    # Get Customer_Leads data from csv
    $customer_leads = Import-Csv $PSScriptRoot\NewClientData.csv
    $AllUsers = $customer_leads.count
    $count = 1
    
    ForEach ($u in $customer_leads) {
        # Show progress indeicator.
        $progress = "[SQL]: Adding new SQL user $($Name). $($count) of $($AllUsers)"
        Write-Progress -Activity "D411 Restore SQL DB" -Status $progress -PercentComplete (($count / $AllUsers) * 100)

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