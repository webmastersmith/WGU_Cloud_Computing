# D330 Data System Administrations

## Tips

- <https://quizlet.com/780746658/data-systems-administration-d330-all-questions-from-chapter-8-10-12-15-and-17-flash-cards/?x=1jqt>
- <https://quizlet.com/785412169/d330-data-systems-administration-flash-cards/>
- <https://www.linkedin.com/learning/oracle-12c-database-administration/welcome?u=2045532>
- <https://www.reddit.com/r/WGU/comments/11m6rf5/data_systems_administration_d330_pass/>
- In the "Exam Essentials" section of the book, there are 20 questions for each chapter and at the end of the book there are answers to the questions.
- <https://www.reddit.com/r/WGU/comments/158vszg/d330_data_systems_administration_pass/>
- **D330 help.docx**
  - **50% Database Management Tools**:
    - Explain the differences betwen pfile and spfile.
    - What is the Prefix for dynamic performance views?
    - Describe the Background processes and tell what they are for?
    - How do you connect to a user SQL from the command line (john with a password of ‘jyoung123’)?
    - What is the Log mode for recovery to a specific point in time?
    - What tool do you use for backup/recovery what types of backups can it do?
    - What is the Storage location for backup files?
    - What does Block change tracking do?
    - Where is the Location of the alert log file?
    - What are two advantages of transportable tablespaces (TTS)?
  - **20% Managing User Accounts**:
    - What is the privilege for starting up and shutting down database?
    - What happens at each level of startup?
    - What is the Minimum number of control files for database startup?
    - How do you allow users to viewing data without modifying table data?
    - Explain the Configuration requirement for data communication between 2 databases.
    - What is the content of a temporary tablespace?
    - What is the Information stored by undo tablespace?
    - What is the difference between USER, PROFILE, and ROLE?
    - Define storage of password objects.
    - What is Difference between WITH GRANT and WITH ADMIN options?
    - What is the command for granting minimum database access?
    - Difference between public and private schemas?
    - How to Enable a role for the current session.
    - Parameter for password complexity enforcement.
    - What are the parts and purpose of the SGA?
    - How to Configure automatic shared memory management.
  - **20% Oracle Upgrades and Migrations**:
    - Specifying external file name.
    - Identifying problems with Automatic Database Diagnostic Monitor (ADDM).
    - How to Resize components after incident start.
    - Automatically sizing components for workload management.
    - Modifying frequency of performance snapshots.
    - Parameter for password complexity enforcement.
  - **10% Backup and Restore**:
    - What is the purpose of the Shrink operation?
    - How can transaction be restored?
    - What is the DMBS_ADVISOR package?
    - What is the Purpose of storing undo data?
    - What is the purpose of the rollback segment and tablespace?
    - What does the segment advisor do?
    - What is the Resumable space feature all about?
    - How to identify and resolve deadlocks?
    - Why use Flash recovery vs. traditional backup and recovery with rman?
    - How can you prevent overwriting of undo data?
    - What is the Dynamic view and/or join for locked sessions?
- **WGU Chatter**
  - <https://www.reddit.com/r/WGU/comments/158vszg/d330_data_systems_administration_pass/>
  1. Watch these LinkedIn courses to get a basic grasp:
     1. <https://www.linkedin.com/learning/oracle-12c-database-administration>
     2. <https://www.linkedin.com/learning/oracle-database-12c-backup-and-recovery>
  2. Read the textbook **chapters 8-10,12-15,17**. Highlight stuff as necessary.
  3. Watch Dr. William Sewell's webinar that summarizes important stuff:
     1. <https://wgu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=667f1502-63b8-4662-a097-b044000cbef6>
  4. Take the pre-assessment. You will have many incorrect answers.
  5. Go through the flash cards below. First 70-ish are the pre-assessment questions, the rest are chapter end questions. I went through first 150, that should be enough. Make sure you are able to at least get all the pre-assessment questions right. <https://quizlet.com/780746658>
  6. Take pre-assessment again (should get 95% correct). I say this because there are some questions worded similarly to the pre-assessment on the OA, so making sure you score a 100% here will definitely help.
  7. Schedule the exam immediately, or if necessary, schedule after an hour or so and skim through the textbook for review in the meanwhile.
  8. I passed, but god forbid if you fail - contact the instructor. There is also a "d330 test help.docx" that you can use to brush up on specific questions, but having a solid foundation is really necessary.

## Setting up Oracle 12c Database with Docker

1. create docker file and run:
   1. oracle 12c is no longer on docker hub. To get original, download directly from oracle.
      1. <https://enabling-cloud.github.io/docker-learning/RunningOracleDockerImage.html>
   2. or just use this one:
      1. <https://github.com/MaksymBilenko/docker-oracle-12c>
      2. <https://hub.docker.com/r/truevoly/oracle-12c>
      3. `docker run -d -p 8080:8080 -p 1521:1521 truevoly/oracle-12c`
         1. it takes about 3 minutes to finish.
         2. `docker ps` // show container name.
         3. `docker logs CONTAINER_NAME` // should say 100% complete.
         4. `docker stop CONTAINER_NAME` // stop oracle database.
2. install Oracle SQL Developer for vscode:
   1. this creates a GUI to database.
   2. <https://marketplace.visualstudio.com/items?itemName=Oracle.sql-developer>
   3. or you can also download the exe installable.
   4. Once installed, find database icon in side panel. To connect:
      1. create connection name: `any_name`
      2. username: `system`
      3. password: `oracle`
      4. hostname: `localhost`
      5. port: `1521`
      6. type: `SID`
      7. SID: `xe`

Competency 4070.2.1: Performs Database Administration
Competency 4070.2.2: Manages Data Access
Competency 4070.2.3: Performs Backup and Restore
Competency 4070.2.4: Upgrades Databases

## Chapter 8: Introducing Oracle Database 12c Components and Architecture

- **List the architectural components of Oracle Database.**
  - data itself is composed of related logical units of information.
  - (DBMS) facilitates the storage, modification, and retrieval of this data.
  - relational database management system (RDBMS) is that the data consists of a set of relational objects.
  - Parent Table: table in a relational database **must have a primary key**.
  - Child Table: table where the foreign key column exists.
  - Constraint: parent-child relationship between tables.
  - ![oracle overview](img/oracle_overview.PNG)
- **Explain the memory structures.**
- **Describe the background processes.**
- **Explain the relationship between logical and physical storage structures.**
- **Use database management tools.**

## Database

- **Tablespace**
  - This is **created first**. Tablespace is a group of **data files**.
  - logical storage structure at the highest level of database.
  - ![tablespace creation](img/tablespace_creation.PNG)
  - ![database](img/database.PNG)
- **Data File**
  - file structures collectively called the **database**. each 'database' will contain multiple data files.
  - physical files that store data, rows, tables, metadata, indexes are stored in data files.
  - need to be redundant and highly available.
  - NAS or SAN supported.
  - ![datafile](img/datafile.PNG)
  - ![database](img/database.PNG)
- **Data Blocks, Extents, Segments**
  - all of these are inside data files.
  - data blocks: 8kb in size. Contains one or more **rows**. Query, database reads blocks and returns relevant info.
  - extents: collection of multiple **continuos data blocks**. It's more **efficient** to allocate relative data in large chunks.
  - segment: multiple extents. A **table** will be one segment space, no matter the size.
    - when you create a table, you create an 'oracle segment'.
  - ![segment](img/segment.PNG)
  - ![database](img/database.PNG)
- **SYSTEM tablespace**
  - oracle system use only.
  - all metadata about database is stored here.
- **UNDO tablespace**
  - oracle system use only.
  - stores previous versions of rows.
  - rollback view.
- **TEMP tablespace**
  - temporary segments, anything that doesn't need persistent storage.
  - PGA overflow.
- **Redo Log File Database**
  - database for redolog files(**transaction logs** are stored, **UPDATE**). Allow you to rebuild database on failure.
  - cyclic write(fills one file, writes to other, then goes back to first file and writes).
  - multiplexing, write to multiple logs for redundancy.
  - extension is `.log`, but they are not log files. Delete them and database cannot start.
  - ![database files](img/database_files.PNG)
  - ![redo log files](img/redolog_files.PNG)
- **Control File Database**
  - data about the physical structure of database.
  - ![database files](img/database_files.PNG)

## Oracle Instance

- **Oracle Instance**
  - Logical Memory and background processes created every time you start.
  - stores in memory the database schema(metadata) about tables.
  - runs background processes that cache queries and transactional processing(read/write).
  - each database must have one instance, and can have multiple instances.
  - ![SGA](img/SGA.PNG)
- **SGA System Global Area**
  - contains: buffer cache, shared pool, redolog buffer, large pool, java pool, streams pool.
  - shared memory structures used to cache data.
  - ![SGA](img/SGA.PNG)
- **Shared Pool**
  - `SGA_TARGET` and `SGA_MAX_SIZE` are memory parameters we can control.
  - ![SGA Sizing](img/SGA_sizing.PNG)
  - cache non-user data. Library cache, data dict cache, others
  - library cache: metadata about each sequel statement.
    - hard parse: first time statement is executed.
    - soft parse: after statement is executed in library cache.
  - database dictionary cache: metadata about database and users.
    - referential integrity, table definitions and structure(schema), indexes.
  - ![SGA Shared Pool](img/SGA_shared_pool.PNG)
- **Buffer Cache**
  - largest part of SGA memory. Stores frequently accessed database data(rows, tables) to improve efficiency.
  - stored as **oracle blocks**. Each block contains one or more rows of data.
  - Keep Pool: administrator can pin certain data into memory. Never 'ages' out of the cache.
  - ![SGA Buffer Cache](img/SGA_buffer_cache.PNG)
- **Redo Log Buffer**
  - database **transaction logs** are stored. Allow you to rebuild database on failure.
  - when changes are made to database(**UPDATE**), they need to get updated in Buffer Cache and Shared pool.
  - written periodically to file for backup. If lost, oracle database cannot start.
  - multiplexing, write to multiple logs for redundancy.
  - extension is `.log`, but they are not log files. Delete them and lose database.
  - ![redo log files](img/redolog_files.PNG)

## Oracle Instance Background Processes

- **background processes**
  - functions running in background to ensure data integrity.
  - maintenance task.
  - ![oracle instance background processes](img/oracle_instance_background_processes.PNG)
- **Database Writer**
  - when you UPDATE a table, changes are first stored in the buffer cache, then in memory changes are written to disk by the DBWn.
  - writes periodically, and when buffer cache is full.
  - **dirty blocks**: in memory(buffer cache) blocks needing to be written to disk.
- **Log Writer**
  - LGWR. Writes **RedoLog Buffer** to disk.
  - When user issues a `COMMIT;` statement, RedoLog Buffer will be written to disk.
  - or every three seconds.
- **Checkpoint**
  - CKPT. when data in memory and on disk are the same, a checkpoint is created.
  - this ensures data consistency. faster recovery process.
  - CKPT generates a unique SCN(sequential change number). writes this to control and data files.
  - ![ckpt scn](img/ckpt_scn.PNG)
- **System Monitor**
  - SMON. performs recovery during startup instance, if required.
  - clean old memory processes no longer in use.
- **Process Monitor**
  - PMON. when user session fails, cleans up PGA and Buffer Cache resources.
- **Recover Process**
  - RECO. when an action modifies data on two different databases, both must succeed.
  - cleans up failed transactions when UPDATE fails.
- **Listener Registration**
  - LREG. registers oracle instance with oracle listener.
  - oracle listener: listens for user session connections, starts the process to serve connection.
    - gateway from client to database
    - spawns a new 'Server Process' for user.
    - ![listener](img/listener.PNG)
- **Archiver Process**
  - ARCn. copy redo log file to storage after 'log switch' has occurred.
  - allows recent transactions to be reapplied after database restore from backup.
  - multiple ARC instances can be used for redundancy to store files in multiple locations.
  - ![arc](img/arc.PNG)

## Server Processes

- **Server Processes**
  - read physical file(database), loads into memory(oracle instance buffer cache).
  - listens for request from client(user session) and interacts with oracle instance.
  - verifies syntax of client statements(SELECT statements).
  - ![connection pooling](img/connection_pooling.PNG)
- **Oracle dedicated server process model**
  - each user has dedicated **PGA**(program global area, private memory) memory cache.
  - data that should not persist after user session ends, is stored in PGA.
  - not efficient for thousands of users. Uses middleware servers that stream the connections to the PGA.
  - ![connection pooling](img/connection_pooling.PNG)
- **Connection Pooling**
  - additional servers that handle multiple clients PGA.
  - ![connection pooling](img/connection_pooling.PNG)
- **PGA Program Global Area**
  - dedicated memory allocation available to each user.
  - `PGA_AGGREGATE_TARGET=20G` // control PGA size for all user.
  - ![SGA Sizing](img/SGA_sizing.PNG)
- **Memory Sizing**
  - value of total memory, allows oracle to self assign needed memory.
  - ![generic memory](img/Generic_sizing.PNG)
