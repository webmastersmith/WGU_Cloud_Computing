# Azure Fundamentals AZ-900

## Tips

- **Notes**
  - [github jasonotu study notes](https://github.com/undergroundwires/Azure-in-bullet-points/tree/master/AZ-900%20Microsoft%20Azure%20Fundamentals)
  - [zero2devops study notes](https://www.zero2devops.com/blog/azure-fundamentals-study-guide)
  - [Marczak](https://marczak.io/az-900/)
- **Videos**
  - [Reddit](https://www.reddit.com/r/AZURE/comments/14yk02t/questions_about_az900_exam/)
    - [exam cram youtube](https://www.youtube.com/watch?v=tQp1YkB2Tgs)
    - [complete course youtube](https://www.youtube.com/watch?v=pY0LnKiDwRA&list=PLlVtbbG169nED0_vMEniWBQjSoxTsBYS3)
  - [az-900 adam marczak](https://www.youtube.com/playlist?list=PLGjZwEtPN7j-Q59JYso3L4_yoCjj2syrM)
  - [free code camp](https://www.youtube.com/watch?v=NKEFWyqJ5XA)
- **Practice Exams**
  - [practice exams](https://certification.kananinirav.com/az-900-microsoft-azure-fundamentals/practice-exam/exams.html)
- **Microsoft**
  - [microsoft azure az-900 training](https://learn.microsoft.com/en-us/training/courses/az-900t00)
  - [az-900 exam objectives](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900)
  - 45 minutes, 40-60 questions, 700/1000.
  - Domain 1: Describe Cloud Concepts 25-30%
  - Domain 2: Describe Core Services 15-20%
  - Domain 3: Describe core solutions and management tools on Azure 10-15%
  - Domain 4: Describe general security and network security features 10-15%
  - Domain 5: Describe identity, governance, privacy, and compliance features 15-20%
  - Domain 6: Describe Azure cost management and Service Level Agreements 10-15%
  - Domain 7: Describe Azure Service Level Agreements (SLAs) and service lifecycles

| AZ-900 Domain Area                       | Weight |
| ---------------------------------------- | ------ |
| Describe cloud concepts                  | 25-30% |
| Describe Azure architecture and services | 35-40% |
| Describe Azure management and governance | 30-35% |

## 01_Cloud Basics

- **agility**
  - is the ability to react fast (scale quickly)
- **Cloud Benefits**
  - **economies of scale**: cloud provider purchase large quantities of hardware at discount and pass on savings.
  - **CapEx to OpEx**: CapEx is hard assets(IT equipment). OpEx is operating expenses(monthly subscription).
  - **scalability & elasticity**:
  - **high availability & fault tolerance**:
- **Cloud Service Models: IaaS, Paas, SaaS**

  - ![cloud service models](./img/shared-responsibility.png)
  - **IaaS**
    - (Infrastructure as a Service). bare bones server with virtualization OS (AWS).
  - **PaaS**
    - (Platform as a Service). When you need to build software to meet your needs (They provide database, middleware..., look for more than Iaas).
  - **SaaS**
    - (Software as a Service). Complete solution, you just bring the data (office 365).

  | Platform | Cloud Provider Includes                                     |
  | -------- | ----------------------------------------------------------- |
  | IaaS     | physical hardware + hardware management software            |
  | PaaS     | IaaS + OS + app development environment(java, python, node) |
  | SaaS     | PaaS + complete app. You bring your data                    |

- **Consumption Based/Pay-As-You-Go Model**
  - only pay for what you use.
  - no upfront infrastructure costs.
  - enables better pricing prediction.
- **Containers**
  - Isolated environment similar to VM, but does not require guest OS. Can run on different guest systems.
  - highly portable. agile start/stop. application and dependencies are packaged in container.
  - **Docker**: open source container solution.
- **Current**
  - do not have to worry about infrastructure, software patches, upgrades or other IT management task.
- **disaster recovery**
  - is the process and design principle which allows a system to recovers from natural or human induced disasters.
  - Cloud based backup services, data replication and geo distribution ensure confidence that your data is safe even if a disaster should occur.
- **elasticity**
  - is the ability to scale **dynamically**(autoscaling).
- **fault tolerance**
  - handle failure without service interruption. FT offers a more robust approach for critical systems that cannot afford even a single moment of downtime.
- **Geo-Distribution/Global**
  - Applications and Data can be deployed to regional datacentres globally to customers in all regions can get the best performance.
  - edge computing.
- **high availability**
  - systems designed to quickly recover and ensure services are up and running with minimal interruption. It is a simple calculation of system uptime versus whole lifetime of the system.
- **Horizontally Scaling**
  - computing capacity can be increased by adding instances of a resource such as adding VMs.
  - Opposite is **scaling in**.
- **lift and shift**
  - gradually move local infrastructure to cloud.
- **on-demand**
  - use compute like you own it, then return it when done.
- **Public, Private, Hybrid Cloud**
  - **Public**: services available over the public internet (AWS, Azure, Google Cloud).
  - **Private**: private access to resources (GovCloud).
  - **Hybrid**: public cloud and private cloud, including on-premises data centers or "edge" locations.
    - **Hybrid Cloud**: public/private cloud.
    - **Hybrid Environment**: mix of infrastructure. On site and cloud. Public or private.
- **Reliability**
  - Cloud applications can provide a continuous user experience with practically no downtime.
  - data backup, disaster recovery, redundancy(fault tolerance).
- **scalability**
  - is the ability to scale, so allocate and deallocate resources at any time.
- **Security**
  - physical: cameras, gates, locks.
  - digital:
    - you are responsible for your data.
    - Cloud provider: offers tools to mitigate security threats that you can use.
      - Broad set of policies, technologies, controls, and expert technical skills.
      - can provide better security than most organizations can otherwise achieve
- **serverless computing**
  - application is broken into separate functions that runs when triggered by some action/event.
  - good for automation task.
  - eliminating the need for managing infrastructure. highly scalable, event-driven(easy, quick to acquire more compute, memory, storage...).
  - The serverless name comes from the fact that the tasks associated with infrastructure provisioning and management are invisible to the developer.
  - enables developers to increase their focus on the business logic and deliver more value to the core of the business.
- **Vertically Scaling**
  - computing capacity can be increased by adding RAM or CPUs to a virtual machine (VM).
  - Opposite is **scaling down**.
- **VM**
  - virtual machine: runs directly on top of hypervisor.
  - requires operating system and hardware(memory, cpu, storage...).

## 02_Cloud Compliance

- **CJIS**
  - criminal justice information services: owned by FBI. Must adhere to CJIS security policy to access.
- **CSA STAR**
  - cloud security alliance: independent third party assessment of cloud security posture.
  - ensures:
    - ISO/IEC 27001 compliant.
    - CCM: cloud controls matrix compliant.
- **EU Model Clause**
  - EU contractual clause that allows personal data to moved outside of EU.
- **GDPR**
  - general data protection regulation: european residents data privacy laws.
- **HIPAA**
  - health insurance portability and accountability act: us federal law regulates PHI.
  - PHI: protected health information. Someones PII(personally identifiable information) that links to health records. Includes name, address, social security number, drivers license, email, phone...
- **HIPAA BAA**
  - health insurance portability and accountability act business associate agreement: allows businesses to handle PHI while adhering to security and privacy of HIPAA.
  - Azure offers BAA as contract addendum to help with compliance.
- **ISO/IEC 27018**
  - International organization for standardization.
  - International electrotechnical commission.
  - 27018 covers processing personal information by cloud service providers.
- **MTCS Singapore**
  - MTCS = Multi-Tier Cloud Security (MTCS) Singapore.
  - MTCS 584:2013 asses for IaaS & PaaS & SaaS service classifications.
- **SOC 1, 2, and 3**
  - SOC: Service Organization Controls
  - Cloud services audited at least annually against the SOC report framework by independent third-party auditors.
  - Audit covers controls for data security, availability, processing integrity, and confidentiality as applicable to in-scope trust principles for each service.
- **NIST CSF**
  - NIST CSF = National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF)
    - NIST is agency of United States Department of Commerce.
  - Voluntary framework that defines security guidelines, and best practices to manage cybersecurity-related risks.
  - Azure have undergone independent, third-party Federal Risk and Authorization Management Program (FedRAMP) Moderate and High Baseline audits & is certified
    - Also validated by the Health Information Trust Alliance (HITRUST) a leading security and privacy standards development and accreditation organization
- **UK Government G-Cloud**
  - Cloud computing certification for services used by government entities in UK.
  - Azure has received official accreditation from the UK Government Pan Government Accreditor.

## Azure Services

- **Azure Marketplace**
  - vendors sell their solutions.
- **Compute Services**
  - Cover VMs, Containers & Serverless computing.
- **Cloud Storage**
  - Disks attached to VMs, fileshares and Databases(relational and NoSQL choices).
- **Networking**
  - Let you set up private network connection to your on prem environments
- **App Hosting**
  - Lets you run your entire application on a managed platform
- **AI**
  - Including machine learning and prebuilt cognitive services. Good for data analysis and trends.
- **IoT**
  - Allows you to integrate sensors and devices and managed them.
- **Integration**
  - Allows for workflow to orchestrate business processes.
- **Security**
  - Integrated into every aspect of Azure.
