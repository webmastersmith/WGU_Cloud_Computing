# Cloud+ C003 Quick Study

## Quick Study

- **Cloud GPU Pass-through**:
  - Assign a **dedicated** physical **GPU** to a **single VM**, providing exceptional performance for demanding workloads.
  -
- What platform can be database as a service? (IaaS, PaaS, SaaS)
  - PaaS.
  -
- Describe iPAM:
  - Software consolidating **management** of multiple **DHCP** and **DNS** services to provide oversight into **IP address** allocation across an cloud enterprise **network**.
  - IP address allocations tracked across multiple **DHCP** and **DNS** services.
  -
- Describe: Cloud Bursting, Right-Sizing, Auto-Scaling, Horizontal Scaling, Vertical Scaling, Cluster, Node, Peering, Replication?
  - **cloud bursting**: **Extending workloads to the cloud** during **peak demand** to avoid resource constraints.
  - **Right-sizing**: Selecting compute capabilities that match the estimated workload
  - **Auto-scaling**:Automatic scaling of resources to meet the actual workload
  - **Horizontal scaling**: Scaling additional instances to meet the workload requirements (also known as scaling out)
  - **Vertical scaling**: Scaling additional compute resources to an existing instance to meet the workload requirements (also known as scaling up)
  - **cluster**: two or more servers that have the same data for failover. treated as a single entity. network ip for both is single ip address.
  - **node**: each cluster member is called a node. all nodes will be configured the same way and share the same ip.
  - **peering**: Establishes **direct communication between VPCs** without traversing the public internet, minimizing latency and enhancing performance and security.
    - Appear to customer as single network.
    - Peering is used in the **hub-and-spoke model** to connect the spoke networks with the hub network. Note that the spoke networks are not peered to each other in the hub-and-spoke model.
  - **Replication**: Creates **copies** of data across different storage locations **for disaster recovery** and **data availability**.
  -
- Describe Permissions: Discretionary-based, Non-Discretionary-based, Attribute-based, Mandatory-based, Role-based, ACL?
  - **Discretionary-based**: **Owner access** controls. Allows **users** to **control access** to their **own resources**. Access is managed with an access control list (ACL) that lists who has access and what level of access they have.
  - **Non-Discretionary-based**: **Rule based access control**. Access controlled by an **administrator** or system based on rules and policies.
  - **Attribute-based**: determine access by user characteristics, object characteristics, action types.
  - **Mandatory-based**: **Access via security model**. **Labels** set on objects (files) by the administrator. Users cannot manipulate these labels. Users are given matching classifications. If both match, user is granted access.
  - **Role-based**: Grants **access** based on predefined **roles** and associated permissions. Given to **groups**.
  - **ACL**: Access Control List. Lists who has access to resource and what level of access they have.
  -
- Describe: Business Continuty Plan, Incident Response/Disaster Recovery Documentation, Tabletop Exercise, Root Cause Analysis?
  - **business continuty plan**: A roadmap for maintaining essential business operations during any unexpected disruptions. It outlines response procedures, communication protocols, and recovery strategies to minimize downtime and ensure critical functions resume swiftly.
    - **BCP**: "The playbook for keeping the business open during disruptions."
  - **Incident response/disaster recovery documentation**: A detailed guide for handling security incidents and data breaches. It describes roles and responsibilities, escalation procedures, forensic analysis methods, and disaster recovery steps to restore systems and data swiftly.
    - **IRDR**: "The manual for responding to security threats and recovering from disasters."
  - **A tabletop exercise**: practical and interactive approach to simulate various disaster scenarios, allowing individuals to discuss and practice their roles and responsibilities during an incident. It tests the BCP and IRDR, identifies weaknesses, and improves response capability through simulated decision-making and communication.
    - **Tabletop Exercise**: "Playing out a crisis to make sure everyone knows their roles."
  - **A root cause analysis**: An in-depth investigation to identify the underlying cause of an incident or problem. It involves gathering evidence, analyzing data, and tracing the root cause through a logical sequence of events. RCA helps prevent similar incidents and improve overall performance.
    - **Root Cause Analysis**: "Figuring out the real reason behind a problem to stop it from happening again."
    -
- Describe Thin Provisioning, Thick Provisioning, Deduplication, SDS, iSCSI Storage, SAN, NAS, Object, Tenants, Buckets?
  - **Thin Provisioning**: **Allocates storage dynamically based on actual usage**, minimizing upfront costs.
  - **Thick Provisioning**: **Allocates all storage space upfront, ensuring consistent performance**.
  - **Deduplication**: Eliminates redundant data copies, replacing the content with pointers.
  - **SDS**: Software-defined Storage. leveraging **software** to **manage storage resources**. SDS resides between the data request and the hardware, abstracting the hardware, allowing storage control of SAN, NAS, or traditional storage.
  - **iSCSI Storage**: Block-level storage protocol for accessing storage over IP networks. Encapsulates SCSI commands over TCP/IP.
  - **SAN**: Storage Area Network. Data is divided into chunks called **blocks**. Block storage is not reliant on a server’s filesystem, and data chunks may be distributed across several storage devices. Block storage organizes the data for the benefit of the data itself (where file storage organizes data for the system’s benefit). Block storage is used with SANs, which can also be **difficult and expensive** to implement.
  - **NAS**: Network Attached Storage. Data is stored as a discrete file, such as a document, a spreadsheet, or an image file. This type of storage is **inexpensive** and useful for relatively small pieces of data.
  - **Objects**: Stores unstructured data as individual objects (think of them as boxes in the warehouse). Each object has a unique identifier for easy access and retrieval. No specific folder hierarchy – objects are flatly stored in a "bucket".
  - **Tenants**: Many organizations have **concerns** regarding data **security** and **privacy** in multi-tenant public cloud infrastructures. One key security factor is the **tenant identifier** that uniquely labels the consumer and helps filter access to resources. Multi-tenancy: allows sharing of storage resources while maintaining data isolation and security.
  - **Buckets**: Buckets are the primary **storage** unit for **data** objects. Virtual containers within object storage systems used to organize and manage large data volumes. Buckets are given a **globally unique name** and location when they are created.
  -
- Describe vLan, vxLAN, Affinity, Anti-Affinity, GENEVE, Micro-Segmentation:
  - **vLAN**: Network at Layer 2 (the data link layer of the OSI model). This is accomplished by tagging data frames with VLAN membership information. Switch isolates the traffic to the appropriate VLAN. Router routes traffic between VLANs. Helps segment network. Ease congestion.
  - **VXLAN**: Improvements over VLAN. 16 million network segments(VLAN 4096). Provides Tunneling services. Better Link aggregation and Layer 3 routing. Greater scalability. Stretching: VXLAN traffic crosses between the local network and the cloud network using a bi-directional tunnel. Traffic mirroring: traffic and be sent to another network for auditing.
  - **Affinity**: Deliberate **grouping** of VM instances on a **single host** for centralized management. Reduces latency. Cons, Creates single point of failure, hard to scale.
  - **Anti-affinity**: deliberately **distributes** VM instances across **multiple hosts** to avoid **single points of failure**. Pros: Scaling, redundancy, failover. Cons: can be more difficult to monitor. slower performance.
  - **GENEVE** Microsoft approach to overcome VLAN limitations. Encapsulate packet to create compatibility with VLAN and Stateless Transfer Tunnel. Usually required across multi-cloud deployments.
  - **Micro-segmentation**: Zero Trust. Dividing a **network** at the **workload**(application) level. Reduced attack surface. Increased containment of security breaches. Increase compliance. Easier management via policies.
  -
- CompTIA Cloud Troubleshooting Methodology?

  - Mnemonic: "**I Do Eat Three Eggs In Virginia IP Daily**"

  1. Identify the problem.
  2. Determine the scope of the problem.
  3. Establish a theory of probable cause, or question the obvious.
  4. Test the theory to determine the cause.
  5. Establish a plan of action.
  6. Implement the solution, or escalate.
  7. Verify full system functionality.
  8. Implement preventive measures.
  9. Perform a root cause analysis.
  10. Document findings, actions, and outcomes throughout the process.

- Describe Security: WAF, vADC, IPS, IDS, DLP, NAC, Packet Brokers, HA Firewalls?
  - **WAF**: web application firewall. Work at Layer 7 to protect web applications from common attacks like cross-site scripting, cross-site forgery, SQL injections and DDoS.
  - **vADC**: Virtual Application Delivery Controller. Load balances traffic across multiple servers and provides additional security features like URL filtering and denial-of-service (DoS) protection. Typically, these devices are placed in a DMZ.
  - **IPS**: Intrusion Protection System. Monitor and Prevent malicious activity. Dynamically blocks the connection and traffic identified as a threat.
  - **IDS**: Intrusion Detection System. **Monitors** network traffic for malicious activity and prevents or **alerts** on detected threats. Passive devices that match network traffic and patterns against known vulnerabilities. Monitor/alert the network environment but do not stop.
  - **DLP**: Data Loss Prevention. Detects/Prevents data exfiltration.
  - **NAC**: Network Access Control. Combine several aspects of security into a single unit. Workstation security (endpoints): anti-virus, anti-spyware, patching, and vulnerability scans. Authentication: single sign-on and multifactor authentication. Network security: firewalls, network IDS, patching, and updated anti-virus definitions.
  - **Packet brokers**: Mirror network traffic to security and monitoring tools for analysis and troubleshooting. Exist between the network infrastructure and infrastructure security tools to gather information and **expose packet** to the appropriate **tools**.
  - **HA Firewalls**: High Availibilty. Two or more firewalls for redundancy with failover.
  -
- Describe: P2V, V2V, SLA, Vendor Lock-in, MOU
  - **P2V**: Physical to virtual. **migrating physical servers** and **applications** to virtual machines (**VMs**) within the cloud, enhancing agility, scalability, and resource management.
  - **V2V**: Virtual to virtual. **Moving VMs** from one cloud **platform to another**.
  - **SLA**: Service-Level Agreement. contract between a customer and a cloud services provider that ensures minimum levels of service quality.
  - **Vendor Lock-In**: Lock-in occurs when the **cost** (whether time, money, or resources) is **too high to switch** from the current CSP to a different desired provider.
    - **Avoiding** dependence on a specific **vendor's proprietary** solutions or APIs is crucial.
    - **Choose cloud-agnostic** technologies and tools to ensure flexibility and portability across platforms, mitigating lock-in risks.
  - **MOU**: Memorandum of Understanding. An agreement outlining the terms and responsibilities of parties in a partnership or collaboration. Informal letter of intent. Does not include monetary penalties.
  -
- Describe Disaster Recovery: Failover, Failback, RTO, RPO, MTTR, Snapshot, 3-2-1 Rule?
  - **Failover**: switch to DR site when primary fails/testing.
  - **Failback**: switch back to primary site after fix/testing.
  - **RTO**: Recovery Time Object. Maximum acceptable **downtime** for **restoring services**.
  - **RPO**: Recovery Point Object. Maximum allowable **data loss** during a system outage.
    - ex.. you backup every 24 hours of data, you have 24 hours max RPO.
  - **MTTR**: Mean Time to Recover. Average time required to **recover** from a **system failure**.
  - **Snapshot**: Replicates the **state** of data at a **specific point in time**, allowing for rollback to that state.
  - **3-2-1**: **Three Copies of Data**: Keep at least three copies of your important data. This includes the original data and two additional copies. **Two** separate forms of media(physical drive and cloud storage). **One** copy off site.
  - d
- Describe Licensing: Socket, Core, Volume, Subscription?
  - **Volume**: licensing is a special type of software licensing setup that uses a single license key to authorize the software on multiple computers. For instance, a company may purchase a software license that allows up to 50 of their employees to use the software at the same time.
  - **Socket**: based license means that a license for each physical socket is bought regardless of how many CPU cores it has. This license gets less expensive as the number of CPU cores per socket increase and load more VMs onto the system.
  - **Core-based**: licensing requires all physical cores in the server to be licensed. Servers are licensed based on the number of processor cores in the physical server.
  - **Per User**: cost per user.
  - **Subscription**: model or the pay-as-you-grow model allows billing for only their use of resources.
