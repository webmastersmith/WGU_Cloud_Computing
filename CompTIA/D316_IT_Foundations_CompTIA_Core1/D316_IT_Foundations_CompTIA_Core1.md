# D316_IT_Applications_CompTIA_Core1

## Apple iOS history

%

- Apple iPhone and Apple iPad OS
- Based on Unix
- Closed- source - No access to source code
- Exclusive to Apple products

- iOS Apps
- Apps are developed with iOS SDK on Mac OS X
- Apps must be approved by Apple before release
- Apps are available to users in the Apple App Store

## Apple macOS history

%

- macOS
- Desktop OS running on Apple hardware

- Advantages
- Easy to use
- Extremely compatible
- Relatively fewer security concerns

- Disadvantages
- Requires Apple hardware
- Less industry support than the PC platform
- Higher initial hardware cost

## Application Installation methods

%

- Local installation
- Downloadable executable
- CD-ROM / DVD-ROM, Optical media
- USB
- Very compatible with most devices
- Supports large installation programs

- Network-based installation
- The default in most organizations
- Applications are staged and deployed from a central server
- Can be centrally managed

## Applications Tab

%

- Lists user-interactive applications in use
- Apps on the desktop

- Administratively control apps
- End task, start new task

- Combined with the Processes tab in Windows 8/8.1/10

## Before the installation

%

- Check minimum OS requirements
- Memory, disk space, etc.
- And the recommended requirements

- Run a hardware compatibility check
- Runs when you perform an upgrade
- Run manually from the Windows setup screen
- Windows 10 Upgrade Checker

- Plan for installation questions
- Drive/partition configuration, license keys, etc.

- Application compatibility - Check with the app developer

## BitLocker and EFS

%

- Data confidentiality is the most important asset
- Encrypt important information

- Encrypting File System
- Protect individual files and folders
- Built-in to the NTFS file system

- BitLocker
- Full Disk Encryption (FDE)
- Everything on the drive is encrypted
- Even the operating system

- Home and business use
- Especially on mobile devices

## BitLocker

%

- Full Disk Encryption
- The operating system and all files

- A TPM is recommended on the motherboard
- Trusted Platform Module
- Use a flash drive or password if there's no TPM

- Runs Seamlessly
- Works in the background
- You never know it's there
- Used for laptops or mobile devices

## Boot methods

%

- USB storage
- USB drive must be bootable
- Computer must support booting from USB drive

- CD-ROM and DVD-ROM
- A common media

- PXE ("Pixie") - Preboot eXecution Environment
- Performs a remote network installation
- Computer must support booting with PXE

- NetBoot
- Apple technology to boot macOS from the network
- Similar concept to PXE boot

- If you need to install many types of OS's
- Considered using external media that connects via USB
- Solid state drives / hard drives
- Store many OS installation files

- External / hot swappable drive
- Some external drives can mount an ISO (DVD-ROM image) which the PC will see as a DVD-ROM drive
- Can boot from USB

- Installing on the Internal hard drive
- Install and boot from separate drive
- Create and boot from new partition

## Boot tab

%

- Controls the boot location
- Multiple locations and operating systems

- Advanced options
- Number of processors, maximum memory, etc.

- Boot options
- Safe boot, remove the GUI, create a log file, base video, OS boot information (shows drivers as they load), set timeout for booting

## BranchCache

%

- Caching for branch offices
- Without additional hardware or external services

- Conserves bandwidth over slower links
- Seamless to the end-user
- Same protocols
- Same network connection
- Same authentication methods

- Activates when round-trip latency
  exceeds 80 milliseconds

## Check Disk (chkdsk) command

%

- Fixes logical file system errors on the disk
- chkdsk /f

- Locates bad sectors and recovers readable information
- chkdsk /r
- Implies /f

- If volume is locked, run during startup

## Chrome OS history

%

- Google's operating system
- Based on the Linux kernel

- Centers around Chrome web browser
- Most apps are web-based

- Many different manufacturers - Relatively less expensive

- Relies on the cloud - connect to the Internet

## Command line troubleshooting

%

- Use "help" if you're not sure
- > help dir
- > help chkdsk

- Also use:
- [command] /?

- Close the prompt with exit

- Useful when additional information is needed for a certain command

## Component Services

%

- Microsoft COM+
- Component Object Model

- Distributed applications
- Designed for the enterprise

- Manage COM+ apps
- Device COM+ Management
- Event Viewer
- Services

- Located in Control Panel under Administrative Tools

## Computer Management

%

- A pre-built Microsoft Management Console
- A predefined mix of plugins
- Control Panel / Administrative Tools

- To create your own Microsoft Management Console, you can do the following:
  • Go to "C:\Windows\System32" and click on "mmc.exe"
  • Click on Start and search for mmc.exe
  • cmd prompt and type in mmc.exe
  • You can add or remove snap-ins as needed

- A handy starting point
- Events
- User accounts
- Storage management
- Services
- And more!

## Copy command

%

- Copy files from one location to another
- copy (/v, /y)

- copy /v
- Verifies that new files are written correctly

- copy /y
- Suppresses prompting to confirm you want to overwrite an existing destination file

## Credential Manager Applet

%

- Centralized management of web
  and Windows credentials
- Each site can have a different username and password

- Can add additional Windows credentials
- Such as Certificates

## defrag.exe

%

- Disk defragmentation
- Moves file fragments so they are contiguous (so that they can be stored next to each other)
- Improves read and write time on spinning hard drives

- Not necessary for solid state drives
- Windows won't defrag an SSD
- Option will not be available

- Graphical version in the drive properties

- Requires elevated permissions at the command line to run
- defrag <volume>
- defrag C:

- Located under C:\Windows\System32
  • Can also open through the cmd line or Run cmd
  • Graphical version in the drive properties

## Desktop styles

%

- Your computer has many different uses
- Those change depending on where you are

- Work styles
- Standard desktop
- Common user interface
- Customization very limited
- You can work at any computer due to Active Directory

- Home
- Complete flexibility; No restrictions
- Background photos, colors, UI sizing

## Device Manager Applet

%

- The OS doesn't know how to talk directly to most hardware
- You need drivers

- Manage devices
- Add, remove, disable

- This is the first place to go when hardware isn't working
- Instant feedback

## Device Manager

%

- The OS doesn't know how to talk directly to most
  hardware

- Device drivers are hardware specific and operating system specific
- Windows 7 device drivers may not necessarily work in Windows 10

- Technical Support FAQ starting point
- "Have you updated the drivers?"

- Complete control of the hardware
- Can update, uninstall, or disable drivers
- Can scan for hardware changes OR dive into the driver properties

- Computer Management or devmgmt.msc

## Devices and Printers Applet

%

- Everything on the network
- Desktops, laptops, printers, multimedia devices, storage

- Quick and easy access
- Much less complex than Device Manager
- Can right mouse click and view Properties and make device configurations

## Disk Management

%

- Manages disk or volumes in windows
- Individual computers and file servers

- Computer Management is located in Control Panel under Administrative Tools then Storage and Disk Management

- WARNING- Data can be erased and unrecoverable

## Disk partitioning

%

- The first step when preparing disks
- May already be partitioned
- Existing partitions may not always be compatible with your new operating system

- An MBR-style hard disk can have up to four partitions

- GUID partition tables support up to 128 partitions
- Requires UEFI BIOS or BIOS-compatibility mode
- BIOS-compatibility mode disables UEFI SecureBoot
- You'll probably have one partition

- BE CAREFUL!
- Serious potential for data loss
- This is not an everyday occurrence

## Disk status

%

- Healthy
- The volume is working normally

- Healthy (At Risk)
- The volume has experienced I/O errors
- Drive may be failing

- Initializing
- Normal startup message for a new drive

- Failed
- Cannot be started automatically
- The disk is damaged, or the file system is corrupted

- Failed redundancy
- A drive has failed in a RAID 1 or RAID 5 array

- Resynching
- Mirrored (RAID 1) volume is synching
  data between the drives

- Regenerating
- RAID 5 volume is recreating the data
  based on the parity data

## DiskPart command

%

- Manage disk configurations
- "diskpart" - start the DiskPart command interpreter at the cmd prompt

## dism (Deployment Image Servicing and Management tool)

%

- Manages Windows Imaging Format (WIM) files

- You can make changes to your image with DISM
- Get information about an image
- Update applications
- Manage drivers
- Manage updates
- Mount an image

- All command-line based
- Many different options
- Easy to automate

## Display Applet

%

- Resolution options
- Important for LCD monitor native resolutions

- Can configure the color depth and refresh rate
- Located in Control Panel > Display > Adjust Resolution > Advanced Settings > Adapter "list all modes"

- In Windows 10, it is located in Settings > System > then choose the Display option
- Different settings available

## Domain Services

%

- Active Directory Domain Services
- Large database of your network
- Contains info. on users, computers, and the systems they connect to.

- Distributed architecture
- Many servers
- Not suitable for home use

- Everything documented/managed in one place
- User accounts, servers, volumes, printers

- Many different uses
- Authentication
- Centralized management

## dxdiag.exe

%

- DirectX Diagnostic Tool
- Manage your DirectX installation
- It is an application programming interface used by developers to create applications that requires multimedia or graphics within Windows

- Multimedia API Overview for:
- System
- Display (3D graphics)
- Audio
- Input options

- Also makes a very nice generic diagnostic tool when having issues with graphics or sound
- Not just for testing DirectX

- Located under C:\Windows\System32
  • Can also open through the cmd line or Run cmd

## Event Viewer

%

- Central event consolidation
- What happened?

- Broken down into different categories
- Application
- Security
- Setup
- System

- Then each one is broken down into a different priority such as:
- Information
- Warning
- Error
- Critical
- Successful Audit
- Failure Audit

- Can obtain detailed information when troubleshooting an application or OS

## Explorer

%

- Windows Explorer / File Explorer (Windows 10)
- File management

- View, copy, launch files from File Explorer
- Granular control

- Easy access to network resources
- Browse and view

## FAT

%

- FAT - File Allocation Table
- One of the first PC-based file systems (circa 1980)

- FAT32 - File Allocation Table
- Larger (2 terabyte) volume sizes
- Maximum file size of 4 gigabytes
- Most common file type

- exFAT - Extended File Allocation Table
- Microsoft flash drive file system
- Files can be larger than 4 gigabytes

## File management

%

- dir
- Lists files and directories in cmd prompt

- cd
- Change working directory in cmd prompt
- Use backslash \ to specify volume or folder name

-..

- Two dots/periods in cmd prompt
- The folder above the current folder

## File systems

%

- Before data can be written to the partition,
  it must be formatted

- Operating systems expect data to be written
  in a particular format
- FAT32 and NTFS is popular

- Many operating systems can read (and perhaps write)
  multiple file system types
- FAT, FAT32, NTFS, exFAT, etc.

## Flavors of traceroute

%

- Not all traceroutes are the same
- Minor differences in the transmitted payload

- Windows commonly sends ICMP echo requests
- Receives ICMP time exceeded messages
- And an ICMP echo reply from the final/destination device
- Unfortunately, outgoing ICMP is commonly filtered

- Some operating systems allow you to specify the protocol used
- Linux, Unix, Mac OS, etc.

- IOS devices send UDP datagrams over port 33434
- The port number can be changed with extended options

## Folder Options / File Explorer Options Applet

%

- Can Manage Windows Explorer
- Many options

- General Tab
- Can change how folders open in each Window
- How folders expand
- Can set privacy settings

- View Tab
- Advanced settings for files and folders (can view hidden files, can hide extensions, etc..)

- Search Tab
- Can configure how the search Index is used when searching for files
- Search Options when searching for files
- Options when searching non-indexed areas

## Format command

%

- Formats a disk for use with Windows
- format c:
- BE CAREFUL - YOU CAN LOSE DATA

## General tab

%

- Controls the startup process
- Normal, Diagnostic, Selective

- Normal startup
- Nothing to see here, go about your business

- Diagnostic startup
- Similar to Safe Mode, but not quite the same

- Selective startup
- You decide what to load

## Google Android history

%

- Google Android
- Open Handset Alliance
- Open-source OS, based on Linux
- Supported on many different manufacturer's devices

- Android Apps
- Apps are developed on Windows, Mac OS X, and Linux with the Android SDK
- Apps available from Google Play
- Apps also available from third-party sites (i.e., Amazon Appstore)

## GPT partition style

%

- GPT (GUID Partition Table)
- Globally Unique Identifier
- The latest partition format standard

- Requires a UEFI BIOS
- Can have up to 128 primary partitions
- No need for extended partitions or logical drives

## HomeGroup Applet

%

- A way to easily share information
- Windows 7 / Windows 8
- No HomeGroup options on Windows 10
- Documents, pictures, music, video

- A network for the home
- Must be set to "Home" in Windows

- Enable HomeGroup
- A single password is created for everyone to use

## Installing applications

%

- Extend the functionality of your operating system
- Specialized applications extend system functionality such as word processing, spreadsheets, graphics capabilities, etc...

- Available everywhere
- Find the application you need
- Install on your operating system

- Not every computer can run every application
- Some simple checks can help manage your desktop

## Internet Options Applet

%

- General Tab
- Basic display
- Shows options for browser such as home page, how the browser starts up, and change the display of the tabs

- Security Tab
- Contains zones where security levels are set (Internet, Local Intranet, Trusted Sites, Restricted Sites)
- Different security levels for each zone (Between High and Low)

- Privacy Tab
- Can control settings for cookies, pop-up blocker, InPrivate browsing

- Content Tab
- Can view information on encryption and identification certificates
- Can view auto-complete information

- Connections Tab
- Can configure VPN, proxy settings, and LAN settings

- Programs Tab
- Can manage how the browser opens links
- Can set default browser
- Manage add-ons, plugins, etc.

- Advanced Tab
- Detailed configuration options for the browser
- Can reset all settings back to default

## ipconfig

%

- Most of your troubleshooting starts with your IP address
- Ping your local router/gateway

- Determine TCP/IP and network adapter information
- And some additional IP details such as IP address, subnet mask, default gateway

- View additional configuration details with typing "ipconfig /all"
- Shows details for DNS servers, DHCP server, etc

## Linux history

%

- Free Unix-compatible software system
- Unix-like, but not Unix

- Many (many) different distributions
- Ubuntu, Debian, Red Hat / Fedora

- Advantages
- Cost. Free!
- Works on wide variety of hardware
- Passionate and active user community

- Disadvantages
- Limited driver support, especially with laptops
- Limited support options

## Local Security Policy

%

- Big companies have big security policies
- Managed through Active Directory Group Policies
- Affects many computers at once

- Stand-alone computers aren't managed through AD
- Local policies are managed by Local Security Policy

- Not available in Home editions
- Available in Professional / Pro, Ultimate, Enterprise

- Local Security Policy is located at:
- C:\Windows\system32 and click on secpol.msc
- Click on Start and search for secpol.msc or local security policy
- cmd prompt and type in secpol.msc

## Local user permissions for application installs

%

- Folder/file access will be required
- Installation programs will be copying a lot of files

- The user needs permission to write application files to the storage drive
- This may not be the default in an office

- May need to run as Administrator
- Some applications will install additional drivers
  or services
- Be careful when allowing this level of access!

## Local users and groups

%

- Users
- Administrator - the Windows super-user
- Guest -Limited access
- Most users are "Regular" Users

- Groups
- Administrators, Users, Backup Operators,
  Power Users, etc.
- Users can be added to groups
- Permissions are easier to manager by groups instead of individual user access.

## Managing Group Policy

%

- Group Policy
- Manage computers in an Active Directory Domain
- Group Policy is usually updated at login

- gpupdate
- Forces a Group Policy update
- gpupdate /target:{computer|user} /force
- gpupdate /target:professor /force

- gpresult
- Verify policy settings for a computer or user
- gpresult /r -- generic command
- gpresult /user sgc/professor /v -- a more specific comand for gpresult

## MBR partition style

%

- MBR (Master Boot Record)
- The old standby, with all of the old limitations

- Primary partition
- Bootable partitions
- Maximum of four primary partitions per hard disk
- One of the primary partitions can be marked as Active

- Extended partition
- Used for extending the maximum number of partitions
- One extended partition per hard disk (optional)
- Contains additional logical partitions
- Logical partitions inside an extended partition are not bootable

## Media Center

%

- Video, music, and television portal
- Perfect for watching at home
- Record shows from a TV tuner
- Play music
- Watch DVDs

- The center of your home entertainment center
- Cable companies and other technologies
  were strong competition

- Discontinued by Microsoft
- Not officially available in Windows 10

## Memory diagnostics

%

- Is your memory working?
- I don't remember

- May be launch automatically
- Or launched manually

- Will run multiple passes
  • Will Try to find the bad chip/module

- Located in Control Panel under Administrative Tools

## Microsoft Windows history

%

- Major market presence

- Many different versions
- Windows 10, Windows Server 2016

- Advantages
- Large industry support
- Broad selections of OS options
- Wide variety of software support

- Disadvantages
- Large install base provides a big target for security exploitation
- Large hardware support can create
  challenging integration exercises

## mmc.exe

%

- Microsoft Management Console
- Can build your own management framework
- Choose from list of available "snap-ins"

- Framework used for many built-in management tools

- Located under C:\Windows\System32
  • Can also open through the cmd line or Run cmd

## Mounting drives

%

- Extend available storage space
- Mount a separate storage device as a folder

- Mount in an empty folder
- Instant storage space
- Seamless to the user

- Configuration done in Disk Management:
- Right click on the new drive
- Change drive letter and paths
- Select "mount" option and browse to the location

## msinfo32.exe

%

- Windows System Information
- A wealth of knowledge

- Shows information on Hardware Resources
- Memory, DMA, IRQs, conflicts

- Shows information on Components
- Multimedia, display, input, network

- Shows information on the Software Environment
- Drivers, print jobs, running tasks

- Located under C:\Windows\System32
  • Can also open through the cmd line or Run cmd

## mstsc.exe

%

- Microsoft Terminal Services Client
- Remote Desktop Connection
- Can also open through the cmd line or Run cmd

- Access a desktop on another computer
- Or connect to a Terminal Server

- Common for management on servers without a keyboard or monitor connected to them
- "Headless" servers

- Located under C:\Windows\System32
  • Can also open through the cmd line or Run cmd

## net command

%

- Windows network commands

- Views network resources
- net view \\<servername>
- net view /workgroup:<workgroupname>

- Map a network share to a drive letter
- net use h: \\<servername>\<sharename>

- View user account information and reset passwords
- net user <username>
- net user <username> \* /domain

## netstat

%

- Network statistics
- Utility available on many different operating systems

- netstat -a
- Shows all active connections

- netstat -b
- Shows binaries (Windows) that may be sending/receiving information
- Requires elevation

- netstat -n
- Does not resolve DNS names

## Network and Sharing Center Applet

%

- Shows all network adapters
- Wired, wireless, etc.

- All network configs
- Shows the HomeGroup option
  (n/a in Windows 10)
- Can change Adapter settings
- Can change network addressing

## Networking Tab

%

- Can view network performance
- Separate tab in Windows 7
- Integrated into the Performance tab
  in Windows 8/8.1/10

- View utilization, link speeds, and
  interface connection state

## Notepad

%

- View and edit text files
- You'll use a lot of text files

- Included with almost any version of Windows

## nslookup

%

- Lookup information from DNS servers
- Canonical names, IP addresses, cache timers, etc.

- Lookup names and IP addresses
- Many different options

## NTFS and CDFS

%

- NTFS - NT File System
- Extensive improvements over FAT32
- Quotas, file compression, encryption, symbolic links, large file support, security, recoverability

- CDFS - Compact Disk File System
- ISO 9660 standard
- All operating systems can read the CD

## ODBC Data Sources

%

- ODBC - Open Database Connectivity

- Application independence
- Database and OS doesn't matter

- Configure in Control Panel / Administrative Tools
- Users probably won't need this

- Located in Control Panel under Administrative Tools

## Operating system technologies

%

-32-bit vs. 64-bit

- Processor specific

-32-bit processors can store
2³² = 4,294,967,296 values

-64-bit processors can store
2⁶⁴ = 18,446,744,073,709,551,616 values

- 4 GB vs. 17 billion GB
- The OS has a maximum supported value

- Hardware drivers are specific to the OS version (32-bit / 64-bit)
- 32-bit (x86), 64-bit (x64)

-32-bit OS cannot run 64-bit apps

- But 64-bit OS can run 32-bit apps

- Apps in a 64-bit Windows OS
- 32-bit apps: \Program Files (x86)
- 64-bit apps: \Program Files

## Other considerations

%

- Load alternate third party drivers when necessary
- Disk controller drivers, etc.

- Workgroup vs. Domain setup
- Home vs. business

- Time/date/region/language settings
- Where are you?

- Driver installation, software and windows updates
- Load video drivers, install apps, update the OS

- Factory recovery partition
- This can help you later

## Other file systems

%

- ext3
- Third extended file system
- Commonly used by the Linux OS

- ext4
- Fourth extended file system
- An update to ext3
- Commonly seen in Linux and Android OS

- NFS
- Network File System
- Access files across the network as if they were local
- NFS clients is available across many operating systems

- HFS+ / HFS Plus
- Hierarchical File System
- Also called Mac OS Extended
- Replaced by Apple File System (AFPS) in
  macOS High Sierra (10.13)

- Swap partition
- Memory management
- Frees memory by moving unused pages onto disk
- Copies back to RAM when needed
- Usually a fast drive or SSD

## Performance Monitor

%

- Gather long-term statistics
- Located in the Control Panel under Administrative Tools

- Provides OS metrics - Disk, memory, CPU, etc.

- Can set an alert and automated actions -Monitor and act
  •Counters are added to monitor metrics

- Store statistics to analyze any long-term trends

- Built-in reports allows you to create detailed reports from the data

- To bring up Performance Monitor:
- Go to "C:\Windows\system32" and click on perfmon.msc
- Click on Start and search for perfmon.msc
- cmd prompt and type in perfmon.msc

## Performance Tab

%

- What's happening?
- Can view CPU, memory, etc.

- Statistical views
- Historical, real-time

- Newer versions include CPU, memory, disk,
  Bluetooth, and network in the Performance tab

## ping

%

- Test reachability of a device
- Determine round-trip time
- Uses Internet Control Message Protocol (ICMP)

- One of your primary troubleshooting tools
- Can you ping the host?

- Written by Mike Muuss in 1983
- Named similar to the sound made by sonar
- Not an acronym for Packet INternet Groper

## Power options Applet

%

- Power plans
- Power usage can be customized

- Sleep (standby) Option
- Open apps are stored in memory
- Save power, startup quickly
- Switches to hibernate if power is low

- Hibernate Option
- Open docs and apps are saved to disk, allows system to shutdown completely
- Common on laptops

## Prepare the boot drive

%

- Know your drive
- Is there data on the drive?
- Has the drive been formatted?
- What partitions are on the drive?

- Backup any old data - You may need that back someday

- Most partitioning and formatting can be
  completed during the installation
- Clear the drive and start fresh

## Print Management

%

- Located in Control Panel under Administrative Tools

- Can manage printers
- Share printers from one central console

- Add and manage printer drivers
- Central management of 32-bit and 64-bit drivers

## Privileges

%

- Not all users can run all commands
- Some tasks are for the administrator only

- Standard privileges
- Run applications as normal user
- This works fine for many commands

- Administrative/elevated privileges
- You must be a member of the Administrators group
- Right-click Command Prompt, choose "Run as Administrator"
- OR by searching for cmd.exe, then pressing "Ctrl+Shift+Enter" to run as Administrator

## Processes Tab

%

- Can view all running processes
- Interactive and system tray apps
- View services and processes from other accounts

- Manage the view
- Can move columns, add metrics

- Later versions combine all apps, processes, and services into a single tab
- Easy to view and sort

## Programs and Features Applet

%

- Shows Installed applications
- Can Uninstall applications, view size and version

- Can also enable/dislable Windows features that were/were not installed by default

## Quick format vs. full format

%

- Quick format
- Creates a new file table
- Looks like data is erased, but it's not
- No additional checks

- Quick format in Windows 7, 8/8.1, and 10
- Use diskpart for a full format within windows 7, 8/8.1/10

- Full format
- Writes zeros to the whole disk
- Your data is unrecoverable
- Checks the disk for bad sectors - Time consuming

## regedit.exe

%

- The Windows Registry
- The big huge master database
- Hierarchical structure
- Use to configure different parts in Windows
- Use to configure different applications in Windows

- Used by almost everything in Windows
- Kernel, Device drivers
- Services
- Security Account Manager (SAM)
- User Interface, Applications

- Backup your registry!
- Also called a hive
- Use "export" to backup the registry
- Built into regedit

- Located under C:\Windows
  • Can also open through the cmd line or Run cmd

## Robust Copy

%

- robocopy
- A better xcopy
- Has the ability to resume a file transfer if it is interrupted
- Looks and acts similar to xcopy
- Most syntax is the same as xcopy
- Shows results, time taken, and throughput of the copy process

- Included with Windows 7, 8.1, and 10

## Security considerations

%

- There's a reason we are careful when installing applications
- Applications have the same rights and permissions as the user
- An unknown application can cause significant issues

- Impact to device with unknown application
- Application upgrade stops working
- Slowdowns
- Deleted files

- Impact to network with unknown application
- Access to internal services
- Rights and permissions to file shares

## Services tab

%

- Can enable and disable Windows services
  • Determine what starts during boot

- Easier to manage than the Services applet
- Click/unclick

- Useful for trial and error
- It may take many reboots to find your problem

## services.msc

%

- Located in Control Panel under Administrative Tools as Services
- Can also open through the cmd line or Run cmd

- Useful when troubleshooting the startup process

- Control background applications

- Services can reveal dependencies between applications

## Services

%

- Background process
- No user interaction
- File indexing, anti-virus, network browsing, etc.

- Useful when troubleshooting the startup process
- Many services startup automatically

- Command-line control
- net start, net stop

- Services is located in Control Panel under Administrative Tools
- Type in "services.msc" through search or cmd prompt

## sfc (System File Checker) command

%

- Scans the integrity of all protected system files
- sfc /scannow

## Shutdown command

%

- shutdown
- Shutdown a computer
- And optionally restart "shutdown /r"

- shutdown /s /t nn
- Wait nn seconds, then shutdown

- shutdown /r /t nn
- Shutdown and restart after nn seconds

- shutdown /a
- Abort the countdown!

## Sound Applet

%

- Output options
- Multiple sound devices may be available

- Set input/output levels for speakers and microphone

## Standard OS features

%

- File management
- You can Add, Delete, Rename files

- Application support
- Memory management, swap file management

- Input and Output support
- Printers, keyboards, hard drives, USB drives

- Operating system configuration and management tools

## Startup tab

%

- Manages which programs start with a Windows login
- Easily toggle on and off

- Multiple reboots needed before locating the troublesome application during troubleshooting (You'll find it)

- This feature has moved to the Task Manager in Windows 8/8.1/10

## Storage spaces

%

- A windows feature

- Storage primarily designed for data centers, cloud infrastructures to easily add storage space
- Multiple tiers of available spaces
- Different types of administrative control that can be assigned to those spaces

- Storage pool
- A group of storage drives
- Can combine different storage devices into a single pool
- Easy to add or remove space in the pool

- Storage space
- Virtual disks are allocated from available space in the pool
- Can specify if its a standalone, mirrored, or striped virtual disk
- Includes options for mirroring and parity
- Hot spare available as a replacement drive

## Storage types

%

- Layered on top of the partition and file system
- A Windows thing

- Basic disk storage
- Available in DOS and Windows versions
- Primary/extended partitions, logical drives
- Basic disk partitions can't span separate physical disks

- Dynamic disk storage
- Available in all modern Windows versions
- Span multiple disks to create a large volume
- Split data across physical disks (striping)
- Duplicate data across physical disks (mirroring)
- Not all Windows versions support all capabilities

## Sync Center

%

- Make files available, even when you're not online
- Automatically syncs when back online
- Contains built-in sync conflict management

- Not available in Home editions
- Needs offline file functionality
- Only available in Pro and higher

- Mark files "Always available offline" to use this capability

## System Applet

%

- System properties
- Provides Computer information
- Including version and edition

- Remote settings can be turned on or off for Remote Assistance and Remote Desktop

- System protection
- Can enable/disable System Restore
- Select drives to allocate additional space for system restore

- Performance Options located under Advance System Settings can be set for:
- Configuring Virtual Memory
- Configuring Visual Effects
- Configuring Data Execution Prevention (DEP)

## System Configuration (msconfig)

%

- Manages boot processes
- Windows startup applications
- Windows services

- There are 5 tabs in system configuration
- General
- Boot
- Services
- Startup
- Tools

- Located in Control Panel under Administrative Tools
- OR type "msconfig.exe" in cmd prompt or in search bar

## System requirements for application installs

%

- Hard Drive space
- Initial installation space required
- Application use space required
- Some applications use a LOT of drive space after installation

- RAM
- This would be above and beyond the OS requirements
- Very dependent on the application
- Consider all of the other running applications

- OS compatibility
- Operating system (Windows, macOS, Linux)
- Version of the OS

## System Restore

%

- Windows creates frequent restore points
- Goes back-in-time to correct problems
- Creates restore points after a windows update or after installing new software

- Start by pressing F8 - Advanced Boot Options - Repair

- In Windows 7/8/8.1/10 it is located in Control Panel under Recovery

- Doesn't guarantee recovery from viruses and spyware/malware
- All restore points might be infected

## Task Manager

%

- Provides Real-time system statistics
  • CPU, memory, disk access, etc.

- Starting the Task Manager:
- Ctrl-Alt-Del, select Task manager
- Right mouse click the taskbar and
  select Task Manager
- Ctrl-Shift-Esc

- Enhancements since Windows 7
- More information and features

## Task Scheduler

%

- Schedules an application or batch file to run
- Plan ahead

- Includes predefined schedules - Click and go

- Organized - Managed through folders

- Located in Control Panel under Administrative Tools

## TaskList and TaskKill command

%

- Manage tasks from the command line
- No Task Manager required!

- tasklist
- Displays a list of currently running processes
- Local or remote machine

- taskkill
- Terminate tasks by process id (PID) or image name
- TASKKILL /IM notepad.exe - kills the notepad.exe process by image name
- TASKKILL /PID 1234 /T - kills the process identifier (PID) by number

## The disk partition

%

- Separates the physical drive into logical pieces
- Useful to keep data separated
- Multiple partitions are not always necessary

- Useful for maintaining separate operating systems
- Windows, Linux, etc.

- Formatted partitions are called volumes
- Microsoft's nomenclature
- Volume and Partition mean the same thing

## The Run line

%

- Can start an application as a command
- Instead of the graphical interface

- Can use the run/search or command prompt
- Options can be specified as part of the command

## The Windows command line

%

- cmd
- The "other" Windows
- Can start utilities from the cmd line
- Many options available under the hood
- Faster to do tasks on the cmd line compared to GUI

## Tools tab

%

- Easy access to popular administrative tools
- UAC settings, System Information,
  Computer Management, etc.

- Faster than searching through menus or typing
- A static (but comprehensive) list

## tracert

%

- Determines the route a packet takes to a destination
- Maps the entire path

- Takes advantage of ICMP Time to Live Exceeded message
- The time in TTL refers to hops, not seconds or minutes
- TTL=1 is the first router, TTL=2 is the second router, etc.

- Not all devices will reply with ICMP Time Exceeded
- Some firewalls filter ICMP
- ICMP is low-priority for many devices

## Troubleshooting Applet

%

- Some problems can be easily fixed
- Have you tried turning it off and on again?

- Automate some of the most common fixes
- Troubleshooting option are categorized

- May require elevated account access to enable/disable hardware and features

## Types of installations

%

- Unattended installation
- Answers Windows questions in a file (unattend.xml)
- No installation interruptions
- No user intervention

- In-place upgrade
- Maintain existing applications and data

- Clean install
- Data backup required
- Wipe the slate clean and reinstall
- Migration tool can help

- Image
- Deploy a clone on every computer
- Quick installation on many computers

- Repair installation
- Fixes problems with the Windows OS
- Does not modify user files
- Re-installs the OS

- Multiboot
- Run two or more operating systems
  from a single computer
- Can you 2 OS's from 1 hard drive

- Recovery partition
- Creates hidden partition with a copy of Windows installation files
- Commonly used with repair installation
- Installation media not needed

- Refresh / restore
- Windows 8/10 feature to clean things up
- Requires a recovery partition
- No installation media needed

## Upgrade methods

%

- In-place upgrade
- Upgrades the existing OS
- Keeps all applications, documentations, and settings
- Start the setup from inside the existing OS

- Clean install
- Wipes everything and reload
- Backup your files
- Start the setup by booting from the installation media

## Upgrade Windows 7 Enterprise to Windows 10

%

Can upgrade to:

- Windows 10 Enterprise

Cannot upgrade to (requires clean installation):

- Windows 10 Home
- Windows 10 Pro

## Upgrade Windows 7 Home Basic to Windows 10

%

Can upgrade to:

- Windows 10 Home
- Windows 10 Pro

Cannot upgrade to (requires clean installation):

- Windows 10 Enterprise

## Upgrade Windows 7 Home Premium to Windows 10

%

Can upgrade to:

- Windows 10 Home
- Windows 10 Pro

Cannot upgrade to (requires clean installation):

- Windows 10 Enterprise

## Upgrade Windows 7 Professional to Windows 10

%

Can upgrade to:

- Windows 10 Pro
- Windows 10 Enterprise

Cannot upgrade to (requires clean installation):

- Windows 10 Home

## Upgrade Windows 7 Starter to Windows 10

%

Can upgrade to:

- Windows 10 Home
- Windows 10 Pro

Cannot upgrade to (requires clean installation):

- Windows 10 Enterprise

## Upgrade Windows 7 Ultimate to Windows 10

%

Can upgrade to:

- Windows 10 Pro

Cannot upgrade to (requires clean installation):

- Windows 10 Home
- Windows 10 Enterprise

## Upgrade Windows 8.1 Core to Windows 10

%

Can upgrade to:

- Windows 10 Home
- Windows 10 Pro

Cannot upgrade to (requires clean installation):

- Windows 10 Enterprise

## Upgrade Windows 8.1 Enterprise to Windows 10

%

Can upgrade to:

- Windows 10 Enterprise

Cannot upgrade to (requires clean installation):

- Windows 10 Home
- Windows 10 Pro

## Upgrade Windows 8.1 Professional to Windows 10

%

Can upgrade to:

- Windows 10 Pro
- Windows 10 Enterprise

Cannot upgrade to (requires clean installation):

- Windows 10 Home

## Upgrading from Windows 7

%

- Keeps Windows settings, personal files,
  and applications
- Must upgrade to a similar Edition

## Upgrading from Windows 8.1

%

- Keeps Windows settings, personal
  files, and applications
- Must upgrade to a similar Edition
- You cannot upgrade directly from
  Windows 8 to Windows 10

## Upgrading to Windows 10

%

- Upgrade from the Windows 10 installation media
- Downloadable versions are available from Microsoft
- Includes a media creation tool

- You cannot upgrade x86 to x64 OR x64 to x86
- Applies to all Windows versions
- You'll have to migrate instead

## User Accounts Applet

%

- Local user accounts
- Located in Control Panel under "User Accounts"
- Domains accounts are stored elsewhere

- Creating local account requires account name and type
- Can change password
- Can change picture
- Can associate a certificate information for a particular user

## Users Tab

%

- Who is connected? What are they doing?

- Provides a User list Windows 7 which allows you to:
- Disconnect
- Logoff
- Send message

- In Windows 8/8.1/10, Users tab provides:
- Separate processes for each user
- Performance statistics for each user

## Vendor-specific limitations

%

- End-of-life
- Different companies set their own EOL policies

- Updating
- iOS, Android, and Windows 10 check
  and prompt for updates
- Chrome OS will update automatically

- Compatibility between operating systems
- Some movies and music can be shared

- Almost no direct application compatibility
- Fortunately, many apps have been built to run on different OSes
- Some data files can be moved across systems
- Web-based apps have potential

## Volume sizes

%

- Resize a volume
- Right-click the volume for options
- Can shrink or extend

- Can split the hard drive space into 2 volumes
- e.g. 120GB into 2 60GB volumes
- Can Shrink a volume
- Can format unallocated space

- Can also create mirrored volumes

- Configuration done in Disk Management

## Why do you need an OS?

%

- Controls the interaction between components
- Memory, hard drives, keyboard, CPU

- A common platform for applications

- A way for humans to interact with the machine
- The "user interface" (either command line or GUI)
- Hardware can't do everything! Software is required

## Why upgrade?

%

- Upgrade vs. Install
- Upgrade - Keep files in place
- Install - Start over completely fresh

- Upgrading allows you to maintain consistency
- Upgrades save hours of time
- Can keep customized configurations and multiple local user accounts on the PC
- Avoids application reinstallations
- Keeps user data intact
- Get up and running quickly
- Seamless and fast
- Run from the DVD-ROM
  or USB flash

## Windows (Defender) Firewall Applet

%

- Protect from attacks
- Scans for malicious software
- Helps prevent access to resources on the local pc

- Integrated into the operating system

- Located in Control Panel under Windows (Defender) Firewall

## Windows (Defender) Firewall

%

- Integrated into the operating system

- Located in Control Panel / Windows Firewall In Windows 7 & 8

- Located in Control Panel / Windows Defender Firewall in Windows 10

- Windows Firewall with Advanced Security
- Click "Advanced settings"

- Fundamental firewall rules (basic functionality)
- Allows apps to send/receive traffic
- Based on applications
- No detailed control

- No scope can be set
- All traffic applies (inbound/outbound)

- No connection security rules
- Can't encrypt with IPsec tunnels

## Windows 7 Editions

%

- Windows 7 Starter
- Windows 7 Home Basic
- Windows 7 Home Premium
- Windows 7 Ultimate
- Windows 7 Professional
- Windows 7 Enterprise

## Windows 7 Enterprise

%

- Sold only with volume licenses
- Designed for very large organizations

- Multilingual User Interface packages

- Supports full disk encryption with bitlocker drive encryption

- Supports DVD playback, Aero, ICS, Windows Domain, EFS, etc...

## Windows 7 history

%

- Released October 22, 2009
- Mainstream support ended January 13, 2005
- Extended support until January 14, 2020

- Very similar to Windows Vista
- Maintained the look and feel of Vista
- Used the same hardware and software
- Increased performance over Windows Vista

- Updated features
- Libraries
- HomeGroup
- Pinned taskbar

## Windows 7 Home Premium

%

- The consumer edition
- DVD playback,
- Windows Aero
- Internet Connection Sharing
- IIS Web Server

- No enterprise technologies
- No domain connection, BitLocker, EFS, etc.

- Available as a x64 version and supports 16 GB of RAM and 2 processors

## Windows 7 Minimum Hardware Requirements (x64)

%

Processor/CPU - 1 GHz processor

Memory - 2 GB RAM

Free disk space - 20 GB

Video - DirectX 9 graphics device with WDDM\* 1.0 or higher driver

\*Windows Display Driver Model

## Windows 7 Minimum Hardware Requirements (x86)

%

Processor/CPU - 1 GHz processor

Memory - 1 GB RAM

Free disk space - 16 GB

Video - DirectX 9 graphics device with WDDM\* 1.0 or higher driver

\*Windows Display Driver Model

## Windows 7 Professional

%

- Same features as Home Premium

- Can connect to a Windows Domain

- Supports Remote Desktop Host and EFS

- Missing enterprise technologies - no BitLocker is supported

- Available as a x64 version and supports 192 GB of RAM

## Windows 7 Starter

%

- Built for netbooks

- No DVD playback or Windows Media Center
- No Windows Aero
- No Internet Connection Sharing (ICS)
- No IIS Web Server

- No enterprise technologies
- No Domain connection, BitLocker, EFS, etc.

- Only a 32-bit version, maximum of 2 GB of RAM
- Not supported in 64-bit version

## Windows 7 Ultimate

%

- Complete functionality

- Domain support, Remote Desktop, EFS

- Supports all enterprise technologies
- Including BitLocker

- Available as a x64 version and supports 192 GB of RAM

- Same features as Windows 7 Enterprise
- But for the home user

## Windows 8 and 8.1 history

%

- Windows 8
- Available October 26, 2012
- New user interface - no traditional "Start" button

- Windows 8.1
- Released October 17, 2013
- A free update to Windows 8 - not an upgrade
- Mainstream support ended January 9, 2018
- Extended support ends January 10, 2023

## Windows 8/8.1 7 Minimum Hardware Requirements (x64)

%

Processor/CPU - 1 GHz processor with support for PAE, NX, and SSE2

Memory - 2 GB RAM

Free disk space - 20 GB

Video - Microsoft DirectX 9 graphics device with WDDM\* driver

\*Windows Display Driver Model

## Windows 8/8.1 7 Minimum Hardware Requirements (x86)

%

Processor/CPU - 1 GHz processor with support for PAE, NX, and SSE2

Memory - 1 GB RAM

Free disk space - 16 GB

Video - Microsoft DirectX 9 graphics device with WDDM\* driver

\*Windows Display Driver Model

## Windows 8/8.1 Core

%

- A basic version for the home
- x86 and x64 versions

- Microsoft account integrates into the OS
- Login to your computer and all of your services

- Includes Windows Defender
- Integrated anti-virus and anti-malware

- Uses Windows Media Player to Play audio CDs and DVDs

- Does not support EFS, Bitlocker, Domain Member, AppLocker, BranchCache

- Available in 32-bit (Max 4 GB RAM) and 64-bit (Max 128 GB RAM)

## Windows 8/8.1 Editions

%

- Windows 8/8.1 (Core)
- Windows 8/8.1 Pro
- Windows 8/8.1 Enterprise

## Windows 8/8.1 Enterprise

%

- Available to "Software Assurance" customers
- Large volume licenses

- Supports enterprise features
- AppLocker
- Windows To Go
- DirectAccess
- BranchCache
- EFS
- Bitlocker
- Can join Windows domain

- Available in 32-bit (Max 4 GB RAM) and 64-bit (Max 512 GB RAM)

## Windows 8/8.1 Pro

%

- The professional version
- Similar to Windows 7 Professional / Ultimate

- Full support for BitLocker and EFS
- Full-disk and file-level encryption

- Can join a Windows Domain
- Support for IT management
- Group Policy support
- Centralized management of Windows devices

- Does not support AppLocker or Branchcache

- Available in 32-bit (Max 4 GB RAM) and 64-bit (Max 512 GB RAM)

## Windows 8/8.1 processor requirements

%

- PAE (Physical Address Extension)
- 32-bit processors can use more than 4 GB of physical memory

- NX (NX Processor Bit)
- Allows CPU to protect against malicious software from running

- SSE2 (Streaming SIMD Extensions 2)
- A standard processor instruction set
- Used by third-party applications and drivers

## Windows 10 Education and Enterprise

%

- Very similar features in both
- Minor features differences
- Both are managed by using Windows Volume licensing

- Granular User Experience (UX) control
- an administrator can define the user environment
- Useful for kiosk and workstation customization

- Supports:
- Hyper-V
- Bitlocker
- Can join a domain
- AppLocker (an administrator can control what applications can run)
- BranchCache (remote site file caching)

- Max x86 RAM 4 GB
- Max x64 RAM 2048 GB

## Windows 10 history

%

- Released on July 29, 2015
- Windows 9 was skipped

- A single platform that works on desktops, laptops, tablets, phones, all-in-one devices

- Upgrades were free for the first year
- From Windows 7 and Windows 8.1

- Microsoft calls Windows 10 a "service"
- Periodic updates to the OS
- Instead of completely new versions

## Windows 10 Home

%

- Designed for home user, retail customer

- Integrates with Microsoft account
- Microsoft OneDrive is used to backup your files

- Windows Defender is included
- Anti-virus and anti-malware

- Cortana is included
- Talk to your operating system

- Does not support:
- Hyper-V
- Bitlocker
- Cannot join the domain
- AppLocker
- BranchCache

- Max x86 RAM 4 GB
- Max x64 RAM 128 GB

## Windows 10 Minimum Hardware Requirements (x64)

%

Processor/CPU - 1 GHz processor with support for PAE, NX, and SSE2

Memory - 2 GB RAM

Free disk space - 20 GB

Video - Microsoft DirectX 9 graphics device with WDDM\* driver

\*Windows Display Driver Model

## Windows 10 Minimum Hardware Requirements (x86)

%

Processor/CPU - 1 GHz processor with support for PAE, NX, and SSE2

Memory - 1 GB RAM

Free disk space - 16 GB

Video - Microsoft DirectX 9 graphics device with WDDM\* driver

\*Windows Display Driver Model

## Windows 10 Pro

%

- The business version of Windows
- Additional management features

- Remote Desktop host
- Remote control each computer

- Supports:
- Hyper-V
- Bitlocker (Full Disk Encryption (FDE))
- Can join a Windows domain (Group Policy management)

- Does not support:
- AppLocker
- BranchCache

- Max x86 RAM 4 GB
- Max x64 RAM 2048 GB

## Windows 10 processor requirements

%

- Same requirements as Windows 8/8.1

- PAE (Physical Address Extension)
- 32-bit processors can use more than 4 GB of physical memory

- NX (NX Processor Bit)
- Protects against malicious software

- SSE2 (Streaming SIMD Extensions 2)
- A standard processor instruction set
- Used by third-party applications and drivers

## Windows at work

%

- Large-scale support
- Thousands of devices supported by IT

- Security concerns
- Mobile devices with important data that needs to stay safe
- Local file shares

- Wide varieties of purposes such as the Accounting Dept. working on a spreadsheet
- Or Marketing Dept. having the need to play videos

- Geographical sprawl - Not all systems are in the same building
- Need a way to managed cache data between the sites slow WAN connections

## Windows Firewall with Advanced Security

%

- Allows for a more detailed control of inbound/outbound traffic

- Can configure:
- Inbound rules
- Outbound rules
- Connection security rules

- Can also configure granular rules to specify:
- Program
- Port number
- Predefined services
- Custom Variables

- Custom variables can include options for the rule such as:
- Program
- Protocol/Port
- Scope
- Action
- Profile

## Windows on a mobile device

%

- Microsoft Windows 10
- Fully-featured tablets

- Many different manufacturers
- Touchscreen computer
- Keyboards
- Pen stylus

- Windows Mobile
- No longer in active development
- No support after December 2019

## Windows post-installation

%

- Does it work?
- If it doesn't boot, there are bigger problems
- Some testing is useful for unknown hardware
  configurations

- Additional installations
- Service packs
- Security patches
- Security applications
- Driver updates
- Application updates

## Windows Update

%

- Keeps your OS up to date - Security patches, bug fixes
- Can be configured to be installed automatically - Updates are always installed
- Can be configured to download but wait for install - You control the time
- Can be configured to check but not to download • Saves bandwidth
- Can be configured to never check - Don't do this
- Windows 10 has the option to schedule a restart after updates are completed.

## xcopy command

%

- Copies files and directory trees
- xcopy /s Documents m:\backups -- Copies directories and subdirectories except empty ones in the documents folders to drive "M:\backups" folder
