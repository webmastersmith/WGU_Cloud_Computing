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
- **Exam Purpose**:
  - <https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104#skills-measured-as-of-october-26-2023>
  - **Weights**
    - Manage Azure identities and governance (15-20%)
    - Implement and manage storage (15-20%)
    - Deploy and manage Azure compute resources (20-25%)
    - Configure and manage virtual networking (25-30%)
    - Monitor and back up Azure resources (10-15%)

## AZ-104 Study Notes

- **Entra ID vs Active Directory**
  - **Entra ID**
    - microsoft's identity provider that speaks cloud. OAuth2, OIDC(open id connect), SAML.
    - focuses on identity over internet(https).
  - **AD(active directory)**
    - controls permissions. kerberos, NTLM, LDAP for identity.
- **Entra Connect Cloud Sync and Sync**
  - **Entra Connect Cloud Sync**
    - engine runs in cloud.
  - **Entra Connect Sync**
    - engine runs on-prem with AD. Flows one-way. Creates account in the Cloud.
