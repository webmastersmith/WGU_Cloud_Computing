# CompTIA_Network+N10-008_Ports_Protocols

## 20 & 21

%

FTP (File transfer protocol) For insecure file transfers
Transport Protocol: **TCP** (20 data, 21 connecting)

## FTP (File transfer protocol) For insecure file transfers

%

20 & 21
Transport Protocol: **TCP** (20 data, 21 connecting)

## 22

%

SSH (Secure shell) For remote control configuration SFTP (Secure file transfer protocol) For secure file transfers
Transport Protocol: **TCP**

## SSH (Secure shell) For remote control configuration SFTP (Secure file transfer protocol) For secure file transfers

%

22
Transport Protocol: **TCP**

## 23

%

Telnet For text based remote configuration (insecure)
Transport Protocol: **TCP**

## Telnet For text based remote configuration (insecure)

%

23
Transport Protocol: **TCP**

## 25

%

SMTP (Simple Mail Transfer Protocol) For sending email
Transport Protocol: **TCP**

## SMTP (Simple Mail Transfer Protocol) For sending email

%

25
Transport Protocol: **TCP**

## 53

%

DNS (Domain Name System) Converts domain names to IP addresses and IP addresses to domain names.
Transport Protocol: **UDP** (**TCP** for DNSSEC or IPv6)

## DNS (Domain Name System) Converts domain names to IP addresses and IP addresses to domain names.

%

53
Transport Protocol: **UDP** (**TCP** for DNSSEC or IPv6)

## 67 & 68

%

DHCP (Dynamic Host Control Protocol) Automatically provides network parameters to your clients, such as IP address, subnet mask, default gateway and DNS server.
DHCP is based on the earlier BOOTP protocol which uses well known port numbers for both server and client instead of an ephemeral port.
The server and the client communicate via broadcast and the server broadcasts the offered IP address to the client on UDP port 68.
DHCP Server listens on port 67:UDP and Client listens on port 68:UDP.
Transport Protocol: **UDP**

## DHCP (Dynamic Host Control Protocol) Automatically provides network parameters to your clients, such as IP address, subnet mask, default gateway and DNS server.

%

67 & 68
DHCP Server listens on port 67:UDP and Client listens on port 68:UDP.
Transport Protocol: **UDP**

## 69

%

TFTP (Trivial File Transfer Protocol) Used as a lightweight file transfer method for sending configuration files or booting an operating system via network (PXE).
Transport Protocol: **UDP**

## TFTP (Trivial File Transfer Protocol) Used as a lightweight file transfer method for sending configuration files or booting an operating system via network (PXE).

%

69
Transport Protocol: **UDP**

## 80

%

HTTP (Hypertext Transfer Protocol) Used for insecure web browsing
Transport Protocol: **TCP**

## HTTP (Hypertext Transfer Protocol) Used for insecure web browsing

%

80
Transport Protocol: **TCP**

## 110

%

POP3 (Post Office Protocol) Used for receiving incoming emails (insecure).
Transport Protocol: **TCP**

## POP3 (Post Office Protocol) Used for receiving incoming emails (insecure).

%

110
Transport Protocol: **TCP**

## 123

%

NTP (Network Time Protocol) Used to keep accurate time for clients on a network.
Transport Protocol: **UDP**

## NTP (Network Time Protocol) Used to keep accurate time for clients on a network.

%

123
Transport Protocol: **UDP**

## 137, 139

%

NetBIOS (Network Basic Input/Output System) Used for file or printer sharing in a Windows network.
NetBIOS Port 137 handles authentication. 137:TCP
NetBIOS port 139 file and printer sharing. 139:UDP
Transport Protocol: **TCP, UDP**

## NetBIOS (Network Basic Input/Output System) Used for file or printer sharing in a Windows network.

%

NetBIOS Port 137 handles authentication. 137:TCP
NetBIOS port 139 file and printer sharing. 139:UDP
Transport Protocol: **TCP, UDP**

## 143

%

IMAP (Internet Mail Application Protocol) A newer method for retrieving email which improves upon POP3.
Transport Protocol: **TCP**

## IMAP (Internet Mail Application Protocol) A newer method for retrieving email which improves upon POP3.

%

143
Transport Protocol: **TCP**

## 161 & 162

%

SNMP (Simple Network Management Protocol) Used to collect data about network devices and monitor their status.
SNMP Agent listens on port 161:UDP for SNMP Monitor 'Get' request.
SNMP Manager listens for alerts(SNMP traps) from agent on port 162:UDP.
Transport Protocol: **UDP**

## SNMP (Simple Network Management Protocol) Used to collect data about network devices and monitor their status and SNMP-trap.

%

161 & 162
SNMP Agent listens on port 161:UDP for SNMP Monitor 'Get' request.
SNMP Manager listens for alerts(SNMP traps) from agent on port 162:UDP.
Transport Protocol: **UDP**

## 389

%

LDAP (Lightweight Directory Access Protocol) Used to provide directory services to a network (Active Directory in Windows).
Transport Protocol: **TCP**/**UDP**

## LDAP (Lightweight Directory Access Protocol) Used to provide directory services to a network (Active Directory in Windows).

%

389
Transport Protocol: **TCP**/**UDP**

## 443

%

HTTPS (Hypertext Transfer Protocol Secure) Used for secure web browsing.
Transport Protocol: **TCP**

## HTTPS (Hypertext Transfer Protocol Secure) Used for secure web browsing.

%

443
Transport Protocol: **TCP**

## 445

%

SMB (Server Message Block) Used for file and printer sharing services.
Transport Protocol: **TCP**

## SMB (Server Message Block) Used for file and printer sharing services.

%

445
Transport Protocol: **TCP**

## 514

%

System Logging Protocol (Syslog) Used to send logging data back to a centralised server.
Transport Protocol: **UDP**

## System Logging Protocol (Syslog) Used to send logging data back to a centralised server.

%

514
Transport Protocol: **UDP**

## 546 & 547

%

Clients listen for DHCP messages on UDP port 546.
Servers and relay agents listen for DHCP messages on UDP port 547
Transport Protocol: **UDP**

## DHCPv6 Client & DHCPv6 Server

%

Clients listen for DHCP messages on UDP port 546.
Servers and relay agents listen for DHCP messages on UDP port 547
Transport Protocol: **UDP**

## 587

%

SMTPS TLS (Simple Mail Transfer Protocol, Transport Layer Security) Used to send email securely.
Transport Protocol: **TCP**

## SMTPS TLS (Simple Mail Transfer Protocol, Transport Layer Security) Used to send email securely.

%

587
Transport Protocol: **TCP**

## 636

%

LDAPS (Lightweight Directory Access Protocol Secure) Provides secure directory services.
Transport Protocol: **TCP**

## LDAPS (Lightweight Directory Access Protocol Secure) Provides secure directory services.

%

636
Transport Protocol: **TCP**

## 993

%

IMAPs SSL (Internet Message Access Protocol, Secure Socket Layer) Used to receive email securely.
Transport Protocol: **TCP**

## IMAPs SSL (Internet Message Access Protocol, Secure Socket Layer) Used to receive email securely.

%

993
Transport Protocol: **TCP**

## 995

%

POP3S SSL (Post Office Protocol, Secure Socket Layer) Used to receive email securely.
Transport Protocol: **TCP**

## POP3S SSL (Post Office Protocol, Secure Socket Layer) Used to receive email securely.

%

995
Transport Protocol: **TCP**

## 1433

%

SQL (Structured Query Language Server Protocol) Used for communication from a client to the database server.
Transport Protocol: **TCP**

## SQL (Structured Query Language Server Protocol) Used for communication from a client to the database server.

%

1433
Transport Protocol: **TCP**

## 1521

%

SQLnet Protocol. Used for communication from a client to an Oracle database server.
Transport Protocol: **TCP**

## SQLnet Protocol. Used for communication from a client to an Oracle database server.

%

1521
Transport Protocol: **TCP**

## 3306

%

MySQL Used for communication from a client to a MySQL database server (open source).
Transport Protocol: **TCP**

## MySQL Used for communication from a client to a MySQL database server (open source).

%

3306
Transport Protocol: **TCP**

## 3389

%

RDP (Remote Desktop Protocol) Provides graphical remote control of another client or server.
Transport Protocol: **TCP**

## RDP (Remote Desktop Protocol) Provides graphical remote control of another client or server.

%

3389
Transport Protocol: **TCP**

## 5004 & 5005

%

RTP(Real-Time Protocol) & RTCP(Real-Time Control Protocol)
Video Streaming and Video session monitoring.
Transport Protocol: **UDP**

## RTP(Real-Time Protocol) & RTCP(Real-Time Control Protocol).

%

5004 & 5005
Video Streaming and Video session monitoring.
Transport Protocol: **UDP**

## 5060 & 5061

%

SIP (Session Initiation Protocol) Used to initiate VoIP.
5060:UDP is assigned to clear text SIP(unencrypted).
5061:TCP is assigned to encrypted SIP, also known as SIP-TLS.
Transport Protocol: **UDP/TCP**

## SIP (Session Initiation Protocol) Used to initiate VoIP.

%

5060 & 5061
5060:UDP is assigned to clear text SIP(unencrypted).
5061:TCP is assigned to encrypted SIP, also known as SIP-TLS.
Transport Protocol: **UDP/TCP**
