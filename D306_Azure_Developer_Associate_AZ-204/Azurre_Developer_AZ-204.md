# Azure Developer Associate AZ-204

## Tips

- **WGU Test Chatter**
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

## Azure Authentication and Authorization

- **Microsoft Identity**
  - simplify Identity and Access Management.
  - identities, social accounts, with your own API or Microsoft AP. e.g. Microsoft Graph.
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
  - **application object serves as the template** from which common and default properties are derived for use in creating corresponding service principal objects. e.g. Class object and instantiated object.
  - service principal is the **local representation for use in a specific tenant**.
  - **Application Service Principal**: traditional application registered in Azure AD.
    - can be assigned RBAC roles and have credentials(client secrets, certificates).
    - managed through Azure AD blade.
  - **Managed Identity**: automatically managed identity for Azure resources.
    - automatically created to eliminate managing credentials manually.
    - permissions granted directly to Azure resource.
  - **Legacy**: older apps created before introduction of modern app registration features. Limited functionality.

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
```

## Azure Container Apps

- **Azure Container Apps**
  - serverless platform that **manages the details of Kubernetes deployment and container orchestration**.
  - **runs on top of Azure Kubernetes Service**.
  - Containers: use any runtime, programming language, or development stack.
  - **common uses**: API endpoints, background or event-driven processes, microservices.
  - **advantages**: dynamic scale to zero(except CPU or memory scale).
    - run multiple container **revisions**(immutable snapshot of a container app version) while managing lifecycle
      - **lifecycle**: allows reverting, or updating w/ revision-scope change(change revision suffix).
      - e.g. change revision suffix: `app-name--1st-revision` -> `app-name--2nd-revision`
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
# Container Apps+
# upgrade CLI and register services
az extension add --name containerapp --upgrade
az login --use-device-code # allows WSL2 to login through web browser.
az provider register --namespace Microsoft.App
az provider register --namespace Microsoft.OperationalInsights
# variables
export AZ_LOCATION="eastus" # once logged in: az account list-locations
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_CONTAINER_ENVIRONMENT_NAME="my-container-environment-${RANDOM:0:3}"
export AZ_CONTAINER_APP_NAME="my-container-app-${RANDOM:0:3}"
export AZ_SECRET="my-super-safe-secret"
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
  - **serverless** way to package, deploy and manage cloud apps. ACI provide a simple way to create container instances without having to create and manage a VM.
  - **billed only for containers in use per second**(cheaper than VM which is billed per hour).
  - each container group(similar to pod in Kubernetes) has own public IP address and FQDN.
  - **Restart Policy**
    - **Always**: long running task. e.g. web-servers.
    - **Never**: one of task. e.g. background jobs.
    - **OnFailure**: container encounter error try restarting.
  - ![container instance](img/container-instance.PNG)
- **ACI Environment Variables**
  - environment variables are similar to the `--env` command-line argument to **docker run**.
  - Windows or Linux container: `--environment-variables 'NumWords'='5' 'MinLength'='8'`
  - **Secure Value Object**: hold sensitive information(passwords, keys...) inside container.
    - values aren't visible in container properties.
    - you reference the **secureValue property**, not the value.
- **Azure Container Groups**
  - **collection of containers** that get scheduled on the **same host machine**.
  - The containers in a container group **share** a **lifecycle, resources, local network, and storage volumes**.
  - similar to a 'pod' in Kubernetes(multiple containers per pod).
  - deploy through **ARM**(Azure Resource Manager, best for multiple resources) or **YAML** files(best for single ).
  - share public IP address and FQDN per container group.
- **Storage**
  - pods are stateless(ephemeral). data is lost on failure.
  - persist state beyond the lifetime of the container, you must **mount a volume from an external store**.
  - Azure File Share, Empty directory, GitHub, Secret.
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

# clean up
az group delete --name $AZ_RESOURCE_GROUP_NAME -y --no-wait
az logout
```

## Azure Container Registry (ACR)

- **ACR**
  - managed, private Docker registry service for Windows and Linux images.
  - Kubernetes, DC/OS, Docker Swarm, Azure Kubernetes Service(AKS), App Service, Batch, Service Fabric.
  - **tiers**
    - **Basic**: cost-optimized entry point.
    - **Standard**: Basic + increased storage, throughput.
    - **Premium**: Standard + increased storage, throughput. geo-replication.
  - **Storage**: encryption-at-rest, regional(where created), zone redundancy(Premium).
- **ACR Tasks**
  - automated image build. build, test, push, deploy.
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

## App Services

- **App Service**
  - **App Service**: PaaS. HTTP-based service for hosting, develop and deploying web, mobile, and API apps.
  - has third party **identity providers**(Facebook, Google, Microsoft) **integration** for managing **customer authentication**.
  - defines a set of **compute resources**(how many VMs, compute, disk for each VM) for a web application to run on.
  - configuration settings include runtime stack(node, python, dotnet...), operating system(linux, windows), region and App Service plan(standard, premium, isolated...).
  - brings together everything you need to create websites, mobile backends, and web APIs for any platform or device.
  - **containers**: run container apps on windows or linux. pull images from Azure Container Registry or Docker Hub.
  - **Load Balancer**: optional. layer 7, round robin, deliver HTTP request to **workers**(web servers).
- **App Service Autoscaling and Automatic Scaling**
  - **Scaling**: vertical(more compute, up/down) or horizontal(more VMs, out/in).
  - **elasticity for your services**, responding to changes in the environment by **adding or removing web servers and balancing the load** between them.
  - **availability and fault tolerance**: avoids long wait times to response because not enough resources.
  - true autoscale you provide max and min.
  - **resource-intensive processing**: autoscaling might not be an effective approach. increase Vertical scaling.
  - **scope**: instance limit is set by App Service Plan pricing tier. Autoscaling cannot scale beyond instance limit.
  - **Automatic Scaling**
    - new scale-out option. pre-warms resource for smooth transition.
  - **AutoScale Rule**
    - description of **when** and **what** action to perform.
    - monitor from **_Run history_** tab. **Activity Log** alert can be set for success or failure of autoscaling.
    - rules threshold is for **all** instances running. e.g. CPU > 80%, all instances CPU must be > 80%.
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
- **App Service Plan**
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
  - **Region**: location of datacenter. e.g. 'East US'.
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
  - **Automated**
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
  - e.g. `www.example.com/images` would map to `media/images`
- **Security Certificates TLS/SSL**
  - upload or import public certificates into App Service.
  - certificate binds to **App Service plan resource group and region**(called **webspace**). makes certificate **accessible to other apps** in same resource group and region combination.
  - **scope**: all tiers except Free.
- **Storage**
  - containerized storage is ephemeral. persistent storage can be added to containerized apps.
- **WebJobs**
  - run script in the same instance as web app. no additional charge.

```bash
# online Azure Cloud Shell
az webapp list-runtimes --os-type linux # show linux runtime options. node, dotnet, python...
```

## Blob Storage

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

## Cosmos DB

- **Cosmos DB**
  - fully managed NoSQL, globally distributed database. read and write data from the **local replicas** of your database and it transparently **replicates** the data **to all the regions** associated with your Cosmos account.
  - low latency, elastic scalability of throughput. place data in region where users are.
  - add remove **regions** at any time. can have multiple Cosmos databases in account.
  - database is analogous to a **namespace** with a logical grouping of **Azure Cosmos DB containers**.
  - **pay** for the **throughput you provision** and the **storage you consume** on an **hourly basis**.
    - expressed as **request units (RUs)**(CPU, IOPS, memory). **1KB read = 1RU**.
  - ![cosmos db hierarchy](img/cosmos_db_hierarchy.PNG)
- **Cosmos DB Containers**
  - unit of scalability both for provisioned throughput and storage.
  - A container is horizontally partitioned(evenly distributed across a SSD partition) and then replicated across multiple regions.
  - items added are distributed across the partitions(based on partition key).
  - **Throughput**
    - **Dedicated**: throughput on container exclusively reserved for container. Backed by SLA.
    - **Shared**: share throughput with other containers in same database.
- **Consistency Levels**
  - distributed database must make tradeoff between read consistency, availability, latency, and throughput.
  - data may lag replication across regions due to failures(eventual consistency).
  - region-agnostic. guaranteed for all operations regardless of region.
  - **default consistency level** effects **all Cosmos DB databases** in **Azure Cosmos DB account**.
  - **Strong**: Users are always guaranteed to read the latest committed write. request served concurrently.
    - all regions confirm successful write before data is considered written. increases latency. **lowest throughput**.
    - removes database regions that do not respond to write until they are back online.
  - **Bounded staleness**: read can lag(single region **5s**, multi-region **300s**) after write.
  - **Session**: single client can read-your-writes.
  - **Consistent prefix**: updates made as a batch.
  - **Eventual**: no ordering guarantee for reads. replicas eventually converge. **greatest throughput**.
  - ![consistency levels](img/consistency_levels.PNG)
- **Cosmos DB API**
  - if you want to migrate existing database into Cosmos DB.
  - **NoSQL**: document format. first to update. best end-to-end experience. Query in SQL syntax.
  - **MongoDB**: BSON format. compatible with MongoDB.
  - **PostgreSQL**: PostgreSQL distributed tables for scale.
  - **Apache Cassandra**: column-oriented schema.
  - **Table**: key:value format. has been **replaced by Cosmos DB NoSQL**.
  - **Apache Gremlin**: for graph queries. store data as edges and vertices. data too complex to be modeled with relational database.
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
export AZ_SUBSCRIPTION_NAME="your subscription name" # az account subscription list --query "[].{DisplayName: displayName, ID: id}" --out table
export AZ_RESOURCE_GROUP_NAME="my-resource-group-${RANDOM:0:3}" # RANDOM 1-999
export AZ_COSMOS_DB_NAME="my-cosmosdb-${RANDOM:0:3}"
az login --use-device-code # allows WSL2 to login through web browser.
az provider register --namespace Microsoft.DocumentDB
az group create --location $AZ_LOCATION --name $AZ_RESOURCE_GROUP_NAME
az cosmosdb create --name $AZ_COSMOS_DB_NAME --resource-group $AZ_RESOURCE_GROUP_NAME --subscription "${AZ_SUBSCRIPTION_NAME}"
# Retrieve the primary key
az cosmosdb keys list --name $AZ_COSMOS_DB_NAME --resource-group $AZ_RESOURCE_GROUP_NAME
# Clean up
az group delete -n $AZ_RESOURCE_GROUP_NAME -y --no-wait
az logout
```

## Functions

- **Azure Function as a Service (FaaS)**
  - serverless, event driven **triggers(based on event or emit data)** to start functions.
  - define input, actions, conditions, and output.
  - fully managed and scales to zero.
  - requires a **storage account to operate**.
  - **function app**: one or more individual functions that are managed, deployed, and scaled together.
    - share the same pricing plan, deployment method, and runtime version.
    - **Functions 2.x all functions** in a function app must be authored in the **same language**.
  - **Serverless**
    - fully managed cloud services. you bring the code.
    - abstracts infrastructure and are billed on execution time. do not pay for idle servers.
    - highly: scalable, elastic, available, durable, secure by default.
  - **Project Files**: root of directory.
    - `host.json`: metadata file configuration options on Azure Functions.
    - `local.settings.json`: local on-prem specific configurations to override `host.json`.
  - **orchestration**: collection of functions(steps).
  - **trigger**: required to call the function.
  - **bindings**: optional. avoids hardcoding access(input/output data) to other services. data is passed in the form of a function **parameter**.
    - **function.json**: file show what **dataType**: binary, stream, string. **direction**: in/out
    - **input bindings**: other service responds to event. function is called with data as the argument.
    - **output bindings**: other service is listening. the function return value is passed to listening service.
    - **identities**: RBAC assigned roles are used to connect the services.
  - ![FaaS overview](img/faas_overview.PNG)

```json
# function.json
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
      "tableName": "Person",
      "connection": "MyStorageConnectionAppSetting",
      "name": "tableBinding",
      "type": "table",
      "direction": "out"
    }
  ]
}
```

- **Azure Function vs Logic Apps vs App service WebJobs**
  - all are serverless.
  - **Logic App**: serverless workflow integration(**actions**) executed to accomplish a task.
  - ![function vs logic app](img/function_vs_logic_app.PNG)
  - **WebJobs SDK**: Functions is built on WebJob SDK.
    - Azure Functions offers more developer productivity than Azure App Service WebJobs does.
    - offers more options for programming languages, development environments, Azure service integration, and pricing.
  - ![function vs webjob sdk](img/function_vs_webjob_sdk.PNG)
- **Function Hosting Plans**
  - **Consumption Plan**: default. pay-as-you-go w/automatic scale. dynamically added based on incoming events.
  - **Flex Consumption Plan**: same as consumption with better options: Compute and 'cold start' pre-provision(always ready) instances.
  - **Premium Plan**
    - always ready instances. better Compute.
    - functions that run continuously.
    - more control over instances(CPU, memory).
    - high number of small executions(low GB seconds for each run) or code needs longer run times.
    - require VNet connectivity. need custom linux image.
  - **Dedicated Plan**
    - same as Premium. runs at App Service rates. predictable billing.
    - manually scale instances.
    - full compute isolation. secure network access by ASE(App Service Environment).
    - high memory usage.
  - **Container Apps Plan**
    - functions run in container. Kubernetes style workflow without complexity.
    - create custom library to support **line-of-business** apps.
    - migrate on-prem code or legacy apps to cloud microservices running in containers.
  - ![function hosting plans](img/function_hosting.PNG)
  - **Function Timeout**: max time avaiable in minutes function has to return response.
  - ![function timeout](img/function_timeout.PNG)
  - **Functions Scale Instances**: max instances
  - ![function scale instances](img/functions_scale_instances.PNG)
