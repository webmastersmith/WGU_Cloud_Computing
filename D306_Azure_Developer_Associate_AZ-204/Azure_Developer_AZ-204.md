# Azure Developer Associate AZ-204

## Tips

- **WGU Chatter**
  - **Spencer G**: understand how triggers/bindings work and how Event driven processes work.
    - flashcards posted here, and munoz_notes.
  - [cyber vista practice exams](https://app.pluralsight.com/paths/certificate/developing-solutions-for-microsoft-azure-az-204)
- **Reddit**
  - <https://www.reddit.com/r/AzureCertification/comments/1difpww/az204/>
- **Study Guides**
  - [Thomas Maurer](https://www.thomasmaurer.ch/2020/03/az-204-study-guide-developing-solutions-for-microsoft-azure/)
  - [Github AndreaKarz](https://github.com/AndreasKarz/AZ-204)
  - [Github Argigeaus](https://github.com/arvigeus/az-204)
  - [Wolfgang](https://programmingwithwolfgang.com/mastering-az-204-exam-comprehensive-guide-azure-certification-preparation)
  - [Github Directory](https://github.com/Ditectrev/Microsoft-Azure-AZ-204-Developing-Solutions-for-Microsoft-Azure-Practice-Tests-Exams-Question-Answer)
  - [Shane Bart -pay attention to section on mind mapping](https://www.shanebart.com/az-204-exam-study-guide/)
  - [Madeleine Von Hausswolff -pay attention to practice with questions section](https://medium.com/webstep/exam-az-204-developing-solutions-for-microsoft-azure-study-tips-254d56941fd8)
- **Cheat Sheets**
  - <https://github.com/milanm/azure-cheat-sheet/tree/main>
- **Testing Notes**
  - heavy on container and function services.
- **Microsoft Learn**
  - [service naming rules](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules)
  - [learn microsoft](https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/?practice-assessment-type=certification)
  - [az-204 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-204)
  - [azure cli](https://learn.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest)
  - [exam demo](https://www.starttest.com/ITDVersions/22.0.0.0/ITDStart.aspx?SVC=3fb29b00-3364-4988-ab97-06acfc734207)
  - [az-204 labs](https://microsoftlearning.github.io/AZ-204-DevelopingSolutionsforMicrosoftAzure/)
  - [landing zone best practices](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-areas)
- **Practice Exams**
  - <https://wgu.udemy.com/course/az204-azure-practice/>
- **AZ-204 Exam Tips**
  - <https://www.reddit.com/r/AzureCertification/comments/1e7nptl/just_passed_az204/>
  - There were many questions about **messaging services**, their differences, and a couple of questions about **web app deployment**. There were two test cases: one at the start and one at the end.

## Azure Bash CLI

- [azure cli install](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
- [azure cli](https://learn.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest)

```bash
# install -https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-linux?pivots=apt
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
# upgrade
az upgrade
# Remove
sudo apt remove azure-cli -y && sudo apt autoremove -y

# login. -https://learn.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest#az-login
az login --use-device-code # allows WSL2 to login through web browser.
# logout
az logout

# Query
# https://learn.microsoft.com/en-us/cli/azure/use-azure-cli-successfully-query?tabs=concepts%2Cbash
az vm list --r groupName --query "[].{Name:name, OS:osDisk.osType}" --out table # don't forget quotes!
az account show --query 'id' -o tsv
az ad user list --query '[0].displayName' -o tsv
az group show --name $AZ_RESOURCE_GROUP_NAME --query 'id' -o tsv
```

## Azure App Configuration Service

- **App Configuration Service**
  - fully managed, central management of app settings and feature flags.
  - point-in-time replay of settings.
  - dynamic change app settings without restart/redeploy.
  - **Keys**
    - configuration data is stored as key-value pairs.
    - **naming**: any ascii except: `*,\`.
    - **max size**: 10,000 characters on a key-value pair.
    - **label**: `Key = AppName:DbEndpoint & Label = Test`. Labels allow versioning/searching.
  - **Feature Management**
    - **feature flag**: on/off.
    - **feature manager**: manages lifecycle of feature flags.
    - **filter**: rule for evaluating state of feature flag.
- **Secure App Configuration Data**
  - **Customer-managed keys**: Azure Key Vault with soft-delete and purge-protection features enabled.
    - RSA or RSA-HSM key within the Key Vault: The key must not be expired, it must be enabled, and it must have both wrap and unwrap capabilities enabled
  - **Private endpoints**: allow clients on a virtual network to securely access data over a **Azure Private Link**.
    - private endpoint uses an IP address from the virtual network address space for your App Configuration store.
    - secure connection by firewall blocking all connection to App on public endpoint.
    - connect using on-prem VPN or ExpressRoute w/ private-peering.
  - **Managed identities**: allows Azure App Configuration to easily access other Microsoft Entra ID-protected resources.
    - same as Key Vault: system-assigned identities or user-assigned identities.

## Azure API Management Service

- **API Management Service (APIM)**
  - comprehensive toolbox for managing the entire lifecycle of your APIs, making them more secure, accessible, and efficient for both developers and end-users.
  - central interface between backend services and the clients using the service.
  - **Security**: authentication, authorization, and rate limiting.
  - **Analytics and Monitoring**: Tracks API usage, performance, and health to identify and troubleshoot issues.
  - **Transformation**: Allows you to modify API requests and responses using policies (e.g., convert XML to JSON).
  - **Caching**: Improves API performance by caching responses, reducing the load on backend services.
  - **Management Plane**: administrative interface where you set up the API program.
    - define API schema, set policies(quota, transformations).
    - analytic insights, manage users.
- **Developer Portal**
  - customizable portal where developers can discover, learn about, and test your APIs.
  - automatically generates a website from you API documentation.
  - interactive console to call APIs.
  - create/manage account -get assigned API key.
- **API Access**
  - one or more APIs and how APIs delivered to developers.
  - **Open**: used without subscription.
  - **Protected**: must be subscribed to.
  - **Groups**: manage visibility of products to developers.
    - **Administrators**: manage API lifecycle. CRUD.
    - **Developers**: use APIs to build their applications.
    - **Guests**: read-only.
  - **Developers**: user accounts in API Management Service. Created or invited to join by administrator.
- **API Gateway (data plane or runtime)**
  - **single point entry for all API traffic**. accepts request, verifies API key, enforces quotas, logs request.
  - API gateway sits between clients and services(proxy). handles all API requests, applying policies, and collecting telemetry.
  - **Policies**: executed on API request. typically run a function on the query. (e.g. rate limit, transform XML to JSON...).
  - **TLS**: Gateway handles handshake and verification.
  - **with no gateway**, request are sent to back-end servers.
    - complex code(auth, rate limiting, proxy)
    - direct coupling(gateway proxy allows to modify request)
    - public endpoint exposes attack surface.
  - **Managed**: default gateway. all API traffic flows through Azure, regardless where backend is located.
  - **Self-hosted**: containerized version of default managed gateway for on-prem backends(hybrid or multicloud). manage APIs on-prem and across clouds from single API Management service in Azure.
  - **DAPR**: companies that use DAPR(API microservice central authority), can integrate with APIM.
- **API Subscriptions Keys**
  - secure API with subscription keys. valid keys are sent with developer request or it is rejected.
  - subscription is a named container for subscription keys(two keys -easier to rotate).
  - `curl --header "Ocp-Apim-Subscription-Key: <key string>" https://<apim gateway>.azure-api.net/api/path`
- **API Management Policies**
  - Policies are a collection of Statements that are executed sequentially on the request or response of an API.
  - **policy format**: `inbound, backend, outbound, on-error`.
  - if error, policy jumps to `on-error` section.
  - ![APIM policies](img/apim.PNG)

```xml
<!-- Sample Policy Format -->
<policies>
  <inbound>
    <!-- statements to be applied to the request go here -->
  </inbound>
  <backend>
    <!-- statements to be applied before the request is forwarded to
         the backend service go here -->
  </backend>
  <outbound>
    <!-- statements to be applied to the response go here -->
  </outbound>
  <on-error>
    <!-- statements to be applied if there is an error condition go here -->
  </on-error>
</policies>
```

```bash
# Create API Management Instance
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_API_MANAGEMENT_NAME="my-api-management-name-${RANDOM:0:3}"
az login --use-device-code # allows WSL2 to login through web browser.
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
az provider register --namespace Microsoft.ApiManagement
export AZ_USER_EMAIL="$(az account show --query 'user.name' -o tsv)"
# create api
az apim create -n $AZ_API_MANAGEMENT_NAME \
  --location $AZ_LOCATION \
  --publisher-email $AZ_USER_EMAIL \
  --resource-group $AZ_RESOURCE_GROUP_NAME \
  --publisher-name AZ204-APIM-Exercise \
  --sku-name Consumption

# follow the rest of the tutorial
# https://learn.microsoft.com/en-us/training/modules/explore-api-management/8-exercise-import-api

# clean up
az group delete --name $AZ_RESOURCE_GROUP_NAME -y --no-wait
```

## Azure Application Insights

- **Application Insights**
  - extension of Auzre Monitor. provides **Application Performance Monitoring(APM) (performance and availability)**.
  - **APM**: monitor from **development** through **test** and into **production**.
  - **metrics, telemetry**(describe application activities and health), **trace logging** data(detailed view of application activity).
  - **Insight Monitoring Parameters**
    - **Request rates, response times, and failure rates** - Find out which pages are most popular, at what times of day, and where your users are. See which pages perform best. If your response times and failure rates go high when there are more requests, then perhaps you have a resourcing problem.
    - **Dependency rates, response times, and failure rates** - Find out whether external services are slowing you down.
    - **Exceptions** - Analyze the aggregated statistics, or pick specific instances and drill into the stack trace and related requests. Both server and browser exceptions are reported.
    - **Page views and load performance** - reported by your users' browsers.
    - **AJAX calls** from web pages - rates, response times, and failure rates.
    - **User and session counts**.
    - **Performance counters**: from your Windows or Linux server machines, such as CPU, memory, and network usage.
    - **Host diagnostics**: from Docker or Azure.
    - **Diagnostic trace logs**: from your app - so that you can correlate trace events with requests.
    - **Custom events and metrics**: that you write yourself in the client or server code, to track business events such as items sold or games won.
- **Instrumenting**
  - enabling application telemetry capturing.
  - install instrumentation in your app and it monitors and directs the telemetry data to an Application Insights resource by using a unique token.
- **Availability Testing**
  - monitor availability and responsiveness.
  - Application Insights sends web request at regular intervals(availability) from points around the world(responsiveness).
  - **Standard Test**: ping test, SSL/TLS valid. HTTP GET, HEAD, POST.
  - **Custom TrackAvailability Test**: custom app that tracks availability. **multi request** or **authentication** test scenarios.
- **Application Map**
  - spot performance bottlenecks and failure hotspots.
  - each node represents application component.
  -
  - ![application map](img/application_map.PNG)
- **Log Metrics**
  - **Log-based metrics**: logs translated into **Kusto Queries** from stored events. more dimensions. better for **data analysis**.
  - **Standard metrics**: are stored as **pre-aggregated** time series. better choice for **dashboarding** and in **real-time alerting**.

## Azure App Services

- **App Service**
  - PaaS. Rapidly building and deploying web applications, APIs, and mobile backends.
  - **Key Features**
    - **Fully managed** platform: Handles **infrastructure management**, **scaling**, and **patching** for you.
    - Wide range of **languages and frameworks**: Supports popular options like .NET, Java, Node.js, Python, and PHP.
    - Built-in **CI/CD**: Integrates with GitHub, Azure DevOps, or other Git repositories for automated deployments.
    - **Auto-scaling**: Scales your app based on demand.
    - **Deployment slots**: Enable staging environments and easy swapping of production and staging slots.
    - Integrated **monitoring and diagnostics**: Provides tools to track performance and troubleshoot issues.
    - **identity providers integration**: (Facebook, Google, Microsoft). for managing **customer authentication**.
  - **VM Scale Set vs App Service**
  - ![vm scale set vs app service](img/scale_set_vs_app_service.PNG | width=300)
  - **Setup**
    - defines a set of **compute resources**(how many VMs, compute, storage for each VM) for a web application to run on.
    - configuration settings include runtime stack(node, python, dotnet...), operating system(linux, windows), region and App Service plan(standard, premium, isolated...).
    - **containers**: run container apps on windows or linux. pull images from Azure Container Registry or Docker Hub.
    - **Load Balancer**: optional. layer 7, round robin, deliver HTTP request to **workers**(web servers).
  - **Best for**
    - Web applications, APIs, and mobile backends that don't require extensive customization of the underlying infrastructure.
    - Development teams that want a streamlined deployment process with minimal infrastructure management.
- **App Service Autoscaling and Automatic Scaling**
  - **Scaling**: vertical(larger compute/memory, scale up/down) or horizontal(more VMs, scale out/in).
  - **elasticity for your services**, responding to changes in the environment by **adding or removing web servers and balancing the load** between them.
  - **availability and fault tolerance**: avoids long wait times to response because not enough resources.
  - true autoscale. you provide max and min VMs.
  - **resource-intensive processing**: autoscaling might not be an effective approach. increase Vertical scaling.
  - **scope**: instance limit is **set by App Service Plan pricing tier**. Autoscaling cannot scale beyond instance limit.
  - **Automatic Scaling**
    - new scale-out option. pre-warms resource for smooth transition.
  - **AutoScale Rule**
    - description of **when** and **what** action to perform.
    - monitor from **_Run history_** tab. **Activity Log** alert can be set for success or failure of autoscaling.
    - rules threshold is for **all** instances running. (e.g. CPU > 80%, all instances CPU averaged, must be > 80%).
    - scale based on **metric**: disk queue or HTTP request awaiting processing.
    - scale according to predefined schedule.
    - **time grain**: length of time between Service metric updates.
    - **time aggregation**: grouping of time grain values. Avg, Min, Max, Sum, Last, Count.
      - **duration**: amount of **time grain** to group for a better picture of resource usage over time.
    - **Actions**: scale-out/in. define rules in pairs: when to scale-out and when to scale-in.
      - **cool down**: during this time, will not scale in/out.
    - **Autoscale condition**: group of autoscale rules. scale-out if **any** rules met. scale-in if **all** rules met.
    - **Best Practices**
      - **DoS attack**: implement **detection** and **filtering** of requests **before they reach your service**.
      - min/max numbers are **inclusive**, so scale-in/out rules must not use same numbers.
      - choose best diagnostic metric: Avg, Min, Max, Total.
      - when scale-out adds instance, the Avg will divide metric by one more, dropping the result. if result falls within scale-in, you will create a **flapping** effect. To avoid this, it will **not** scale-in. solve this by choosing adequate margin between scale-in/out.
      - **default instance count** should be the min needed if metrics are unavailable.
      - configure autoscale notifications.
- **App Service Plan Tiers**
  - App Service always runs in App Service Plan. defines compute resources for a web app to run. one or more apps can run on the same compute resource.
  - **scope**: VM apps created in same region as App Service Plan defines.
  - **Scaling**
    - **scale unit**: **changing plan tier** is the only way to **increase scale-out**.
    - changing scale size by changing plan tier.
    - **Isolate apps by adding to separate App Service Plan**:
      - The app is resource-intensive.
      - You want to scale the app independently from the other apps in the existing plan.
      - The app needs resource in a different geographical region.
  - **Shared**: **Free** or **Shared**, two base tiers. charged **per CPU minute**.
    - allocate CPU quotas to each app that runs on the shared resources
    - **linux cannot run on shared**.
    - **resources can't scale out**.
    - **only for development and testing**.
  - **Dedicated**: **Basic, Standard, Premium, PremiumV2, PremiumV3**.
    - only apps in App Service Plan share compute resources.
    - **higher tiers have more VM instances** available for scale-out.
  - **Isolated**: **Isolated, IsolatedV2**.
    - dedicated VMs on dedicated VNet.
    - network and compute isolation.
    - maximum scale-out.
  - ![app service tiers](img/app_services_tiers.PNG)
- **App Service Authentication and Authorization**
  - **App Service** feature that provides out-of-the-box authentication with federated identity providers, allowing you to focus on the rest of your application.
  - Security Module: authenticate users, manage tokens, sessions, and inject identity into request headers.
  - built-in authentication and authorization support.
  - configured by using App settings, when enabled, every HTTP request will pass through the security module before it's handled by your App.
  - automatic logging of authentication and authorization traces.
  - **Settings**
    - **Allow Anonymous(unauthenticated) Request**: defer authorization of unauthenticated traffic to your App.
    - **require authenticated**: **_all_** anonymous traffic is sent to login provider page. Even home page.
  - **Logging**
    - enable auth traces to be written to log files.
- **App Service Environment (ASE)**
  - **fully isolated and dedicated environment** for securely running App Service apps at high scale.
  - gated by WAFs. **External/Internal load balanced**.
  - can create multiple ASEs across regions or single region.
- **App Service Setup**
  - **OS**: windows, linux
  - **Region**: location of datacenter. (e.g. 'East US').
  - **Number of VM instances**: how many VM instances allocated to plan.
  - **Size of VM instances**: compute. (Small, Medium, Large).
  - **Pricing Tier**: **Free, Shared, Basic, Standard, Premium, PremiumV2, PremiumV3, Isolated, IsolatedV2**.
  - **Configuration**
    - General settings: configure stack, platform, debugging, and incoming client certificate.
    - Application settings:
    - Path mappings: incoming URL redirects.
- **App Service Variables**
  - **Portal**: `App Settings/Environment Variables`
  - **CLI**: `az webapp config appsettings set --settings key1=value1 key2=value2 --name ...`
- **Application Insights**
  - continuously monitor the performance and usability of your apps.
  - analytic tools(failure, response, request, views, load performance) to understand what users are doing with your apps.
  - Apps hosted on-premises, in a hybrid environment, or in any public cloud.
  - ![application insights](img/application_insights.PNG)
- **Backup and Restore App**
  - App snapshots can be created on a schedule or manually backup.
  - **Standard** or **Premium** tier App Service plan.
  - full or partial backups.
- **Continuous Integration and Deployment CI/CD**
  - **automated deployment**: automate the testing and deployment of code changes.
  - automated deployment. push new features and bug fixes in a fast, repetitive pattern.
  - **Azure DevOps**: pipeline. code changes -> testing -> deploy. build, test, run in cloud. Push to web app.
    - **GitHub**: connect to Azure. changes to repo, deployed to web app.
    - **Bitbucket**: same as GitHub.
  - **Manual**
    - Git(link web app to Git URL), CLI(`az webapp up`), Zip deploy(`curl http...`), FTP(S).
- **Deployment Slots**
  - with App Service, instead of deploying to production node, you deploy to another node with **it's own hostname**.
  - **scope**: Standard, Premium, Isolated. each progressive tier has higher slot count.
  - manage different app stages(development, testing, staging, and production).
  - similar to **_blue/green_** deployment strategy. Rollback if "**_swap_**" is not as expected.
  - new deployment slots can be empty or cloned.
  - **swap**: loads and starts image(**warm up**), if **HTTP responds**, considered **warmed up** and **switches routing rules** from **source** to **target** slot.
    - the HTTP request and URL path can be altered.
  - **swap with preview**: load and starts slot image, pauses to allow you to preview, before switching routing rules to target slot.
  - **auto swap**: when code changes, automatically swaps app into production. not on linux or Web App for Containers.
  - **Swap Routing**
    - **Traffic Percentage**: you can change percentage of traffic to another slot.
    - **Manual Routing**
      - link back to production from beta: `<a href="<webappname>.azurewebsites.net/?x-ms-routing-name=self">Go back to production app</a>`
      - address to go to beta: `<webappname>.azurewebsites.net/?x-ms-routing-name=staging`
      - default routing is `0%`(light grey color) setting the percentage manually to `0%`(black color), allows you to hide traffic while allowing internal team to reach resource.
  - ![deployment slot](img/deployment_slot.PNG)
- **Domain Names (DNS) Records**
  - you are given a sub domain name for main account owner: `yourAppName.azurewebsites.net`.
  - purchase domain from Azure portal, you don't have to configure anything.
  - `A` record: map domain name to IP address of web server.
  - `Cname`: maps domain name to another domain name.
- **Logging**
  - enable persistent storage, enable logging.
  - logs can be stored in **Azure Storage** or **App Service file system**.
  - **Linux**: only supports **Deployment logging**.
  - **Level of information**: disabled, error, warning, information, verbose.
  - **Streaming**
    - enabled from `Portal/App Service/yourApp/Log stream` or CLI `az webapp log tail --name appName --resource-group groupName`
    - files ending in `.txt, .log, .htm` stored in the `d:/home/logfiles` are streamed by App Service.
- **Network**
  - default App Service apps are accessible through internet endpoints only.
  - multitenant(Free, Shared) will have **many different customers** in the same App Service scale unit(VM), it would be a security risk to connect App Service directly to your VNet.
    - the solution is to handle web app communication: inbound and outbound.
    - `App-assigned Address` // Inbound
    - `Hybrid Connections` // Outbound
  - **front-ends**: handle all http(s) request.
  - **workers**: handle workload.
  - control **VNet inbound/outbound** traffic:
    - **multitenant**: Free - PremiumV3.
    - **single-tenant**: Isolated.
- **Path Mappings**
  - determine how web app handles incoming requests for a specific path or directories.
  - (e.g. `www.example.com/images` would map to `media/images`)
- **Security Certificates TLS/SSL**
  - upload or import public certificates into App Service.
  - certificate binds to **App Service plan resource group and region**(called **webspace**). makes certificate **accessible to other apps** in same resource group and region combination.
  - **scope**: all tiers except Free.
- **Storage**
  - containerized storage is ephemeral. persistent storage can be added to containerized apps.
- **WebJobs**
  - use existing App Services VM instances to run background scripts(powershell, shell, nodejs, python java...). no additional charge.
  - **continuous**: run until stopped.
  - **triggered**: run only when triggered.
  - **WebJobs Scale (only for continuous)**
    - **Multi Instance**: scale WebJob across all instances of App Service VMs.
    - **Single Instance**: single running instance.

```bash
# online Azure Cloud Shell
az webapp list-runtimes --os-type linux # show linux runtime options. node, dotnet, python...
```

## Azure Authentication and Authorization

- **Microsoft Identity**
  - Azure Active Directory(AD) simplifies **Identity** and **Access Management**.
  - identities, social accounts, with your own API or Microsoft AP. (e.g. Microsoft Graph).
  - **OAuth 2.0 and OpenID Connect**: authenticate with several identity types.
    - Microsoft Entra ID and External ID, Azure Active Directory B2C.
  - **Open-source libraries**: standard-compliant libraries.
- **Application Object**: registering app with Microsoft Entra ID creates an application object in home tenant.
  - application object is the **global representation of your application** for use **across all tenants**.
    - A **one to one** relationship with the **software application**.
    - A **one to many** relationships with its corresponding **service principal object(s)**.
  - when registering app, choose whether it is: **Single Tenant**(accessible in your tenant) or **Multi-tenant**(accessible to other tenants).
  - the object is given an '**identity**' with a **globally unique ID**.
  - this becomes the **blueprint** of each **service principal** created.
  - **Application Object Defines**:
    - how service can issue tokens to access app.
    - resources app can access.
    - actions app can take.
- **scope**
  - (permission to preform an action) and secrets can be assigned to the object.
  - permission is granted through URI: `https://graph.microsoft.com/Calendars.Read`.
  - **Permission Types**
    - **Delegated permissions**: signed-in user present. user consents to app request.
    - **App-only access permissions**: apps that run without signed-in user present. only administrator can consent to app-only access permissions.
  - **Consent Types**
    - **static user consent**: manual permissions, all up front at sign-in, in app configuration.
    - **incremental and dynamic user consent**: incremental assign permissions as needed.
    - **admin consent**: app needs access to certain high-privilege permissions.
  - after scope is the requested permissions. 👇 Microsoft identity platform checks for a matching record of user consent.

```txt
GET https://login.microsoftonline.com/common/oauth2/v2.0/authorize?
client_id=6731de76-14a6-49ae-97bc-6eba6914391e
&response_type=code
&redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F
&response_mode=query
&scope=
💥
https%3A%2F%2Fgraph.microsoft.com%2Fcalendars.read%20
https%3A%2F%2Fgraph.microsoft.com%2Fmail.send
💥
&state=12345
```

- **Microsoft Authentication Library (MSAL)**
  - enables developers to acquire tokens from the Microsoft identity platform in order to authenticate users and access secured web APIs.
  - **Pros**
    - uses tokens to validate user and application. tokens are automatically refreshed before expire.
    - helps with troubleshooting by logging exceptions and telemetry.
  - **Public Client Application**: apps running on devices, desktop computers or web browser. Not trusted to keep application secrets.
  - **Confidential Client Application**: app running on servers. difficult to access and ok for keeping secrets
  - **How is it done?**
    - **app is instantiated** with an application builder: `PublicClientApplicationBuilder`, `ConfidentialClientApplicationBuilder`.
    - the app is registered with Microsoft Identity Service.
    - **Authority**: once registered, you will have a client ID and identity provider URL. known as Authority.
  - ![masl auth](img/masl_auth.PNG)
- **OAuth 2.0**
  - token given to service principal to act on your behalf, without giving your credentials.
- **Service Principal Object**
  - to access resources secured by Microsoft Entra tenant, the service must have valid security principal.
  - service principal must be **created in each tenant** where the application is used to enable it to establish an **identity** for sign-in and/or **access to resources** being secured by the tenant.
  - **application object serves as the template** from which common and default properties are derived for use in creating corresponding service principal objects. (e.g. Class object and instantiated object).
  - service principal is the **local representation for use in a specific tenant**.
  - **Application Service Principal**: traditional application registered in Azure AD.
    - can be assigned RBAC roles and have credentials(client secrets, certificates).
    - managed through Azure AD blade.
  - **Managed Identity**: automatically managed identity for Azure resources.
    - automatically created to eliminate managing credentials manually.
    - permissions granted directly to Azure resource.
  - **Legacy**: older apps created before introduction of modern app registration features. Limited functionality.
- **Shared Access Signature (SAS)**
  - uniform resource identifier(URI): grant access to a **specific resource**, for a **specified period of time**, and with a **specified set of permissions** to **Azure Storage resources**(containers, blobs, queues, tables...).
    - (e.g. `https://medicalrecords.blob.core.windows.net/patient-images/patient-116139-nq8z7f.jpg?sp=r&st=2020-01-20T11:42:32Z&se=2020-01-20T19:42:32Z&spr=https&sv=2019-02-02&sr=b&sig=SrW1HZ5Nb6MbRzTbXCaPm%2BJiSEn15tC91Y4umMPwVZs%3D`).
  - ![sas token](img/SAS.PNG)
  - purpose: give client who normally does not have access, a URI for a specified time period, to prevent storage key exposure.
  - granular control(read, write, delete...) of resource permissions(blobs, files, queues, tables). restrict IP address, protocol used(https or http).
  - **account-level**: one or more storage services.
  - **service-level**: only one storage service.
  - you can only **remove access** by deleting storage key, or resource/rename. Use **Stored Access Policy** to decouple permission with key.
  - **User delegation SAS**: secured by Microsoft Entra credentials. Blob only storage.
  - **Service SAS**: secured with storage account key. Blob, Queue, Table, and Azure Files.
  - **Account SAS**: secured with storage account key. one or more storage services.
  - **Common Scenario**
    - typical clients upload/download their content to storage. their request passes through a **proxy server** which performs authentication. As request grow, scale may be expensive.
    - SAS solves this. after auth, client is assigned an authentication token that allows them permissions.
  - **Storage Access Policy**
    - can take up to 30 seconds to become active.
    - Table entity range restrictions (`startpk, startrk, endpk, endrk`) cannot be specified in a stored access policy.
  - **Best Practices**
    - When your application design requires shared access signatures for access to Blob storage, use **Microsoft Entra ID** to create a **user delegation SAS**(most secure) when possible for superior security.
    - use SAS in combination with **Stored Access Policy**(can be revoked).
    - use HTTPS.
    - expire time to smallest value.

```bash
# Create Storage Container Policy
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_STORAGE_ACCOUNT_NAME="mystorageaccount${RANDOM:0:5}" # a-z0-9 global unique.
export AZ_STORAGE_CONTAINER_NAME="my-storage-container${RANDOM:0:3}"
export AZ_STORAGE_CONTAINER_POLICY="my-storage-policy${RANDOM:0:3}"
az login --use-device-code # allows WSL2 to login through web browser.
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
# create Storage Account
az storage account create --name $AZ_STORAGE_ACCOUNT_NAME --resource-group $AZ_RESOURCE_GROUP_NAME
# list storage key -get 1st key and assign to environment variable.
export AZ_STORAGE_KEY="$(az storage account keys list --resource-group $AZ_RESOURCE_GROUP_NAME --account-name $AZ_STORAGE_ACCOUNT_NAME --query "[0].value" -o tsv)"
# create storage container
az storage container create -n $AZ_STORAGE_CONTAINER_NAME \
  --account-name $AZ_STORAGE_ACCOUNT_NAME \
  --account-key $AZ_STORAGE_KEY
# create storage access policy -must have storage account already created.
# expires 5 minutes from start time.
az storage container policy create --name $AZ_STORAGE_CONTAINER_POLICY \
  --container-name $AZ_STORAGE_CONTAINER_NAME \
  --start $(date -u +'%FT%TZ') \
  --expiry $(date -u +'%FT%TZ' -d '5 mins') \
  --permissions acdlrw \
  --account-name $AZ_STORAGE_ACCOUNT_NAME \
  --account-key $AZ_STORAGE_KEY
# view storage policy
az storage container policy list --container-name $AZ_STORAGE_CONTAINER_NAME \
  --account-name $AZ_STORAGE_ACCOUNT_NAME \
  --account-key $AZ_STORAGE_KEY

# clean up
az group delete --name $AZ_RESOURCE_GROUP_NAME -y --no-wait
```

## Azure Blob Storage

- **Blob Storage**
  - designed to store massive amounts of unstructured data(text, binary). storing, streaming, writing.
  - Users or client applications can access objects in Blob storage via HTTP/HTTPS, from anywhere in the world.
  - **scope**: region.
  - **Standard**: general-purpose V2. most accounts.
    - General-Purpose V2: Basic storage account type for blobs, files, queues, and tables.
  - **Premium**: block blob, page blob, file share. high performance SSD.
    - BlockBlob: high-performance block blob and append blob storage. no files, queues, tables.
      - **190.7 TB max size**. **append blob optimized for logging**.
      - can only move to different access tiers through manual AzCopy.
    - PageBlob: page blob only. **8TB max size**.
    - FileShare: SMB file shares(Windows, Linux, macOS).
  - **Blob storage offers three types of resources**:
    - **storage account**: can have multiple storage accounts. must be unique.
      - `http://mystorageaccount.blob.core.windows.net`
    - **container**: must be inside storage account. can have multiple containers.
      - `https://mystorageaccount.blob.core.windows.net/mycontainer`
    - **blob**: must be inside container. can have multiple blobs.
      - `https://mystorageaccount.blob.core.windows.net/mycontainer/myblob`
- **Static Website**
  - serve directly from storage **container** named `$web`. serverless architecture.
  - **Azure Static Web Apps** for header and Auth(N|Z) support.
  - all files will have public access.
  - **domain mapping**: only http. Azure CDN for https.
- **Storage Lifecycle: Access Tiers**
  - can be set during or after upload.
  - **account level**: set storage limits(spread across all tiers). can set access tier to hot, cold, or cool.
  - **blob level**: can set access tier to archive.
  - data **storage cost decrease** and **access cost increases** as tier gets **cooler**.
  - data cost to transfer(replicate to another region, move out of Azure, per-gigabyte charge).
  - Hot, Cool, Cold transfer happens **immediately**. **Archive takes time**.
  - **Hot**: immediate access. highest storage cost, lowest access cost. frequently accessed.
  - **Cool**: immediate access. infrequently accessed. retained at least 30 days. early deletion penalty.
  - **Cold**: immediate access. infrequently accessed. retained at least 90 days. early deletion penalty.
  - **Archive**: **Data in the Archive storage tier is stored offline and must be rehydrated to the Cool or Hot tier before it can be accessed.** This process can take up to 15 hours. infrequent access. retained at least 180 days. early deletion penalty. **LRS, GRS, RA-GRS only redundancy**.
    - **rehydration**: can **copy or move** from archive to warmer tier. This does not change last modified time! Lifecycle policy can move blob back to archive!
    - **priority**: standard rehydration or high(under one hour < 10GB size).
    - can only rehydrate blob to same **storage account**.
    - ![access tier rehydrate](img/access_tier_rehydrate.PNG)
  - Hot -> cool: incurs a **write** charge for all data.
  - Cool -> Hot: incurs **read** charge for all data.
  - ![blob storage lifecycle](img/blob_storage_lifecycle.PNG)
  - **Manage Lifecycle Rules**
    - policy to transition/delete data. modify via: Azure Portal, PowerShell, CLI, REST APIs.
    - **scope**: rules can be applied to containers or blobs.

```json
# lifecycle management policy. Azure Portal/Data Management/Lifecycle Management -Add rule.
{
  "rules": [
    {
      "name": "ruleFoo",
      "enabled": true,
      "type": "Lifecycle",
      "definition": {
        "filters": {
          "blobTypes": [ "blockBlob" ],
          "prefixMatch": [ "container1/foo" ]
        },
        "actions": {
          "baseBlob": {
            "tierToCool": { "daysAfterModificationGreaterThan": 30 }, # 30 days after last modification.
            "tierToArchive": { "daysAfterModificationGreaterThan": 90 },
            "delete": { "daysAfterModificationGreaterThan": 2555 }
          },
          "snapshot": {
            "delete": { "daysAfterCreationGreaterThan": 90 } # 90 days after snapshot creation.
          }
        }
      }
    }
  ]
}
```

- **Storage Service Encryption (SSE)**
  - by default all data is encrypted at rest(256-bit ASE) and in transit(HTTPS, SMB 3.0).
  - RBAC for security principals(resource group, resource, service, storage account, container, blob, queue).
  - Microsoft Entra ID for 'key' management.
  - ![key management](img/key_management.PNG)

```bash
# CREATE STORAGE ACCOUNT -set variables -current session only.
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group${RANDOM:0:3}"
export AZ_STORAGE_ACCOUNT_NAME="mystorageaccount${RANDOM:0:3}" # numbers and lowercase letters only. name must be unique across azure. RANDOM number between 1 - 999.
az login --use-device-code # allows WSL2 to login through web browser.
az provider register --namespace Microsoft.Storage
# create resource group
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
# create storage account
az storage account create -g $AZ_RESOURCE_GROUP_NAME -n $AZ_STORAGE_ACCOUNT_NAME -l $AZ_LOCATION --sku Standard_LRS
# clean up
az group delete -n $AZ_RESOURCE_GROUP_NAME -y --no-wait
```

## Azure Cache and Storage CDNs

- **Caching**
  - improve performance and scalability of **Redis** and **Azure Content Delivery Network**.
- **Cache for Redis**
  - Redis is open-source **in-memory** database store. caching layer for **very fast database response**.
  - high volatile(because in-memory), key:value store.
  - ![redis](img/redis.PNG)
  - **Azure redis cache**: service from microsoft to provide **high-throughput** and **low latency** for same data request.
  - **name**: globally unique(used to create public facing URL). 1-63 chars([-a-z0-9]).
  - **location**: region your location of traffic.
  - **cache type**: size, performance, and features available for cache.
  - **clustering**: split data among multiple nodes(premium, Enterprise, Enterprise Flash).
  - **deletion**: 1-millisecond precision to delete from cache.
  - **Connection to Redis**: host name, port, and an access key for the cache.
  - ![redis cli](img/redis_cli.PNG)
- **Azure Content Deliver Network Caching**
  - deliver content to users. cache in various nodes across the world.
  - **Point-of-Presence (POP)**: edge locations caching content close to users.
    - file remains cached on the edge server in the POP until the time-to-live (TTL) specified by its HTTP headers expires.
    - default TTL is seven days.
  - ![CDN POP](img/cdn_pop.PNG)
  - **CDN Cache Behavior**
    - caching rules modify default expiration of content.
    - **Caching Rules**
      - **Global caching rules**: set rule on endpoint, which affects all requests to the endpoint.
      - **Custom caching rules**: custom caching rules on endpoint. match specific paths, file extensions , and override the global caching rule, if set.
    - **Query String Caching**: handle caching requests with query strings.
    - **Rules Engine**: one or more(up to four) match conditions and an action.
  - **Default TTL**
    - Generalized web delivery optimizations: **seven days**
    - Large file optimizations: **one day**
    - Media streaming optimizations: **one year**
  - **Purge Cache Before TTL Expires**
    - **version assets** to ensure latest asset is delivered.
    - purge **all assets by endpoint**.
    - purge **specific file** by name on all or single endpoint.
  - **Geo-filtering**
    - filters based on geographic region. allow/block content.

## Azure Container Apps

- **Azure Container Apps**
  - Running **containerized applications** in a **serverless environment** for **microservice architecture**.
  - **fully managed details of Kubernetes deployment and container orchestration**.
  - **runs on top of Azure Kubernetes Service**.
  - **run any container image**. Microservice-friendly. Event-driven scaling. Pay-as-you-go. DAPR(simplifies distributed applications) integration.
- ![container app vs app services](img/container_app_vs_app_service.PNG)
  - Containers: use any runtime, programming language, or development stack.
  - **common uses**: API endpoints, background or event-driven processes, microservices.
  - **advantages**: dynamic scale to zero(except CPU or memory scale).
    - run multiple container **revisions**(immutable snapshot of a container app version) while managing lifecycle
      - **lifecycle**: allows reverting, or updating w/ revision-scope change(change revision suffix).
      - (e.g. change revision suffix: `app-name--1st-revision` -> `app-name--2nd-revision`).
    - easily enable HTTPS ingress, **microservices**(Dapr integration), secrets, logs(same Log Analytics workspace for each environment).
    - can run different environments: keep cross communication and logs separate.
  - **containers**: share disk, network, and lifecycle.
    - cannot run as root. programs needing privilege create a runtime error.
  - ![container apps](img/container_apps.PNG)
- **Authentication and Authorization**
  - built-in support. federated identity providers. language agnostic.
  - middleware that runs as a sidecar on each replica.
  - **HTTPS**: simply disable `allowInsecure` ingress.
  - **Auth**: `Require authentication` on app.
  - **Without Provider SDK**: browser apps. federated sign-in.
  - **With Provider SDK**: browser-less apps(native mobile app).
  - ![container app auth](img/container_apps_auth.PNG)
- **Dapr**
  - **Distributed Application Runtime**: distributed microservices. APIs that simplify state management, pub-sub messaging, secrets...
- **Secrets**
  - **CMD**
    - `--secrets "MY-SECRET=my-super-special-secret"` // can also pass an environment variable.
      - Makes available to container.
    - `--env-vars "QueueName=myqueue" "MySecret=secretref:MY-SECRET"`
      - Makes available to App running in container environment variable.

```bash
# Container Apps
# variables
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_CONTAINER_ENVIRONMENT_NAME="my-container-environment-${RANDOM:0:3}"
export AZ_CONTAINER_APP_NAME="my-container-app-${RANDOM:0:3}"
export AZ_SECRET="my-super-safe-secret"
# upgrade CLI and register services
az extension add --name containerapp --upgrade
az login --use-device-code # allows WSL2 to login through web browser.
az provider register --namespace Microsoft.App
az provider register --namespace Microsoft.OperationalInsights
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
# create environment. secure, logs and communication grouped.
az containerapp env create --name $AZ_CONTAINER_ENVIRONMENT_NAME \
  --resource-group $AZ_RESOURCE_GROUP_NAME --location $AZ_LOCATION

# create container app w/secrets -return FQDN.
# secrets can be viewed from Portal. env-vars is available inside container.
az containerapp create --name $AZ_CONTAINER_APP_NAME --resource-group $AZ_RESOURCE_GROUP_NAME \
    --environment $AZ_CONTAINER_ENVIRONMENT_NAME \
    --image mcr.microsoft.com/azuredocs/containerapps-helloworld:latest \
    --target-port 80 \
    --ingress 'external' \
    --secrets "MY-SECRET=$AZ_SECRET" \
    --env-vars "QueueName=myqueue" "MySecret=secretref:MY-SECRET"
    --query properties.configuration.ingress.fqdn

# update app to new revision -you must have another image in container registry to reference.
az containerapp update --name $AZ_CONTAINER_APP_NAME --resource-group $AZ_RESOURCE_GROUP_NAME \
  --image "mcr.microsoft.com/azuredocs/multicontainerwordpress" \
  --query properties.configuration.ingress.fqdn

# list revisions
az containerapp revision list --name $AZ_CONTAINER_APP_NAME --resource-group $AZ_RESOURCE_GROUP_NAME -o table

# clean up
az group delete --name $AZ_RESOURCE_GROUP_NAME -y --no-wait
```

## Azure Container Instance (ACI)

- **Azure Container Instance (ACI)**
  - Quickly running **single containers** in a serverless environment without having to **create** and **manage** a **VM**.
  - Docker as a Service: **serverless** way to **package**, **deploy** and **manage** cloud apps.
  - **Key Features**
    - **Simple and fast deployment**: Spin up containers in seconds with a single command.
    - **No orchestration** required: No need to manage complex Kubernetes clusters.
    - **Hyper-V isolation**: Provides a secure environment for running your containers.
    - **Granular billing**: Pay only for the **resources you use, per second**. (cheaper than VM which is billed per hour).
    - Customizable: Configure CPU, memory, and storage resources.
  - **Best for**
    - **Simple, single-container** applications.
    - **Batch jobs** and task automation.
    - Scenarios where **quick and easy deployment is crucial**.
    - Teams that want a **simple, lightweight solution** for running containers.
  - ![container app vs container instances](img/container_app_vs_container_instance.PNG)
  - **Access**: FQDN `mylabel.azureregion.azurecontainer.io`
  - **Restart Policy**
    - **Always**: long running task. (e.g. web-servers).
    - **Never**: one of task. (e.g. background jobs).
    - **OnFailure**: container encounter error try restarting.
  - ![container instance](img/container-instance.PNG)
- **ACI Environment Variables**
  - environment variables are similar to the `--env` command-line argument to **docker run**.
  - Windows or Linux container: `--environment-variables 'NumWords'='5' 'MinLength'='8'`
  - **Secure Value Object**: hold sensitive information(passwords, keys...) inside container.
    - values aren't visible in container properties.
    - you reference the **secureValue property**, not the value.
- **Azure Container Groups**
  - each container group(similar to pod in Kubernetes) has own public IP address and FQDN.
  - **collection of containers** that get scheduled on the **same host machine**.
  - The containers in a container group **share** a **lifecycle, resources, local network, and storage volumes**.
  - similar to a '**Kubernetes pod**'.
  - deploy through **ARM**(Azure Resource Manager, best for multiple resources) or **YAML** files(best for single resource).
  - share public IP address and FQDN per container group.
- **Storage**
  - containers(pods) are **stateless**(ephemeral). data is lost on failure.
  - persist state beyond the lifetime of the container, you must **mount a volume from an external store**.
  - **Azure File** Share, Empty directory, GitHub, Secret.
    - **Linux**: can only mount File Shares and only as root.

```bash
# Container Instance
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_CONTAINER_NAME="my-container-${RANDOM:0:3}"
export AZ_IMAGE="mcr.microsoft.com/azuredocs/aci-helloworld"
export AZ_DNS_NAME_LABEL="my-dns-label-${RANDOM:0:3}" # unique within the Azure region.
az login --use-device-code # allows WSL2 to login through web browser.
az provider register --namespace Microsoft.ContainerInstance
# create resource group
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME

# create container instance
az container create --resource-group $AZ_RESOURCE_GROUP_NAME \
  --name $AZ_CONTAINER_NAME --image $AZ_IMAGE --ports 80 \
  --dns-name-label $AZ_DNS_NAME_LABEL --location $AZ_LOCATION \
  --restart-policy OnFailure --environment-variables 'NumWords'='5' 'MinLength'='8'

# create container instance w/ volume mount.
# https://learn.microsoft.com/en-us/training/modules/create-run-container-images-azure-container-instances/6-mount-azure-file-share-azure-container-instances
# --azure-file-volume-account-name $ACI_PERS_STORAGE_ACCOUNT_NAME \
# --azure-file-volume-account-key $STORAGE_KEY \
# --azure-file-volume-share-name $ACI_PERS_SHARE_NAME \
# --azure-file-volume-mount-path /aci/logs/

# create container instance. -yaml example
# az container create --resource-group $AZ_RESOURCE_GROUP_NAME --file file.yaml

# verify
az container show --resource-group $AZ_RESOURCE_GROUP_NAME \
    --name $AZ_CONTAINER_NAME \
    --query "{FQDN:ipAddress.fqdn,ProvisioningState:provisioningState}" \
    --out table

# troubleshooting
az container logs # show container logs
az container attach # stream logs during startup.
az container exec # connect to container shell.
az container metrics list # get container metrics. e.g. CPU usage.

# clean up
az group delete --name $AZ_RESOURCE_GROUP_NAME -y --no-wait
az logout
```

## Azure Container Registry (ACR)

- **ACR**
  - managed, **private Docker registry** service for Windows and Linux images.
  - Kubernetes, DC/OS, Docker Swarm, Azure Kubernetes Service(AKS), App Service, Batch, Service Fabric.
  - **tiers**
    - **Basic**: cost-optimized entry point.
    - **Standard**: Basic + increased storage, throughput.
    - **Premium**: Standard + increased storage, throughput. geo-replication.
  - **Storage**: encryption-at-rest, regional(where created), zone redundancy(Premium).
- **ACR Tasks**
  - automated image build. build, test, push, deploy. **CI/CD**.
  - **automated trigger**: source code update, base image update, or schedule update.
    - `az task create`. links to GitHub or Azure DevOps Service.
  - **multi-step task**: `file.yaml` multi-step workflows.
- **Dockerfile**
  - build image.
  - <https://docs.docker.com/engine/reference/run/>
  - <https://docs.docker.com/reference/cli/docker/image/build/>

```dockerfile
# Dockerfile example.
# Use the .NET 6 runtime as a base image
FROM mcr.microsoft.com/dotnet/runtime:6.0
# Set the working directory to /app
WORKDIR /app
# Copy the contents of the published app to the container's /app directory
COPY bin/Release/net6.0/publish/ .
# Expose port 80 to the outside world
EXPOSE 80
# Set the command to run when the container starts
CMD ["dotnet", "MyApp.dll"]
```

```bash
# Container Registry
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_CONTAINER_REGISTRY_NAME="mycontainerregistry$(openssl rand -base64 20 | tr -dc 'a-z')" # Random letters. must be globally unique.
export AZ_IMAGE_NAME="sample/hello-world"
export AZ_IMAGE_VERSION="v1"
az login --use-device-code # allows WSL2 to login through web browser.
az provider register --namespace Microsoft.ContainerRegistry
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
# create registry
az acr create --resource-group $AZ_RESOURCE_GROUP_NAME --name $AZ_CONTAINER_REGISTRY_NAME --sku Basic
# create dockerfile
echo FROM mcr.microsoft.com/hello-world > Dockerfile
# build image
az acr build --image "${AZ_IMAGE_NAME}:${AZ_IMAGE_VERSION}" --registry $AZ_CONTAINER_REGISTRY_NAME --file Dockerfile .
# verify
az acr repository list --name $AZ_CONTAINER_REGISTRY_NAME --output table
az acr repository show-tags --name $AZ_CONTAINER_REGISTRY_NAME --repository "${AZ_IMAGE_NAME}" --output table
# run
az acr run --registry $AZ_CONTAINER_REGISTRY_NAME --cmd "\$Registry/${AZ_IMAGE_NAME}:${AZ_IMAGE_VERSION}" /dev/null
# clean up
az group delete --name $AZ_RESOURCE_GROUP_NAME -y --no-wait
```

## Azure Cosmos DB

- **Cosmos DB**
  - fully managed NoSQL, globally distributed database service. You can run multiple API's inside the CosmosDB service.
  - **Cosmos DB API**: choose the API(format) or migrate existing database into Cosmos DB.
    - **NoSQL**: document format. first to update. **best end-to-end experience**. Query in SQL syntax.
    - **MongoDB**: BSON format. compatible with MongoDB.
    - **PostgreSQL**: PostgreSQL distributed tables for scale.
    - **Apache Cassandra**: column-oriented schema. supports CQL query language.
    - **Table**: key:value format. has been **replaced by Cosmos DB NoSQL**.
    - **Apache Gremlin**: for graph traversal queries. store data as edges and vertices. data too complex to be modeled with relational database.
  - **Collection**: deprecated term. original explanation: maps to a container in Azure CosmosDB.
  - **pay** for the **throughput you provision** and the **storage you consume** on an **hourly basis**.
    - expressed as **request units (RUs)**(CPU, IOPS, memory). **1KB read = 1RU**.
  - ![cosmos db hierarchy](img/cosmos_db_hierarchy.PNG)
  - **Best Practices**
    - for the lowest latency: place data in region where users are.
    - unless you need a specific format(API), use the NoSQL option.
- **Cosmos DB Containers**
  - database is analogous to a **namespace** with a logical grouping of **Azure Cosmos DB containers**.
  - **container**: horizontally partitioned(evenly distributed across a SSD partition). allows for safe replication across multiple regions.
  - read and write data from the **local replicas** of your database and it transparently **replicates** the data **to all the regions** associated with your Cosmos account.
  - add remove **regions** at any time. can have multiple Cosmos databases in account.
  - unit of scalability both for provisioned throughput and storage.
  - items added are distributed across the partitions(based on partition key).
  - **Throughput**
    - **Dedicated**: throughput on container exclusively reserved for container. Backed by SLA.
    - **Shared**: share throughput with other containers in same database.
- **Consistency Levels**
  - distributed database must make tradeoff between read consistency, availability, latency, and throughput.
  - data may lag replication across regions due to failures(eventual consistency).
  - region-agnostic. guaranteed for all operations regardless of region.
  - **default consistency level** effects **all Cosmos DB databases** in **Azure Cosmos DB account**.
  - **Consistency Levels**
    - **Strong**: Users are always guaranteed to read the latest committed write. request served concurrently.
      - all regions confirm successful write before data is considered written. increases latency. **lowest throughput**.
      - removes database regions that do not respond to write until they are back online.
    - **Bounded staleness**: read can lag(single region **5s**, multi-region **300s**) after write.
    - **Session**: single client can read-your-writes.
    - **Consistent prefix**: updates made as a batch.
    - **Eventual**: no ordering guarantee for reads. replicas eventually converge. **greatest throughput**.
  - ![consistency levels](img/consistency_levels.PNG)
- **Cosmos DB Modes**
  - you need dedicated resources for database.
  - **Provisioned Throughput Mode**: provision in increments of 100 RUs per second.
    - can be increased/decreased at any time.
    - provision at database or container level.
  - **Serverless Mode**: billed for RUs used.
  - **AutoScale Mode**: mission-critical workloads. SLA on high performance and scale.
  - **Cosmos Change Feed**
    - track changes made to items in **Cosmos DB container**. persistent ordered record.
    - **listens**: for changes(inserts, updates, deletes).
    - **recording**: adds changes to change log, preserving order it happened.
    - **push model**: you listen for changes. **recommended**.
    - **pull model**: you query for changes.
- **Stored Procedure**
  - **User-Defined Functions**: Javascript functions you can register and call.
  - **pretriggers**: executed before modifying database. must be registered.
  - **post-triggers**: executed after modifying database. must be registered. runs as part of the same transaction and if trigger has exception, commit is rolled back and exception returned.

```js
// JavaScript user defined Stored Procedure example.
const helloWorldStoredProc = {
  id: 'helloWorld',
  serverScript: function () {
    const context = getContext();
    const response = context.getResponse();
    response.setBody('Hello, World');
  },
};
```

```bash
## Create Cosmos DB
# az account list-locations --query "sort_by([].{DisplayName: displayName, AzureName: name}, &DisplayName)" --out table
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_COSMOS_DB_NAME="my-cosmosdb-${RANDOM:0:3}"
az login --use-device-code # allows WSL2 to login through web browser.
az provider register --namespace Microsoft.DocumentDB
export AZ_SUBSCRIPTION_NAME=$(az account show --query 'name' -o tsv)
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
az cosmosdb create --name $AZ_COSMOS_DB_NAME --resource-group $AZ_RESOURCE_GROUP_NAME --subscription "$AZ_SUBSCRIPTION_NAME"
# Retrieve the primary key
az cosmosdb keys list --name $AZ_COSMOS_DB_NAME --resource-group $AZ_RESOURCE_GROUP_NAME
# Clean up
az group delete -n $AZ_RESOURCE_GROUP_NAME -y --no-wait
az logout
```

## Azure Event Grid

- **Event Grid**
  - simplifies event consumption and lowers costs by eliminating the need for constant polling.
  - routes **events** from Azure to non-Azure resources and **registered subscriber endpoints**.
  - serverless event broker.
  - publishers emit events, but have no expectation on how events are handled(**event sources**). subscribers listen for events and decide how to handle(**event handlers**).
  - route or multicast to multiple endpoints.
  - ![event grid overview](img/event_grid_overview.PNG)
  - **Events**: what happened. 64KB chunk 1MB max. HTTP POST request is sent. payload in request body.
  - **Topics**: collection of related events inside Event Grid. one or more endpoints(**Event Handlers**) can subscribe to these topics.
    - **system topics**: built-in to Azure Services. If you enable an Azure service, can subscribe to them.
    - **custom topics**: third-party or custom topics.
  - ![event hub scaling](img/event_hub_consumer_group.png)
  - **Event Subscription**: which topics you subscribe to.
  - **Event Handler**: where event is sent.
  - ![event grid](img/event_grid.PNG)
- **Event Schema**
  - Event Sources send events in an array with several objects.
  - **Event Grid event schema**: default event payload is 64KB chunk, and max 1MB size.
  - **Cloud event schema**: support for 'CloudEvents V1.0'. open source event data description.
  - ![event schema](img/event_schema.PNG)
- **Event Delivery Durability**
  - if events sent are **not acknowledged or error**, Event Grid:
  - **default**: deliver one event at a time with a payload is an array. **64KB chunk, 1MB max size**.
    - **does not guarantee order**.
  - **retries**: based on Event Grid retry schedule and retry policy.
    - retry doesn't happen for errors: **400(Bad Request),413(Request Entity Too Large),403(Forbidden),404(Not Found),401(Unauthorized)**. they are dead-lettered or dropped.
    - **default** retry is **30s**, with exponential backoff for each consecutive retry.
  - **dead-letter**: exceeded time-to-live or number of tries. send event data to storage account.
  - **drop event**: like event never happened.
  - ![event grid error](img/event_grid_error.PNG)
- **Event Grid Retry Policy**
  - **Maximum number of attempts**: default 30. range: 1-30.
  - **Event time-to-live (TTL)**: default 1440min. range: 1-1440min.
- **Output batching**
  - improve HTTP performance throughput.
  - **default**: turned off.
  - **Max events per batch**: range 1-5000.
  - **Preferred batch size in kilobytes**: target ceiling for batch size.
- **Webhooks**
  - receive event. HTTP POST request is sent, with payload in request body.
  - **Endpoint Validation**: you must prove ownership of webhook.
    - stops malicious actors from flooding endpoint.
    - **Synchronous handshake**: Event Grid sends HTTP `POST` request with `validationCode` property that **must be returned** with response along with HTTP status code `200`.
    - **Asynchronous handshake**: programmatically respond to validation code.
    - **Manual handshake**: if synchronous validation fails, a `validationURL` is sent that you can manually do a `GET` request to validate.
- **Event Grid Filtering**
  - **default**: all events are sent to endpoint.
  - you can use Microsoft built-in filtering or custom filtering.
  - ![event grid filtering](img/event_grid_filtering.PNG)
  - ![event grid filtering custom](img/event_grid_filtering_custom.PNG)
- **Event Grid Roles**: built-in RBAC roles.
  - **Event Source**: to create event, you must have `Microsoft.EventGrid/EventSubscriptions/Write` permissions.
  - ![event grid roles](img/event_grid_roles.PNG)

```bash
# Event Grid
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_TOPIC_NAME="my-topic-name${RANDOM:0:3}"
export AZ_SITE_NAME="my-site-name${RANDOM:0:3}"
export AZ_SITE_URL="https://${AZ_SITE_NAME}.azurewebsites.net"
export AZ_ENDPOINT="${AZ_SITE_URL}/api/updates"
export AZ_SUBSCRIPTION_NAME="MySubscriptionName${RANDOM:0:3}"
az login --use-device-code # allows WSL2 to login through web browser.
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
az provider register --namespace Microsoft.EventGrid
export AZ_SUBSCRIPTION_ID=$(az account show --query 'id' -o tsv)

# create custom topic
az eventgrid topic create --name $AZ_TOPIC_NAME \
  --location $AZ_LOCATION \
  --resource-group $AZ_RESOURCE_GROUP_NAME
# create message endpoint
az deployment group create \
  --resource-group $AZ_RESOURCE_GROUP_NAME \
  --template-uri "https://raw.githubusercontent.com/Azure-Samples/azure-event-grid-viewer/main/azuredeploy.json" \
  --parameters siteName=$AZ_SITE_NAME hostingPlanName=viewerhost

# subscribe to topic
az eventgrid event-subscription create \
  --source-resource-id "/subscriptions/${AZ_SUBSCRIPTION_ID}/resourceGroups/${AZ_RESOURCE_GROUP_NAME}/providers/Microsoft.EventGrid/topics/${AZ_TOPIC_NAME}" \
  --name $AZ_SUBSCRIPTION_NAME \
  --endpoint $AZ_ENDPOINT

# send event to topic
export AZ_TOPIC_ENDPOINT=$(az eventgrid topic show --name $AZ_TOPIC_NAME -g $AZ_RESOURCE_GROUP_NAME --query "endpoint" -o tsv)
export AZ_TOPIC_KEY=$(az eventgrid topic key list --name $AZ_TOPIC_NAME -g $AZ_RESOURCE_GROUP_NAME --query "key1" -o tsv)
export AZ_EVENT=$(cat <<EOF
[ {"id": "$RANDOM", "eventType": "recordInserted", "subject": "myapp/vehicles/motorcycles", "eventTime": "`date '+%Y-%m-%dT%H:%M:%S%z'`", "data":{ "make": "Contoso", "model": "Northwind"},"dataVersion": "1.0"} ]
EOF
)
# send event topic
curl -X POST -H "aeg-sas-key: $AZ_TOPIC_KEY" -d "$AZ_EVENT" $AZ_TOPIC_ENDPOINT

# clean up
az group delete --name $AZ_RESOURCE_GROUP_NAME -y --no-wait
```

## Azure Event Hub

- **Event Hub vs Event Grid**:
  - **Event Hub**: Enterprise level, high-volume data streaming of events. (e.g. telemetry)
  - **Event Grid**: simple event-driven(push) architecture for serverless application.
- **Event Hub**
  - **Enterprise level, big data streaming platform** and event ingestion service. Designed to receive and process millions of events per second.
    - Azure Event Hubs represents the "**front door**" for an **event pipeline**, often called an **event ingestor** in solution architectures.
    - acts as a proxy, sitting between event publishers and event consumers to decouple the production of an event stream from the consumption of those events.
  - fully managed PaaS.
  - ![event hub](img/event_hub.PNG)
  - **Checkpoint**: each consumer(event processor) **maintains its own checkpoint, tracking progress within the partition**. can resume if failure or restart.
    - consumer communicates with the Event Hub partition periodically. consumer(event processor) marks or commits the position(Event Hub partition records commit as a checkpoint) of the last successfully processed event within a partition.
    - If consumer goes offline, the new consumer can pick up where last checkpoint is.
    - ![event hub checkpoint](img/event_hub_checkpoint.png)
  - **Event Hub client**: SDK(software or library) that enables applications to publish events to Event Hub.
    - These events are stored in partitions.
  - **Event Hub producer(client, Data Sender)**: sender of events.
    - source of telemetry data, diagnostic info, logs.
    - Each Event Hubs client(producer/publisher) is assigned a unique token(SAS, JWT).
    - A client that holds a token can only send to one publisher, and no other publisher.
  - **Event Publisher**: **Event Hub internal virtual endpoints** listening for producer(client) data.
    - Each producer(client) will be assigned a token(SAS, JWT) approving them to send data to one and only one **event publisher endpoint**.
      - Each event publisher endpoint has its own unique identifier and associated security credentials (SAS token or JWT). **Multiple clients with same token, can send data to same event publisher endpoint**.
  - **Event Hub consumer(Event Processor, Data Receiver)**: instances of application or services reading events from Event Hubs. Read from specific partition.
    - the function that processes the events between partition and consumer is called sequentially.
  - **partitions**: sequence of events held in Event Hub. partitions are specified **at Event Hubs creation** and **can't be changed**.
    - enable parallel processing of events which increases throughput.
    - Each partition is an independent segment of data and is **consumed independently**.
    - Over time this **data ages off**, based on the **configurable retention period**.
  - **consumer group**: consumers are grouped to track it's own checkpoints and have groups have access to view entire Event Hub events.
    - ![event hub scaling](img/event_hub_consumer_group.png)
  - **Event receivers**: reads the data from event.
  - **Throughput units or processing units**: prepurchased units of capacity that control throughput.
  - ![event hub](img/event_hub.PNG)
  - **Event Hub Capture**: enable automated storage(**blob, data lake -any region**) of all streaming data.
    - real-time and batch-based pipelines on the same stream.
- **Scale for Event Hub**
  - **partitioned consumers**
  - ![event hub scaling](img/event_hub_consumer_group.png)
- **Roles**
  - advantage of **Microsoft Entra ID** with Event Hubs is that your credentials no longer need to be stored in your code. Instead, you can request an **OAuth 2.0** access token from Microsoft identity platform.
  - **SAS policies** are defined at the **entity level**(namespace, Event Hub, consumer group), but not at the individual consumer inside a consumer group.
    - Permissions granted at the **namespace or Event Hub level** automatically apply to all consumer groups within that entity.
  - **RBAC** gives you fine-grained control to assign permissions to specific users, groups, or service principals at the consumer group level.
  - Azure **Event Hubs Data Owner**: Use this role to give complete access to Event Hubs resources.
  - Azure **Event Hubs Data Sender**: Use this role to give send access to Event Hubs resources.
  - Azure **Event Hubs Data Receiver**: Use this role to give receiving access to Event Hubs resources.

## Azure Functions

- **Azure Function as a Service (FaaS)**
  - fully-managed, event driven **(triggers based on event or emit data)**, **scales to zero**. **you bring the code**.
  - highly: scalable, elastic, available, durable, secure by default.
  - abstracts infrastructure and are billed on execution time. **do not pay for idle servers**.
  - define input, actions, conditions, and output.
  - **requires a storage account and these three services to operate**.
    - **Blob Storage**: store bindings and function keys.
    - **Azure Files**: store function app code.
    - **Queue and Table Storage**: used by task hubs in Durable Functions.
  - **Advantages**
    - serverless(only pay when running). zero maintenance. easy to upgrade.
    - easier to write and deploy. (e.g. can be **built**, **tested** and **deployed** from browser).
    - access to other APIs, databases, libraries with proper credentials.
    - automatic scale to traffic demand.
    - monitoring through Azure Monitor.
    - event-driven triggers, emit event data.
    - built-in CI/CD via Azure DevOps.
  - **Hosting and Runtime**
    - they are all docker containers.
    - **Hosting**
      - windows: all features enabled.
      - linux: cannot edit functions in portal.
    - **Runtime**
      - most common flavors. (e.g. nodejs, python, C#, powershell).
      - can create **custom handler** for your preferred runtime.
- **Function App**
  - one or more individual functions that are managed, deployed, and scaled together.
  - share the same pricing plan, deployment method, and runtime version.
  - **as of Functions 2.x** **all functions** in a function app must be authored in the **same language**.
- **Authorization Level**
  - determines what if any keys need to be present to invoke function.
  - **auth level can be change after creation**.
  - **Anonymous**: no key required.
  - **Function**: default. function-specific API key.
  - **admin**: master key required.
  - ![function auth level](img/function_auth_level.PNG)
- **Function Templates**
  - **identities**: RBAC assigned roles are used to connect the services.
  - **Triggers and Bindings**
    - **Trigger**: function can only have **one trigger**.
      - multiple Azure services can trigger an event (e.g. HTTP request, scheduled, Blob and Queue Storage, Cosmos DB, and Event Grid).
      - simplify functions by abstracting hardcoding to services.
    - **Bindings**: **optional**. avoids hardcoding access(input/output data) to other services. data is passed in the form of a function **parameter**.
      - **input bindings**: other service responds to event. function is called with data as the argument.
      - **output bindings**: other service is listening. the function return value is passed to listening service.
      - **Binding Expression**
        - most expressions: `{someName}`
        - App Service expression: `%someName%`
    - ![FaaS overview](img/faas_overview.PNG)
    - ![function bindings](img/function_bindings.PNG)
  - **Project Files**: root of directory.
  - `host.json`: global configuration of **all functions** at the Function App level.
  - `local.settings.json`: local on-prem specific configurations to override `host.json` while developing.
  - `file.exe`: the actual code that will be run.
  - **function.json**: single function configuration file. **every function will have this file**.
    - defines the functions trigger, bindings, direction...
      - **dataType**: binary, stream, string.
      - **direction**: in/out

```json
# function.json example
{
  "disabled": false,
  "bindings": [
    {
      "type": "queueTrigger",
      "direction": "in",
      "name": "myQueueItem",
      "queueName": "myqueue-items",
      "connection": "MyStorageConnectionAppSetting"
    },
    {
      "type": "table",
      "direction": "out",
      "name": "tableBinding",
      "tableName": "Person",
      "connection": "MyStorageConnectionAppSetting"
    }
  ]
}
```

- **Function Core Tools**
  - cmd tool that lets you develope and test functions on-prem computer.
  - `func init`: start new function.
  - `func logs`: get logs from Kubernetes cluster.
  - `func run`: run function directly.
- **Function Hosting Plans**
  - **Consumption Plan**: default. cold-starts. pay-as-you-go. dynamic scale.
  - **Premium Plan**
    - pre-warmed. larger compute.
    - always ready instances. better Compute.
    - functions that run continuously.
    - more control over instances(CPU, memory).
    - high number of small executions(low GB seconds for each run) or code needs longer run times.
    - require VNet connectivity. need custom linux image.
  - **Dedicated Plan**
    - if you use **App Service**, your Azure Functions will run on them. predictable billing.
    - **manually scale** instances by adding more VMs to App Service plan.
    - full compute isolation. secure network access by ASE(App Service Environment).
  - **Container Apps Plan**
    - functions run in container. Kubernetes style workflow without complexity.
    - create custom library to support **line-of-business** apps.
    - migrate on-prem code or legacy apps to cloud microservices running in containers.
  - ![function hosting plans](img/function_hosting.PNG)
  - **Function Timeout**: max time avaiable in minutes function has to return response.
  - ![function timeout](img/function_timeout.PNG)
  - **Functions Scale Instances**: max instances
  - ![function scale instances](img/functions_scale_instances.PNG)
- **Function Debugging**
  - **service unreachable**: service key bad. service is not available, busy or full.
  - **enable streaming**: stream events to logs, to see near real time errors.
    - **Built-in Log Streaming**: App Service platform shows you log view.
    - **Live Metric Stream**: when Function is connected to Application Insights. view from portal.
- **Durable Functions**
  - stateful functions. state survives VM reboot or failure.
  - **Types**
    - **Orchestrator function**: define stateful workflow (implicit state).
    - **Entity function**: explicitly manage state.
  - **Durable Function patterns**
    - **Function Chaining**: collection of functions(steps), sequentially run.
    - **Fan-out/Fan-in**: multiple function running in **parallel** and waiting for **all** to finish.
- **Azure Function vs Logic Apps vs App service WebJobs**
  - all are serverless.
  - **Functions**
    - **event-driven functions**. (e.g. HTTP request, timer schedule, message in a queue).
    - code-focused. build microservices, real-time data processing, automation task.
  - **Logic App**
    - Logic Apps are designed **visually** using a **drag-and-drop interface** to create workflows that orchestrate actions across different systems and services.
    - Low code. vast library with pre-built connectors to integrate into Azure and third-party services.
  - **WebJobs SDK**
    - **background tasks**. runs in background of webapp.
    - code-focused. long-running task, recurring jobs that can run in background.
  - ![functions vs logic apps vs webjobs](img/function_vs_logic_app_vs_webjobs.PNG)

## Azure Front Door

- **Front Door**
  - traffic manager, load balancer, firewall(WAF), CDN/edge.
  - caching, rule sets(for redirects, blocking...).
  - ![azure front door](img/front_door.PNG)

## Azure Graph

- **Microsoft Graph**
  - Microsoft Graph is a **RESTful web API and SDK** that enables you to access Microsoft Cloud service resources(Office 365, Window 10, Mobile) **data**.
  - It provides a **single, consistent way to interact with the vast amounts of data in Microsoft cloud services**.
  - to **access data in Microsoft Graph**, your application needs to acquire an **OAuth 2.0 access token**.
  - **Microsoft Office 365**: Microsoft Graph is the gateway to data through REST API. `https://graph.microsoft.com`
  - ![Microsoft Graph](img/graph.PNG)
  - **Microsoft Graph connectors**: connect external data from third-party API to Graph. (e.g. AWS S3 to Graph).
  - **Microsoft Graph Data Connect**: scalable delivery of Microsoft Graph data to Azure data stores.
  - **Microsoft Graph SDKs**
    - **Service Library**: low level API.
    - **Core Library**: extra features(retry handling, secure redirect...)
  - **Handling Responses**: Graph response handling.
    - **Pagination**: result can be returned in multiple pages. `@odata.nextLink` to call next page.
    - **Evolvable enumerations**: only **known members** are returned unless you add `Prefer` to **HTTP request header**.
  - **Best Practices**
    - **least privilege**: only necessary access.
    - **correct permissions**: if user is present, use **_delegated_** permissions. if runs in background, use **_application_** permissions.
    - **consent**: understand the difference between **static, dynamic, incremental consent**.
    - **multi-tenant application**: expect customers to have various applications adn consent controls.

```bash
# CRUD -GET, POST, PATCH(update resource), PUT(replace resource), DELETE. -current version is v1.0
# https://graph.microsoft.com/{version}/{resource}?{query-parameters}
curl "https://graph.microsoft.com/v1.0/me/messages?filter=emailAddress eq 'jon@contoso.com'"
```

- build apps for organizations and consumers that interact with millions of users.
- to **access data in Microsoft Graph**, your application needs to acquire an **OAuth 2.0 access token**.
- **Microsoft Office 365**: Microsoft Graph is the gateway to data through REST API. `https://graph.microsoft.com`
- ![Microsoft Graph](img/graph.PNG)
- **Microsoft Graph connectors**: connect to Graph from external source.
- **Microsoft Graph Data Connect**: scalable delivery of Microsoft Graph data to Azure data stores.
- **Microsoft Graph SDKs**
  - **Service Library**: low level API.
  - **Core Library**: extra features(retry handling, secure redirect...)
- **Handling Responses**: Graph response handling.
  - **Pagination**: result can be returned in multiple pages. `@odata.nextLink` to call next page.
  - **Evolvable enumerations**: only **known members** are returned unless you add `Prefer` to **HTTP request header**.
- **Best Practices**
  - **least privilege**: only necessary access.
  - **correct permissions**: if user is present, use **_delegated_** permissions. if runs in background, use **_application_** permissions.
  - **consent**: understand the difference between **static, dynamic, incremental consent**.
  - **multi-tenant application**: expect customers to have various applications adn consent controls.

```bash
# CRUD -GET, POST, PATCH(update resource), PUT(replace resource), DELETE. -current version is v1.0
# https://graph.microsoft.com/{version}/{resource}?{query-parameters}
curl "https://graph.microsoft.com/v1.0/me/messages?filter=emailAddress eq 'jon@contoso.com'"
```

## Azure Key Vault

- **Azure Key Vault**
  - cloud service for securely storing and accessing secrets(API keys, passwords, certificates, or cryptographic keys).
  - **Tiers**
    - **Standard**: encrypts with a software key.
    - **Premium**: includes hardware security module(HSM)-protected keys.
  - **Service-Managed Keys**: Microsoft HSM(hardware security module)s safeguard keys.
  - **Customer Managed Keys**: create your own key. greater control(create, audit, rotate, delete...). stored in Microsoft HSM. **Bring Your Own Key (BYOK)**.
  - **Service-Managed Keys in Customer-Controlled Hardware**: your keys, your HSM, outside Microsoft control. **Host Your Own Key (HYOK)**.
  - **Benefits**
    - highly available, secure(Microsoft Entra ID, RBAC) centralized secret management.
    - access and use logging or stream to event hub.
  - **Best Practices**
    - **Managed Identities**: authenticate by assigning identities to app. Azure automatically rotates service principal client secret associated with identity.
    - **Encryption in Transit**: Key Vault enforces TLS(transport layer security) and **Perfect Forward Secrecy (PFS)** that protects connections between client and Microsoft cloud services.
    - **Separate Key Vaults**: dev, test, production best to use separate vaults.
    - **Check Authorization**: only authorized people should have access to keys.
    - **Backup and Logging**: create regular backup and log access.
    - **Soft Delete**: turn on soft delete and purge protection.

```bash
# Key Vault
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_KEY_VAULT_NAME="mykeyvault${RANDOM:0:3}"
export AZ_SECRET_NAME="MyFirstExamplePassword"
az login --use-device-code # allows WSL2 to login through web browser.
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
az provider register --namespace Microsoft.KeyVault
# create key vault
az keyvault create --name $AZ_KEY_VAULT_NAME --resource-group $AZ_RESOURCE_GROUP_NAME --location $AZ_LOCATION
# assign yourself as "Key Vault Administrator".
export AZ_SUBSCRIPTION_ID=$(az account show --query 'id' -o tsv)
export AZ_USER_PRINCIPAL_NAME="$(az ad user list --query '[0].userPrincipalName' -o tsv)"
az role assignment create --role "Key Vault Administrator" --assignee "$AZ_USER_PRINCIPAL_NAME" --scope "$AZ_SUBSCRIPTION_ID"

# add secret
az keyvault secret set --vault-name $AZ_KEY_VAULT_NAME --name $AZ_SECRET_NAME --value "my-Secret-Password"
# show secret
az keyvault secret show --name $AZ_SECRET_NAME --vault-name $AZ_KEY_VAULT_NAME

# clean up
az group delete --name $AZ_RESOURCE_GROUP_NAME -y --no-wait
```

## Azure Managed Identities

- **Managed Identities**
  - Azure managed secrets, credentials, certificates, keys. eliminate the need for developers to manage secrets.
  - managed identities provide an automatically managed identity in Microsoft Entra ID for applications to use.
  - managed identities are **service principals** of a special type that are locked to Azure resource. **they share the same lifecycle**.
  - **system-assigned managed identity**: when instance is enabled, Azure creates an identity for the instance in Microsoft Entra tenant. If instance is deleted, Azure deletes Microsoft Entra ID identity.
    - Workloads contained within a single Azure resource.
    - Workloads needing independent identities.
    - For example, an application that runs on a single virtual machine.
  - **user-assigned managed identity**: standalone identity created in Microsoft Entra tenant. can be assigned to one or more service instances. lifecycle of Entra identity is managed separately from service identity.
    - Workloads that run on multiple resources and can share a single identity.
    - Workloads needing preauthorization to a secure resource, as part of a provisioning flow.
    - Workloads where resources are recycled frequently, but permissions should stay consistent.
    - For example, a workload where multiple virtual machines need to access the same resource.
  - ![managed identity](img/managed_identity.PNG)
- **VMs**
  - **System-assigned managed identities VMs**.
    - **Azure Resource Manager receives request** to enable the **system-assigned** managed identity on a VM.
    - ARM creates **service principal** in Microsoft Entra ID for identity of VM.
    - ARM updates **Service identity endpoint metadata** on VM with **service principal client id and certificate**. VM now has an **identity**.
    - **Service Principal** is granted **access permissions** to Azure resource through **RBAC roles**.
    - code that's running on the virtual machine can request a token from the Azure Instance Metadata service endpoint. (e.g. `http://169.254.169.254/metadata/identity/oauth2/token`. **JSON web token** is returned).
    - code sends JWT w/ call to service(Must be part of Microsoft Entra ID).
      - [services that can use Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/managed-identities-status)
  - **User-assigned managed identities VMs**
    - same steps as system-assigned with a few changes:
      - ARM receives request to **create a user-assigned managed identity**.
      - ARM receives request to update the **Azure Instance(VM) Metadata Service identity endpoint** with the **user-assigned managed identity service principal client ID and certificate**.

```bash
# Managed Identities
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_VM1_NAME="myFirstVM"
export AZ_VM2_NAME="mySecondVM"
export AZ_USER_IDENTITY_NAME="myUserAssignedIdentity"
az login --use-device-code # allows WSL2 to login through web browser.
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME

# get resource group id.
export AZ_RESOURCE_GROUP_ID="$(az group show --name $AZ_RESOURCE_GROUP_NAME --query 'id' -o tsv)"

# list available images: az vm image list --query '[].urnAlias' -o table
# create system-assigned identity VM.
az vm create --resource-group $AZ_RESOURCE_GROUP_NAME \
  --name $AZ_VM1_NAME --image Debian11 \
  --assign-identity \
  --role contributor \
  --scope $AZ_RESOURCE_GROUP_ID \
  --admin-username azureuser \
  --admin-password myPassword12

# system-assigned managed identity.
az vm identity assign -g $AZ_RESOURCE_GROUP_NAME -n $AZ_VM1_NAME

# user-assigned managed identity.
az identity create -g $AZ_RESOURCE_GROUP_NAME -n $AZ_USER_IDENTITY_NAME
# create VM
az vm create --resource-group $AZ_RESOURCE_GROUP_NAME \
  --name $AZ_VM2_NAME --image Ubuntu2204 \
  --assign-identity $AZ_USER_IDENTITY_NAME \
  --admin-username azureuser \
  --admin-password myPassword12
# assign identity
az vm identity assign -g $AZ_RESOURCE_GROUP_NAME -n $AZ_VM2_NAME --identities $AZ_USER_IDENTITY_NAME

# Clean up
az group delete -n $AZ_RESOURCE_GROUP_NAME -y --no-wait
az logout
```

## Azure Notification Hub

- **Notification Hub**
  - push notifications to mobile apps outside text messages.
  - phones must install app or suscribe to receive notifications.
  - notifications are narrowed by **tag or tag expression**. Those who subscribe will receive it.
  - ![notification hub](img/notification_hub.PNG)

## Azure Resource Management Templates

- **ARM Templates**
  - **Infrastructure as Code**: manage and provision resources through **definition files** (e.g. JSON).
  - declarative. reduce mistakes.
- ![arm template](img/arm_template.PNG)

## Azure Service Bus and Queue Storage

- **Azure Messaging**
  - Azure supports two types of queue mechanisms: **Service Bus queues** and **Storage queues**.
- **Service Bus vs Queues**
  - **Service Bus**: Enterprise-grade messaging service. advanced features like transactions, sessions, message ordering, and guaranteed delivery.
  - **Queues**: Simple, scalable, and cost-effective message queuing. stores large numbers of messages.
- **Service Bus queues**
  - Azure **messaging infrastructure** that supports **messaging, queues, and pub/sub with topics**. designed to support applications that may span multiple communication protocols, data contracts, trust domains, network environments.
  - fully managed message broker for message queues and pub/sub topics.
  - decouples application from services that rely on messaging.
  - ![service bus overview](img/service_bus_overview.PNG)
  - ![service bus features](img/service_bus_features.PNG)
  - **Payloads and Serialization**: **messages** contain payload and metadata.
    - **metadata**: key:value pair description and handling instructions about payload.
    - **payload**: binary. MIME content type is `ContentType:application/json:charset=utf-8`
      - **broker properties**: routing config.
      - **user properties**:
- **Servcie Bus Queue**
  - **Queue**: pull model. subscriber must poll(ask for message).
  - **Queue Receive Modes**
    - **Receive and Delete**: good when consumer can tolerate missing message in failure event.
    - **Peek Lock**: good when consumer **can't** tolerate missing messages. Service Bus locks message until receives 'messaged was processed' from consumer.
  - **Tiers**
    - basic: obsolete. entry level.
    - standard: variable throughput and latency, max message size **256KB**.
    - premium: for high scale and performance. mission-critical applications.
  - **When to use**
    - **long-polling**: client request messages, if no message immediately available, server holds connection open for set duration waiting for a message to arrive.
    - guaranteed **FIFO** delivery.
    - automatic **duplicate** detection.
    - **parallel** long-running **streams**.
    - message size often bigger than **64KB** but less than 1MB.
    - **RBAC** support.
- **Azure Queue Storage**
  - Azure **storage infrastructure**. store large numbers of messages(millions, limit is size of storage account), accessible from anywhere using HTTPS.
  - **config**
    - **storage account**: Azure Storage account.
    - **Queue**: name lowercase. Azure Queue service.
    - **Message**: max **64KB** size. time-to-live: 1 day - never expire.
  - ![queue url](img/queues_url.PNG)
  - **Queue CLI**
  - ![queue cli](img/queues_cli.PNG)
  - **When to use**
    - more than **80 GB storage** of messages in a queue.
    - needs to **track progress** for processing a message in the queue.
    - **server side logs** of all transactions with queue.

## Azure VMs

- **VMs**
  - **hyper-V Gen 1 and 2**. virtualize a complete computer.
  - pay-as-you-go **hourly** virtualized machine.
  - ![vm setup](img/vm_setup.PNG)
- **VM Sizes**
  - B,D: general purpose.
  - E: memory optimized.
  - F: compute optimized.
  - H: network and compute optimized.
  - L: storage optimized.
  - N: GPU optimized.
- **VM Secure Connections**
  - ssh(linux, port **22**).
  - RDP(windows, port **3389**). OS outside of Windows will need to install RDP client software.
  - Bastion(Azure service, web browser).
    - have to create subnet: **_AzureBastionSubnet_** with min `/27` (32 addresses).
- **Update Management**
  - manage and install operating system updates and patches.
  - update scan performed: Windows(every **12** hours), Linux(every **3** hours).
- **VM Scale Set vs App Service**
  - ![vm scale set vs app service](img/scale_set_vs_app_service.PNG)
