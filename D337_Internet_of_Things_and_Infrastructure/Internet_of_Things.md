# D337 Internet of Things and Infrastructure

## Tips

- <https://www.reddit.com/r/WGU/comments/104eeyh/d337_internet_of_things_iot_and_infrastructure/>
  - I only read through "The Internet of Things : From Data to Insight" and read Chapters 1, 2, 3 and maybe some of 4. The other textbook is a lot of stats and seems like a waste of time.
  - <https://quizlet.com/759979605/d337-internet-of-things-iot-and-infrastructure-flash-cards/?x=1jqt>
  - [The Internet of Things: From Data to Insight](https://ebookcentral.proquest.com/lib/westerngovernors-ebooks/reader.action?docID=6109011&ppg=23)
- <https://www.reddit.com/r/WGUIT/comments/zfm6r6/internet_of_things_iot_and_infrastructure_d337/>
  - I'd say **study the PA extensively** as the OA is very similar with some questions verbatim.
  - Just study the **bolded terms** in the book and the **acronyms**, the other half of the exam is literally common sense.
  - **LowPowerWAN "LPWAN"** there were like 3-6 questions on that alone, make sure you know your **regs** and what they do like **NIST, ICT**, etc.
  - The **most important part of the book was the last 4 chapters**, the ones that talked about IoT in transportation, healthcare, agriculture (specifically the difference between sensors, actuators, etc), and the ethical concerns and standards behind IoT. Those 4 chapters make up at least 50% of the exam.
  - few questions about **botnets** and the **Mirai Malware**.
  - The only thing they really want you to know is that the **malware specifically attacks devices with default credentials**.
  - They hit **Blockchain** pretty hard in the OA too so I'd study up on how a blockchain operates, but if you've taken the Intro to Crypto course before this you will have no problem in that section.
  - <https://quizlet.com/885143305/d337-internet-of-things-and-infrastructure-flash-cards/>
- <https://www.reddit.com/r/WGUIT/comments/1blh3rd/internet_of_things_iot_and_infrastructure_d337/>
- <https://www.reddit.com/r/WGU/comments/18oz6kz/d337_internet_of_things_iot_and_infrastructure/>
  - <https://quizlet.com/759979605/d337-internet-of-things-iot-and-infrastructure-flash-cards/?x=1jqt>
- [The Internet of Things: What Everyone Needs to Know](https://ebookcentral.proquest.com/lib/westerngovernors-ebooks/reader.action?docID=6176638&ppg=32)

## Glossary

- **Access network**
  - part of network which is concerned with moving data to and from a sensor or edge.
- **actuator**
  - a device that converts an electrical signal into a corresponding physical quantity such as movement, force, or sound
- **Application Developers**
  - Produce applications that process the available data within a specific context to produce actionable insight for end users.
- **Customer edge device**
  - receive data from and send commands to IoT devices & provide limited local storage, processing, and networking functions device to a backhaul network.
- **consumer IoT**
  - all the users' networks around their personal and home devices
- **cybersecurity**
  - the practice of protecting information systems, networks, data, and programs from digital attacks
- **cyberspace**
  - a network of hundreds of thousands of interconnected computers, servers, routers, switches, and fiber-optic cables that allow critical infrastructures to work
- **digital**
  - technologies that generate, store, and process data as fixed numbers; binary digits or bits in the form of zeroes and ones
- **DLT**
  - Distributed Ledger Technology: technology underpinning blockchain. Distributed(every node saves a copy of ledger), lack of central authority. Consensus happens with >50%, is trusted decision.
- **edge processing**
  - a process of data aggregation, manipulation, bandwidth reduction, and other logic directly on an IoT sensor or device
- **End Users**
  - Use the information and applications that are made available by other stakeholders.
- **industrial IoT**
  - machines, computers, and people enabling intelligent industrial operations using advanced data analytics for transformational business outcomes
- **information systems**
  - combinations of hardware, software, and networks that are integrated together to collect, process, store, and distribute data
- **Information Providers**
  - Owners of sensor deployments that may share information and data for the general good.
- **internet**
  - a global network of wired and wireless networks
- **IoT ecosystem**
  - a set of stakeholders that participate in the deployment of IoT technology and the relationships between them
- **Internet of Bodies**
  - connected devices that monitor the human body, collect physiological, biometric, or behavioral data, and exchange information over a wireless or hybrid network
- **long-range low-power wide-area network (LP-WAN)**
  - a wireless wide area network technology that interconnects low-bandwidth, battery-powered devices with low bit rates over long ranges and can be delivered through cellular networks.
  - Sigfox or LoRa are LP-WAN devices.
- **OT**
  - Operational Technology
- **Platform Providers**
  - Provide storage and computing infrastructure as well as analytics services which could include artificial intelligence.
- **SC**
  - smart contract: programable contracts stored in blockchain that manage transactions under specific terms and conditions.
- **sensors**
  - devices that respond to inputs from the physical environment and use those inputs for decision-making by displaying the inputs, transmitting them for additional processing, or using them in conjunction with artificial intelligence
- **web**
  - an information space consisting of a number of public resources that are linked together and made accessible via the internet
- **wireless local area network (WLAN)**
  - a group of colocated computers or other devices that form a network based on radio transmissions rather than wired connections
- **wireless personal area network (WPAN)**
  - a network for interconnecting devices centered around an individual person's workspace

## Waves

- **First Wave**
  - Hardware related breakthrough that aimed to connect everyday objects to networks.
- **Second Wave**
  – Development of new sensors and materials as well as communication technologies and protocols
- **Third Wave**

  - Data management processing and analytics as well as security, privacy, and trust

- **Mobile edge computer**
  - MEC, servers that reduce transmission cost and provide fast interactive response in the computation of off-loading resources, focused on data aggregation, data compression, and data transformation.
- **Centralized IoT platform**
  - powerful central storage and processing capability for IoT use cases delivering important capabilities such as data interoperability and uniform data access, management functions.
- **C-PEC**
  - Customer Premises Edge Compute, computing devices installed on the customer’s premises adjacent to their sensors, LAN, or IoT devices.
- **CSP-PEC**
  - Communications Service Provider Premises Edge Compute

## Internet Connectivity

- **Zigbee**
  - can mesh, suitable for short and mid-range.
- **LPWAN**
  - (Low Power Wireless Area Network), lower than 1 GHz, 868 MHz in EU called ISM (Industrial, Scientific, and Medicine) band, USA 915 MHz, several techs hat use this band are Sigfox, LoRaWAN, and Weightless
- **UNB**
  - Ultra-narrow Band systems transmit the signal in a small amount of spectrum, usually less than 1 kHz, and are particularly suitable for small amounts of data.
- **Spread spectrum**
  - the technique in which the signal is transmitted on a bandwidth that is much bigger than the original frequency to decrease interference and increase security.
- **LoRaWAN**
  - based on LoRa protocol from Semtech, uses spread spectrum.
- **Sigfox**
  - named for company that owns it, used in narrowband.
- **Weightless**
  - consists of three protocols, works on 2.4
- **Extended coverage**
  - IoT-optimized GSM network, deployed with software upgrade.
- **Narrow band Internet of Things (NB-IoT or LTE-M2)**
  - designed to lower power consumption, increase system capacity, spectrum efficiency, and range.
- **LTE-M**
  - LTE chips built for IoT, higher throughput and lower battery life than NB-IoT
- **5G enables**
  - **eMBB** – Enhanced Mobile Broadband with higher data rates
  - **URLLC** – ultra-reliable low-latency communication for critical use cases where quality of service and low latency is needed.
  - **mMTC** – Massive Machine Type Communications to support huge number of devices in future.

IoT Runtime Environment – IRE, provides additional functionality beyond the container management level that enables remote management of information flows between multiple IoT applications and external endpoints, allows specific applications to be chained together, enabling data to be transforms, contextualized, and communicated to other systems.
Device management – encompassing the areas of initial device configuration and on-going management.
Secure Runtime Environment – component represents a comprehensive collection of tools that reduce the attack space through measures such as identity access management (IAM), secure boot, device attestation, TPMs, and trusted execution environments (TEEs)
NodeJS – Javascript for servers
Node-RED – built on NodeJS, flow-based development tool meant for IoT.
Protocol adapter – protocol specific module enabling the transformation of incoming sensor data or outgoing actuator commands to a common format.
Information broker – on-board storage module that allows storage of recently received data from sensors or from the cloud or other modules.
Rules Engine – a module to route the incoming data from other modules based on predefined rules.
Use case specific – module that is produced by a developer to perform a specialist function.
Management and Security – module that allows registration of the IoT device to the system and manages modules and configuration, handles security features.
Information provider – collects data from its own sensor deployments and wants to make this available to others under appropriate terms and conditions.
Information consumer – wants to join the data revolution and build a new application that draws on multiple disparate sources of data, wants to identify relevant data, obtain permission to use it, and integrate it into their own development.t
HyperCat – a specification for representing and exposing IoT platform catalogues over Web technologies, uses JSON and URI
DCAT – Data Catalog Vocabulary, a W3C recommendation aimed at facilitating interoperability between data catalogues, specifics a resource description framework (RDF)
Three main aspects of interoperability – discovery, access control, and usage
Discovery – Where information is distributed across many aggregators (IoT platforms), it is necessary to first identify which aggregators contain information of interest and afterwards find specific data sets.
Access control - In the more open environment of the IoT, a provider of information generally does not know all potential consumers of its data. Facilities that allow information providers to retain control over access should therefore be provided by an IoT platform.
Data access - The primary aim of the data access platform is to reduce the technical barriers faced by both providers and consumers of information in which they have a shared interest. This particularly applies to where they have different starting points and thus do not have an existing shared context.
Types Of Data
Sensor data – measurement or query of data, is the initial value required for metadata to be gathered.
Metadata – set of data that describes and presents information about other data. Metadata is a child set of data provided within an initial query of parent data.
Dataset – is a key-value pair of data that is relational to the initial query of data from a sensor.

Four main classes of information in BT Datahub:
Sensor data – values (generally numeric), each with a time and an optional location, which is required for a mobile sensor. For a fixed sensor, location can be regarded as a contextual property of the sensor.
Journeys – represented as geospatial features (e.g., point, line, or polygon) with arbitrary associated properties described in metadata.
Geographical features – represented as geospatial features (e.g., point, line, or polygon) with arbitrary associated properties described in metadata.
Situations – includes an aggregation of sensor-based data and other data, as well as interpretation. It is relevant to a time and some specified locations.

Processing Data
Batch processing – a process that accumulates new data into disjunctive groups and processes them later, which is defined by criteria such as batch size or age.
Stream processing- a process that handles each new piece of data at the time the data is being created, either individually or inside of a rolling window.
Five main operations performed on streaming data: compression, dimensionality reduction, summarization, learning, and visualization.
Compression – set of operations that can be done on the data to reduce the occupied space for storing and/or the required bandwidth for transmitting.
Dimensionality reduction – set of techniques that reduce the number of random variables (or dimensions) under consideration.
Summarization – process of transforming the data in order to provide to the human and machine data consumers a representation that best describes the time series under consideration.
Learning and mining – learning refers to methods that automate model building from recorded data, mining involves using models to extract insights and understand large datasets that are otherwise impossible to analyze.
Visualization – methods that transform the data into a visual representation targeted at a human consumer.

Streaming Data
Two main types of stream data processing systems: first type based on existing relational database principles, second type more suitable for streaming data as they do not enforce a relational view and enable the creation of custom operators that consume and transform data streams and generate new data streams.
Flink is a second-generation stream processing system that utilizes automated scaling.
Lambda architecture supports both stream and batch functionalities, provides both accurate and up to date, near-real-time results.
In Kappa architecture, the batch layer is not present, and all data are processed exclusively as streams.
Stream analytics- is important for sensing what is happening in the radio frequency electromagnetic spectrum, with relatively low-cost sensors.
Spectrum Streamer- is a streaming architecture and an open-source library used to ingest time, frequency, and energy values of data in real time.
Real-time notifications- are detected transmissions that can be used to update spectrum occupancy databases or directly notify other devices that a transmission is happening in a certain channel.
Statistical reporting- references a report delivered by computational statistics of the detected events, primarily targeting human users for report generation.
Custom applications- can be developed to subscribe to the output of the spectrum streamer for report generation.
Organizations
Standards development organizations (SDOs) – organizations that work to formulate health and safety standards.
Industrial Internet Consortium (IIC) – a nonprofit organization created for the promotion of open standards and interoperability for technologies used in industrial and machine-to-machine (M2M) environments, founded by ATT, Cisco, General Electric, Intel, and IBM in 2014 to bring together organizations and technologies to promote best practice for IoT systems.
Alliance for Internet of Things Innovation – initiated by the European Commission in 2015. The objective of the association was to enhance innovation and economic development in the Internet of Things in Europe.
The PETRAS Internet of Things Research Hub is a consortium of nine leading UK universities that work together to explore critical issues in privacy, ethics, trust, reliability, acceptability, and security of the IoT. The SGP team is part of PETRAS.
Internet of Things Security Foundation (IoTSF) – a collaborative, nonprofit, international responses to the complex challenges posed by cybersecurity in the expansive hyper-connected IoT world.
BGP – IoTSF Best Practice Guidelines
National Cybersecurity Center of Excellence (NCCoE) – a U. S. government organization that builds and publicly shares solutions to cybersecurity problems faced by U. S. businesses.
OECD – Organization for Economic Cooperation and Development, an intergovernmental economic organization with 38 member countries, founded in 1961 to stimulate economic progress and world trade.
NICE – National Initiative for Cybersecurity Education, a partnership between government, academia, and the private sector focused on supporting the United States’ ability to address current and future cybersecurity education and workforce challenges through standards and best practices.

Acts / Processes Used by Organizations
Cybersecurity Act is central to the EU’s approach to IoT security. It gives the European Union Agency for Network and Information Security (ENISA) a permanent mandate, a strengthened role, and greater operational resources. It also aims to create a single certification scheme for connected devices, thereby strengthening consumer trust and working toward a single EU digital marketplace.
ISO27005 – the international standard document of a widely agreed general framework for security risk management.
Industrial Internet Reference Architecture (IIRA) – standards-based architectural template and methodology that enables Industrial Internet of Things
BSI Kitemark – recognizable symbols and often binary indicators that can be combined with color coding and/or letters, numbers, etc., to indicate levels of trust, compliance, security, etc.
California Consumer Privacy Act (CCPA) – a state statue intended to enhance privacy rights and consumer protection for residents of California in the United States
Vulnerabilities Equities Process (VEP) – a process used by the U.S. federal government to determine on a case-by-case basis how it should treat zero-day computer security and vulnerabilities.

Blockchain
Distributed Ledger Technology (DLT) – a decentralized database managed by multiple participants across multiple nodes.
Permissionless DLTs – any actor can become a node.
Federated DLT – permissioned DLT shared across more than one organization.
Features of blockchains: Decentralization, Immutability, auditability, fault tolerance and resilience
Benefits of blockchain: trust, resilience, adaptability, fault tolerance, security, complete decentralization

Return on investment (RoI) – a performance measure used to evaluate the efficiency or profitability of an investment or to compare the efficiency of several different investments.
Security operations center (SOC) – a centralized function within an organization employing people, processes, and technology to continuously monitor and improve an organization’s security posture while preventing, detecting, analyzing, and responding to cybersecurity incidents.
Archetype Query Language (AQL) – a declarative query language developed specifically for expressing queries used for searching and retrieving the data found in archetype-based repositories.
Electronic health record (HER) – the electronic, systematized collection of patient and population health information stored in a digital format that can be shared across different healthcare settings.
Laboratory information system (LIS) – a software-based solution with features that support a modern laboratory’s operations.
NoSQL provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations.
Advanced metering infrastructure (AMI) – an integrated system of smart meters, communications networks, and data management systems that enable two-way communication between utilities and customers.
SM – smart meter
IED – intelligent energy device
PMU – phasor measurement unit
VNF – virtual network function
vMCM – virtual machine cloud machine function. Offers digital twin services of the on-field physical assets (physical twin counterpart) such that the latter may be monitored and governed in a device-agnostic manner (i.e., through the digital twin rather than the physical one). Also acts as a local network cache for reported measurements.
vBCP – virtual blockchain processing function. Gateway to blockchain infrastructures, allowing interaction of vBCP service-compliant devices with the blockchain, without necessitating any mining operation on their behalf. Uses vAAA as a means of blockchain-based identity validation.
vAAA – VNF delivering AAA, features two distinct service modes, namely blockchain-based and OAUTH2.0 service.
vMME – virtual mobility management entity responsible for registering devices to the network and advertising their presence on it.
vSON – virtual self-organizing networks enabling multihop and multiprotocol connectivity of IoT devices without direct access to 5g networking.
vTSD – virtual terminal service discovery responsible for effectively handling IoT devices services discovery.
