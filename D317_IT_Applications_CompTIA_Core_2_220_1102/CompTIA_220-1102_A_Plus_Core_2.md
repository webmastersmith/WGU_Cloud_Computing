# CompTIA A+ Core 2 (220-1102)

RFC (Request for Change)

## Backup Strategies

3-2-1; FIFO; Grandfather-father-Son; Tower of Hanoi
%

- **3-2-1 Backup**: there should be at least 3 copies of the data, stored on 2 different types of storage media, and one copy should be kept offsite, in a remote location.
- **FIFO Backup**: A first in, first out (FIFO) backup scheme saves new or modified files onto the "oldest" media in the set. (if 14 drives, then backup depth is 14 days).
- **Grandfather-father-son**: a common rotation scheme for backup media, in which there are three or more backup cycles, such as daily, weekly and monthly.
- **Tower of Hanoi**: keeping only one backup per level. All the outdated backups have to be deleted.

## Backup Methods

Full; Incremental; Differential; Synthetic;
%

- **Full backups**: A complete copy of your data. (GFS). (takes the longest to backup and the least to restore).
- **Incremental backups**: Full backup once. Then only new and changed files. (Least time to backup and the longest to restore, because you have to restore the full backup, then any changes after that).
- **Synthetic**: It starts with a full backup, adds incremental backups, and creates a synthetic full backup periodically from a combination of full backup and incremental backups (stitches all changes into a complete full backup). Synthetic full backups are much faster than full backups.
- **Differential**
  - backups up everything changed file since full backup. ex.. full backup Sunday. Monday all files changed since Sunday. Tuesday all files changed since Sunday.
  - A specialized type of backups popular for database applications like Microsoft SQL but not used frequently otherwise. Differential backups copy only the modified data, not the entire file since the last full backup.

## Data Privacy

Credit Card Transactions; CUI; DMCA; GDPR; HIPAA; IP; PII; PHI;
%

- **Credit Card Transactions** regulated by PCI DSS (Payment Card Data Security Standard).
- **CUI** (Controlled Unclassified Information) information that requires safeguarding or dissemination controls pursuant to and consistent with applicable law, regulations, and government-wide policies but is not classified.
- **DMCA**: Digital Millennium Copyright Act. relates to the takedown, removal, and putback of copyrighted content displayed online.
- **GDPR** General Data Protection Regulation. EU individual rights.
- **HIPAA** (Health Insurance Portability and Accountability Act) healthcare info about a patient.
- **IP** Intellectual property rights (IPR) management.
- **PHI** (Protected Health Information)
- **PII** (Personal Identifiable Information)

## Electrical Power Backups

How do each of these handle: Surges? Spikes? Under-Voltage Events/Brownouts? Blackouts?
Diesel Generator; Line-Conditioner; Surge Protector; UPS;
%

- **Diesel Generator**: long term electrical backup (blackout).
- **Line/Power Conditioners**: high/low power conditions (built in voltage regulators, transient), EMF noise filtering,
- **Power Failure**: no electricity (blackout).
- **Power Surge**: transient voltage (high/low voltage). Protect with line conditioner or UPS.
- **Power Spikes**: spike in voltage. Protect with surge suppressor.
- **Under-Voltage Event**: lower than normal voltage is supplied from the grid (brownouts).
- **UPS**: Uninterruptible Power Supply. Battery backup. Protects from 'transient' voltage problems, can provide power until the generator picks up.

| Protection                           | Surge Protector | Power Conditioner | UPS System |
| ------------------------------------ | --------------- | ----------------- | ---------- |
| Protection Against Surges and Spikes | YES             | YES               | YES        |
| Protection Against Brownouts         | NO              | YES               | YES        |
| EMI/RFI Line Noise Filtering         | YES             | NO                | YES        |
| Voltage Regulation                   | NO              | YES               | YES        |
| Battery Backup Power                 | NO              | NO                | YES        |
| Options for Special Features         | YES             | NO                | YES        |

## Electrical Safety

Static Buildup; ESD Strap; ESD Mat; Antistatic Bag; OSHA;
%

- **Static buildup**: is worse when conditions are dry (low humidity, winter...).
- **ESD Straps**: drain static away from body.
- **ESD Mat**: ground your work area to protect the equipment.
- **Antistatic Bag**: silvery metalic antistatic bags protect electronics while transporting.
- **OSHA** regulates electrical safety.

## Event Viewer

Application Log; Security Log; Setup Log; System Log; Directory Service Log;
%

- The event viewer shows a log of application and system messages, including errors, information messages, and warnings.
- stored in the `%System Root%\System32\Winevt\Logs\` folder and can be opened using the Event Viewer.
- **Application Log**: application errors (application.evtx).
- **Security Log**: audit data, valid/invalid login attempts. Create,Open,Delete files (security.evtx).
- **Setup Log**: events generated during the Windows installation or upgrade process (setup.evtx).
- **System Log**: service load failures, hardware conflicts, driver load failures, and more (system.evtx).
- **Directory Service Log**: Active Directory logs.

## Linux

Permissions for 644?
What is `rxwr-xr--`?
%

Permissions:
1 – can execute
2 – can write
4 – can read
ex.. `rw-r--r--`
ex.. `754 = rwxr-xr-- user:read,execute; group:execute; everyone:read,write,execute`

## MAC

- Partition: APFS or macOS’s older extended file system.
- .pkg: macOS pkg format is used where app setup needs to perform additional actions, such as running a service or writing files to multiple folders.
- In the macOS, when an app has been installed, it is placed in a directory with a .app extension in the Applications folder.
- The macOS disk image (dmg) format is used for simple installs where the package contents just need to be copied to the Applications folder.

## Malware | Virus

Adware; Backdoor/RAT; Crypt-Ransomware; Cryptominer; Keylogger; Logic Bomb; Fileless Malware; Rogue Antivirus; Rootkit; Ransomware; Spyware; Trojan; Worm; Virus;
%

- **Adware**: displays unwanted advertisements on your computer.
- **Backdoor**: (RAT Remote Access Trojan) malware implements some type of backdoor into computer.
- **Boot Sector Virus**: virus attempts to hijack the bootloader process to load itself into memory.
- **Crypt-Ransomeware**: encrypt computer and demand payment.
- **Cryptominers**: hijack resources to mine for cryptocurrency.
- **Keylogger**: USB hardware inline with keyboard or program that sends keystrokes back to malicious actor.
- **Logic Bomb**: triggered when a logical condition is met, such as after a number of transactions have been processed, or on a specific date.
- Malware: often installed in browsers.
  - Redirection: open page but sent to another. Check HOST file.
- **Fileless Malware**: powershell, PDF or javascript, create new malicious process in memory. Can be harder to detect.
- **Rogue Antivirus**: malware pretends to have found virus.
- **Rootkits**: gain root/system privileges and hide itself in boot process.
- **Ransomeware**: to control of computer and demand payment to return.
- **Spyware % Keyloggers**: malware perform browser reconfigurations. Track key strokes.
- **Trojans**: (try to gain control the computer) malware that misleads user of its intent. It tries to captures some important information about a computer system or a computer network or opens a backdoor entry to gain control of your computer.
- **Worm**: standalone malware computer program that replicates itself to spread to other computers. can cross network.
- **Virus**: malicious executable code concealed in an executable file, run with same permissions as process.

## Malware Removal

1. Investigate and verify malware symptoms.
2. Quarantine infected systems.
3. Disable System Restore in Windows.
4. Remediate infected systems:
   1. Update anti-malware software.
   2. Scan and removal techniques (e.g., safe mode, preinstallation environment).
5. Schedule scans and run updates.
6. Enable System Restore and create a restore point in Windows.
7. Educate the end user.

- mnemonic: I question dumb rules so educate everyone.
  - I = Identify and Research Malware Symptoms
  - Q = Quarantine the Infected System
  - D = Disable System Restore in Windows
  - R = Remediate the Infected System
    - a = Update the Antivirus Software
    - b = Scan and Use Removal Techniques (Safe Mode, pre-installation environment)
    - c = enable on-access (scan each file as opened) scans
  - S = Schedule Scans and Run Updates
  - E = Enable System Restore and Create a Restore Point (In WIndows)
  - E = Educate the End User

## Mobile Device Policy

BYOD; COPE; CYOD; MDM;
%

- **BYOD** (Bring Your Own Device Vulnerabilities) provisioning model that allows employees to use personal mobile devices to access corporate systems and data. In this scenario, it is very difficult for the security team to identify secure configuration baselines for each type of device and mobile OS version and even more challenging to ensure compliance with those baselines.
- **COPE** (Corporate-owned, personally enabled): can save personal data to phone.
- **CYOD** (Choose-your-own-device): choose from approved list. Business only.
- **MDM** (Mobile Device Management): management software to force policy on phones.

## Network Design Table

Client-Server; Peer-to-Peer; Hub-and-Spoke; Mesh
%

| Network       | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| Client-Server | Domain Members access central database for login                          |
| Peer-to-Peer  | any windows computers connected using 'workgroup'                         |
| Hub-and-Spoke | Single server that all computers connect to. Not for workgroup or domains |
| Mesh          | No single point of failure in network. Not for workgroup or domains       |

## Network Security

NAT; MDM; UPnP;
%

- **NAT**: map internal address with port to allow one ip out.
- **MDM**: (mobile device managment) managing mobile phones.
- **UPnP**: Programs/Applications can modify router firewall settings to open ports into firewall automatically.

## Network

How to view network from `.bat` script?
How to delete network?
%

```bat
<!-- Display a list of servers on the local network: -->
net view
<!-- View the shares available on server named MYSERVER: -->
net view \\MYSERVER
<!-- Map the DATA folder on MYSERVER to the M: drive: -->
net use M: \\MYSERVER\DATA /persistent:yes
<!-- Remove the M: drive mapping: -->
net use M: /delete
<!-- Remove all mapped drives: -->
net use * /delete
```

## Policy

AUP; Asset Management Policy; Defense In Depth; DLP; Least Privilege; MOU; MSDS; NDA; Password Policy; Remote Access Policy; SLA; SOW; Zero Trust;
%

- **AUP**: Acceptable Use Policy. Agreement to use corporate network according to terms.
- **Asset Management Policy**: receiving, tagging, documenting and disposing of equipment.
- **Defense In Depth**: is a strategy that leverages multiple security measures to protect an organization's assets.
  **DLP**: Data Loss Prevention Policy. Defines how organizations can share and protect data.
  - **Least Privilege**: a user or entity should only have access to the specific data, resources and applications needed to complete a required task.
- **MOU**: Memorandum of Understanding. Defines the responsibilities of each party in an agreement, provides the scope and authority of the agreement, clarifies terms, and outlines compliance issues.
- **MSDS**: Material Safety Data Sheet. potential hazards (health, fire, reactivity and environmental) and how to work safely with the chemical product.
- **NDA**: Non Disclosure Agreement. Legally enforceable contracts that create a confidential relationship between a person who has sensitive information and a person who will gain access to that information.
- **Password Policy**: acceptable password length, chars. Enforced by Group Policy.
- **Remote Access Policy**: outlines and defines acceptable methods of remotely connecting to the internal network. (includes password policy, and requiring employees to install software such as antivirus and antimalware programs).
- **SLA**: Service Level Agreement. commitment between a service provider and a client for particular aspects of the service, such as quality, availability, or responsibilities.
- **SOW**: Statement of Work. business agreement that outlines deliverables and project goals. Helps clients and vendors to stay aligned.
- **Zero Trust**: all users in/out organization to be authenticated, authorized and validated. Secure Infrastructure.

## Ports

What are ports: 22; 23; 25; 53; 67; 80; 443; 110; 143; 161; 3389; 5900;
%

| Port | Name                                                                     | TCP/UDP |
| ---- | ------------------------------------------------------------------------ | ------- |
| 20   | FTP-Data                                                                 | TCP     |
| 21   | FTP-Control-Connecting                                                   | TCP     |
| 23   | Telnet                                                                   | TCP     |
| 25   | EMAIL-SMTP                                                               | TCP     |
| 53   | DNS                                                                      | TCP/UDP |
| 67   | DHCP                                                                     | UDP     |
| 69   | TFTP                                                                     | UDP     |
| 80   | HTTP                                                                     | TCP     |
| 110  | EMAIL-POP3                                                               | TCP     |
| 139  | SMB (windows file shareing)                                              |         |
| 143  | EMAIL-IMAP                                                               | TCP     |
| 161  | SNMP (simple network management protocol)                                | UDP     |
| 389  | LDAP (AD, Directory, Replication, Authentication, Group Policy, Trusts.) | UDP     |
| 443  | HTTPS                                                                    | TCP     |
| 445  | SMB (windows file sharing)                                               | TCP     |
| 514  | Syslog                                                                   | UDP     |
| 3389 | RDP Remote Desktop Protocol                                              | TCP     |
| 5800 | VCN Virtual Network Computing (Web Interface)                            | TCP     |
| 5900 | VCN Virtual Network Computing                                            | TCP     |

## RAID

Raid: 0; 1; 5; 10;
%

| Raid | Description                                                                                     |
| ---- | ----------------------------------------------------------------------------------------------- |
| 0    | Fastest, breaks data into smaller size, and stores on multiple disk at same time. No redundancy |
| 1    | Copy data to two disk. Slow                                                                     |
| 5    | 3 or more drives. fast and redundancy                                                           |
| 10   | 2 Raid 1 within a Raid 0. performance with higher fault tolerance than Raid 5                   |

## RFC (Request For Change)

Purpose; Plan; Scope; Risk Analysis; Rollback;
%

1. **Purpose**: The 'why'. Reason for the change. why the change is necessary for the organization. It should include any documentation from third-party vendors detailing the change.
2. **Plan**: plan will detail any steps required to make the change.
   1. Following the SOP (standard operating procedures) used to complete a defined business process for the organization.
3. **Scope**: The scope of the change is who or what the change will affect.
   1. Affected Systems/Impact: who/what is effected before/after change.
4. **Risk Analysis**: The risk level is an outcome from the risk analysis process in the form of a number or word representing the perceived risk. (Highly Likely, Likely, Unlikely...)
   1. Sandbox testing allows changes to be tested prior to production.
5. **Change Roll Back Plan**: undo the change if problems.

## Social Engineering

What is Social Engineering?
Bluejacking; Botnet; Brute Force; Cross-Site Scripting; CSRF; CRLF Injection; DoS; DDoS; Dictionary; Dumpster Diving; Evil Twin; External; Footprinting; Hijacked Email; Internal; Password Attack; Pharming; Phishing; Rainbow Table; Rogue Access Point; Shoulder Surfing; Tailgating; Piggybacking; Spear Phishing; Spoofing; Whaling; Vishing; Zero-Day;
%

- **Social Engineering**: attack on a network that is directed towards the human element.
- **Bluejacking** is an attack in which someone sends unsolicited messages to a Bluetooth-enabled device.
- **Botnet**: Zombie computers used for malicious means. ex.. DDos, Spam Email...
- **Brute Force**: try every combination of characters.
- **Cross-Site Scripting Attack** (XSS) allows an attacker to execute arbitrary JavaScript within the browser of a victim user. Data infusion/harvesting from http/https sites. not sanitizing input data.
  - The crucial point is that the malicious code runs in the client's browser with the same permission level as the trusted site.
- **CSRF**: Cross-site request forgery. also known as **XSRF**, **Sea Surf** or **Session Riding**, attacker forces end user to execute unwanted actions.
- **CRLF Injection**: add CRLF to url and extra data to redirect or inject js into page. Typically used to escalate to much more serious attack.
- **DoS**: Denial of Service. overload server with network traffic.
- **DDoS**: Distributed DoS Attack. Botnets Flood server with bogus request.
- **Dictionary**: list of common passwords.
- **Dumpster Diving** gather privileged information to create a genuine pretext. Dumpster Diving refers to combing through an organization's (or individual's) garbage to try to find useful documents. Attackers may even find files stored on discarded removable media.
- **Evil Twin** rouge wireless access point to harvest credentials.
- **External** someone outside the organization. Break in, malware, social engineering. Obtain information about the network and it's security controls by 'hacking the human'.
- **Footprinting** reconnaissance to learn about target.
- **Hijacked Email**: another form of man-in-the-middle attack, in which the hacker compromises and gain access to a target’s email account.
- **Hybrid**: merge two different forms of attack. ex.. dictionary + brute force.
- **Impersonation** pretend someone else to gain information. Gain trust or use intimidation.
- **Internal** disgruntled/corrupt employee, contractor, business partner.
- **Password Attack** brute force pw guessing, traffic sniffing, pw storage location checking.
- **Pharming attack** is a type of cybercrime that redirects web traffic from a legitimate website to a fake website designed to mimic the original. Pharming requires an attacker to gain unauthorized access to a system.
- **Phishing** trick employee through spoofed electronic media.
- **Piggybacking**: consent to enter premises/building. ex.. I forgot my key.. Impersonate cleaning person...
- **Rainbow Table**: a password hacking tool that uses a precomputed table of reversed password hashes to crack passwords in a database.
- **Rogue access point** is an illegitimate access point plugged into a network to create a bypass from outside into the legitimate network.
- **Shoulder Surfing** learn pw/pin by watching person type it. High powered binoculars.
- **Tailgating** no consent to enter privileged area. Usually done by following closely to someone entering area.
- **Spear Phishing** attacker has some info about target. Convince target communication is genuine.
- **Spoofing** disguising a communication from an unknown source as being from a known, trusted source. man in the middle. An on-path attack is an attack, alters the communications between two parties who believe they are directly communicating with each other. Can also involves faking one's identity, and can be used for various attacks such as identity theft.
  - also called an **On-path Attack** intercept traffic between two host.
- **Whaling** upper level management targeted.
- **Vishing** voice phishing. (bank asking to verify credit card transaction)
- **Zero-Day**: vulnerability found. Malware release before patch to fix is released.

## Task Manager Tabs

Describe Task Manager Tabs?
%

- mnemonic ppa suds.
- process tab: overview of programs/services running, CPU,Memory,Disk,Network,GPU usage.
- performance tab: Memory Graph
- App History tab: Resources each app has used.
- Startup tab: programs enabled to start when computer starts.
- Users tab: Users logged in and resources their consuming.
- Details tab: details about programs that are running: pid,status,user,virtualization.
- Services tab: what background services are running.

## Wifi Encryption Best to Worst

%

- AES (Advanced Encryption Standard).
- CCMP (Counter Cipher Mode with Block Chaining Message Authentication Code Protocol)
- KRACK (Key Reinstallation Attack) replay attack vulnerability. Password Guessing.
- PSK (Pre-Shared Key) 4-way auth handshake. retired.
- TKIP (Temporal Key Integrity) algorithm 256 encryption. Retired.
- WEP (Wired Equivalent Privacy), 64-bit encryption.
- WPA (wifi protected access)
  - GCMP-256 (WPA3 256-bit Galois/Counter Mode Protocol) Newest
  - BIP-GMAC-256 (WPA3 256-bit Broadcast/Multicast Integrity Protocol).
  - HMAC (WPA3 384-bit Hashed-based Message Authentication Code).
  - OWE (Opportunistic Wireless Encryption) WPA3 for unauthenticated wifi access.
  - SAE (Simultaneous Authentication of Equals, also called: Dragonfly) Auth Handshake. Best.
- WPS (Wi-Fi Protected Setup)

| Best | Name         | Auth Handshake        | Key Bit size | Encryption                 |
| ---- | ------------ | --------------------- | ------------ | -------------------------- |
| 1    | WPA3         | SAE (Dragonfly)       | 256          | AES-GCMP                   |
| 2    | WPA2         | PSK (4-way-handshake) | 128          | AES-CCMP, 802.11n or newer |
| 3    | WPA          | PSK                   | 128          | TKIP, 802.11i              |
| 4    | WEP          | PSK                   | 24           | 64,128 bit                 |
| 5    | Open Network | (no security at all)  | 0            | -                          |

`*` Enterprise Wifi requires an AAA server to authenticate.

## Windows Editions

Windows 10, 11 Min/Max Install Specs?
%

- Windows 11 min: 1 GHz 2 Core, 4GB Ram, 64GB space (no 32bit).
- Windows 10 min: screen all versions 800x600.

| Windows 10                  | Min OS Memory/HDD    | Processor | Max Memory         | CPU Sockets/Cores |
| --------------------------- | -------------------- | --------- | ------------------ | ----------------- |
| Home                        | 1GB(32),2GB(64)/32BG | 1 GHz SoC | 4GB(32), 128GB(64) | 1/64              |
| Pro, Education              | 1GB(32),2GB(64)/32BG | 1 GHz SoC | 4GB(32), 2TB(64)   | 2/128             |
| Pro Workstation, Enterprise | 1GB(32),2GB(64)/32BG | 1 GHz SoC | 4GB(32), 6TB(64)   | 4/256             |

## Windows Edition Differences

Home vs Pro vs Education vs Pro Workstation vs Enterprise?
%

- Pro: Home + Group Policy, Bitlocker, Domain Join, Remote Desktop, Device Guard.
- Education: pro + few education specific settings. enhanced security.
- pro workstation: pro + Active Directory Server
- Enterprise: group license, corporate management and enterprise networking features.

## Reinstall OS

In-Place Upgrade; Restore; Recovery; Refresh; Repair; Reinstall; Reset;
%

- Keep data
  - **In-Place Upgrade**: installation of the new operating system on top of an existing version of the operating system. Preserves user data.
  - **Restore**: move to earlier time.
  - **Recovery**: PC owner will use this. OS restored to factory state.
  - **Refresh**: recopy the system files and revert most system settings to their default configuration, does not delete your personal files. Any applications installed outside of the Windows Store, will be deleted.
  - **Repair**: replace the existing version of the operating system with a new copy of the same version. Good for boot problems. Does not effect user files or system settings.
- Data Loss:
  - **Reinstall**: complete wipe.
  - **Reset**: reset computer to factory default. For sale computer. removes all personal data.

## Run commands

certmgr.msc; cleanmgr.exe; cmd.exe; devmgmt.msc; diskmgmt.msc; dfrgui.exe; eventvwr.msc; gpedit.msc; lusrmgr.msc; secpol.msc; mmc; msconfig.exe; msinfo32.exe; perfmon.msc; regedit.exe; resmon.exe; services.msc; sysdm.cpl; taskmgr.exe; taskschd.msc;

%

- certmgr.msc // cert manager
- cleanmgr.exe // disk cleanup
- cmd.exe // command prompt. CTRL+SHIFT+ENTER opens cmd as admin.
- devmgmt.msc // device manager
- diskmgmt.msc // disk management
- dfrgui.exe // defragment disk
- eventvwr.msc // event viewer
- gpedit.msc // group policy editor
- lusrmgr.msc // local user group
- secpol.msc // security policy editor (inside group policy)
- mmc // (customize your own) microsoft management console
  - add/remove snap-ins.
- msconfig.exe // system config utility
  - boot: %SystemRoot%\ntbtlog.txt
- msinfo32.exe // system information
- perfmon.msc // performance monitor
  - logs on performance.
  - 'Physical Disk Object' monitors hard drive.
- regedit.exe // registry editor
- resmon.exe // resource monitor
- services.msc // services
- sysdm.cpl // system properties. access from command prompt.
- taskmgr.exe // task manager. CTRL+SHIFT+ESC. Right click taskbar. CTRL+ALT+DEL (select Task Manager)
- taskschd.msc // task scheduler

## Wireless Authentication

AAA; RADIUS; TACACS+; KERBOS;
%

- AAA (Authentication, Authorization, and Accounting)
- **Authentication** correct credentials.
- **Authorization** approval to access to resources.
- **Accounting** logging when and by whom a resource was accessed.

- RADIUS (Remote Authentication Dial-In User Service): AAA. Open Source.
- TACACS+ (Terminal Access Controller Access- Control System): Proprietary Cisco. Use when you only have Cisco hardware.
  - TACACS+ does not include authorization but connects to third-party authorization services such as Kerberos
- KERBOS: network authentication protocol by its creators at MIT
- CHAP (Challenge-Handshake Authentication Protocol): a challenge and response authentication method that Point-to-Point Protocol (PPP) servers use to verify the identity of a remote user.
