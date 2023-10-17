# Study

- **Access Control Schemes**:
  - **Attribute-Based Access Control (ABAC)**: Access control based on attributes such as user roles, attributes, and environmental factors.
  - **Role-Based Access Control**: Access control based on user roles and permissions.
  - **Rule-Based Access Control**: Access control based on predefined rules and policies.
  - **MAC (Mandatory Access Control)**: Access control based on security labels and policies.
  - **Discretionary Access Control (DAC)**: Access control where owners of objects control access to them.
  - **Conditional Access**: Access control based on specific conditions or criteria.
  - **Privileged Access Management**: Managing and controlling privileged user access.
  - **Filesystem Permissions**: Permissions governing access to files and directories on a filesystem.
-
- **Order of volatility**
  1. Registers, Cache.
  2. RAM: Routing Table, ARP Cache, Process Table, Kernel Stastics, Memory.
  3. Temporary File Systems.
  4. Disk.
  5. Remote Logging and Monitoring Data that is Relevant to the System in Question.
  6. Physical Configuration, Network Topology.
  7. Archival Media.
-
- **Incident Response Process**: (mnemonic Penguins In Cute Earmuffs Riding Lemons).
  1. Prepare.
  2. Identify.
  3. Contain.
  4. Eradicate.
  5. Recover.
  6. Lessons learned.
-
- **business continuity**: is a plan that ensures a company can maintain core operations without interrupts especially in a event of a crisis. Takes a broader approach, encompassing business processes and personnel.
- **Retention Policy**: determines how long business a record/resource is stored and how to dispose of the record when it is time to do so.
- **Disaster Recovery**: A set of instructions created by an organization on how to respond and recover from unplanned incidents. Generally involving a hardware failure, destruction, etc. Primarily focuses on IT systems and data recovery.
- **Incident Response**: a set of steps a incident response team follows to properly prepare and respond to incidents. Focusing more on processes to recover from incident than what it takes to keep business running.
-
- **Development Lifecycle**
  - Development -> Testing -> Staging -> Production -> Quality Assurance
  - mnemonic: Don't Throw Sausage Pizza Quickly.

## Key Frameworks

- **Center for Internet Security (CIS)**: Provides a set of best practices and guidelines for securing systems and data. CIS Controls and CIS Benchmarks are well-known resources in the cybersecurity community.
- **National Institute of Standards and Technology (NIST) Risk Management Framework (RMF)/Cybersecurity Framework (CSF)**: NIST provides comprehensive guidance on risk management and cybersecurity practices. The NIST CSF is widely adopted as a framework for improving cybersecurity posture.
- **International Organization for Standardization (ISO) 27001/27002/27701/31000**: ISO 27001 is a globally recognized standard for information security management systems (ISMS). ISO 27002 provides guidelines for implementing controls. ISO 27701 extends privacy management to ISO 27001. ISO 31000 is a standard for risk management.
- **SSAE SOC 2 Type I/II**: These are auditing standards developed by the American Institute of CPAs (AICPA) for service organizations to demonstrate their controls and security practices. SOC 2 Type II is more rigorous and involves testing controls over a period.
- **Cloud Security Alliance**: An organization that promotes best practices for secure cloud computing. Their Cloud Control Matrix provides a framework for assessing cloud security.
-
- **Security Controls**
  - **Managerial Controls**: These are controls that focus on managing the organization's security policies, procedures, and compliance efforts. They include activities such as risk assessments, security awareness training, and security policies.
  - **Operational Controls**: These controls are concerned with day-to-day security operations and processes within an organization. They involve tasks like access management, incident response, and monitoring.
  - **Technical Controls**: Technical controls are implemented through technology and systems. They include things like firewalls, intrusion detection systems, encryption, and authentication mechanisms.
-
- **Control Types**:
  - **Preventive Controls**: These controls are designed to prevent security incidents from occurring. They aim to stop or limit potential threats and vulnerabilities. Examples include firewalls and access controls.
  - **Detective Controls**: Detective controls are put in place to identify and detect security incidents when they happen. They help in quickly identifying unauthorized access or unusual activities. Examples include intrusion detection systems and log monitoring.
  - **Corrective Controls**: Corrective controls are activated after a security incident has been detected to mitigate the impact and prevent similar incidents in the future. Examples include patch management and incident response procedures.
  - **Deterrent Controls**: Deterrent controls are meant to discourage potential attackers by making the target less appealing or more difficult to breach. Examples include security cameras and warning signs.
  - **Compensating Controls**: Compensating controls are alternative measures put in place when the primary control is not feasible or effective. They provide an equivalent level of security.
  - **Physical Controls**: Physical controls involve the use of physical security measures to protect assets. This can include measures like biometric access controls, locked doors, and security guards.
-
-
- **Threat Intelligence Sources -Cyber Threat Intelligence**: threat data feeds you subscribe to.
- **Threat Intelligence Sources -Open-Source Intelligence (OSINT)**: Information gathered from publicly available sources, such as websites and social media.
- **Threat Intelligence Sources -Closed/Proprietary**: Exclusive threat intelligence sources typically not accessible to the public.
- **Threat Intelligence Sources -Vulnerability Databases**: Repositories of known software vulnerabilities and associated information.
- **Threat Intelligence Sources -Public/Private Information-Sharing Centers**: Organizations or groups that share threat intelligence among members.
- **Threat Intelligence Sources -Dark Web**: Hidden parts of the internet where cybercriminals trade information and conduct illicit activities.
- **Threat Intelligence Sources -Indicators of Compromise**: Pieces of data indicating a security incident or breach. IoC is evidence of a TTP(tactic, technique, or procedure).
- **Threat Intelligence Sources -Automated Indicator Sharing (AIS)**: A system for sharing standardized threat indicators. Service offered by the Department of Homeland Security (DHS) for companies to participate in threat intelligence sharing.
- **Structured Threat Information eXpression (STIX)**: OASIS framework syntax for sharing CTI.
- **Trusted Automated eXchange of Intelligence Information (TAXII)**: means for transmitting CTI data between servers and clients. sharing threat intelligence.
-
- **Cloud Access Security Broker (CASB)**: security solution that helps organizations secure data and applications in cloud environments. CASBs act as intermediaries between cloud service users and cloud service providers, providing visibility, control, and security features to monitor and protect data as it moves between the organization's network and cloud services. CASBs can aggregate logs and events from various cloud platforms, standardize data formats, and provide a single pane of glass for security analysts to investigate and respond to incidents more efficiently.

## Attack Types

- **SQL injection**: also known as SQLI, is a common attack vector that uses malicious SQL code for backend database manipulation to access information that was not intended to be displayed. The giveaway here is the 1=1 in the query which is essentially creating a condition that will automatically be true.
- **XSS (Cross-Site Scripting) attacks**: a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites.
- **Replay Attack**: a kind of man-in-the-middle attack in which an attacker sniffs messages being sent on a channel to intercept them and resend them under the cloak of authentic messages
- **CSRF (Cross Sit Request Forgery)**: attacks that target functionality that causes a state change on the server, such as changing the victim's email address or password, or purchasing something.

## Agreements

- **Interconnection Security Agreement (ISA)**: Any federal agency interconnecting its IT system to a third party must create an ISA to govern the relationship.
- **Memorandum of Understanding (MOU)**: initialization phase for two companies who plan to work together. Establishes what each company is looking to achieve/get out of the arrangement. It's not a signed contract.
- **Service Level Agreement (SLA)**: terms of agreement by both parties.

## Biometrics

- **False Rejection Rate (FRR)**: reject authorized person.
- **False Approval Rate (FAR)**: approve unauthorized person.
- **Crossover Error Rate (CER)**: point where FRR and FAR meet.
