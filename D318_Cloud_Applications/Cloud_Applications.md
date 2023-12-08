# WGU D318 Cloud Applications CompTIA Cloud+ CV0-003

## Tips

- https://www.youtube.com/playlist?list=PLOYQCApvKhV1K2_jtzPVsPCnEv87piiw5
- https://www.reddit.com/r/WGU/comments/10dlfyy/comptia_cloud_cv0003_passed/
- https://www.reddit.com/r/CompTIA/comments/136zie0/cloud_cvo003_resources_and_review/
- https://www.linkedin.com/learning/paths/prepare-for-the-comptia-cloud-plus-cv0-003-exam?u=2045532
- https://github.com/cloud-master-io/cloud-master-io
- Passing score: 750 (on a scale of 100—900)
  - Min Passing score: 75%
  - Min questions correct: 75 of 90.

| Domain                            | Percentage of Exam |
| --------------------------------- | ------------------ |
| 1.0 Cloud Architecture and Design | 13%                |
| 2.0 Security                      | 20%                |
| 3.0 Deployment                    | 23%                |
| 4.0 Operations and Support        | 22%                |
| 5.0 Troubleshooting               | 22%                |
| Total                             | 100%               |

## 1.1 Compare and contrast the different types of cloud models.

- Public Cloud
  - A public cloud is a cloud computing model where the infrastructure and services are owned and operated by a third-party provider, such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP). Users can access these resources over the internet and pay for them on a pay-as-you-go basis.
- Private Cloud
  - A private cloud is a cloud computing model where the infrastructure and services are dedicated to a single organization. Private clouds can be hosted on-premises or in a colocation facility.
- Hybrid Cloud
  - A hybrid cloud is a combination of public and private clouds. This allows organizations to leverage the benefits of both models, such as the scalability and elasticity of public clouds and the security and control of private clouds.
- Community Cloud
  - A community cloud is a cloud computing model where the infrastructure and services are shared by a group of organizations with common interests or needs.
- Cloud within a Cloud
  - A cloud within a cloud is a cloud computing model where resources are provisioned from a public cloud provider but are then isolated and managed as a private cloud.
- Multicloud
  - Multicloud is the practice of using multiple cloud computing services from different providers. This can help organizations avoid vendor lock-in and take advantage of the best features and services from each provider.
- Multitenancy
  - Multitenancy is a cloud computing model where the infrastructure and services are shared by multiple organizations. This allows the provider to provide economies of scale and reduce the cost for users.
- Infrastructure as a Service (IaaS)
  - IaaS provides users with on-demand access to virtualized computing resources, such as servers, storage, and networking. Users have full control over the operating system, applications, and data that run on these resources.
- Platform as a Service (PaaS)
  - PaaS provides users with a platform for developing, deploying, and managing applications. Users do not have to worry about managing the underlying infrastructure, such as servers and storage.
- Software as a Service (SaaS)
  - SaaS provides users with access to applications that are hosted and managed by the provider. Users typically access these applications through a web browser or mobile app.
- Internet of Things (IoT)
  - IoT is the network of physical devices that are embedded with sensors, software, and network connectivity, which allows them to collect and exchange data.
- Serverless
  - Serverless computing is a cloud computing model in which the **provider manages** the servers and infrastructure that run applications. Users simply write the code and the provider takes care of the rest.
- Machine Learning/Artificial Intelligence (AI)
  - Machine learning and artificial intelligence are technologies that allow computers to learn and make decisions without being explicitly programmed.
- Shared Responsibility Model
  - The shared responsibility model is a cloud computing model where the provider and the user share responsibility for security and compliance. The provider is responsible for securing the underlying infrastructure, while the user is responsible for securing their own data and applications.

## 1.2 Explain the factors that contribute to capacity planning.

- Capacity Planning Hardware:
  - Minimum and recommended specifications for CPU, RAM, storage, network connectivity, etc.
  - Compatibility with cloud platforms and operating systems.
- Capacity Planning Software:
  - Operating systems, applications, and middleware needed for the cloud environment.
  - Compatibility with the chosen cloud platform and hardware.
  - Licensing requirements and costs.
- Capacity Planning Budgetary:
  - Estimated costs for hardware, software, cloud services, and ongoing maintenance.
  - Budget allocation for different components of the cloud environment.
- Capacity Planning Business need analysis:
  - Identifying the business objectives and challenges that the cloud solution will address.
  - Aligning the cloud strategy with business goals and priorities.
- Capacity Planning Standard Templates:
  - Pre-configured cloud environments with specific configurations for common use cases.
  - Can be used to quickly deploy applications and services in the cloud.
  - Examples include web servers, databases, and development environments.
- Capacity Planning Per-user Licensing
  - Charges based on the number of users accessing the cloud service.
- Capacity Planning Socket-based Licensing
  - Charges based on the number of active connections to the cloud service.
- Capacity Planning Volume-based Licensing
  - Charges based on the amount of data stored or processed in the cloud.
- Capacity Planning Core-based Licensing
  - Charges based on the number of CPU cores used by the cloud service.
- Capacity Planning Subscription Licensing
  - Fixed monthly or annual fee for access to the cloud service with specific limitations.
- Capacity Planning User Density
  - The number of users accessing the cloud environment at a given time.
  - Used to determine the required amount of resources and performance capacity.
- Capacity Planning System Load
  - The amount of work being done by the cloud environment at a given time.
  - Measured by factors like CPU utilization, memory usage, and disk I/O.
- Capacity Planning Trend Analysis
  - Studying historical data to identify patterns and predict future trends in resource usage, performance, and costs.
  - Used to optimize resource allocation and budget planning.
- Capacity Planning Baselines
  - A reference point for comparing current performance and resource usage.
  - Established during initial deployment or after a period of stable operation.
- Capacity Planning Patterns
  - Recurring trends in resource usage or system behavior.
  - Can be used to identify potential bottlenecks and predict future demands.
- Capacity Planning Anomalies
  - Deviations from normal patterns that may indicate a problem or an opportunity.
  - Need to be investigated to identify the root cause and take corrective action.
- Capacity Planning Performance Capacity Planning
  - Predicting future resource needs and ensuring that the cloud environment can meet them.
  - Involves analyzing trends, forecasting future workloads, and optimizing resource allocation.

## 1.3 Explain the importance of high availability and scaling in cloud environments.

- Explain the importance of high availability and scaling in cloud environments?
  - High availability and scaling are two fundamental pillars of a robust and efficient cloud environment. They are critical for ensuring continuous operation, meeting fluctuating demands, and delivering a seamless user experience.
  - High Availability: Minimizing downtime and service disruptions.
  - Scalability: Adapting to changing workloads and demands efficiently.
  - Cost optimization: Utilizing resources effectively and avoiding unnecessary costs.
  - Enhanced user experience: Delivering consistent and reliable performance.
- High Availability and Scaling in Hypervisors
  - Hypervisors are software programs that create and manage virtual machines (VMs) on a single physical server. They play a crucial role in achieving high availability and scalability.
- High Availability and Scaling in Affinity
  - Ensures that VMs with specific dependencies are placed on the same physical server. This improves performance and reduces latency.
- High Availability and Scaling in Anti-affinity
  - Distributes VMs across different physical servers to prevent a single hardware failure from impacting multiple VMs.
- High Availability and Scaling in Oversubscription
  - Oversubscription allows cloud providers to allocate more resources (CPU, RAM, storage) than the physical server has available. This can be effective for workloads with variable resource demands and improves overall utilization. However, it can also lead to performance issues if resources become overcommitted.
- High Availability and Scaling in Compute oversubscription
  - Sharing CPU cores among multiple VMs.
- High Availability and Scaling in Network oversubscription
  - Sharing network bandwidth among multiple VMs.
- High Availability and Scaling in Storage oversubscription
  - Sharing storage capacity among multiple VMs.
- High Availability and Scaling in Regions and Zones
  - Cloud providers offer services across multiple geographically distributed regions and zones. This provides redundancy and ensures that applications are available even if there is an outage in one region.
  - Geographically distinct areas with multiple data centers.
  - Zones: Fault-tolerant locations within a region.
- High Availability and Scaling in Applications
  - High availability for applications requires replicating them across multiple servers and regions. This ensures that if one instance fails, another can seamlessly take over.
- High Availability and Scaling in Containers
  - Containers are lightweight and portable units of software that share an operating system kernel. They are becoming increasingly popular in cloud environments due to their fast startup times and resource efficiency.
  - Containerization: Packaging applications and their dependencies into containers.
  - Container orchestration: Managing the deployment, scaling, and networking of containers.
- High Availability and Scaling in Clusters
  - Clusters are groups of interconnected servers that work together to provide shared resources and services. They are fundamental for scaling applications and workloads horizontally.
- High Availability and Scaling of network functions
  - Ensuring continuous availability of network services like switches, routers, load balancers, and firewalls.
- High Availability and Scaling in Avoiding single points of failure
  - Eliminating single points of failure in the infrastructure to prevent outages.
- High Availability and Scaling in Scalability
  - Scalability refers to a system's ability to adapt to changing demands by increasing or decreasing resources. Different scaling approaches are available:
- High Availability and Scaling in Auto-scaling
  - Automatically adjusts resources based on predefined metrics.
- High Availability and Scaling in Horizontal scaling
  - Adding or removing VMs or containers to a cluster.
- High Availability and Scaling in Vertical scaling
  - Upgrading resources (CPU, RAM) of existing VMs or containers.
- High Availability and Scaling in Cloud bursting
  - Bursting workloads to the public cloud during peak demand.
