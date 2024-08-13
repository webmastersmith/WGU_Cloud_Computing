# AWS Solution Architect Associate (SAA-C03)

## Tips

- <https://www.freecodecamp.org/news/pass-the-aws-certified-solutions-architect-associate-certification/>
- **YouTube**
  - [FreeCodeCamp AWS exam tutorial (2020)](https://www.youtube.com/watch?v=Ia-UEYYR44s)
  - [FreeCodeCamp AWS exam tutorial (2024)](https://www.youtube.com/watch?v=c3Cn4xYfxJY)
    - <https://www.freecodecamp.org/news/pass-the-aws-certified-solutions-architect-associate-certification/>
- **WGU Chatter**
  - **Spencer G**: heavy focus on security so know your encryption types (at Rest, In Transit, Client\Server.) Know KMS and CloudHSM. Know your IAM policies and review policies in general. Also understand your Databases - Aurora, DynamoDB, RDBMS. Know your EFS, FSx, EBS, S3 + lifecycles. Try to look for keywords like "Serverless". Exam Dojo and Udemy can be used but I feel like they're harder than the OA since they involve connecting 2-3 services together while the OA is mainly just 1 service at a time but with more depth on that specific service. I used the Course Material Section review questions and Percipio Testprep as the bulk of study for my practice questions.
  - **JW M**: knowing S3 and its Lifecycle policies, what CloudHSM is, The different VPC Endpoints and what each one does, CloudFront, and how Aurora and NoSQL are DIFFERENT from other databases.
  - **Denise W**: heavy on encryption and the differences between Relational vs Non-relational databases.
  - [Udemy Practice Exams](https://wgu.udemy.com/course/practice-exams-aws-certified-solutions-architect-associate/)
- **AWS**
  - 100–1,000. The minimum passing score is 720.
  - [AWS Design Architecture](https://explore.skillbuilder.aws/learn/public/learning_plan/view/1044/solutions-architect-knowledge-badge-readiness-path)
  - [AWS Exam Prep](https://explore.skillbuilder.aws/learn/course/external/view/elearning/14760/exam-prep-standard-course-aws-certified-solutions-architect-associate-saa-c03)
  - [AWS Exam Practice Questions](https://explore.skillbuilder.aws/learn/course/internal/view/elearning/13266/aws-certified-solutions-architect-associate-official-practice-question-set-saa-c03-english)

## AWS Well-Architected Framework (Six Pillars)

- <https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html>
- **Operational excellence**
  - run and monitor(logging) systems. fix quickly and safely.
  - IaC reduces mistakes and increases reliability.
- **Security**
  - protect at all layers(data, systems, assets).
  - enable traceability(log of all changes and access).
  - risk assessment and mitigation strategies.
- **Reliability**
  - recover from infrastructure or service disruption.
  - dynamic recovery, scale, mitigation.
- **Performance efficiency**
  - most efficient resource selection as demand changes.
  - democratize: use ready made solutions for advanced problems.
  - mechanical sympathy: understand best way to take advantage of services, resources.
- **Cost optimization**
  - measure efficiency. eliminate unneeded expense. reduce employee overhead with managed services.
  -
- **Sustainability**

## Best Practices

- **Enable Scalability**
  - dynamic scale based on load. increase availability.
- **Automate your environment**
  - dynamic increase/decrease infrastructure.
  - automate monitoring/notifying when resources change.
- **Treat resources as disposable**
  - Infrastructure as Code (IaC). declarative control infrastructure.
  - terminate resources not in use.
- **Use loosely-coupled components**
  - avoid tightly-coupled resources.
  - ![loosely-coupled components](img/loosely-coupled.PNG)
- **Design services, not servers**
  - use AWS services to connect your infrastructure.
  - containers(docker), ephemeral(IaC), Queues handle communication between applications.
  - static assets stored in S3.
- **Choose the right database solutions**
  - acceptable latency, max concurrent users, data integrity.
- **Avoid single points of failure**
  - create secondary systems to avoid single point failure.
  - ![single point failure](img/single-point-failure.PNG)
- **Optimize for cost**
  - CapEx: capital expense. One-time investments in long-term assets. (e.g. hardware servers)
  - OpEx: operational expense. Ongoing costs associated with running the project. (e.g. software license, pay-as-you-go).
- **Use Caching**
  - request are faster, increase data throughput.
  - ![caching](img/caching.PNG)
- **Secure your entire infrastructure**
  - encrypt data transit and rest.
  - network isolation.
  - least privilege access. MFA.
  - traceability(log every change, access).
  - IaC. automation ensures consistent security.

## Definitions

- **Availability Zone (AZ)**
  - **one or more data centers** geographically separated from each other with redundant power, and networking.
  - networked together through the **AWS backbone network**.
  - **Best Practice**
    - choose AZ that protects against natural disasters.
    - latency reduction for end user.
  - ![availability zone](img/availability_zone.PNG)
- **AWS Local Zone**
  - extension of Region that is closer to end user(edge).
  - compute, storage, database **closer to large populations** where **no Region exist**. (e.g. Los Angeles Local Zone).
- **Cloud Architecture**
  - applying cloud-based technology to meet technical and business requirements.
- **Cloud Front**
  - AWS CDN(content delivery network).
  - over 200 points-of-presence (PoP), edge locations and **edge caches**. (e.g. share S3 assets all over the world).
  - ![cloud front](img/cloud_front.PNG)
- **Cloud Watch**
  - **monitor** infrastructure and **automate** scaling.
- **Data Centers**
  - location of physical servers. redundant hardware, power, cooling, and networking.
  - networked to other data centers through the **AWS backbone network**.
- **Region**
  - Geographical location with **two or more availability zones**. (e.g us-east-1, eu-west-1).
  - Most services provided by AWS are **region scoped**. (e.g. data for a service used in one region is not replicated in another region).
  - China and GovCloud regions have restricted access.
  - **Best Practices**
    - use region with lowest latency to end users.
    - complies with local government law. (e.g. where data is stored, who can access data center...).

## Storage

- **S3**
  - **object** storage service.
  - global REST URL access.
  - Eleven 9's of **durability**(not lost). 99.999999999% uptime.
  - Four 9's of **availability**(can access). 99.99% available.
  - **bucket**: name is **globally unique**. storage container.
  - **object**: asset. max single object size **5 TB**.
    - **Object Properties**
      - **key**: name used to retrieve object.
      - **version ID**: together with key uniquely identify object.
      - **value**: data you store. immutable(you **cannot change value**).
      - **metadata**: key:value properties about the object.
      - **subresources**: object specific information.
  - **New Objects**: **Read-After-Write**. new objects are available immediately.
  - **Overwrite PUTS and DELETES**: **eventual consistency**. changed objects take time to propagate.
  - **Create**
    1. name: (globally unique)
    2. region: (e.g. us-east-1)
    3. permissions: (block all public access | allow public access)
  - **Best Practices**
    - **cache** frequently accessed objects.
    - tune **retry and timeout logic** for high traffic objects.
    - **scale horizontally** for high **throughput** across network.
    - often used as a **data store** for analytics and **backup and archive** service for critical data.
- **S3 Object Access**
  - **private** and **protected** by **default**.
  - **Block Public Access**: lock bucket and objects from being accessed.
  - **IAM Policies**: good when users can authenticate using IAM.
  - **Bucket Policies**: define access to specific object or bucket.
  - **Access Control List (ACL)**: legacy access.
  - **S3 Access Point**: configure access with names and permissions.
  - **Presigned URLs**: time-limited access with temporary URLs.
  - **AWS Trusted Advisor**: free feature. bucket permission check.
  - **encryption**:
    - server-side: data encrypted on save, decrypted on download.
    - client-side: client uploads encrypted data.
  - ![S3 access](img/s3_access.PNG)
  - **Best Practices**
    - give least privilege access. (e.g. create **presigned URL** to object that **expires in 24 hours**).
- **S3 versioning**
  - enabled through bucket properties.
  - **Versioning Not Enabled**: default. no versioning.
  - **Versioning-Enabled**: once enabled, cannot change back to non-version state, only suspend.
  - **Versioning-Suspended**: bucket has been versioned, but suspended.
- **S3 Object Deletion**
  - deletions are hidden but not removed. to remove you must delete again.
- **S3 Website**
  - low cost solution to web hosting.
  - **Best Practices**
    - enable versioning.
  - ![S3 static website](img/s3_website.PNG)
  - **CORS (cross-origin resource sharing)**
    - XML document with rules that identify the origins that are allowed to access your bucket.
  - ![S3 CORS](img/S3_cors.PNG)
