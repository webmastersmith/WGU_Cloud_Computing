# D338 Cloud Platform Solutions Azure Administrator AZ-104

## Tips

- **First Impressions**: the OA is focused on network infrastructure terminology and function. The AZ-104 certification test leans more toward building infrastructure with CLI & powershell,. While both are essential, it makes learning an already difficult test, more difficult.
- <https://www.reddit.com/r/WGU/comments/18i1uv8/wgu_d338_its_super_easy/>
- <https://www.reddit.com/r/AzureCertification/comments/1colul0/passed_az104_my_experience_with_this_exam/>
- <https://www.linkedin.com/pulse/passing-az-104-exam-everything-you-need-know-neeraj-kumar/>
- <https://www.reddit.com/r/AzureCertification/comments/1crlfs5/passed_az104/>
  - Storage, Entra, and networking areas had tricky questions.
- <https://www.reddit.com/r/AzureCertification/comments/1ctkwt0/passed_az_104/>
- Search for each topic on Microsoft documentation and Microsoft learn to help study each area of the AZ-104 exam. Use search like this ms **docs + "Study topic"**.
- **Videos**
  - <https://www.youtube.com/playlist?list=PLlVtbbG169nGlGPWs9xaLKT1KfwqREHbs>
  - <https://wgu.udemy.com/course/az-104-microsoft-azure-administrator-lab-exam-prep/>
  - <https://www.linkedin.com/learning/paths/prepare-for-the-microsoft-azure-administrator-az-104-certification-exam>
- **Flashcards**
  - <https://quizlet.com/791527803/az-104-flash-cards/?funnelUUID=f595251a-598c-4eff-8213-e64cb8286eb8>
  - <https://www.brainscape.com/subjects/az-104>
- **Notes**
  - <https://github.com/mischavandenburg/az-104-azure-administrator> // includes Anki cards.
- **Book**
  - <https://lrps.wgu.edu/provision/277282392> // must be signed in.
- **Course Chatter**
  - Make sure to know the difference between RBAC and Azure AD roles, and how they are used.
  - Know all the different "types" of things like AD license types, Load Balancer types, storage account types, etc... and what can/cannot be done with them.
  - Know about how policies and roles work together.
  - Know about the different types of backup, and how it's used. Know about containers and networking, and the different ways monitoring is done and used.
  - **Joshua S**
    - AZ-104. Prep for the actual certification and gauges knowledge on how-to and CLI commands, Powershell scripting etc.
    - The OA however will not, so spending time in a lab going through the how-to's and pouring over script and .csv examples in the book won't get me past the WGU exam but will come handy for the Microsoft Certification. Without a doubt, the Pluralsight videos and practice exams did very little to prepare for the OA.
    - have come to the conclusion that the OA is taken straight from the book and video links nor the AZ-104 practice exams in Pluralsight.
    - flashcards for memorization will help with Ports, Subscription levels, and specific concepts like Cloud vs On-Prem.
- **Microsoft**
  - 700 of 1000 to pass.
  - Hands-on experience is crucial in preparing for the AZ-104 exam.
  - [practice questions](https://learn.microsoft.com/en-us/credentials/certifications/exams/az-104/practice/assessment?assessment-type=practice&assessmentId=21&source=docs)
  - [Azure All Services](https://azure.microsoft.com/en-us/products/)
  - [AZ-104 Training](https://learn.microsoft.com/en-us/training/courses/az-104t00#course-syllabus)
  - [AZ-104 Overview](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/?practice-assessment-type=certification)
  - [AZ-104 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104)
  - [AZ-104 Labs](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/)
  - [AZ-104 Exam Prep Videos](https://learn.microsoft.com/en-us/shows/exam-readiness-zone/preparing-for-az-104-manage-azure-identities-and-governance-1-of-5)
- **Exam Purpose**:
  - <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104#skills-measured-as-of-october-26-2023>
  - **Weights**
    - Manage Azure identities and governance (15-20%)
    - Implement and manage storage (15-20%)
    - Deploy and manage Azure compute resources (20-25%)
    - Configure and manage virtual networking (25-30%)
    - Monitor and back up Azure resources (10-15%)

## Azure Cloud Shell

- **Cloud Shell**
  - browser based(access anywhere) cli for bash, powershell.
  - cloud storage provides
  - upload scripts and store on cloud for access anywhere.
  - **Rules**
    - session last **20 minutes**. Not for long running scripts, session will **end without warning**.
    - no 'sudo' or admin permission changes.
    - no non-supported tool installs.
    - no multiple region storage.
    - no multiple sessions.

## Azure Resource Manager

- **Azure Resource Manager**
  - deploy, manage, monitor, security, auditing, tagging, authentication (vm, database, third-party...) as a group.
  - **Benefits**
    - reusable templates allow easy deployment.
    - handle resources as a group instead of individually.
    - tag resources.
  - ![resource management](img/resource_management.PNG)
- **declarative syntax**
  - declarative programming. **what you want, not how to do it**.
  - Syntax that lets you state "Here is what I intend to create" without having to write the sequence of programming commands to create it. The Resource Manager template is an example of declarative syntax. In the file, you define the properties for the infrastructure to deploy to Azure.
- **Entra ID vs Active Directory**
  - **Entra ID**
    - microsoft's identity provider that speaks cloud. OAuth2, OIDC(open id connect), SAML.
    - focuses on identity(authorization, ) over internet(https).
  - **AD(active directory)**
    - controls permissions. kerberos, NTLM, LDAP for identity.
- **Entra ID three groups**
  - **Cloud**:
  - **Hybrid**:
  - **Guest**:
- **Entra Connect Cloud Sync and Sync**
  - **Entra Connect Cloud Sync**
    - engine runs in cloud.
  - **Entra Connect Sync**
    - engine runs on-prem with AD. Flows one-way. Authorization is verified from the on-prem engine.
- **resource**
  - manageable item through Azure. VMs, web app, database...
- **resource group**
  - container that holds related resources(logical collection).
  - **Rules**
    - **each resource can only exist in one resource group**.
    - resource groups **cannot** be **nested**.
    - resource group **cannot** be **renamed**.
    - can have many different type(services) and **regions**.
    - all resources share the same lifecycle. e.g. you deploy, update, delete them together.
    - a resource can interact with resources in other resource groups.
    - **RBAC(role based access control)** can be **assigned** to resource groups.
    - because a resource group contains metadata about resources, for **compliance reasons(government, sovereign states)**, you must provide a **location** of resource group.
    - when **moving resources** from one group to another, you **can't add, update, or delete resources** in the resource groups until the move completes. The 'services' will still be available.

```powershell
# remove resource group.
Remove-AzResourceGroup -Name "YourResourceGroupName"
```

- **resource limits**
  - track usage against limits and plan for future needs.
  - limits shown are for you **subscription**.
  - all resources have 'maximum' limits threshold that you can't increase.
  - ![resource limits](img/resource_limits.PNG)
- **Resource Manager locks**
  - prevent accidental deletion of resources, even if you have delete permissions.
  - only the **Owner** and **User Access Administrator** roles can create or delete management locks.
  - child resources inherit **Locks**.
  - **Read-Only Lock**: prevent change.
  - **Delete Lock**: prevent deletion.
- **resource provider**
  - service that supplies resources you can deploy and manage through the 'Resource Manager'.
  - e.g. Microsoft.Compute, Microsoft.Storage, Microsoft.KeyVault, Microsoft.Web...
  - resource type is in the format: `{resource-provider}/{resource-type}`. For example, the key vault type is `Microsoft.KeyVault/vaults`.
- **template**
  - JSON(javascript object notation) file that defines one or more resources, to **deploy to a resource group**.
