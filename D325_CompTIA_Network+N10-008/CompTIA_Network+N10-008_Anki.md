# D325 CompTIA Network+ (N10-008)

- 1.0 Networking Fundamentals 24%
- 2.0 Network Implementations 19%
- 3.0 Network Operations 16%
- 4.0 Network Security 19%
- 5.0 Network Troubleshooting 22%
- 720/900=80 // 720 minimum score.

- **Tips**
  - https://www.reddit.com/r/WGU/comments/w7vhpm/networks_c480network_n101008_passed_first_attempt/
  - https://github.com/PacktPublishing/CompTIA-Network-Cert-N10-007-Full-Course-and-Practice-Exam
  - https://packetlife.net/library/cheat-sheets/
  - https://ankiweb.net/shared/info/1542354670
  - osi model
  - 802.11 Wi-Fi
  - Classless Subnetting (CIDR)
  - Ports
  - CompTIA troubleshooting steps
  - Syslog Error levels
- **practice exams**
  - https://wgu.udemy.com/course/comptia-network-008-exams/
  - https://wgu.udemy.com/course/total-comptia-network-n10-008-3-practice-tests-270-qs/

<!-- # 1.0 Networking Fundamentals 24% -->

<!-- ## 1.1 Compare and contrast the Open Systems Interconnection (OSI) model layers and encapsulation concepts -->

## 1.1 Network protocol has what two principal functions

- **Addressing**: Describing where data messages should go. At each layer, there are different rules for how they can send and receive messages.
- **Encapsulation**: how data messages should be packaged for transmission. each node encapsulates and passes down to next level.

## 1.1 PDU

- At each level (except the physical layer), the sending node adds a header to the data payload, forming a “chunk” of data called a protocol data unit (PDU).
- **Packet**: means the same thing as PDU.

## 1.1 OSI model

| Number | Layer        | Description                                                                      |
| ------ | ------------ | -------------------------------------------------------------------------------- |
| 7      | Application  | Http, DNS, FTP, software apps. What you see/interact with.                       |
| 6      | Presentation | (de)(en)cryption(TLS). (de)(en)code. ex.. jpg, mp4...                            |
| 5      | Session      | Establish,Manage,Terminate. (Request, Response, Auth, VPN)                       |
| 4      | Transport    | Segment/reassemble data. Host-to-Host. Port. Reliable data delivery (TCP/UDP).   |
| 3      | Network      | Packet(datagram). Router, hop-to-hop. layer3 switch. icmp. Logical IP Addressing |
| 2      | Data Link    | Frame. Node-to-Node(MAC). Error detection. switch(WAP), bridge, NIC.             |
| 1      | Physical     | Bit. hub, repeater, modem, cabling/wifi(Bounded/unbounded media).                |

1. physical: transceiver, repeater, hub, media converter, modem.
   1. transceiver: part of the NIC that sends/receives signals.
   2. repeater: boost signal. fiber optical-electrical-optical (OEO) repeater.
   3. media converter: converts one media type to another. ex.. fiber to ethernet.
   4. modem: analog to digital convertor. ex.. cable coax(analog) to ethernet(digital).
   5. Physical topology: larger networks are divided into **segments**. segment is where all nodes share the same media.
   6. physical interface: cable specs. radio transceiver specs.
   7. Signaling: transmit/receiving encoded data over the network medium. timing synchronization. modulation schemes.
   8. Bounded media refers to the fact that some form of shield, cladding, and/or insulation is employed to bind the signal within the core medium.
2. data link: transfer data between 'logical segment'(data is sent using hardware addressing(MAC)).
   1. bridge: legacy. joins physical network segments. each port is a network interface(NIC). separated collision domains with Hubs. replaced by switches. Radio/Microwaves are unbounded.
   2. Extended Unique Identifier (EUI-48, EUI-64). Similar to MAC address.
3. network:
   1. **datagram**: PDU packaged at the network level.
4. transport: **Post Office layer**. Ports. each segment is tagged with the port number.
   1. advanced firewalls(IDS), layer 3 switches(as load balancers).
   2. allows session multiplexing
5. session:
6. presentation
7. application

## 1.1 Data encapsulation and decapsulation within the OSI model context

- ![osi](./img/osi.PNG)

  - Applications data: 5,6,7 (HTTPS, IMAP, SSH).

## 1.1 Ethernet header

- Ethernet header: layer 2. Frame header and frame trailer (MAC address).

| Name                      | Description                              | Length            |
| ------------------------- | ---------------------------------------- | ----------------- |
| Preamble                  | sync device clocks                       | 7 bytes (56 bits) |
| SFD Start Frame Delimiter | where data actually starts               | 1 bytes (8 bits)  |
| Destination MAC           | Destination MAC                          | 6 bytes (48 bits) |
| Source MAC                | Source MAC                               | 6 bytes (48 bits) |
| EtherType                 | Layer 3 protocol (ipv4 / ipv6) or length | 2 bytes (16 bits) |
| payload                   | layer 3 or higher data                   | 46-1500 bytes     |
| FCS Frame Check Sequence  | (CRC algorithm) check corrupted data     | 4 bytes (32 bits) |

- EtherType value of 1500 or less is length. Greater than 1536 means ipv4/6.
  - ipv4=0x800 (2048 in decimal)
  - ipv6=0x86DD (34525 in decimal)
- CRC (Cyclic Redundancy Check)

## 1.1 Internet Protocol (IP) header

- Internet Protocol (IP) header: layer 3. IP header (IP).

## 1.1 Transmission Control Protocol (TCP)/User Datagram Protocol (UDP) headers

- Transmission Control Protocol (TCP)/User Datagram Protocol (UDP) headers: layer 4. TCP header (TCP/UDP/ Ports).

## 1.1 TCP flags(layer 4. 6 bit)

- SYN: synchronize three way handshake
- URG: precedence over other data
- ACK: acknowledge packet arrived
- PSH: push data to application without buffering
- FIN: last packet from sender
- RST: reset connection

## 1.1 Payload

- Data contained inside the layer 3.
- layer 3(IP). flags in IP header show if payload is fragmented.

## 1.1 Maximum transmission unit (MTU)

- size of data to send through network.
- default is 1500 bytes. (includes IP header, TCP header, Application data).
<!-- - windows: ping -f -l 1472 8.8.8.8 // -f: don't fragment. -l: size bytes=1500.
- linux: ping -D -s 1472 8.8.8.8 -->

## 1.2 Explain the characteristics of network topologies and network types

- **Mesh**
- **Star/hub-and-spoke**
- **Bus**
- **Ring**
- **Hybrid**
- **Network types and characteristics**
  - Peer-to-peer
  - Client-server
  - Local area network (LAN)
  - Metropolitan area network (MAN)
  - Wide area network (WAN)
  - Wireless local area network (WLAN)
  - Personal area network (PAN)
  - Campus area network (CAN)
  - Storage area network (SAN)
  - Software-defined wide area network (SDWAN)
  - Multiprotocol label switching (MPLS)
  - Multipoint generic routing encapsulation (mGRE)
- **Service-related entry point**
  - Demarcation point
  - Smartjack
- **Virtual network concepts**
  - vSwitch
  - Virtual network interface card (vNIC)
  - Network function virtualization (NFV)
  - Hypervisor
- **Provider links**
  - Satellite
  - Digital subscriber line (DSL)
  - Cable
  - Leased line
  - Metro-optical

%

- **Mesh**
  - all nodes connect to each other. No single point of failure in network.
  - redundancy, load balancing, fault-tolerance.
  - WANs, wifi use this topology.
- **Star/hub-and-spoke**
  - Star topology: most common. hub or switch in center.
- **Bus**
  - single line of devices connected together by one shared network cable terminated on each end.
  - coaxial cable, Thinnet.
  - not fault tolerant.
- **Ring**
  - Each node connects to exactly two other nodes. Each device will have a 'ring in' and 'ring out' port.
  - MAN's, WAN's use them.
    - dual-rings, built-in fault tolerance.
      - If line is severed, the two devices on each side of sever will 'see' it and send communication back the other direction till it reaches destination.
- **Hybrid**
  - more than one topology combined together.
- **Network types and characteristics**
  - **Peer-to-peer**
    - Peer-to-Peer (P2P): no designated client-server. Both act as client-server. Bitcoin, Tor, windows 'workgroup'.
    - easy to deploy, low cost.
    - difficult: to secure, administer.
  - **Client-server**
    - distinct client, server. client needs data. server sends data.
    - Pros: performance, administration
    - Cons: cost, complexity
  - **Local area network (LAN)**
    - slower than wifi/ethernet, then probably not communicating over LAN.
  - **Metropolitan area network (MAN)**
    - Metro Ethernet.
  - **Wide area network (WAN)**
    - slower throuput than LAN.
  - **Wireless local area network (WLAN)**
    - 802.11
  - **Personal area network (PAN)**
    - bluetooth, IR, NFC.
    - automobile, headphones.
  - **Campus area network (CAN)**
    - multiple buildings, fiber.
  - **Storage area network (SAN)**
    - NAS: Network Attached Storage. file-level access. must change whole file to make changes.
    - SAN: block-level access. large file can just change one block of data. Efficient read write.
    - dedicated network: high bandwidth needed.

| Network | Max Distance                     |
| ------- | -------------------------------- |
| PAN     | 10'                              |
| LAN     | 300'                             |
| CAN     | 2-3 miles (campus)               |
| MAN     | 25 miles (city)                  |
| WAN     | 3000-4000 miles (no limits)      |
| SAN     | pools of storage used by servers |

- **Software-defined wide area network (SDWAN)**
  - originally had data center, all routes to data went here.
  - virtual WAN. moving apps, database to cloud and having connections to them and your data center.
- **Multiprotocol label switching (MPLS)**
  - labeling packets(label switching) to help make routing decisions.
    - labels pushed onto packets by router, when reach dest, labels are popped off.
- **Multipoint generic routing encapsulation (mGRE)**
  - used in conjunction with MPLS. Used extensively for Dynamic Multipoint VPN (DMVPN).
  - dynamic mesh. VPN tunnel is created dynamically and can directly go to dest.
- **Service-related entry point**
  - **Demarcation point (demarc)**
    - point where internet company ends and your connection to WAN begins(house).
    - if problem on CPE (customer premises equipment) you are responsible.
  - **Smartjack**
    - NIU Network interface unit: can auto determine the demarc.
    - specialized equipment that internet provider can remote troubleshoot network problems.
    - built-in diagnostics.
- **Virtual network concepts**
  - **vSwitch**
    - software switch that has same functionality as real switch.
  - **Virtual network interface card (vNIC)**
    - multiple interfaces managed by hypervisor.
  - **Network function virtualization (NFV)**
    - replace physical network with virtual one.
    - managed by hypervisor.
  - **Hypervisor**
    - VMM Virtual Machine Manager.
    - divides physical server hardware into virtual hardware. Guest operating systems.
- **Provider links**
  - **Satellite**
    - non terrestrial communication
    - latency 250ms each way. low orbit 20-30ms.
    - line of sight. problems with rain, snow.
  - **Digital subscriber line (DSL)**
    - copper wire.
    - Asymmetric DSL. bandwidth different to home then from
  - **Cable**
    - broadband.
    - modem: DOCSIS (data voer cable servcie interface specification).
  - **Leased line**
  - **Metro-optical**
    - connect organization spread out over the city.
    - low cost lan-to-lan connectivity in a metro area.

## 1.3 Summarize the types of cables and connectors and explain which is the appropriate type for a solution

- **Copper**
  - Twisted pair
    - Cat 5
    - Cat 5e
    - Cat 6
    - Cat 6a
    - Cat 7
    - Cat 8
  - Coaxial/RG-6
  - Twinaxial
  - **Termination standards**
    - TIA/EIA-568A
    - TIA/EIA-568B
- **Fiber**
  - Single-mode
  - Multimode
- **Connector types**
  - **Local connector (LC), straight tip (ST), subscriber connector (SC), mechanical transfer (MT), registered jack (RJ)**
    - Angled physical contact (APC)
    - Ultra-physical contact (UPC)
  - RJ11
  - RJ45
  - F-type connector
  - Transceivers/media converters
  - **Transceiver type**
    - Small form-factor pluggable (SFP)
    - Enhanced form-factor pluggable (SFP+)
    - Quad small form-factor pluggable (QSFP)
    - Enhanced quad small form-factor pluggable (QSFP+)
- **Cable management**
  - Patch panel/patch bay
  - Fiber distribution panel
  - Punchdown block
    - 66
    - 110
    - Krone
    - Bix
- **Ethernet standards**
  - **Copper**
    - 10BASE-T
    - 100BASE-TX
    - 1000BASE-T
    - 10GBASE-T
    - 40GBASE-T
  - **Fiber**
    - 100BASE-FX
    - 100BASE-SX
    - 1000BASE-SX
    - 1000BASE-LX
    - 10GBASE-SR
    - 10GBASE-LR
    - Coarse wavelength division multiplexing (CWDM)
    - Dense wavelength division multiplexing (DWDM)
    - Bidirectional wavelength division multiplexing (WDM)

%

- **Copper**
  - **Twisted pair**
    - Tx+ Tx- are twisted together.
    - Cat 5
    - Cat 5e
    - Cat 6
    - Cat 6a
    - Cat 7
    - Cat 8
  - **Coaxial/RG-6**
    - single conductor
  - **Twinaxial**
    - twin cables, similar as coax. 10G ethernet, full-duplex, low cost, low latency.
  - **Termination standards**
    - **TIA/EIA-568A**
      - T-568A: 1:Green/White, 2:Green, 3:Orange/White, 4:Blue, 5:Blue/White, 6:Orange, 7:Brown/White, 8:Brown
    - **TIA/EIA-568B**
      - T-568B: 1:Orange/White, 2:Orange, 3:Green/White, 4:Blue, 5:BlueS, 6:Green, 7:Brown/White, 8:Brown.
- **Fiber**
  - immune to emf and radio frequency.
  - led or laser.
  - **Single-mode**
  - **Multimode**

| SMF yellow                           | MMF orange                           |
| ------------------------------------ | ------------------------------------ |
| Smaller core (10 micron)             | Larger core (50-100 microns)         |
| Longer distance (100km)              | Shorter distance (2 km or less)      |
| Longer wavelength (higher bandwidth) | Shorter wavelength (lower bandwidth) |
| Laser                                | LED                                  |
| More Expensive                       | Less Expensive                       |

- **Connector types**
  - **Local connector (LC), straight tip (ST), subscriber connector (SC), mechanical transfer (MT), registered jack (RJ)**
    - **Angled physical contact (APC)**
      - designed to reduce light reflecting back. better than UPC. returned light is angled up out of connector.
    - **Ultra-physical contact (UPC)**
      - straight connector. small amount of light is reflected back.
  - **RJ11**
    - 6 pin only 2 conductors (6P2C).
    - RJ14 uses 6P4C.
  - **RJ45**
    - 8P8C
  - **F-type connector**
    - Coax cable. DOCSIS standard.
  - **Transceivers/media converters**
    - Layer 1. Convert light(fiber) to digital ethernet.
  - **Transceiver type**
    - **Small form-factor pluggable (SFP)**
      - same as media converter, just smaller
      - BiDi (bi-directional transceiver. full duplex).
      - 1G
    - **Enhanced form-factor pluggable (SFP+)**
      - 16G
    - **Quad small form-factor pluggable (QSFP)**
      - 4 times the fiber connections. 4 x 1G
    - **Enhanced quad small form-factor pluggable (QSFP+)**
      - 4 x 10G. Their is also BiDi for these.
- **Cable management**
  - **Patch panel/patch bay**
    - office plug to data closet patch panel. Punchdown block on one side/RJ45 on the other.
  - **Fiber distribution panel**
    - between floors or buildings.
  - **Punchdown block**
    - 66: early type. voice.
    - 110: replaced 66.
    - Krone: europe. same as 110.
    - Bix: GigaBIX better than cat6. looks similar to 110.
- **Ethernet standards**
  - baseband: single frequency. ethernet.
  - broadband: many frequencies.
  - **Copper**
    - 10BASE-T
    - 100BASE-TX
    - 1000BASE-T
    - 10GBASE-T
    - 40GBASE-T

| Ethernet              | Standard                      | Throughput | Distance       |
| --------------------- | ----------------------------- | ---------- | -------------- |
| Cat 3                 | 10BASE-TX (obsolete)          | 10 Mbps    | 100 meters     |
| Cat 5                 | 100BASE-TX (Fast Ethernet)    | 100 Mbps   | 100 meters     |
| Cat 5e                | 1000BASE-T (Gigabit Ethernet) | 1000 Mbps  | 100 meters     |
| Cat 6 or 6 shielded   | 10GBASE-T                     | 10 Gbps    | 55 meters/100m |
| Cat 6a (augmented)    | 10GBASE-T                     | 10 Gbps    | 100 meters     |
| Cat 7 (shielded only) | 10GBASE-T                     | 10 Gbps    | 100 meters     |
| Cat 8 (shielded only) | 40GBASE-T                     | 40 Gbps    | 30 meters      |

- **Fiber**

| Specification                  | Optics | Fiber   | Max Distance               |
| :----------------------------- | :----- | ------- | :------------------------- |
| 100BASE-FX (MMF, FDDI)         | laser  | MMF     | 400m half-duplex, 2km full |
| 100BASE-SX (Short Wavelength)  | led    | MMF     | 300m                       |
| 1000BASE-SX (Short Wavelength) | laser  | MMF     | 275m                       |
| 1000BASE-LX (Long Wavelength)  | laser  | MMF,SMF | 550m to 5km                |
| 10GBASE-SR (Short Range)       |        | MMF     | 33m to 400m                |
| 10GBASE-LR (Long Range)        |        | SMF     | 10 km(SMF)                 |

- **Bidirectional wavelength division multiplexing (WDM)**
  - BiDi. bi-directional communication. full duplex.
  - sends different wavelengths of light(different colors).
  - **Coarse wavelength division multiplexing (CWDM)**
    - 10GBASE-LX4 (4 x 3Gbps at 4 wavelengths)
  - **Dense wavelength division multiplexing (DWDM)**
    - multiplex multiple OC carriers on a single fiber.
    - 160 wavelengths => 1.6 Tbps.

## 1.4 Given a scenario, configure a subnet and use appropriate IP addressing schemes

- **Public vs. private**
  - **RFC1918**
  - **Network address translation (NAT)**
  - **Port address translation (PAT)**
- **IPv4 vs. IPv6**
  - **Automatic Private IP Addressing (APIPA)**
  - **Extended unique identifier (EUI-64)**
  - **Multicast**
  - **Unicast**
  - **Anycast**
  - **Broadcast**
  - **Link local**
  - **Loopback**
  - **Default gateway**
- **IPv4 subnetting**
  - **Classless (variable-length subnet mask)**
  - Explain Professor Messer 7 second subnetting
  - What is network address of 192.168.0.123/29
  - **Classful**
    - A
    - B
    - C
    - D
    - E: reserved address.
  - Classless Inter-Domain Routing (CIDR) notation
- **IPv6 concepts**
  - Tunneling
  - Dual stack
  - Shorthand notation
  - Router advertisement
  - Neighbor Solicitation
  - Stateless address autoconfiguration (SLAAC)
- **Virtual IP (VIP)**
- **Subinterfaces**

%

- **Public vs. private**
  - **RFC1918**
    - IANA(internet assinged numbers authority) provides address blocks to RIR (Regional Internet Registries).
    - RIR assigns smaller blocks to ISP(internet service providers).
    - ISP assigns
  - **Network address translation (NAT)**
    - increase number of logical IP's. router provides NAT.
  - **Port address translation (PAT)**
    - using the port address on local network to track who sent message.
- **IPv4 vs. IPv6**
  - **Automatic Private IP Addressing (APIPA)**
    - if DHCP not found, OS will assign itself an IP. 169.254.1.0-169.254.254.255.
    - first and last 256 address reserved by IETF(Internet Engineering Task Force).
    - can only communicate on local network.
    - computer sends ARP, if no response, computer picks that IP.
  - **Extended unique identifier (EUI-64)**
    - method to automatically configure IPv6 host addresses.
    - MAC split, 16 bits(FFFE) added in middle. MAC(48bits) + 16bits = 64bits.
      - MAC split between OUI(organizationally unique identifier) and NICS(network interface controller-specific).
      - invert the seventh bit of first hex.
      - take ipv6 subnet prefix + EUI-64 = 128 bit IPv6.
  - **Multicast**
    - IPv4 and IPv6 only devices subscribed.
  - **Unicast**
    - one-to-one. one device to another.
  - **Anycast**
    - packets delivered to closest interface. DNS servers respond this way.
  - **Broadcast**
    - one-to-all. broadcast domain. does not leave router. ARP request.
  - **Link local**
    - same as APIPA.
  - **Loopback**
    - 127.0.0.1-127.255.255.254
  - **Default gateway**
    - router
- **IPv4 subnetting**
  - **Classless (variable-length subnet mask)**
    - solved the Class-based network. allows subnetting.
    - allows network administrators to break down an IP address space into subnets of various sizes.

| RFC 1918 Private (Non-Routable) | RANGE                            |
| ------------------------------- | -------------------------------- |
| 0                               | 0.0.0.0 - 0.255.255.255          |
| Loopback                        | 127.0.0.0 - 127.255.255          |
| 10.x.x.x                        | 10.0.0.0 - 10.255.255.255/8      |
| 172.16.x.x                      | 172.16.0.0 - 172.31.255.255/12   |
| 192.168.x.x                     | 192.168.0.0 - 192.168.255.255/16 |
| 169.254.x.x (APIPA)             | 169.254.1.0 - 169.254.254.255/16 |

| CLASS   | STARTING BITS | RANGE                          |
| ------- | ------------- | ------------------------------ |
| Class A | 0             | 1.0.0.0 - 126.255.255.255/8    |
| Class B | 1 0           | 128.0.0.0 - 191.255.255.255/16 |
| Class C | 1 1 0         | 192.0.0.0 - 223.255.255.255/24 |
| Class D | 1 1 1 0       | 224.0.0.0 - 239.255.255.255    |
| Class E | 1 1 1 1       | 240.0.0.0 - 255.255.255.255    |

- **Professor Messer 7 second subnetting**

| 1   | 2   | 3   | 4   | decimal | host-2 | networks |
| --- | --- | --- | --- | ------- | ------ | -------- |
| /1  | /9  | /17 | /25 | 128     | 128    | 2        |
| /2  | /10 | /18 | /26 | 192     | 64     | 4        |
| /3  | /11 | /19 | /27 | 224     | 32     | 8        |
| /4  | /12 | /20 | /28 | 240     | 16     | 16       |
| /5  | /13 | /21 | /29 | 248     | 8      | 32       |
| /6  | /14 | /22 | /30 | 252     | 4      | 64       |
| /7  | /15 | /23 | /31 | 254     | 2      | 128      |
| /8  | /16 | /24 | /32 | 255     | 1      | 256      |

| host | multiples of host up to 256                                                                                      |
| ---- | ---------------------------------------------------------------------------------------------------------------- |
| 128  | 0, 128                                                                                                           |
| 64   | 0, 64, 128, 192                                                                                                  |
| 32   | 0, 32, 64, 96, 128, 160, 192, 224                                                                                |
| 16   | 0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240                                           |
| 8    | 0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200,208,216,224,232,240,248 |

|           | octet | octet | octet | octet | notes                   |
| --------- | ----- | ----- | ----- | ----- | ----------------------- |
| address   | 192   | 168   | 0     | 123   | /29 mask.               |
| mask      | 255   | 255   | 255   | 248   | 255 bring down octet    |
| network   | 192   | 168   | 0     | 120   | if zero bring down zero |
| broadcast | 192   | 168   | 0     | 127   | if zero bring down 255. |

- **Classful**
  - A: 0-127
  - B: 128-191
  - C: 192-223
  - D: multicast 224-239
  - E: reserved address. 240-255
- **Classless Inter-Domain Routing (CIDR) notation**
  - CIDR was introduced 1993 to slow the usage of IPv4 address exhausting.
  - CIDR addresses use variable length subnet masking (VLSM) to alter the ratio between the network and host address bits in an IP address.
- **IPv6 concepts**
  - 128 bit address. 16 bits as hex, in 8 groups.
  - **Tunneling**
    - 6to4. tunnel IPv6 over the IPv4 network.
    - 4to6. tunnel IPv4 over the IPv6 network.
  - **Dual stack**
    - device can use IPv4 and IPv6. Each protocol has separate routing table.
  - **Shorthand notation**
    - group of zeros: '::' // can only be one double colon.
    - leading zeros optional.
  - **Router advertisement**
    - RS (router solicitation) and RA (router advertisement). sent out as multicast. router responds with RA.
    - router can also send unsolicited RA.
  - **Neighbor Solicitation (NS)**
    - no broadcast in IPv6. NS sends multicast. All IPv6 devices will answer back NA (neighbor advertisement) with there MAC address.
  - **Stateless address autoconfiguration (SLAAC)**
    - allows a host to assign itself a unique 64-bit IPv6 called EUI-64 (Extended Unique Identifier).
    - 24 bits: OUI (Organizationally Unique Identifier).
    - 24 bits: NIC (Network Interface Card). `FF FE` is added in front of the MAC address.
    - Invert the 7th bit of the first octect of MAC address.
    - IPv6 subnet prefix: 64bits + (MAC(48 bits) + FFFE(16 bits) in the middle) 64 bits = unique IPv6 address.
    - DAD (duplicate address detection). makes sure no duplicate ip on network.
- **Convert MAC to EUI-64**: If first octect(E0) Hex value is 0, then becomes a 2. If(E7) 7, becomes a 5.
- ![seventh bit flip](./img/seventh_bit_flip.PNG)

  | Seventh Bit Flip |
  | :--------------: |
  |       0/1        |
  |       2/3        |
  |                  |
  |       4/5        |
  |       6/7        |
  |                  |
  |       8/9        |
  |       A/B        |
  |                  |
  |       C/D        |
  |       E/F        |

- **Virtual IP (VIP)**
  - logical ip address assigned to virtual machines.
- **Subinterfaces**

## 1.5 Explain common ports and protocols, their application, and encrypted alternatives

| Protocols                                                               | Ports |
| :---------------------------------------------------------------------- | ----- |
| File Transfer Protocol (FTP)                                            |       |
| Secure Shell (SSH)                                                      |       |
| Secure File Transfer Protocol (SFTP)                                    |       |
| Telnet                                                                  |       |
| Simple Mail Transfer Protocol (SMTP)                                    |       |
| Domain Name System (DNS)                                                |       |
| Dynamic Host Configuration Protocol (DHCP)                              |       |
| Trivial File Transfer Protocol (TFTP)                                   |       |
| Hypertext Transfer Protocol (HTTP)                                      |       |
| Post Office Protocol v3 (POP3)                                          |       |
| Network Time Protocol (NTP)                                             |       |
| Internet Message Access Protocol (IMAP)                                 |       |
| Simple Network Management Protocol (SNMP)                               |       |
| Lightweight Directory Access Protocol (LDAP)                            |       |
| Hypertext Transfer Protocol Secure (HTTPS) [Secure Sockets Layer (SSL)] |       |
| HTTPS [Transport Layer Security (TLS)]                                  |       |
| Server Message Block (SMB)                                              |       |
| Syslog                                                                  |       |
| SMTP TLS                                                                |       |
| Lightweight Directory Access Protocol (over SSL) (LDAPS)                |       |
| IMAP over SSL                                                           |       |
| POP3 over SSL                                                           |       |
| Structured Query Language (SQL) Server                                  |       |
| SQLnet                                                                  |       |
| MySQL                                                                   |       |
| Remote Desktop Protocol (RDP)                                           |       |
| Session Initiation Protocol (SIP)                                       |       |

- **IP protocol types**
  - **Internet Control Message Protocol (ICMP)**
  - **TCP**
  - **UDP**
  - **Generic Routing Encapsulation (GRE)**
  - **Internet Protocol Security (IPSec)**
    - Authentication Header (AH)/Encapsulating Security Payload (ESP)
- **Connectionless vs. connection-oriented**

%

| Port      | Name                                                                       | Encryption | TCP/UDP |
| --------- | -------------------------------------------------------------------------- | ---------- | ------- |
| 20        | `FTP-Data`                                                                 | no         | TCP     |
| 21        | `FTP-Control-Connecting`                                                   | no         | TCP     |
| 22        | `SSH & SFTP` (Secure Shell) & SFTP (Secure File Transfer Protocol)         | yes        | TCP     |
| 23        | `Telnet` check open ports and connectivity                                 | no         | TCP     |
| 25        | `SMTP` (Simple Mail Transfer Protocol) sending/outgoing email              | no         | TCP     |
| 53        | `DNS` (Domain Name Service)                                                | no         | TCP/UDP |
| 67/68     | `DHCP` Server/Client listens                                               |            | UDP     |
| 69        | `TFTP` (Trivial File Transfer Protocol)                                    |            | UDP     |
| 80        | `HTTP`                                                                     | no         | TCP     |
| 110       | `POP3` (Post Office Protocol) incoming email.                              | no         | TCP     |
| 123       | `NTP` (Network Time Protocol) Time sync on computer                        |            | UDP     |
| 143       | `IMAP` (Internet Mail Application Protocol) incoming email                 | no         | TCP     |
| 161/162   | `SNMP` (simple network management protocol) manage/monitor,polling         |            | UDP     |
| 389       | `LDAP` (AD, Directory, Replication, Authentication, Group Policy, Trusts.) | no         | TCP     |
| 443       | `HTTPS` SSL(old) TLS(new encryption protocol)                              |            | TCP     |
| 445       | `SMB` (Server Message Block) windows file/printer sharing. CIFS            |            | TCP     |
| 514       | `Syslog`                                                                   |            | UDP     |
| 587       | `SMTP` encrypted outgoing email SSL/TLS (465 was old way, obsolete)        | yes        | TCP     |
| 636       | `LDAP` encrypted                                                           | yes        | TCP     |
| 993       | `IMAP` encrypted incoming email SSL/TLS                                    | yes        | TCP     |
| 995       | `POP3` encrypted incoming email SSL/TLS                                    | yes        | TCP     |
| 1433      | `SQL` Microsoft Structured Query Language                                  |            | TCP     |
| 1521      | `SQLnet` Oracle SQL Net                                                    |            | TCP     |
| 3306      | `MySQL` Open source                                                        |            | TCP     |
| 3389      | `RDP` Remote Desktop Protocol, graphical interface, proprietary microsoft  | RDG y/no   | TCP     |
| 5060/5061 | `SIP` Session Initiation Protocol (VoIP)                                   |            | TCP     |
| 5800      | VCN Virtual Network Computing (Web Interface)                              |            | TCP     |
| 5900      | VCN Virtual Network Computing                                              |            | TCP     |

- **IP protocol types**
  - **Internet Control Message Protocol (ICMP)**
    - another protocol of IP. not used for data transfer. request/reply, send messages.
  - **TCP**
    - layer 4. allows multiplexing(many applications at same time). reliable. flow control.
  - **UDP**
  - **Generic Routing Encapsulation (GRE)**
    - tunnel between endpoints. No encryption.
  - **Internet Protocol Security (IPSec)**
    - secure communication rules to establish secure connections over a network.
    - VPN used to encrypt data. Concentrator is used on each end to encrypt/decrypt data.
    - **Authentication Header (AH)/Encapsulating Security Payload (ESP)**
      - AH: hash of packet to verify integrity.
      - ESP: encrypts packet.
      - tunnel mode: New header added to tunnel packets to hide original sender. header point to the endpoint of tunnel.
      - |tunnel header|AH header|ESP header|original IP header|data|ESP trailer|integrity check value|
- **Connectionless vs. connection-oriented**
- Sockets: combination of ip address, protocol, port number.
- Non-Ephemeral Ports: 0-1023. // well-known port numbers.
- Ephemeral Ports: temporary ports. // 1024-65,535.

## 1.6 Explain the use and purpose of network services

- **DHCP**
  - DHCP Discover
  - DHCP Offer
  - DHCP Request
  - DHCP Acknowledgement
  - **Scope**
    - Exclusion ranges
    - Reservation
    - Dynamic assignment
    - Static assignment
    - Lease time
    - Scope options
    - Available leases
  - **DHCP relay**
  - **IP helper/UDP forwarding**:
- **DNS**
  - **Record types**
    - Address (A vs. AAAA)
    - Canonical name (CNAME)
    - Mail exchange (MX)
    - Start of authority (SOA)
    - Pointer (PTR)
    - Text (TXT)
    - Service (SRV)
    - Name server (NS)
  - **Global hierarchy**
    - Root DNS servers
  - Internal vs. external
  - Zone transfers
  - Authoritative name servers
  - Time to live (TTL)
  - DNS caching
  - Reverse DNS/reverse lookup/forward lookup
  - Recursive lookup/iterative lookup
- **NTP**
  - synchronize devices with master clock.
  - **Stratum**
  - **Clients**
  - **Servers**

%

- **DHCP**
  - automates the assigning: ip, subnet mask, gateway, dns, ntp...
  - **DHCP Discover**: new device sends 0.0.0.0:68(udp) to 255.255.255.255:67(udp) -all nodes gets broadcast message.
  - **DHCP Offer**: DHCP responds will this address work?: 10.10.10.99:67(udp) to 255.255.255.255:68(udp) -all nodes.
  - **DHCP Request**: new client responds look good: 0.0.0.0:68(udp) to 255.255.255.255:67(udp) -all nodes
  - **DHCP Acknowledgement**: DHCP says ok: 10.10.10.99:67(udp) to 255.255.255.255:68(udp) -all nodes
  - **Scope**: configure DHCP server with options.
    - **Exclusion ranges**: do not assign these addresses.
    - **Reservation**: same as static assignment.
    - **Dynamic assignment**: DHCP chooses IP from pool.
    - **Static assignment**: MAC of new device and IP is added to DHCP server. network admin manually configure.
    - **Lease time**: time till ip address renewal.
      - T1 timer: 50% of lease time, renew.
      - T2 timer: 87.5% of lease time, look for another DHCP server.
    - **Scope options**: dns, ip range(pool), excluded ip address, lease duration, default gateway.
    - **Available leases**: IP pool
  - **DHCP relay**: enterprise. access to dhcp server outside domain.
    - new devices ask for DHCP Discover. Router knows no DHCP server on network, so relays to next subnet.
  - **IP helper/UDP forwarding**:
    - IP helper: Cisco IOS. same as DHCP relay.
    - udp forwarding: forward udp packets between network segments. VoIP, streaming, gaming...
- **DNS**
  - translate domain name into ip address.
  - **Record types**
    - **Address (A vs. AAAA)**: FQDN to IPv4/IPv6.
    - **Canonical name (CNAME)**: redirect from one FQDN to another. alias.
    - **Mail exchange (MX)**: where do you send email?
    - **Start of authority (SOA)**: info about domain or zone. ex.. admin eamil, last updated, TTL...
    - **Pointer (PTR)**: allows reverse DNS lookup. IP to FQDN.
    - **Text (TXT)**: DMARC, SPF, DKIM.
    - **Service (SRV)**: points to a specific service on server.
    - **Name server (NS)**: authority of DNS.
  - **Global hierarchy**
    - **Root DNS servers**: 13 globally located. ex.. .com, .org, .net...
  - **Internal vs. external**: local vs internet.
  - **Zone transfers**: secondary DNS for redundancy.
  - **Authoritative name servers**: answer came from DNS authority, not cached.
  - **Time to live (TTL)**: how long cached Domain name is valid.
  - **DNS caching**: does not have to respond back to DNS, has local copy.
  - **Reverse DNS/reverse lookup/forward lookup**
    - forward: query dns with FQDN, DNS provides IP address.
    - reverse: query dns with IP address, DNS provides FQDN.
  - **Recursive lookup/iterative lookup**
    - Recursive: DNS does the lookup.
    - Iterative: client keep asking different NS till you get response.
- **NTP**
  - synchronize devices with master clock.
  - **Stratum**: accuracy of server with atomic clock.
    - stratum 0: atomic clock.
    - stratum 1: primary time server. gets it's time from stratum 0.
  - **Clients**: request time update
  - **Servers**: listen udp/123. responds to ntp request.

## 1.7 Explain basic corporate and datacenter network architecture

- **Three-tiered**
  - Core
  - Distribution/aggregation layer
  - Access/edge
- **Software-defined networking**
  - Application layer/Management plane
  - Control layer/Control Plane
  - Infrastructure layer/Data Plane
- **Spine and leaf**
  - Software-defined network
  - Top-of-rack switching
  - Backbone
- **Traffic flows**
  - North-South
  - East-West
- **Branch office vs. on-premises datacenter vs. colocation**
- **Storage area networks**
  - Connection types
  - Fibre Channel over Ethernet (FCoE)
  - Fibre Channel
  - Internet Small Computer Systems Interface (iSCSI)

%

- **Three-tiered**
  - **Core**: center of network. data servers, web servers. Routers.
  - **Distribution/aggregation layer**: midpoint between core and users. switches.
  - **Access/edge**: users location. the edge. clients.
- **Software-defined networking**
  - **Software-defined network**: virtual networks.
  - **Application layer / Management Plane**:
    - **Application layer**: communication resource requests or information about the network.
    - **Management plane**: monitor traffic conditions, the status of the network, gain insights.
      - cisco communication port for changing settings. SSH, SNMP, NetFlow, and syslog.
  - **Control layer / Control Plane**:
    - **Control layer**: how to route a data packet on the network and to make decisions about how traffic should be prioritized, secured, forwarded.
    - **Control Plane**: manage actions of data plane. ex.. routing table, session table, NAT table.
      - all tables. routing updates, ARP traffic, STP notifications, NTP updates, QoS classification and link reservation requests
  - **Infrastructure layer/Data Plane**:
    - **Infrastructure layer**: the physical networking devices that receive information from the control layer about where to move the data and then perform those movements.
    - **Data Plane**: process packets and frames. ex.. forwarding, trunking, NAT, encrypting. switch ports.
- **Spine and leaf**
  - Typically found in data centers. Designed to address the increasing demands for bandwidth, low latency, add redundancy.
  - Backbone: spine switches wired in mesh topology with all leaf switches.
  - leaf switches connect to data servers.
  - **Top-of-rack switching**: installed at top of server rack. easier to wire(mesh connections) with leaf switches.
- **Traffic flows**
  - **North-South**: traffic leaving/entering network.
  - **East-West**: traffic staying local in network.
- **Branch office vs. on-premises datacenter vs. colocation**
  - Branch office: remote location.
  - on-premises: in-house
  - colocation: share data center with others.
- **Storage area networks**
  - block level access. feels like local harddrive. efficient reading/writing.
  - requires lot of bandwidth.
  - **Connection types**:
  - **Fibre Channel over Ethernet (FCoE)**:
    - fiber to SFP to switch.
  - **Fibre Channel**:
    - high speed network to SAN.
    - need fiber channel switch.
  - **Internet Small Computer Systems Interface (iSCSI)**:
    - iScuzzy. created by IBM, Cisco. RFC standard.
    - remote drive look/acts like local drive. can be managed with software.

## 1.8 Summarize cloud concepts and connectivity options

- **Deployment models**
  - Public
  - Private
  - Hybrid
  - Community
- **Service models**
  - Software as a service (SaaS)
  - Infrastructure as a service (IaaS)
  - Platform as a service (PaaS)
  - Desktop as a service (DaaS)
- **Infrastructure as code**
  - Automation/orchestration
- **Connectivity options**
  - Virtual private network (VPN)
  - Private-direct connection to cloud provider
- **Multitenancy**
- **Elasticity**
- **Scalability**
- **Security implications**

%

- **Deployment models**
  - **Public**: services available over the public internet (AWS, Azure, Google Cloud).
  - **Private**: private access to resources (GovCloud).
  - **Hybrid**: public cloud and private cloud, including on-premises data centers or “edge” locations.
  - **Community**: resources and cost shared by multiple organizations who have a common need.
- **Service models**

| Platform | Cloud Provider Includes                                   |
| -------- | --------------------------------------------------------- |
| IaaS     | hardware + management software                            |
| PaaS     | IaaS + app development environment(java, python, node).   |
| SaaS     | PaaS + complete app. you bring your data                  |
| DaaS     | SaaS + desktop virtualization software(VDI), thin clients |

- **Infrastructure as code**: define all hardware(servers, network, applications) as software.
  - **Automation/orchestration**: build/destroy all instances with automation code.
- **Connectivity options**
  - Virtual private network (VPN)
  - Private-direct connection to cloud provider
- **Multi-Tenancy**: same resource used by multiple organizations (cheaper, less secure).
- **Elasticity**: automatically scale up/down as needed.
- **Scalability**: manually scale up/down as needed.
- **Security implications**:
  - VPN: tunnel to cloud provider infrastructure.
  - VPNG(virtual private cloud gateway): connect user to internet.
  - VPC Endpoint: direct connection to endpoint resources.
  - VM sprawl: two many VM's, can no longer manage.
  - VM escape: VM leaving to OS.

<!-- # 2.0 Network Implementations 19% -->

## 2.1 Compare and contrast various devices, their features, and their appropriate placement on the network

- **Networking devices**
  - Layer 2 switch
  - Layer 3 capable switch
  - Router
  - Hub
  - Access point
  - Bridge
  - Wireless LAN controller
  - Load balancer
  - Proxy server
  - Cable modem
  - DSL modem
  - Repeater
  - Voice gateway
  - Media converter
  - Intrusion prevention system (IPS)/intrusion detection system (IDS) device
  - Firewall
  - VPN headend
- **Networked devices**
  - Voice over Internet Protocol (VoIP) phone
  - Printer
  - Physical access control devices
  - Cameras
  - Heating, ventilation, and air conditioning (HVAC) sensors
  - Internet of Things (IoT)
  - Industrial control systems/supervisory control and data acquisition (SCADA)

%

- **Networking devices**
  - **Layer 2 switch**: layer 2. make forwarding decisions with MAC address. POE.
  - **Layer 3 capable switch**: layer 3. routing decisions.
  - **Router**: layer 3. routing decisions. separates networks.
  - **Hub**: layer 1. repeater. half-duplex. traffic increase, efficiency decrease(collision domain).
  - **Access point**: layer 2. same as bridge. Typically wireless.
  - **Bridge**: layer 2. makes forwarding decisions. separate collision domains. WAP.
  - **Wireless LAN controller**: centralized management of access points. sends policy/configuration to new AP.
  - **Load balancer**: distribute load across servers. fault tolerance. caching. encryption. QoS. content switching.
    - content switching: distributes based on which server can respond to application.
  - **Proxy server**: between user and external network. policy.
  - **Cable modem**: layer 1. broadband(multiple frequencies). frequencies separated by DOCIS.
  - **DSL modem**: layer 1. telephone line. download faster than upload.
  - **Repeater**: layer 1. regenerate signal to boost it.
  - **Voice gateway**: PBX (private branch exchange). Converts: Phone Line(analog) <-> VoIP(digital).
  - **Media converter**: layer 1. fiber to ethernet...
  - **Intrusion prevention system (IPS)/intrusion detection system (IDS) device**:
    - IDS: alerts only. tap.
    - IPS: alerts, blocks. Inline.
  - **Firewall**: layer 3,4. NGFW: layer 3-7(application smart, encryption).
  - **VPN headend**: the conentrator. encrypts/decrypts packets. often inside firewall, can be software.
- **Networked devices**
  - **Voice over Internet Protocol (VoIP) phone**: each device is computer. POE.
  - **Printer**: scanner, fax, ethernet/wifi/usb/bluetooth/infrared.
  - **Physical access control devices**: card reader, biometric: mathmatical representation of body.
  - **Cameras**: CCTV, object detection. ip addressable.
  - **Heating, ventilation, and air conditioning (HVAC) sensors**: integrated into fire system.
  - **Internet of Things (IoT)**: should be segmented network.
    - Refrigerator, Smart speakers, Smart thermostats, Smart doorbells.
  - **Industrial control systems/supervisory control and data acquisition (SCADA)**:
    - large scale systems(industrial). plc, segmented for security.

## 2.2 Compare and contrast routing technologies and bandwidth management concepts

- **Routing**
  - **Dynamic routing protocols**
    - Routing Internet Protocol (RIP)
    - Open Shortest Path First (OSPF)
    - Enhanced Interior Gateway Routing Protocol (EIGRP)
    - Border Gateway Protocol (BGP)
  - Link state vs. distance vector vs. hybrid
  - Static routing
  - Default route
  - Administrative distance
  - Exterior vs. interior
  - Time to live
- **Bandwidth management**
  - Traffic shaping
  - Quality of service (QoS)

%

- **Routing**
  - **Dynamic routing protocols**
    - ![dynamic protocols](./img/dynamic_routing_protocols_overview.PNG)
    - router to router communication.
    - determine best path.
    - **Routing Internet Protocol (RIP)**: distance vector. Max size 15 hops. known as 'routing by rumor'.
      - v1: classful, v2: classless, RIPng: IPv6.
    - **Open Shortest Path First (OSPF)**: link-state.
      - hierarchical(routers are grouped into OSPF areas).
        - **Area border routers**: connect the different areas.
        - AS(autonomous system) border router: connects to internet. ABR's elect backbone(Area 0).
      - LSA: each entry in database(LSDB).
      - LSDB: complete database of topology.
    - **Enhanced Interior Gateway Routing Protocol (EIGRP)**: cisco. distance vector/hybrid(hops + bandwidth + delay).
    - **Border Gateway Protocol (BGP)**: Path Vector. uses EGP. network connects to any external network (ISP, Internet).
  - **Link state vs. distance vector vs. hybrid**:
    - **link state**: router knows the state of every link(interface) on every router. considers bandwidth(speed) of link(cost). scalable.
    - **distance vector**: best route based on hops. only knows direct neighbor. doesn't scale. doesn't factor speed of connection.
    - **hybrid**: combine hops and link speed. BGP(border gateway protocol).
  - **Static routing**: engineer add the route manually.
  - **Default route**:
    - when nothing in routing table matches, send to this ip. 0.0.0.0/0
    - if no default route, ip not found in routing table, drop packet.
  - **Administrative distance**: metric value given to each routing protocol(rip, ospf...). lower number better.
  - **Exterior vs. interior (Gateway Protocols)**:
    - AS: Autonomous Systems. Network under the administrative control of single owner.
    - Exterior: Routing between AS(ISP, Internet). Tuned for stability, security.
    - Interior: Routing within an AS. Tuned for speed and responsiveness.
  - **Time to live**:
- **Bandwidth management**
  - improve the overall network performance, reduce latency, and provide a better user experience.
  - **Traffic shaping**: delay based on content. store lower priority packets till network idle.
  - **Quality of service (QoS)**: priority over other packets(VoIP, video). marked in the packet header.
    - **Control plane**: makes decisions about how traffic should be prioritized and where it should be switched.
    - **Data plane**: handles the actual switching of traffic.
    - **Management plane**: monitors traffic conditions.

## 2.3 Given a scenario, configure and deploy common Ethernet switching features

- Data virtual local area network (VLAN)
- Voice VLAN
- **Port configurations**
  - Port tagging/802.1Q
  - **Port aggregation**
    - Link Aggregation Control Protocol (LACP)
  - Duplex
  - Speed
  - Flow control
  - Port mirroring
  - Port security
  - Jumbo frames
  - Auto-medium-dependent interface crossover (MDI-X)
- Media access control (MAC) address tables
- Power over Ethernet (PoE)/Power over Ethernet plus (PoE+)
- Spanning Tree Protocol
- Carrier-sense multiple access with collision detection (CSMA/CD)

%

- **Data virtual local area network (VLAN)**: logical broadcast domain separation.
- **Voice VLAN**: QoS. use separate vlans. one for voice, other for data.
- **Port configurations**
  - **Port tagging/802.1Q**: trunking. main path between switches all vlans can take.
    - switch adds tag to ethernet header showing what vlan packet is on.
  - **Port bonding/Link aggregation (LAG)**: multiple ports bonded into one to increase bandwidth, then load balanced.
    - **Link Aggregation Control Protocol (LACP)**: manages this protocol. automation.
  - **Duplex**: half/full
  - **Speed**: 10M/100M/1000M/10G
  - **Flow control**: a802.3x. pause frame. slows down. CoS(class of service).
  - **Port mirroring**: copy traffic from one or more ports to another port. Helps observer port traffic.
    - IPS watches traffic
  - **Port security**: prevent unauthorized users from access to network by pluggin in.
  - **Jumbo frames**: layer 2 frame payload bigger than 1500 bytes. up to 9216 bytes. as long as all devices support jumbo frames, this will increase efficiency of traffic.
  - **Auto-medium-dependent interface crossover (MDI-X)**: auto detect for transmit/receive. no crossover cable.

| Device   | Transmit Pins | Receive Pins |
| -------- | ------------- | ------------ |
| PC       | 1,2           | 3,6          |
| Firewall | 1,2           | 3,6          |
| Router   | 1,2           | 3,6          |
| Switch   | 3,6           | 1,2          |

- **Media access control (MAC) address tables**: MAC to port mapping. layer 2 switch.
- **Power over Ethernet (PoE)/Power over Ethernet plus (PoE+)**: power device.
- **Spanning Tree Protocol:**: prevents loops. switches plugged into each other will loop.
  - Blocking: blocks ports a loop could happen.
  - Listening: not forwarding, cleans MAC table.
  - Learning: not forwarding, adding MAC table.
  - Forwarding: full operational.
  - Disabled: admin turned off port.
  - Rapid STP has faster convergence.
- **Carrier-sense multiple access with collision detection (CSMA/CD)**: detects packet collisions, resends packet.

## 2.4 Given a scenario, install and configure the appropriate wireless standards and technologies

- **802.11 standards**
  - a
  - b
  - g
  - n (WiFi 4)
  - ac (WiFi 5)
  - ax (WiFi 6)
- **Frequencies and range**
  - 2.4GHz
  - 5GHz
- **Channels**
  - Regulatory impacts
- **Channel bonding**
- **Service set identifier (SSID)**
  - Basic service set
  - Extended service set
  - Independent basic service set (Ad-hoc)
  - Roaming
- **Antenna types**
  - Omni
  - Directional
- **Encryption standards**
  - WiFi Protected Access (WPA)/WPA2 Personal [Advanced Encryption Standard (AES)/Temporal Key Integrity Protocol (TKIP)]
  - WPA/WPA2 Enterprise (AES/TKIP)
- **Cellular technologies**
  - Code-division multiple access (CDMA)
  - Global System for Mobile Communications (GSM)
  - Long-Term Evolution (LTE)
  - 3G, 4G, 5G
- **Multiple input, multiple output (MIMO) and multi-user MIMO (MU-MIMO)**

%

- **802.11 standards**
  - baby monitors, corless phones, microwaves, bluetooth all operate in the 2.4Ghz range.
  - a
  - b
  - g
  - n (WiFi 4) channel bonding 40Mhz mode 4 antenna.
  - ac (WiFi 5)
  - ax (WiFi 6)

| Standard                | MHz                | Band          | Max Per Stream | Max Throughput                      |
| ----------------------- | ------------------ | ------------- | -------------- | ----------------------------------- |
| 802.11a (1999)          | 20                 | 5GHz          | 54Mbps         | 54Mbps                              |
| 802.11b (1999)          | 22                 | 2.4GHz        | 11Mbps         | 11Mbps                              |
| 802.11g (2003)          | 20                 | 2.4GHz        | 54Mbps         | 54Mbps                              |
| 802.11n (Wifi 4) (2009) | 20,40,80           | 2.4GHz, 5 GHz | 150Mbps        | 600Mbps (4 Streams x MIMO)          |
| 802.11ac (Wifi 5)       | 20,40,80,80+80,160 | 5 GHz         | 867Mbps        | 6.9Gbps (8 x DL, MU-MIMO)           |
| 802.11ax (Wifi 6)       | 20,40,80,80+80,160 | 2.4GHz, 5GHz  | 1201Mbps       | 9.6Gbps (8 x DL/UL, MU-MIMO, OFDMA) |

- **Frequencies and range**
  - 2.4GHz: only has 93Mhz total bandwidth. 3 channels(1,6,11).
    - each channel needs ~25MHz(5MHz \* 5) bandwidth. That's why channel 1,6,11 don't overlap(one channel is 5MHz wide).
    - bonding 2 channels: 40MHz takes 80% of bandwidth. You will have overlap if you have more than one 40MHz on 2.4GHz.
  - 5GHz: ~500MHz total bandwidth. It is not consecutive, but that's why you can bond multiple channels and get larger bandwidth
  - each person that connects, consumes some of the bandwidth. more bandwidth, more people can stream without interruption.
- **Channels**
  - **Regulatory impacts**
- **Channel bonding**: connecting multiple channels to increase bandwidth(pipe size) for better throughput.
- **Service set identifier (SSID)**
  - **Basic service set**: Acts like the MAC address of an AP.
  - **Extended service set**: using the wireless name allows you to move from AP to AP as you walk around the building. When you share a name across multiple AP, your using ESSID.
  - **Independent basic service set (Ad-hoc)**: direct communication between two devices.
  - **Roaming**: moving from one AP to another without interruption.
- **Antenna types**
  - **Omni**: like a bubble, radiates out from all sides, lower signal strength.
  - **Directional**: focused signal. increase distance. 3db doubles signal gain.
    - yagi: directional, high gain.
    - parabolic: highest gain. focus to single point.
- **Encryption standards**
  - **WiFi Protected Access (WPA)/WPA2 Personal [Advanced Encryption Standard (AES)/Temporal Key Integrity Protocol (TKIP)]**

| Best | Name         | Auth Handshake        | Key Bit size | Encryption    |
| ---- | ------------ | --------------------- | ------------ | ------------- |
| 1    | WPA3         | SAE (Dragonfly)       | 256          | AES-GCMP, MIC |
| 2    | WPA2         | PSK (4-way-handshake) | 128          | AES-CCMP, MIC |
| 3    | WPA          | TKIP, 24-bit IV, PSK  | 128          | RC4           |
| 4    | WEP          | obsolete PSK          | 24           |               |
| 5    | Open Network | (no security at all)  | 0            | -             |

- **WPA/WPA2 Enterprise (AES/TKIP)**: use a RADIUS server. Each user has separate username/password.
- **Cellular technologies**
  - **Code-division multiple access (CDMA)**: Cellular technology that uses code division to split up the channel.
  - **Global System for Mobile Communications (GSM)**: Cellular technology that takes the voice during a call and converts it into a digital format. Removable SIM card and most popular around the world.
  - **Long-Term Evolution (LTE)**:
  - **3G, 4G, 5G**:

| Technology   | Frequency     | Transfer Speed     |
| ------------ | ------------- | ------------------ |
| 1G           | 30KHz         | 2Kbps              |
| 2G           | 1800MHz       | 14.4Kbps - 64 Kbps |
| 3G WCDMA     | 1.6 - 2 GHz   | 144Kbps - 2Mbps    |
| 3G HSPA      | 1.6 - 2 GHz   | 14.4Mbps           |
| 3G HSPA+     | 1.6 - 2 GHz   | 50Mbps             |
| 4G LTE       | 2 GHz         | 100Mbps            |
| 4G LTE-A     | 8 GHz         | 1Gbps              |
| 5G Low-band  | 600 - 850 MHz | 30Mbps - 250Mbps   |
| 5G Mid-band  | 2.5 - 3.7 GHz | 100Mbps - 900Mbps  |
| 5G High-band | 25 - 39 GHz   | 10Gbps             |

- **Multiple input, multiple output (MIMO) and multi-user MIMO (MU-MIMO)**
  - **MIMO**: multiple streams send/receive to many devices, but only one device at a time.
    - multiple antenna's on both client and router.
    - TxR:S // Transmit antennna, Receive Antenna, Max streams.
  - **MU-MIMO**: multiple user. stream to multiple devices at the same time.

<!-- # 3.0 Network Operations 16% -->

## 3.1 Given a scenario, use the appropriate statistics and sensors to ensure network availability

- **Performance metrics/sensors**
  - **Device/chassis**
    - Temperature
    - Central processing unit (CPU) usage
    - Memory
  - **Network metrics**
    - Bandwidth
    - Latency
    - Jitter
- **SNMP**
  - Traps
  - Object identifiers (OIDs)
  - Management information bases (MIBs)
- **Network device logs**
  - **Log reviews**
    - Traffic logs
    - Audit logs
    - Syslog
  - Logging levels/severity levels
- **Interface statistics/status**
  - Link state (up/down)
  - Speed/duplex
  - Send/receive traffic
  - Cyclic redundancy checks (CRCs)
  - Protocol packet and byte counts
- **Interface errors or alerts**
  - CRC errors
  - Giants
  - Runts
  - Encapsulation errors
- **Environmental factors and sensors**
  - Temperature
  - Humidity
  - Electrical
  - Flooding
- **Baselines**
- **NetFlow data**
- **Uptime/downtime**

%

- **Performance metrics/sensors**
  - **Device/chassis**
    - **Temperature**: over 120C may have problem. 180C is overheating.
    - **Central processing unit (CPU) usage**: performance of the processors.
    - **Memory**: if you run out, will start using pagefiles(virtual memory).
  - **Network metrics**: snmp, netflow, sflow, ipfix, all will tell you about network stats.
    - **Bandwidth**: how big pipe is.
    - **Latency**: delay between send/receive.
    - **Jitter**: sensitive to delay. voice,video.
- **SNMP**: allows monitor network, interfaces. UDP/161
  - v1: in clear
  - v2: bulk transfers
  - v3: auth, encrypt, integrity.
  - **Traps**: instead of polling to collect info for graphs, can configure device to send alert when OID reaches threshold.
  - **Object identifiers (OIDs)**: database entry(MIB) object being monitored has an OID number. PIDs you can monitor.
    - `1.3.6.1.2.1.11.19.0` // .iso.org.dod.internet.mgmt.mib-2.snmp.snmpOutTraps.0
    - manufacturer can have custom OID.
  - **Management information bases (MIBs)**: each device will have a database that holds performance stats.
- **Network device logs**: traffic flow, summary.
  - **Log reviews**
    - **Traffic logs**: what was on the network. traffic summary.
    - **Audit logs**: AD. events of logging in/out.
    - **Syslog**: standarized process to log system information. Enterprise logs: SIEM(Security Info Event Manager).
  - **Logging levels/severity levels**: mnemonic: Everyone always complains even when nothing is different.
    <!-- - prettier-ignore -->
    0. emergency: System is unusable
    1. alert: Immediate action needed
    2. critical: Critical condition
    3. error: Error condition
    4. warning: Warning condition
    5. notification: Normal but significant condition
    6. informational: Informational message only
    7. debugging: Appears during debugging only
- **Interface statistics/status**: monitor problems with data on network.
  - **Link state (up/down)**: interface is up/down turned off.
  - **Speed/duplex**: should match with other switch to have best throughput.
  - **Send/receive traffic**: runts: frame smaller than 64 bytes. collision has occured.
  - **Cyclic redundancy checks (CRCs)**: frames
  - **Protocol packet and byte counts**:
- **Interface errors or alerts**
  - **CRC errors**: frames corrupted do not match the CRC number. bad: cable, interface.
  - **Giants**: frames larger than 1518 bytes.
  - **Runts**: runts: frame smaller than 64 bytes. collision has occured.
  - **Encapsulation errors**: frame type mismatch. configuration mismatch(ISL vs 802.1Q).
- **Environmental factors and sensors**
  - **Temperature**: constant coolin needed.
  - **Humidity**: constant low humidity
  - **Electrical**: proper voltage
  - **Flooding**: make sure water does not get close to equipment.
- **Baselines**: for graphs. helps you see when something changes.
- **NetFlow data**: gather stats from traffic. add 'tap' to analyze raw traffic. probe and collector(server listening).
- **Uptime/downtime**: status page from network provider to view up/down time.

## 3.2 Explain the purpose of organizational documents and policies

- **Plans and procedures**
  - Change management
  - Incident response plan
  - Disaster recovery plan
  - Business continuity plan
  - System life cycle
  - Standard operating procedures
- **Hardening and security policies**
  - Password policy
  - Acceptable use policy
  - Bring your own device (BYOD) policy
  - Remote access policy
  - Onboarding and offboarding policy
  - Security policy
  - Data loss prevention
- **Common documentation**
  - Physical network diagram
  - Floor plan
  - Rack diagram
  - Intermediate distribution frame (IDF)/main distribution frame (MDF) documentation
  - Logical network diagram
  - Wiring diagram
  - Site survey report
  - Audit and assessment report
  - Baseline configurations
- **Common agreements**
  - Non-disclosure agreement (NDA)
  - Service-level agreement (SLA)
  - Memorandum of understanding (MOU)

%

- **Plans and procedures**
  - **Change management**: upgrade software, change firewall config, modify switch port. Change can break other things. have clear policy.
  - **Incident response plan**: NIST: (1)prep, (2)detect/analyze, (3)contain/eradicate, (4)recovery.
  - **Disaster recovery plan**: many types of disasters. comprehensive. data recovery, recovery location.
  - **Business continuity plan**:
    - COOP: Continuity of operations. alternative plan if system goes down.
  - **System life cycle**: how to dispose of old tech, information. Can it legally be destroyed? dumpster diving?
  - **Standard operating procedures**: process, procedures. who to contact, what to do when disaster occurs. software upgrades.
- **Hardening and security policies**
  - **Password policy**: length of characters(entropy) or time valid.
  - **Acceptable use policy**: company assets, how you use them. dismiss someone, what they did wrong is documented in the AUP.
  - **Bring your own device (BYOD) policy**: device meets company policy. how data is protected. MDM is used to protect data on device.
  - **Remote access policy**: policy on accessing building. includes third-party access. hardware/software required.
  - **Onboarding and offboarding policy**:
    - onboarding: new hires. IT agreements, accounts created. hardware provided.
    - offboarding: pre-planned how leave organizatin. accounts deactivated, hardware returned, data?
  - **Security policy**: policy for the organization. remote access, building security, incident response. constantly change.
  - **Data loss prevention**: watch and blocks sensitive data before gets transferred out of network. credit card numbers, social security numbers, medical records. Allow only if encrypted.
- **Common documentation**
  - **Physical network diagram**: how each device connects to other devices overlaid on floor blueprints.
  - **Floor plan**: where wires are, room plans, patch panel to room code locations.
  - **Rack diagram**: shelving system for patch panels, switches and routers. service tags and port IDs and links. power outlets on the uninterruptible power supply (UPS).
  - **Intermediate distribution frame (IDF)/main distribution frame (MDF) documentation**:
    - distribution frame: cable termination blocks, punch down blocks, patch panels. all transport media: voice,fiber,copper,data.
    - MDF: main distribution frame. main area all wire connections go.
    - IDF: intermediate distribution frame. closest to user. each IDF connects to MDF.
  - **Logical network diagram**: layer 3. vlans, static ip address, net mask, dhcp scope.
  - **Wiring diagram**: labels and codes to areas in buildings.
  - **Site survey report**: wifi spectrum. AP coverage. heat maps.
  - **Audit and assessment report**: are we following rules? self-imposed checks. ex.. verify user accounts, validate permissions. can be done by third party.
  - **Baseline configurations**: allows you see outliers. point of reference. used for planning.
- **Common agreements**
  - **Non-disclosure agreement (NDA)**: Legally enforceable contracts that create a confidential relationship between a person who has sensitive information and a person who will gain access to that information.
  - **Service-level agreement (SLA)**: min terms, uptime, response time. Commonly used between customer and service provider.
  - **Memorandum of understanding (MOU)**: Informal letter of intent. not a signed contract. Defines the responsibilities of each party in an agreement, provides the scope and authority of the agreement, clarifies terms, and outlines compliance issues.

## 3.3 Explain high availability and disaster recovery concepts and summarize which is the best solution

- **Load balancing**
- **Multipathing**
- **Network interface card (NIC) teaming**
- **Redundant hardware/clusters**
  - Switches
  - Routers
  - Firewalls
- **Facilities and infrastructure support**
  - Uninterruptible power supply (UPS)
  - Power distribution units (PDUs)
  - Generator
  - HVAC
  - Fire suppression
- **Redundancy and high availability (HA) concepts**
  - Cold site
  - Warm site
  - Hot site
  - Cloud site
  - **Active-active vs. active-passive**
    - Multiple Internet service providers (ISPs)/diverse paths
    - Virtual Router Redundancy Protocol (VRRP)/First Hop Redundancy Protocol (FHRP)
  - Mean time to repair (MTTR)
  - Mean time between failure (MTBF)
  - Recovery time objective (RTO)
  - Recovery point objective (RPO)

%

- **Load balancing**: multiple servers providing same function. distributes request. fault tolerant, DDos attacks.
  - layer 4: basic load-balancer.
  - layer 7: decisions based on application data request.
- **Multipathing**: more than one physical link to another node. anywhere that link redundancy is required.
  - SAN multipathing: more than one dedicated link to SAN.
  - Multiple ISPs: more than one path to internet.
- **Network interface card (NIC) teaming**: multiple NICs
- **Redundant hardware/clusters**: fault tolerance. backup if something fails. running configs are same as startup configs and backed up.
  - **Switches**: each one of these will cause the system to go down if there is no redundancy. backup config, MAC tables, security settings.
  - **Routers**:
  - **Firewalls**:
- **Facilities and infrastructure support**
  - **Uninterruptible power supply (UPS)**: temporary backup power for powerloss. batteries and inverter.
  - **Power distribution units (PDUs)**: cleans the signal of incoming power. spikes, surges, brownouts.
  - **Generator**: whole building power. cannot be brought online fast enough if powerloss.
  - **HVAC**: prevent overheating by controling temperture and humidity.
  - **Fire suppression**: protect equipment.
    - wet-pipe: water under pressure.
    - dry-pipe: water only flows in freezing area when fire detected.
    - pre-action: whole system only fills with water when triggered.
    - halon: gas-based system. banned. ozone depleting. existing systems grandfathered in.
    - clean agent: alternative to halon. non-toxic.
- **Redundancy and high availability (HA) concepts**: 5 "9's" = 99.99999% uptime.
  - high availablilty: systems always available. automatic switchover.
  - **Cold site**: empty building that will need equipment and data to be installed.
  - **Warm site**: same as hot, but needs data set.
  - **Hot site**: ready to deploy. building in another location with live data set and equipment.
  - **Cloud site**: move processing and data storage. most cost effective.
  - **Active-active vs. active-passive**:
    - active-active: both switches/routers/firewall load balance.
    - active-passive: two switches/routers/firewall sharing same virtual MAC/IP, when one is active, the other is passive.
    - **Multiple Internet service providers (ISPs)/diverse paths**: multiple internet connections.
    - **Virtual Router Redundancy Protocol (VRRP)/First Hop Redundancy Protocol (FHRP)**: default gateway is served by multiple routers. they share virtual ip and virtual MAC.
    - both are the same besides small terminology and VRRP does not need a physical IP assigned.
  - **Mean time to repair (MTTR)**: estimated time to recover from fault.
  - **Mean time between failure (MTBF)**: expected lifetime of product before failure.
  - **Recovery time objective (RTO)**: period following disaster that system may remain offline.
  - **Recovery point objective (RPO)**: amount of data loss a system can sustain, measured in time units.
    - example: virus destoys database. RPO is 24 hours. data can be recovered from backup no more than 24 hours before the infection.

<!-- # 4.0 Network Security 19% -->

## 4.1 Explain common security concepts

- **Confidentiality, integrity, availability (CIA)**
- **Threats**
  - Internal
  - External
- **Vulnerabilities**
  - Common vulnerabilities and exposures (CVE)
  - Zero-day
- **Exploits**
- **Least privilege**
- **Role-based access**
- **Zero Trust**
- **Defense in depth**
  - Network segmentation enforcement
  - Perimeter network [previously known as demilitarized zone (DMZ)]
  - Separation of duties
  - Network access control
  - Honeypot
- **Authentication methods**
  - Multifactor
  - Terminal Access Controller Access-Control System Plus (TACACS+)
  - Single sign-on (SSO)
  - Remote Authentication Dial-in User Service (RADIUS)
  - LDAP
  - Kerberos
  - Local authentication

%

- **Confidentiality, integrity, availability (CIA)**
  - **Confidentiality** means that certain information should only be known to certain people.
    - encryption, access controls, steganography(hiding information in an image).
  - **Integrity** means that the data is stored and transferred as intended and that any modification is authorized.
    - hashing, digital signature, certificates, non-repudiation(data sent by originating person).
  - **Availability** means that information is accessible to those authorized to view or modify it.
    - redundancy, fault tolerance, patching(close security holes).
- **Threats**: potential for someone or something to exploit a vulnerability and breach security.
  - **Internal**: granted permissions on the system. employee,contractor,business partner. zero-trust, least-privilege.
  - **External**: one that has no account or authorized access. malware and/or social engineering. remotely or on-premises.
- **Vulnerabilities**: weakness that could be accidentally triggered or intentionally exploited to cause a security breach.
  - **Common vulnerabilities and exposures (CVE)**: dictionary of vulnerabilities. used to develop test in pentesting.
  - **Zero-day**: vulnerability discovered before developer knows.
- **Exploits**
  - **Least privilege**: user granted sufficient rights to perform job. Authorization creep: user acquires more and more rights.
  - **Role-based access**: rights are assigned by role. Only admin has power to change role rights.
  - **Zero Trust**: continuous authentication and conditional access to mitigate privilege escalation. microsegmentation: applying policies to a single node.
- **Defense in depth**: physical controls(locks), technical controls(firewalls), admin controls(policy).
  - **Network segmentation enforcement**: segmenting the network into clearly defined areas. virtual LANs and subnets. segment is a separate broadcast domain. Any traffic between segments must be routed.
  - **Perimeter network [previously known as demilitarized zone (DMZ)]**:
    - network with two firewalls. also called **screened subnet**.
      - choke firewall: internal firewall to private network
      - edge firewall: external to internet.
  - **Separation of duties**: separates duties and responsibilities against critical systems that could be compromised from insiders(split knowlege).
  - **Network access control**: authenticating endpoints. ethernet ports, wifi AP, VPN's. EAP and RADIUS.
    - **802.1X**: port based access control integrated with EAP.
  - **Honeypot**: trap that attracts attacker. decoy. early warning.
- **Authentication methods**
  - **Multifactor**:
    - two **different** types of credentials.
    - Something you know: password
    - Something you are: fingerprint, eyscan
    - Something you have: yubikey, credit card
    - Something you do: sign name
    - Somewhere you are: location
  - **Terminal Access Controller Access-Control System Plus (TACACS+)**: better for admin credentials.
  - **Single sign-on (SSO)**: password or pin to authenticate.
  - **Remote Authentication Dial-in User Service (RADIUS)**: better for AP authentication for users.
  - **LDAP**: protocol to access X.500 like database.
  - **Kerberos**: used by Active Directory(Microsoft). Authenticate one time, no need to re-authenticate. KDC returns a 'ticket granting ticket'.
  - **Local authentication**: login or logon to gain access to device. passwords stored on local device.

## 4.2 Compare and contrast common types of attacks

- **Technology-based**
  - **Denial-of-service (DoS)/distributed denial-of-service (DDoS)**
    - Botnet/command and control
  - On-path attack (previously known as man-in-the-middle attack)
  - DNS poisoning
  - VLAN hopping
  - ARP spoofing
  - Rogue DHCP
  - Rogue access point (AP)
  - Evil twin
  - Ransomware
  - Password attacks
  - Brute-force
  - Dictionary
  - MAC spoofing
  - IP spoofing
  - Deauthentication
  - Malware
- **Human and environmental**
  - Social engineering
  - Phishing
  - Tailgating
  - Piggybacking
  - Shoulder surfing

%

- **Technology-based**
  - **Denial-of-service (DoS)/distributed denial-of-service (DDoS)**: force service to fail.
    - **Botnet/command and control**: hacker open backdoor(zombie), network between handlers(original infected host) and bots.
    - mitigate with updates and scans. monitor traffic.
  - **On-path attack (previously known as man-in-the-middle attack)**: compromise connection between hosts.
    - mititgate: encryption.
  - **DNS poisoning**: compromise name resolution process. or modify host file.
  - **VLAN hopping**: gain access to unauthorized vlan by double tagging or switch spoofing trunk port.
    - mitigate double tagging by native vlan using different ID to any user accessible vlan.
    - mitigated by not allowing auto-configure trunk ports.
  - **ARP spoofing**: gratuitous ARP with source address that spoofs legitimate host(so they update their APR table with hacker MAC). target is usually default gateway.
  - **Rogue DHCP**: rogue DHCP server on network.
    - mitigate: enable DHCP snooping. Authorize DHCP in Active Directory.
  - **Rogue access point (AP)**: AP installed on network without authorization(backdoor).
    - mitigate: NAC(802.1X) all traffic on network must be authenticated. Zero Trust.
  - **Evil twin**: rogue AP masquerading as legitimate AP. harvest credentials.
    - mitigate with EAP-TLS, WIDS(wireless intrusion detection)
  - **Ransomware**: extort money from victim.
  - **Password attacks**: hacker able to obtain credentials. password in clear.
  - **Brute-force**: every combination.
  - **Dictionary**: list of commonly used passwords.
  - **MAC spoofing**: fake MAC address to circumvent ACL filter.
  - **IP spoofing**: fake IP. Mask origin of attack.
  - **Deauthentication**: forces client off network.
  - **Malware**: malicious software. Generic term for: viruses, ransomware, worms, and trojans.
- **Human and environmental**: obtain information by tricking person.
  - **Social engineering**: trick individual into revealing confidential information.
  - **Phishing**: imatation site. email link.
  - **Tailgating**: authorized person allows unauthorized person to gain access to building.
  - **Piggybacking**: tricking person into allowing you in.
  - **Shoulder surfing**: viewing information over shoulder.

## 4.3 Given a scenario, apply network hardening techniques

- **Best practices**
  - Secure SNMP
  - Router Advertisement (RA) Guard
  - Port security
  - Dynamic ARP inspection
  - Control plane policing
  - Private VLANs
  - Disable unneeded switchports
  - Disable unneeded network services
  - Change default passwords
  - Password complexity/length
  - Enable DHCP snooping
  - Change default VLAN
  - Patch and firmware management
  - Access control list
  - Role-based access
  - **Firewall rules**
    - Explicit deny
    - Implicit deny
- **Wireless security**
  - MAC filtering
  - Antenna placement
  - Power levels
  - Wireless client isolation
  - Guest network isolation
  - Preshared keys (PSKs)
  - EAP
  - Geofencing
  - Captive portal
- **IoT access considerations**

%

- **Best practices**
  - **Secure SNMP**: monitor switches. use v3.
  - **Router Advertisement (RA) Guard**: IPV6 Neighbor Discovery. attacker could pretend to be router.
  - **Port security**: individual switch ports to allow only a specified number of source MAC addresses to communicate.
  - **Dynamic ARP inspection**: stops ARP posioning. switch creates it own table, if something odd happens, switch drops packet.
  - **Control plane policing**: QoS traffic has to be processed. Malware masquerading as QoS can create a DoS.
    - mitigate: policy that uses ACL to allow/deny types of QoS traffic.
    - block non-management traffic that is tagged QoS.
  - **Private VLANs**: port isolation: limit or prevent device to device communication.
  - **Disable unneeded switchports**: prevent gaining access to network. 802.1X(EAP,RADIUS).
  - **Disable unneeded network services**: every service on network needs an open port. close all ports except required ports.
    - control with NGFW. remove any unknown services.
    - scan for open ports with nmap.
  - **Change default passwords**: default passwords are well known.
  - **Password complexity/length**: increase entropy. uppper/lower/special chars. more than 8 chars.
  - **Enable DHCP snooping**: add additional security to prevent rogue DHCP from network. filters out invalid ip.
  - **Change default VLAN**: by default all ports assigned access(not trunk) will be assigned to the single default vlan. This makes it easier for attackers to know what vlan to target.
    - separate management traffic.
    - honeypot default vlan.
  - **Patch and firmware management**: update to fix security patches. always have a rollback plan, backup binaries.
  - **Access control list**: allow/deny traffic based on tuples(grouping of categories: source ip, dest ip, port).
  - **Role-based access**: least privilege. assign role, roles come preconfigured with necessary access.
  - **Firewall rules**: allow/deny traffic. firewall will log any rule match. adding explicit deny: any | deny, will log all traffic denied.
    - **Explicit deny**: if match deny.
    - **Implicit deny**: if nothing matches, drop.
- **Wireless security**:
  - **MAC filtering**: limit access by matching MAC address. easily defeated.
  - **Antenna placement**: focus coverage on needed areas. limit access outside building. adjust power levels. 802.1X.
  - **Power levels**: not so strong signals reach outside building.
  - **Wireless client isolation**: devices can't communicate with each other. public areas. hotels.
  - **Guest network isolation**: on a subnet. no access to your network.
  - **Preshared keys (PSKs)**:
  - **EAP**: 802.1X format of authentication(about 5 types). Used with RADIUS server.
  - **Geofencing**: only allow device features in a specific area. MDM.
  - **Captive portal**: message that appears when you connect to the network.
- **IoT access considerations**: lights, door locks, smart devices. Security problems. IoT should be on separate network. vlan or guest network.
  - screened subnet(DMZ) is designed to be access from the internet.

## 4.4 Compare and contrast remote access methods and security implications

- **Site-to-site VPN**
- **Client-to-site VPN**
  - Clientless VPN
  - Split tunnel vs. full tunnel
- **Remote desktop connection**
- **Remote desktop gateway**
- **SSH**
- **Virtual network computing (VNC)**
- **Virtual desktop**
- **Authentication and authorization considerations**
- **In-band vs. out-of-band management**

%

- **Site-to-site VPN**: always-on. vpn conentrator on both sides. Concentrator handles encryption, security, typically built into firewall.
- **Client-to-site VPN**: on-demand. client software encrypts/decrypts data to send directly to vpn concentrator.
  - **Clientless VPN**: HTML5 has cryptography API. connect to vpn tunnel without separate application.
  - **Split tunnel vs. full tunnel**:
    - full: all traffic goes through tunnel. traffic from client goes to vpn, then sent to internet.
    - split: some data is sent to vpn tunnel.
- **Remote desktop connection**: windows RDP. share desktop remote location. VNC(virtual network computing): open source.
- **Remote desktop gateway**: typically connect client with virtual desktop through vpn. Encrypts traffic to remote desktop. port 3389(RDP).
- **SSH**: terminal screen encrypted on other computer.
- **Virtual network computing (VNC)**: alternative to RDP(windows). share desktop(remote access). many OS's.
- **Virtual desktop**: VDI(cloud virtual desktop infrastructure). pre built desktop client connects to.
- **Authentication and authorization considerations**: remote access connection occurs through intermediate network. greater opportunity for remote logins to be exploited.
  - restrict access to defined users or groups.
  - restrict access to defined time of day.
  - restrict privileges to part of the network.
  - logging and auditing: logons, attempted logons.
  - latest update/patches.
- **In-band vs. out-of-band management**:
  - in-band: shares traffic with other communications on the "production" network.
  - out-of-band: dedicated port(console.port). management access is on separate network. more secure.

## 4.5 Explain the importance of physical security

- **Detection methods**
  - Camera
  - Motion detection
  - Asset tags
  - Tamper detection
- **Prevention methods**
  - Employee training
  - Access control hardware
  - Badge readers
  - Biometrics
  - Locking racks
  - Locking cabinets
  - Access control vestibule (previously known as a mantrap)
  - Smart lockers
- **Asset disposal**
  - Factory reset/wipe configuration
  - Sanitize devices for disposal

%

- **Detection methods**:
  - **Camera**: PTZ(pan-tilt-zoom). replace physical guards. object detection(face, license plate). motion detection(radio,infrared).
    - CCTV connect to multiplexer(coax cable). multiple image on screen. record video.
  - **Motion detection**: microwave radio reflection (similar to radar) or passive infrared (PIR), which detect moving heat sources.
  - **Asset tags**: RFID. detected at entry/exit points.
  - **Tamper detection**: hardware tamperning(identifies if someone removes case.)
- **Prevention methods**
  - **Employee training**: vulerable to social engineering, malware attacks, careless with sensitive data.
    - orgaization security policy.
    - incident reporting procedures.
    - data handling, password management, social engineering, secure use of email, browsing.
  - **Access control hardware**:
  - **Badge readers**: RFID. chip with antenna.
  - **Biometrics**: fingerprint, retina scan, voiceprint. Mathmatical representation.
  - **Locking racks**: hold hardware(router,switch...)
  - **Locking cabinets**: safe storage for individual items(media with cryptographic keys, password list).
  - **Access control vestibule (previously known as a mantrap)**: record who enter/left building. forces only one person at a time. turnstile or enclosed space protected by another gateway.
  - **Smart lockers**: deliveries made to locker. your given code to pick them up.
- **Asset disposal**: make sure legal to dispose of data.
  - **Factory reset/wipe configuration**: switch,router,firewall. deletes all personal information.
  - **Sanitize devices for disposal**: people go through trash. 3 pass wipe(all 0, 1, random).

<!-- # 5.0 Network Troubleshooting 22% -->

## 5.1 Explain the network troubleshooting methodology

- **Identify the problem**
  - Gather information
  - Question users
  - Identify symptoms
  - Determine if anything has changed
  - Duplicate the problem, if possible
  - Approach multiple problems individually
- **Establish a theory of probable cause**
  - Question the obvious
  - Consider multiple approaches
  - Top-to-bottom/bottom-to-top OSI model
  - Divide and conquer
- **Test the theory to determine the cause**
  - If the theory is confirmed, determine the next steps to resolve the problem
  - If the theory is not confirmed, reestablish a new theory or escalate
- **Establish a plan of action to resolve the problem and identify potential effects**
- **Implement the solution or escalate as necessary**
- **Verify full system functionality and, if applicable, implement preventive measures**
- **Document findings, actions, outcomes, and lessons learned**

%

- Mnemonic: "I Eat Three Eggs In Virginia Daily"

1. Identify the problem
2. Establish a theory of probable cause
3. Test the theory to determine the cause
4. Establish a plan of action to resolve the problem and implement the Solution
5. Implement the solution or escalate as necessary
6. Verify full system functionality
7. Document the findings, actions, and outcomes

- **Identify the problem**
  1. **Gather information**: get as many details as possible.
  2. **Question users**: best source of details.
  3. **Identify symptoms**: may be more than single symptom
  4. **Determine if anything has changed**: any work done?
  5. **Duplicate the problem, if possible**:
  6. **Approach multiple problems individually**: break down problem.
- **Establish a theory of probable cause**
  1. Question the obvious
  2. Consider multiple approaches
  3. Top-to-bottom/bottom-to-top OSI model
  4. Divide and conquer
- **Test the theory to determine the cause**
  - If the theory is confirmed, determine the next steps to resolve the problem
  - If the theory is not confirmed, reestablish a new theory or escalate
- **Establish a plan of action to resolve the problem and identify potential effects**
  - minimum of impact to uptime/availability.
  - backup plan
- **Implement the solution or escalate as necessary**
  - try fix. escalate if not enough resources.
- **Verify full system functionality and, if applicable, implement preventive measures**
  - circle back to customer to see if problem fixed.
- **Document findings, actions, outcomes, and lessons learned**

## 5.2 Given a scenario, troubleshoot common cable connectivity issues and select the appropriate tools

- **Specifications and limitations**
  - Throughput
  - Speed
  - Distance
- **Cable considerations**
  - Shielded and unshielded
  - Plenum and riser-rated
- **Cable application**
  - Rollover cable/console cable
  - Crossover cable
  - Power over Ethernet
- **Common issues**
  - Attenuation
  - Interference
  - Decibel (dB) loss
  - Incorrect pinout
  - Bad ports
  - Open/short
  - Light-emitting diode (LED) status indicators
  - Incorrect transceivers
  - Duplexing issues
  - Transmit and receive (TX/RX) reversed
  - Dirty optical cables
- **Common tools**
  - Cable crimper
  - Punchdown tool
  - Tone generator
  - Loopback adapter
  - Optical time-domain reflectometer (OTDR)
  - Multimeter
  - Cable tester
  - Wire map
  - Tap
  - Fusion splicers
  - Spectrum analyzers
  - Snips/cutters
  - Cable stripper
  - Fiber light meter

%

- **Specifications and limitations**
  - **Throughput**: actual data transfer(size of pipe) over time. bps.
  - **Speed**: expected performance of link. bps.
  - **Distance**: Attenuation and noise enforce distance limitations.
- **Cable considerations**
  - **Shielded and unshielded**: -S: braided shielding, -F: foil sheilding, -U: unsheilded(U/UTP).
    - braided sheild around cable, foil around pairs. (S/FTP).
    - foil around cable, unsheilded pairs. (F/UTP)
  - **Plenum and riser-rated**: outter coating(FEP|Low smoke PVC, marked CMP/MMP) is fire/smoke resistant(orange). not flexible.
    - non-plenum: no forced are circulating through.
    - plenum: forced air(supply/return) where wires run.
      - plenty of airflow and no fire breaks make it a fire hazard.
    - riser: passes between floors. similar to plenum, but not as strict.
- **Cable application**
  - **Rollover cable/console cable**:
    - console: DB-9,DB-25. RS-232 signal. management port of router/switch. (9600 baud rate)
    - rollover: yost cable, console cable. 1,8;2,7;3,6;4,5;5,4;6,3;7,2;8,1; 12345678 -> 87654321
  - **Crossover cable**:
    - 568B: 1(o/w),3; 2(o),6; 3(g/w),1; 4(bl),7; 5(bl/w),8; 6(g),2; 7(br/w),4; 8(br),5; 12345678 -> 361-78-245

| Device   | Transmit Pins | Receive Pins |
| -------- | ------------- | ------------ |
| PC       | 1,2           | 3,6          |
| Firewall | 1,2           | 3,6          |
| Router   | 1,2           | 3,6          |
| Switch   | 3,6           | 1,2          |

- **Power over Ethernet**: power supply to device from switch(endspan). Midspan(power from injector).
  - pure copper and bigger conductor will produce less heat(better data rates).
  - Mode A: power on data pairs
  - Mode B: power on spare pairs
  - 4-pair: power on all pairs -common with gigabit ethernet.

| POE RJ-45      | Wattage                                     |
| -------------- | ------------------------------------------- |
| 802.3af (2003) | 15.4w, 350mA, oldest                        |
| 802.3at (2009) | POE+, 25.5w 600mA                           |
| 802.3bt (2018) | POE++, 51w,600mA(Type 3), 73w,960mA(Type 4) |

- **Common issues**
  - **Attenuation**: signal loss over distance(radio wave, light, electrical).
  - **Interference**:
  - **Decibel (dB) loss**: one-tenth of a bel. signal strength(power|magnitude of an electric field). closer to 0 better. -65dBm good signal. -80dBm packet loss.
    - dB loss: poor signal, CRC errors, data corruption. EMI(electromagnetic interference).
    - cable handling: no metal staples. bend radius.
  - **Incorrect pinout**: makes sure wires are made correctly(pinout circuit tester)..
  - **Bad ports**: check interface error report on switch. speed, vlan, duplex match.
  - **Open/short**: poor wiring connector or damaged wires. TDR(time domain reflectometer) tells you how far down wire problem is.
  - **Light-emitting diode (LED) status indicators**: interface status.
    - solid green: no traffic.
    - flickering green: normal
    - no light: port off, interface problem
    - blinking amber: fault (speed/duplex mismatch, excessive collisions, CRC errors).
    - solid amber: port blocked by spanning tree protocol.
  - **Incorrect transceivers**: match fiber type(SMF, MMF). Wavelength match(850nm, 1310nm), Speed(1G, 10G), fiber types(OM1, OM2, OM3, OM4, OM5).
  - **Duplexing issues**:
    - speed: 10/100/1000/auto; less than expected throughput.
    - duplex: half/full/auto; late collision counter increase.
  - **Transmit and receive (TX/RX) reversed**: test with ethernet cable tester. Auto-MDI-X will auto correct. no connectivity.
  - **Dirty optical cables**: connections are not dirty. dust caps on end of connection.
- **Common tools**
  - **Cable crimper**: ethernet RJ-45.
  - **Punchdown tool**: punchdown block. trims wire. tool specific to block type(66,110 block).
  - **Tone generator**: find other end of wire.
  - **Loopback adapter**: check ports. ethernet: 1,3; 2,6; 4,7; 5,8;
  - **Optical time-domain reflectometer (OTDR)**: estimate cable length. identify splice, cable impedance, signal loss, locate breaks. finde layer 1 problems.
  - **Multimeter**: voltage tester.
  - **Cable tester**: opens, correct RJ-45 build.
  - **Wire map**: test each wire with led output.
  - **Tap**: allow see network traffic.
  - **Fusion splicers**: connect fiber together.
  - **Spectrum analyzers**: frequency analyzer.
  - **Snips/cutters**: cut wire.
  - **Cable stripper**: strip outer jacket without harming wire.
  - **Fiber light meter**: shows impedance. measure light on other end.

## 5.3 Given a scenario, use the appropriate network software tools and commands

- **Software tools**
  - WiFi analyzer
  - Protocol analyzer/packet capture
  - Bandwidth speed tester
  - Port scanner
  - iperf
  - NetFlow analyzers
  - Trivial File Transfer Protocol (TFTP) server
  - Terminal emulator
  - IP scanner
- **Command line tool**
  - ping
  - ipconfig/ifconfig/ip
  - nslookup/dig
  - traceroute/tracert
  - arp
  - netstat
  - hostname
  - route
  - telnet
  - tcpdump
  - nmap
- **Basic network platform commands**
  - show interface
  - show config
  - show route

%

- **Software tools**
  - **WiFi analyzer**: 2.4Ghz, 5Ghz spectrum analyzer.
  - **Protocol analyzer/packet capture**: wireshark.
  - **Bandwidth speed tester**: through ISP.
  - **Port scanner**: nmap. open, active ports.
  - **iperf**: do it your self bandwidth speed tester with two local computers.
  - **NetFlow analyzers**: gather traffic stats. probe and collector. 'tap' to see traffic.
  - **Trivial File Transfer Protocol (TFTP) server**: store firmware and file on local system.
  - **Terminal emulator**: putty. ssh client.
  - **IP scanner**: looking for rogue device or who is own local network.
- **Command line tool**
  - **ping**: Determine IP address connectivity and latency in network. (ICMP echo request).
  - **ipconfig/ifconfig/ip**: shows/renew: ip, subnet mask, default gateway. /all adds MAC, DHCP, Lease time.
  - **nslookup/dig**: domain name information. canonical name, ip address, cache timer...
  - **traceroute/tracert**: (unix,Linux,MacOS/Windows) shows router hops and latency to destination.
  - **arp**: show/clear arp(IP to MAC mapping) cache:
  - **netstat**: basic ports information: open, active on a network
  - **hostname**: show pc/server name.
  - **route**: show/configure routing table(Windows).
  - **telnet**: legacy remote terminal. tcp/23. no encryption.
  - **tcpdump**: tcp/ip packet info over the network. sniffer.
  - **nmap**: in-depth information about ports, hosts, services running and current OS.
- **Basic network platform commands**
  - **show interface**: show interface on device: router,switch
  - **show config**: show device configuration file
  - **show route**: view routing table.

## 5.4 Given a scenario, troubleshoot common wireless connectivity issues

- **Specifications and limitations**
  - Throughput
  - Speed
  - Distance
  - Received signal strength indication (RSSI) signal strength
  - Effective isotropic radiated power (EIRP)/power settings
- **Considerations**
  - **Antennas**
    - Placement
    - Type
    - Polarization
  - Channel utilization
  - AP association time
  - Site survey
- **Common issues**
  - **Interference**
    - Channel overlap
  - Antenna cable attenuation/signal loss
  - RF attenuation/signal loss
  - Wrong SSID
  - Incorrect passphrase
  - Encryption protocol mismatch
  - Insufficient wireless coverage
  - Captive portal issues
  - Client disassociation issues

%

- **Specifications and limitations**
  - **Throughput**: amount of data successfully transfered over time.
  - **Speed**: maximum bandwidth
  - **Distance**: strength of signal -65dBm(good), -80dBm(bad)
  - **Received signal strength indication (RSSI) signal strength**: radio signal. dBm. decibel-milliwatt. spectrum analyzer.
  - **Effective isotropic radiated power (EIRP)/power settings**: signal strength.
    - transmit strength + antenna gain - cable loss.
    - 2.4GHz max EIRP +36dBm(4W).
- **Considerations**:
  - **Antennas**
    - **Placement**: higher(better). no signal obstruction.
    - **Type**:
      - omni-directional(like bubble, radiates out).
      - focused signal: yagi, parabolic(greater gain).
    - **Polarization**: orientation relative to surface of earth(flat, vertical). both(transmit,receive) need same polarization.
  - **Channel utilization**: multiple AP in range of each other on same wavelength can cause problems.
  - **AP association time**: access points are configured with different channels so that where BSAs overlap, there is no interference.
  - **Site survey**: look at blueprints. see what would cause interference. AP needs ethernet port and power. wifi analyzer to see all frequencies in area.
    - heap map: software on laptop. walk around building and map signal strength with laptop.
- **Common issues**
  - **Interference**:
    - **Channel overlap**: channel 1,6,11 give you 25MHz bandwidth each channel. 2.4GHz has 90MHz total bandwidth.
  - **Antenna cable attenuation/signal loss**: further from destination, weaker signal. attenuation. dBm.
    - can increase power to send signal further, but client device may not have enough power to send signal back.
    - signal loss can happen in the coax connected to antenna.
  - **RF attenuation/signal loss**:
  - **Wrong SSID**: service set identifier. security concern because no-login connections means everything is in the open.
  - **Incorrect passphrase**: psk(everyone uses same password). enterprise everyone has separate pw. 802.1X has to be trouble-shooted for problems. check communication.
    - legacy device cannot connect to modern enterprise hardware.
  - **Encryption protocol mismatch**:
  - **Insufficient wireless coverage**: place AP at edge and different channels where they overlap.
  - **Captive portal issues**: sent from AP. login/welcome screen.
  - **Client disassociation issues**: DoS attack. deauth attack. sending disassociation frames. wireshark can find them. remove device causing problem or upgrade to 802.11 standard.

## 5.5 Given a scenario, troubleshoot general networking issues

- **Considerations**
  - Device configuration review
  - Routing tables
  - Interface status
  - VLAN assignment
  - Network performance baselines
- **Common issues**
  - Collisions
  - Broadcast storm
  - Duplicate MAC address
  - Duplicate IP address
  - Multicast flooding
  - Asymmetrical routing
  - Switching loops
  - Routing loops
  - Rogue DHCP server
  - DHCP scope exhaustion
  - **IP setting issues**
    - Incorrect gateway
    - Incorrect subnet mask
    - Incorrect IP address
    - Incorrect DNS
  - Missing route
  - Low optical link budget
  - Certificate issues
  - Hardware failure
  - Host-based/network-based firewall settings
  - Blocked services, ports, or addresses
  - Incorrect VLAN
  - DNS issues
  - NTP issues
  - BYOD challenges
  - Licensed feature issues
  - Network performance issues

%

- **Considerations**
  - **Device configuration review**: review configuration before modifying .
  - **Routing tables**: make sure routes to network are good. static routes you can easily create loop. make sure default gateway for traffic not matching routing table.
  - **Interface status**: how interface is configured. speed/duplex mismatch.
  - **VLAN assignment**: incorrect vlan configuration will not be able to communicate on network. access vlan or trunk vlan. make sure port your plugged into is on the correct vlan.
  - **Network performance baselines**: compare for spikes in traffic. troubleshooting problems. collection of data you can view in GUI.
- **Common issues**
  - **Collisions**: half-duplex problems with collision. full-duplex(no collisions). bad hardware.
  - **Broadcast storm**: on same network. to many broadcast can cause performance problems. separate network into small subnets(broadcast domains).
  - **Duplicate MAC address**: burned-in address. on-path attack is a duplicate MAC address. It's rare manufacture create device with duplicate MAC. Take packet capture, should see ARP contention(same MAC, IP keeps changing)
  - **Duplicate IP address**: more common. cause intermittent connectivity. OS detect it, will disable itself. ping network to make sure IP is not in use. If get a response, look at ARP table to see MAC address of device.
  - **Multicast flooding**: one-to-many. switches forward multicast out every port. routers do not. only those that subscribe to multicast address will read packet.
    - IGMP snooping: Internet Group Management Protocol. inteligent descisions about who is subscribed to multicast address. only floods those ports.
  - **Asymmetrical routing**: retrun path(packet) is different from forward path.
    - load balancers or multiple redundant routers/switches. return path has higher latency than forward path.
    - firewalls may drop sessions, if packet left from one firewall and is sent back through different firewall.
    - traceroute to compare per-hop latency.
  - **Switching loops**: solved by Spanning Tree Protocol. traffic gets stuck in a loop between switches. There is no TTL on frames.
  - **Routing loops**: misconfigured routers think each other is best path. packet goes back and forth to each router like a ping pong.
    - traceroute.
  - **Rogue DHCP server**: clients can be assigned duplicate IP(connectivity issues). enable DHCP snooping. authorize DHCP in Active Directory.
    - Disable rogue DHCP, renew IP addresses.
  - **DHCP scope exhaustion**: depleted IP pool addresses. check DHCP server.
    - IPAM(IP address management): monitor and report IP shortages.
    - lower lease time to have more available IP address on network.
  - **IP setting issues**:
    - check device settings: IP address, subnet mask, gateway, dns. Monitor traffic.
    - Not sure what the settings should be: check other devices on network.
    - traceroute ping.
    - **Incorrect gateway**:
    - **Incorrect subnet mask**:
    - **Incorrect IP address**:
    - **Incorrect DNS**:
  - **Missing route**: no destination in routing table, router will discard packet.
    - ICMP host unreachable will show up.
    - ping: check for connectivity. make sure correct routes for both ingress/egress traffic.
  - **Low optical link budget**: block light, no traffic can flow.
    - Attenuation: drop in signal over long distance, dirty connection.
    - check with light meter.
  - **Certificate issues**: something wrong with cert. domain name, expired, signed by recognized authority.
    - on-path attack, problem with server, problem with cert.
  - **Hardware failure**: no response, device could be bad. check lights. power?
  - **Host-based/network-based firewall settings**: filter good traffic. packet capture.
  - **Blocked services, ports, or addresses**: traceroute, packet capture, ping.
  - **Incorrect VLAN**: check settings. wrong vlan port assignment on switch.
  - **DNS issues**: web browser not working. ping works, but can't browse. can reach by ip but not domain name.
    - check dns ip configuration.
    - nslookup, dig.
  - **NTP issues**: kerbos uses timestamps to see how old tickets are. if timestamp wrong, client will not be able to login with correct credentials.
  - **BYOD challenges**: employees own device. difficult to secure.
    - MDM sets policy about what can and cannot be used on device.
  - **Licensed feature issues**: pay for license, you can use feature.
    - When working on lab device, if your features are enabled but in production there not, your settings will fail when you roll out changes to all devices.
  - **Network performance issues**:
    - I/O bus, CPU speed, storage access speed, network throughput.
    - monitor all metrics to find where slow down is occuring.
