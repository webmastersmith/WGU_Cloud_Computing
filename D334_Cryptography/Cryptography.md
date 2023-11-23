# Cryptography

## Tips

- https://www.reddit.com/r/WGU/comments/10q02wp/passed_introduction_to_cryptography_d334/
- https://quizlet.com/746560037/c839v5d334-additional-practice-flash-cards/
- https://quizlet.com/757601399/c839v5d334-algorithms-drill-flash-cards/
- https://drive.google.com/drive/folders/15muIPXETMkm8O4wR2ydhvJGXNF29v1C6
- https://studylib.net/doc/25995752/shawns-c839v5-d334-all-in-one-study-guide-1
- https://quizlet.com/Jose_Hernandez246/folders/108440218/sets
- https://www.youtube.com/playlist?list=PLCpo5JCOaimi8Ot328oQWGL73bT3O0ibc
- https://www.reddit.com/r/WGU/comments/11pvlg3/failed_introduction_to_cryptography_d334/
- https://www.studocu.com/en-us/document/western-governors-university/legal-issues-in-information-security/how-to-pass-c839-intro-to-cryptography-2994/36521132
- https://www.reddit.com/r/WGU/comments/v0szcv/thirdterm_bscc_c173_c916_c175_c839/
- https://www.reddit.com/r/WGU/comments/v9plvw/passed_c839d334_intro_to_cryptography/
- https://www.khanacademy.org/computing/computer-science

## WGU Tips

Chapter 2 Summary
Webex meeting recording: Chapter 2 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=11ae0fc01ef3146e29f3def3c20cc295

Chapter 3 Summary
Webex meeting recording: Chapter 3 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=5585101366429fd1c6ebdfbb8774af88

Chapter 4 Summary
Webex meeting recording: Chapter 4 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=66510775337a1d7dd17606335f86f15b

Chapter 5 Summary
Webex meeting recording: Chapter 5 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=881e20011a4e41e2fbc6098ec52a1bd2

Chapter 6 Summary
Webex meeting recording: Chapter 6 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=7d211a50d793869dfda4c34b900e8efb

Chapter 7 Summary
Webex meeting recording: Chapter 7 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=96771c992d911855f55fbc96487ef478

Chapter 8 Summary
Webex meeting recording: Chapter 8 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=86e2b75e058eaa3207a1efc71fbc2a71

Chapter 9 Summary
Webex meeting recording: Chapter 9 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=755d2552b1c36fe8f051b9b91e84ca05

Chapter 10 Summary
Webex meeting Recording: Chapter 10 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=204455271930ab7c9280faed0e9e516d

Chapter 12 Summary
Webex meeting recording: Chapter 12 Summary
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=d14aead54d8192afa00690e026ae5276

Topic covered was PKIs
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=4951ceffe4b5807a18eb82607ee842c0

Topic covered was Cipher Modes
Recording link: https://wgu.webex.com/wgu/ldr.php?RCID=aeb7d2d305685b241c488b601ed1f4bd

## Exam Preparedness

To prepare for the objective assessment, ask yourself these questions:

## Section 01 Ciphers and Fundamentals

- **Binary AND, OR, XOR**:
  - ![binary or and xor](./img/binary_or_and_xor.jpg)
  - **AND** both must be true. '1'. 0,0=0. 1,0=0. 0,1=0. 1,1=1.
  - **OR** only one needs to be true. '1'. 0,0=0. 1,0=1. 0,1=0. 1,1=1.
  - **XOR** only a true and false = '1'. 0,0=0. 1,0=1. 0,1=1. 1,1=0.;
- **Authentication**: It is the process of verification of the identity of the person.;
- **Encryption**:
  - simplest terms, changing plaintext into ciphertext.
  - encryption should be done at rest and in transit.;
- **Decryption**: changing ciphertext into plaintext.;
- **Authorization**: It refers to the process of granting or denying access to a network resource or service. Most of the computer security systems that we have today are based on a two-step mechanism. The first step is authentication, and the second step is authorization or access control, which allows the user to access various resources based on the user’s identity.;
- **Confidentiality or privacy**: It means the assurance that only authorized users can read or use confidential information. When cryptographic keys are used on plaintext to create ciphertext, privacy is assigned to the information.;
- **Integrity**: Integrity is the security aspect that confirms that the original contents of information have not been altered or corrupted. There should be not any kind of modification with information while its transport over the network.;
- **Non-repudiation**: Non-repudiation makes sure that each party is liable for its sent message. Prevents someone from communicating and then denying it occurred, occurred at a different time, or even deny receiving any piece of information.;
- **Monoalphabetic Cipher**: code or substitution is where a single mapping from our alphabet to a cipher alphabet is created. Many early cryptosystems used this.;
- **Polyalphabetic Cipher**:
  - refers to the mapping of our alphabet to a number of cipher alphabets. This approach added a bit of complexity to early cryptosystems.
  - In a polyalphabetic cipher, each letter can be replaced by multiple ciphertext letters based on its position within the plaintext. The Vigenère cipher is an example of a polyalphabetic cipher.;
- **Pigpen Cipher**:
  - ![pigpen cipher](./img/Pigpen_cipher_key.png)
  - Mono-alphabetic substitution cipher that makes use of mapping plaintext characters to graphical characters rather than to alphabetic. ones. i.e. A=(pick a symbol), vs A=(pick a letter). Disadvantage -once the mapping is known, it is difficult to keep the message secret.;
- **Rail Code Cipher**:
  - ![rail fence cipher](./img/rail-fence-cipher.png)
  - Employs a method to scramble text by writing it in a sequence across a number of rails.;
- **BIFID Cipher**:
  - ![BIFID Cipher](./img/bifid_cipher.PNG)
  - Makes use of a grid and which maps the letters into numeric values.;
- **Playfair Cipher**:
  - ![playfair cipher](./img/Playfair_Cipher.png)
  - The Playfair cipher uses a 5×5 grid of letters, and encrypts a message by breaking the text into pairs of letters and swapping them according to their positions in a rectangle within that grid "HI" becomes "BM".;
- **Morse Code Cipher**:
  - ![morsecode cipher](./img/morsecode.webp)
  - Encoding method, rather than a cipher, that works by translating characters into sequences of dots (.) and dashes (-).;
- **Caesar Cipher**:
  - ![Caesar Cipher](./img/Caesar_cipher_left_shift_of_3.svg)
  - Mono-alphabetic substitution cipher known as "shift" cipher. Involves plaintext being replaced by a letter some fixed number of positions down the alphabet. i.e., a Caesar Cipher using a shift of +3 would mean a plaintext letter A would result in a ciphertext letter D (a shift of three positions to the right in the alphabet).;
- **Vigenere Cipher**:
  - ![Vigenere Cipher](./img/vigenere_Cipher.webp)
  - Polyalphabetic cipher that involves using a different mapping, based on a keyword, for each character of the cipher. An advantage of this type of cipher is that the same plaintext character is likely to be coded to different mappings, depending on the position of the keyword, making guessing more difficult.;
- **One Time Pad Cipher**:
  - ![one time pad](./img/one_time_pad.png)
  - Cipher code mapping that is used only once. Advantage is it is essentially unbreakable, disadvantage is it takes lots of work as you'd have to generate the pad to be used, each time. **Each key(pad) must be same size as message**. True Random Number Generators take time to create random data.;
- **Four-square Cipher**:
  - ![Four Square Cipher](./img/four_square_cipher.jpg)
  - Uses four 5 × 5 matrices arranged in a square, are where each matrix contains 25 letters for encoding and decoding operations.;
- **Enigma Machine**: Used a **polyalphabetic** substitution cipher, which did not repeat within a reasonable time period, along with a secret key. For the cracking of the Enigma cipher, the challenge was thus to determine both the algorithm used and the key. Enigma’s main weakness, though, was that none of the plain text letters could be ciphered as itself.;
- **Digital Signatures**: Authentication and Non-repudiation.
  1. Sender encrypts **hash** of media with **private** key.
  2. Receiver decrypts signature with **senders public** key and compares hash of media with decrypted hash of signature.
  3. If both match, only the sender could sign media and media **integrity** is assured.;
- **Pseudo-Random Number Generators (PRNGs)**:
  - https://www.youtube.com/watch?v=GtOt7EBNEwQ
  - This method repeats the random numbers after a given time (**periodic**). They are fast and are also **deterministic** and are useful in producing a repeatable set of random numbers. If the seed value(some number) is the same, the generator will produce the same results. The **seed number will eventually be exhausted and repeat**;
- **True Random Number Generators (TRNGs)**:
  - This method generates a true random number and uses some form of random process. One approach is to monitor the movements of a mouse pointer on a screen or from the pauses between keystrokes or monitor static(noise) for random seed.
  - Overall, the method is generally slow, especially if it involves human interaction, but is **non-deterministic** and **aperiodic**.;
- **Frequency Analysis**:
  - cipher cracking methodology that involves identifying patterns and **variations in the probability** of codes.
  - example. a three-letter ciphered text combination spotted at the beginning of a string too often could tip us off that those three letters correlate the letters **'THE'** in the English alphabet. The most common letter is **'e'**. Slowly solving the mapping of the cipher to the plain text.;
- **Entropy**:
  - measures level of **unpredictability(randomness)** in encryption process.
  - more entropy, harder to crack.;
- **Two common binary to character encoding methods**:
  1. **ASCII** (8-bit values, up to 256 characters)
  2. **UTF-16** (16- bit values, up to 65,536 characters).;
- **Hardware vs Software encryption**: Hardware encryption is **more efficient(faster)** than software encryption.;
- **Hardware Security Module (HSM)**: is a **tamper-evident and intrusion-resistant physical device that creates, safeguards and manages cryptographic keys**.;
- **Trusted Platform Module (TPM)**: is a dedicated card **inside computer that handles hardware-level encryption** allows the use of full disk encryption on a hard drive in a manner that minimizes the impact on system performance. TPM contains the encryption keys.;
- **What is a Prime Number**:
  - Only factors are **1 and itself**.
  - Used extensively in public key encryption.;
- **Combination vs Permutation**:
  - **combinations**: are not concerned with the order
  - **permutations**: all options considered incuding sequence.;
- **Explain Probability Theory**:
  - **Likelihood of an event happening** by understanding the chances of how each of the elements involved interact.
  - **Dependent, Independent, and mutually exclusive**.;
- **Explain the Modulus Operator in Math**:
  - using the **'mod'** or **'%'** symbol.
  - **10 % 2 = 0**: only the remainder will be looked at.
  - **9 mod 2 = 1**: only the remainder.;

## Section 02 Secret Key Encryption

- **Secret-Key Encryption**:
  - **Symmetric encryption**. One key encrypts/decrypts.
  - Much faster encryption/decryption than asymmetric.
  - Since the same key is used for both encryption and decryption in symmetric cryptography, a challenge that exists is **finding a secure way to share or transport the key** between the entity encrypting and the one decrypting.
  - PKI solves this.;
- **Public-Key Encryption**:
  - **Asymmetric encryption**. Two keys. Public/Private.
  - Only public key can decrypt private key. Only private key can decrypt public key.
  - PKI(pulic key infrastructure) is used transport and **share the symmetric key**.
  - With Public/Private keys you can **Authenticate Identities**.;
- **Diffie-Hellman**:
  - fundamental cryptographic protocol used to establish a secure shared secret between two parties over an insecure communication channel.
  - **securely exchanging cryptographic keys over a public channel**.
  - because asymmetric(public/private) key decryption/encryption is slow, sharing the mush faster symmetric key secret over public channels is what Diffie-Hellman algorithm does.;
- **Two types of Symmetric Encryption**:
  - **Symmetric Block Encryption**:
    - **grouping data into blocks** and encrypting the individual blocks.
    - padding is used to fill blocks to operating size when the data does not fit perfectly.
    - Symmetric block ciphers manage how blocks of data are processed through block cipher mode implementations. For instance, one may choose to use the DES block cipher configured with ECB as the mode of operation.
    - Common block cipher modes covered in this course include ECB, CBC, CFB, OFB, and CTR.
    - CTR can be run in parallel(do not rely on the previous block) and essentially allow the block cipher to operate like a stream cipher.
  - **Symmetric Stream Encryption**:
    - much **faster than block** and can typically be applied in real-time applications. symmetric stream encryption involves **encrypting one bit at a time**, i.e., a synchronous stream.;
- **Work Factor**:
  - **All current cipher codes are crackable** and a measure of the security of a code is the **amount of time it would take to break the code** based on the computational power available. This is often referred to as the work factor. As processing power magnifies, security of current ciphers decreases.;
- **Salting**:
  - **Passwords**:
    - if you hash the same word, you get the same results. Rainbow tables take advantage of this and hash common passwords, then compare their table with a database 'hashed passwords'(because nobody stores passwords in plaintext) to find matches.
    - because of the time involved, usually these tables are made in advance.
    - Salt adds randomness. This makes it impractical to use pre-created Rainbow tables.
  - **Initialization Vectors**:
    - when creating encrypted blocks, the same block will produce the same results.
    - adding in randomness increases the entropy.
    - ensure that the **ciphertext does not give the original plaintext when played back**.;
- **Describe Block Cipher**:
  - ![block cipher mode](./img/block_cipher_mode.PNG)
  - Outline how the blocks will be handled depending on the implementation selected (i.e., which mode is used). Implementation selection can be based on anything just as type of cipher can. Factors can include security needs or not, processing capacity, organization preference and so on.;
- **Electronic Code Book (ECB)**:
  - The IV and Secret will be the same size bits as the 'block'.
  - Start: **PlainText XOR Secret Key = CipherText Block**.
  - Next Block: **PlainText XOR Secret Key = CipherText Block**.
  - Padding is added if not enough data to fill block.
  - Pros: good for short messages < 1 block.
  - Cons: Can be easily broken. Same text will result in same CipherText Block.
  - The Secret Key and PlainText will use **eXclusive OR**, boolean logic. This process allows you to recover the hidden bit.
  - XOR rules: compare two bits, if opposite = 1, if same = 0.
  - **Encrypt**

| Description: Create CipherText     | nibble |
| ---------------------------------- | ------ |
| plaintext in binary                | 1001   |
| secret key in binary               | 0011   |
| ---------------------------------- | ------ |
| XOR to create ciphertext in binary | 1010   |

- **Decrypt**

| Description: Create PlainText      | nibble |
| ---------------------------------- | ------ |
| secret key in binary               | 0011   |
| ciphertext in binary               | 1010   |
| ---------------------------------- | ------ |
| XOR to create plaintext in binary  | 1001   |

- ![Electronic code book cipher](./img/ecb_cipher.PNG)
- ![cipher](./img/ciphers.PNG);
- **Cipher Block Chaining (CBC)**:
  - The IV and Secret will be the same size bits as the 'block'.
  - mnemonic: Chaining is plain.
  - Start: **(IV XOR PlainText) XOR Secret Key = CipherText Block**.
  - Next Block: **(Previous CipherText Block XOR PlainText) XOR Secret Key = CipherText Block**.
  - Pros: More secure than ECB.
  - Cons: No parallelism. IV and Secret Key must be know to both parties.
  - ![cipher block cipher](./img/cbc_cipher.PNG)
  - ![ciphers](./img/ciphers.PNG);
- **Cipher Feedback (CFB)**:
  - The IV and Secret will be the same size bits as the 'block'.
  - mnemonic: Feedback is a secret.
  - Start: **(IV XOR Secret Key) XOR PlainText = CipherText Block**.
  - Next Block: **(Previous CipherText Block XOR Secret Key) XOR PlainText = CipherText Block**.
  - The only difference between CFB and CBC, The Secret Key and PlainText are reversed.
  - Pros: Can create a 'streaming mode'. No need of padding.
  - Cons: IV and Secret Key must be known by both parties.
  - ![cipher feedback](./img/cipher_feedback.PNG)
  - ![ciphers](./img/ciphers.PNG);
- **Output Feedback (OFB)**:
  - The IV and Secret **do not** have to be the same size as the 'block'.
  - Start: **(IV XOR Secret Key = SecretCipher) XOR PlainText = CipherText Block**.
  - Next Block: **(Previous SecretCipher XOR Secret Key) XOR PlainText = CipherText Block**.
  - Pros: Bit error in CipherText Block do not propagate. PlainText can be any size.
  - Cons: IV and Secret Key must be known by both parties. Vulnerable to modification attack. Not parallelizable.
  - ![output feedback cipher](./img/output_feedback_cipher.PNG)
  - ![ciphers](./img/ciphers.PNG);
- **Counter Mode Cipher**:
  - The Counter and Secret will be the same size bits as the 'block'.
  - Start: **(Counter(Nonce) XOR Secret Key) XOR PlainText = CipherText Block**.
  - Next Block: **(Counter +n XOR Secret Key) XOR PlainText = CipherText Block**.
  - Pros: Parallelism. Not vulnerable to Oracle attacks. Efficient.
  - Cons: Counter and Secret must be known by both parties. Not safe for small blocks of text < 128 bits.
  - ![Counter Mode Cipher](./img/counter_mode_cipher.PNG)
  - ![Ciphers](./img/ciphers.PNG);
- **Explain Conventional Symmetric Block Ciphers**:
  - mnemonic: **3xBIRDS(64 block size) in a CART(two RR's. 128 block size)**
  - **Bold** means testable!

| Name     | Block Size (In Bits)   | Key Size (In Bits)                       | Rounds                  |
| -------- | ---------------------- | ---------------------------------------- | ----------------------- |
| 3DES     | **64**                 | **112**                                  | **48**                  |
| XTEA     | **64**                 | **128**                                  | Variable (64 suggested) |
| Blowfish | 64                     | 32 - 448 (**common = 128, 192, or 256**) | 16                      |
| IDEA     | **64**                 | **128**                                  | **>17**                 |
| RC2      | **64**                 | 1-128 (**suggested minimum = 40**)       | 18                      |
| DES      | **64**                 | **56**                                   | **16**                  |
| Skipjack | **64**                 | **80**                                   | 32                      |
| -        | -                      | -                                        | -                       |
| Camellia | 128                    | 128, 192, OR 256                         | 18 or 24                |
| AES      | **128**                | **128, 192, OR 256**                     | 10, 12, or 14           |
| RC5      | **32, 64, or 128**     | **0-2048**                               | 0-255                   |
| RC6      | Variable (common =128) | Variable (common = 128, 192 or 256)      | 20                      |
| Twofish  | 128                    | 1-256 (**common = 128, 192, or 256**)    | 16                      |

;

- **Explain Conventional Symmetric Stream ciphers**:
  - mnemonic: ChaCha Roberto!
  - **Bold** means testable!

| Name   | Description                           |
| ------ | ------------------------------------- |
| ChaCha | 256 bit key size. 3 x faster than AES |
| RC4    | **1 - 256 bit key size**. 1 round     |

;

## Section 03 Hashing

- **Explain Hashing**:
  - https://www.youtube.com/watch?v=HMoFvRK4HUo&list=PLIFyRwBY_4bTwRX__Zn4-letrtpSj1mzY
  - describes **one-way or irreversible encryption** used for protecting the integrity of data and in authentication applications.
  - Hashing is normally used to either hide the original contents of a message (such as **hiding a password**), or to check the **integrity of data**.
  - Hashing involves taking a **variable length input** and producing a **fixed length output** (message digest).
  - A weakness of one-way hashing is that the **same piece of plaintext** will result in the **same ciphertext** (unless **salt** is applied).;
- **Hash Collision**: occurs when **two different input** values that **produce the same hash signature**. Different files produce the same hash value, rare but possible. Collision attacks exploit this.
  - Also called **Hash Similar Context**, **Pre-image attack**, and **Hash Full context**.;
- **Apache-defined APR1 Hash**: format that addresses the problems of **brute forcing an MD5 hash**, and basically iterates the hash value 1,000 times.;
- **SHA method**: **does not have a salted value**. SHA produces a 160-bit signature, thus can contain a larger set of hashed value than MD5, but because there is **no salt it can be open to rainbow table attacks**, and also brute force. (A **rainbow table** is a collection of precomputed hash values of actual plaintext passwords used for password cracking.);
- **HMAC**: is a message authentication code (MAC) that can be used to **verify the integrity and authentication** of the message. It involves hashing the message with a secret key, and thus differs from standard hashing, which is purely a one-way function.;
- **Passwords which use a hashed value can be cracked by**: either with **rainbow tables** or **brute force**. An improved method of generating passcode is to generate a different one each time based on an initial seed value or based on time. One Time Passwords, Timed One Time Password, Hashed One Time Password.;
- **One Time Passwords (OTP)**: This allows a new **unique password to be created for each instance**, based on an initial **seed**.;
- **Timed One Time Password (TOTP)**: This allows for a new **unique passcode to be created for each instance**, based on an **initial seed and for a given time period**.;
- **Hashed One Time Password (HOTP)**: This allows a new unique passcode to be created each instance, based on a **counter value and an initial seed**.;
- **Time Stamp Protocol (TSP)**: cryptography method to give a **verifiable** method that a **data entity was created at a defined time**.;
- **Explain Coventional Hash Ciphers**:
  - mnemonic: MD. Shyamalan (like M. Night Shyamalan -the movie director)
  - **Bold** means testable!

| Name    | Hash Value (In Bits) |
| ------- | -------------------- |
| MD2,4,5 | **128**              |
| MD6     | 1 - 512              |
| SHA-1   | **160**              |
| SHA-2   | 256,384,512          |
| SHA-3   | variable             |
| SHA-256 | 256                  |
| SHA-512 | 512                  |

;

## Section 04 Public Key

- **Advantage of Signing**: file integrity. sender non-repudiation.;
- **Explain Public/Private Keys**:
  - Makes use of a **key pair**.
  - The public key can only decrypt a private key encryption and the private key can only decrypt a public key encryption. They are mathematically linked this way.
  - It's like a lockbox that has two types of keys(public/private). Only one person has the ability to open the lock(private key), many people have the ability to lock it(public key). Any person w/public key can put something in the lockbox and lock it, but only the person w/ the private key can open it.;
- **4 Steps to Message Sending Public Key Cryptography W/O Hashing**:
  1. Sender encrypts message with Sender private key(Signed).
  2. Sender encrypts Signed message with Client public key.
  3. Client decrypts message with it's private key.
  4. Client then decrypts Sender signature with Senders public key(non-repudiation but no integrity).
- **5 Steps to Message Sending Public Key Cryptography W/ Hashing**:
  1. Sender creates hash of file and encrypts hash with Sender private key(Signed).
  2. Sender encrypts message and hash with Clients public key.
  3. Client decrypts message with Client's private key.
  4. Client then decrypts Sender hash with Senders public key(non-repudiation).
  5. Client computes hash of message and compares this to the Sender's hash of original file. If both match, file integrity is assured.;
- **Explain Conventional Asymmetric Ciphers**:
  - mnemonic: DEER
  - **Bold** means testable!

| Name           | Description                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------ |
| DSA            | discrete logarithm. signature generation, signature verification                                 |
| ECC            | Improved over RSA. Key exchange and signatures.                                                  |
| El Gamal       | encryption and digital signing                                                                   |
| RSA            | 1024-4096 bit key size. Partially homomorphic. Prime numbers. Encryption,Signatures,Key Exchange |
| Diffie-Hellman | Key Exchange                                                                                     |

;

## Section 05 Key Exchange

- **How was the sharing of secret keys solved**:
  - The **major problem** of secret-key encryption is **how to pass the key** between the entity encrypting and the entity decrypting.
  - **Diffie-Hellman** is a widely used **key exchange algorithm** used to exchange the secret key in symmetric cryptography.;
- **The two main methods for key exchange in symmetric cryptography**:
  1. use a **key exchange algorithm** (such as Diffie-Hellman).
  2. encrypt the key with the recipient’s public key, pass it to the other side and then allow the recipient use their private key to decrypt it i.e., via **public key encryption**.;
- **Forward Secrecy**: compromise of a secret key does not compromise the confidentiality of past communication.;
- **Sesson Key**: one time use key for each session(log-in, log-out).;
- **Ephemral Keys**: One time use. With ephemeral key methods, a **different key is used for each connection**, and, again, the leakage of any long-term key would not cause all the associated session keys to be breached.;
- **Diffie-Hellman DHE_EXPORT Downgrade Attack**:
  - The vulnerability arises when servers support the **export-grade 512-bit or 1024-bit Diffie-Hellman groups**, which were historically used for export compliance reasons but are now considered weak.
    - Laws were passed in the United States that resulted in the crippling of encryption software that was distributed outside of the United States(purposefully added a backdoor).
    - https://en.wikipedia.org/wiki/Crypto_Wars: "The longest key size allowed for export without individual license proceedings was 40 bits, so Netscape developed two versions of its web browser. The "U.S. edition" had the full 128-bit strength. The "International Edition" had its effective key length reduced to 40 bits by revealing 88 bits of the key in the SSL protocol. Acquiring the 'U.S. domestic' version turned out to be sufficient hassle that most computer users, even in the U.S., ended up with the 'International' version, whose weak 40-bit encryption could be broken in a matter of days using a single personal computer."
  - The DHE_EXPORT Downgrade attack involves forcing the key negotiation process to default to **512-bit prime numbers**. For this the client only offers DHE_EXPORT for the key negotiation, and the server, if it is setup for this, will accept it. The **precomputation of 512-bit keys** with g values of 2 and 5 (which are common) **are within a reasonable time limits**.;
- **Methods to combat the Diffie-Hellman Downgrade attacks**:
  1. **Disabling Export Cipher** Suites negotiation.
  2. Using (Ephemeral) **Elliptic-Curve Diffie-Hellman (ECDHE)**.
  3. Use a **strong group**(larger the better prime number).
     - Common Diffie-Hellman groups:
     1. Group 1:
        1. Prime pp is 768 bits.
        2. Generator gg is typically 2.
     2. Group 2:
        1. Prime pp is 1024 bits.
        2. Generator gg is typically 2.
     3. Group 5:
        1. Prime pp is 1536 bits.
        2. Generator gg is typically 2.;
- **Diffie-Hellman man in the middle attack**: methods have been used extensively to create a shared secret key but suffers from **man-in-the-middle attacks**, where an attacker sits in-between and passes the values back and forward and negotiates two keys: one between a sender and the attacker, and the other between the receiver and the attacker. An **improved method is to use public key encryption**.;
- **Diffie-Hellman strength relates to what**: the size of the **prime number bases** which are used in the key exchange. bigger prime, more entropy.;

## Section 06 Authentication and Digital Certificates

- **Common Certificate Applications**: Server authentication, Client authentication, Code signing, Email signing, Time stamping, IP security, Windows hardware driver verification, Smart card logon, Document signing, Public key transport.;
- **Common Certificate Types**:
  - IKE
  - PKCS 7
  - PKCS 10
  - RSA signatures
  - X.509v3;
- **Pubic-Key Cryptography Standards (PKCS) 5, 7, 10, 12**:
  - **PKCS 5** Used for password-based encryption.
  - **PKCS 7** Used to sign and/or encrypt messages for PKI.
  - **PKCS 10** A standard format used for requesting digital certificates from certificate authorities.
  - **PKCS 12** Used to bundle a private key with its X.509 certificate or to bundle all the members of a chain of trust.;
- **Common X.509 Certificate types**:
  - **.cer** (used with both PEM and DER formats), others - **.crt, .pem, .key** (common with
    PEM formats) and .der (common with DER formats).
- **What is Certificate Revocation List (CRL) and who publishes it**:
  - Certificates listed here cannot be trusted.
  - CRL must be published by the CA who originally generated the targeted certificates.;
- **Certificate Revoked**: private key breach.;
- **Certificate Hold**: investigation has show a possible breach of the private key.;
- **Certificate Revocation Key Compromise**: This defines that the private key has been compromised.;
- **Certificate Revocation CA Compromise**: This defines that the CA has been compromised.;
- **Certificate Revocation Affiliation Changed**: This defines that the certificate affiliation defined within the certificate has changed.;
- **Certificate Revocation Superseded**: This defines that there is an updated certificate, and that this certificate is not valid any more.;
- **Certificate Revocation Cessation Of Operation**: This defines a generic reason of a termination of the certificate, such as where a company has gone in liquidation.;
- **Certificate Revocation Certificate Hold**: This defines where a hold is placed on a certificate.;
- **Certificate Revocation Remove from CRL**: This is where a remove is defined from the list.;
- **Certificate Revocation Privilege Withdrawn**: This defines where a privilege to sign certificates has been removed.;
- **end-to-end authentication**:
  - the user authenticates themselves to the end service.;
- **intermediate authentication**:
  - only part of the conversation between the entities is authenticated.;

## Section 07 Tunneling

- **Most common tunneling protocols**:
  - PPTP. Point-to-point tunneling protocol. Created by Microsoft.
  - L2TP. Layer 2 Tunneling protocol. Cisco Microsoft, Ascent and 3Com created it. Layer 2 protocol.
  - IPSec. VPN protocol. Open standard. Encryption and Authentication.;
- **SSL Risk**:
  - export-grade ciphersuites -created to comply with government export regulations, they were made weak and crackable.
  - DROWN, POODLE, FREAK are SSL risk.;
- **SSL/TLS**: creates tunnel w/ symmetric key(AES or RC4). Hash is created with MD5 or SHA.;
- **VPN**: tunnel over public network.;
- **IPSec ESP, ESP Tunnel/Transport Mode**:
  - encapsulated security protocol. encrypts payload.
  - Transport Mode. only payload is encrypted. Has a weakness with replay attack. fix with Tunnel mode.
  - Tunnel mode. whole packet is encrypted and new IP is added to it.;
- **IPSec AH, AH with Tunnel/Transport Mode**:
  - Authentication Header.
  - Transport mode. AH header inserted between ip and packet. does not encrypt anything. just verifies authenticity.
  - Tunnel Mode. new ip header and AH is added on. packet is unchanged. does not encrypt anything. only used for verifying authenticity.;
- **IPSec Transport Mode**: end-to-end encryption. only payload is encrypted. device to device, so even the network can't see traffic;
- **IPSec Tunnel Mode**: complete packet is encrypted and new header is attached to packet. only encrypted once leaves network;
- **IPSec Port**: UDP 500. Key exchange. IP Protocol has the value 50 defined in IP header for ESP and 51 for AH.;
- **Internet Key Exchange (IKE)**: how IPSec does handshake to agree on auth methods. ;
- **Onion Router**: routing using only subscriber computers instead of publicly available ones.;
- **TOR network**: network of computers around the world that route traffic. Each hop reduces a persons ability to track you.;

## Section 08 Crypto Cracking

- **Two backdoors in cryptography**:
  - the two main methods which could be used are
  - **Key escrow**. This is where a copy of the encryption key is kept in escrow so that it can be used by a government agent.
  - A **NOBUS (‘nobody but us’)** backdoor. This is where it is mathematically possible for government agents to crack the encryption, but no-one else can.;
- **Exhaustive search Cipher Attack**: Where the intruder uses brute force to decrypt the ciphertext and tries every possible key.;
- **Known plaintext Cipher Attack**: Where the intruder knows part of the ciphertext and the corresponding plaintext. The known ciphertext and plaintext can then be used to decrypt the rest of the ciphertext.;
- **Man-in-the-middle Cipher Attack**: Where the intruder is hidden between two parties and impersonates each of them to the other.;
- **Chosen-ciphertext Cipher Attack**: Where the intruder sends a message to the target, this is then encrypted with the target’s private key and the intruder then analyses the encrypted message. For example, an intruder may send an e-mail to the encryption file server and the intruder spies on the delivered message.;
- **Active Cipher Attack**: Where the intruder inserts or modifies messages.;
- **The replay system Cipher Attack**: Where the intruder takes a legitimate message and sends it into the network at some future time.;
- **Cut-and-paste Cipher Attack**: Where the intruder mixes parts of two different encrypted messages and is able to create a new message. This message is likely to make no sense but may trick the receiver into doing something that helps the intruder.;
- **Time resetting Cipher Attack**: Some encryption schemes use the time of the computer to create the key. Resetting this time or determining the time that the message was created can give some useful information to the intruder.;
- **Time Cipher Attack**: This involves determining the amount of time that a user takes to decrypt the message; from this the key could be found.;
- **AES poor implementation of the encryption method**: leaves it susceptible to attacks such as: Brute force, use of Non-Random Numbers, and copy-and-paste.;
- **RSA suffers from**: several weaknesses and is susceptible to numerous attacks and cracking methods.;

## Section 09 Light-Weight Cryptography

- **Why is light-weight cryptography needed**:
  - Most conventional cryptosystems require too much processing power; too much physical space; and consume too much battery power for implementation in IoT, embedded SYSTEMS, and RFID.
  - Light-weight cryptography essentially consists of cryptosystems able to support IoT, embedded systems, RFID etc. (i.e. provide cryptographic functions but require less processing power, physical space, and battery power than conventional cryptosystems).;
- **NIST Device Spectrum**:
  - **Conventional cryptography**. Servers and Desktops. Tablets and smart phones.
  - **Light-weight cryptography**. Embedded Systems. RFID and Sensor Networks.;
- **Quantum computers**: have fast multiplication circuits, and thus can be used to perform multiplications and search a range of prime numbers at a speed which would break most existing RSA implementations.;
- **Merkle tree**: is a tree that defines each non-leaf node with a value or a label and contains a hash of its children. This builds a hash trees and is used to provide a verification of large-scale data structures.;
- **Lattice-based cryptography**: uses asymmetric cryptographic primitives based on lattices. It has been known about for several decades, and is now being investigated because of its quantum robustness, whereas many of the existing public key methods such as RSA and Diffie-Hellman cryptosystems can be broken with quantum computers.;
- **Explain common Light-weight Symmetric Block ciphers**:
  - mnemonic: xCRISP(i=sImon)
  - **Bold** means testable!

| Name    | Block Size (In Bits)    | Key Size (In Bits)                   | Rounds                     | Key attributes for light-weight suitability                        |
| ------- | ----------------------- | ------------------------------------ | -------------------------- | ------------------------------------------------------------------ |
| XTEA    | **64**                  | **128**                              | Variable (64 recommended)  | **Fast speed.**                                                    |
| CLEFIA  | **128**                 | **128, 192 and 256**                 | 18, 22, OR 26              | Variable key size and rounds.                                      |
| RC5     | **32, 64, or 128**      | **0-2048**                           | Variable 0-255             | **Conventional method suitable for light-weight implementations.** |
| SIMON   | **32, 48, 64, 96, 128** | **64, 72, 96, 128, 144, 192 or 256** | Variable (32 or 44 common) | **Optimized for hardware implementations.**                        |
| SPECK   | 32, 48, 64, 96 or 128   | Variable                             | Variable (32 or 44 common) | **Optimized for software implementations.**                        |
| PRESENT | **64**                  | **80 or 128**                        | **32**                     | **considered as an AES replacement**                               |

;

- **Explain Common Light-weight Symmetric Stream ciphers**:
  - mnemonic: tGERM
  - **Bold** means testable!

| Name      | Key Size (In Bits) | Initialization Vector (IV) Size (In Bits) |
| --------- | ------------------ | ----------------------------------------- |
| Trivium   | **80**             | **80**                                    |
| Grain     | **80**             | 64                                        |
| Enocoro   | **128**            | **64**                                    |
| Rabbit    | **128**            | **64**                                    |
| Mickey v2 | **80**             | **Variable up to 80**                     |

;

- **Explain light-weight hashing ciphers**:
  - mnemonic: PLUS(u=Quark)
  - **Bold** means testable!

| Name        | Hash Value (In Bits)         | Key attributes for light-weight suitability                                         |
| ----------- | ---------------------------- | ----------------------------------------------------------------------------------- |
| PHOTON      | 80, 128, 160, 224 or 256-bit | Small memory footprint.                                                             |
| Lesamnta-LW | 256                          | Small memory footprint. **5 times faster than SHA-256**. **short message hashing**. |
| Quark       | **64 or 112**                | Small memory footprint. **hashing and in stream encryption**.                       |
| SPONGENT    | 88, 128, 160, 224 or 256     | Small memory footprint.                                                             |

;

- **Explain light-weight Signing ciphers**:
  - mnemonic: Chase (Bank) Key.
  - **Bold** means testable!

| Name    | Key Size (In Bits) | Description                                                         |
| ------- | ------------------ | ------------------------------------------------------------------- |
| Chaskey | **128**            | MAC (Message authentication code). suitable for IoT implementation. |

;

- **Explain light-weight Public Key ciphers**:
  - mnemonic: Eli (the book of eli movie)
  - **Bold** means testable!

| Name | Key Size (In Bits) | Description                                 |
| ---- | ------------------ | ------------------------------------------- |
| Elli | 128                | "Elliptic Light". **RFID implementations**. |

;

## Section 10 Blockchain and Crypto-Currency

- **Bitcoin (BTC)**: most popular crypto-currency. A key focus is for the crypto-currency to protect against someone spending money that they do not have, so Bitcoin uses Blockchain.;
- **Blockchain**: a publicly available ledger of transactions that allows the Bitcoin network to know the number of bitcoins that a given user has in their account. Can be public or private.;
- **blockchain mining**: process where a new block of transactions is added to the blockchain and transactions within the block are considered to be processed occurs every 10 minutes or so.;
- **Conventional currencies vs Crypto currency**: conventional currency usually have a central bank that creates money and then controls its supply. The Bitcoin currency is instead created when users mine for it, using their computers to perform complex calculations through special software.;
- **Bitcoin transaction steps**:
  1. will be captured by miners who will compile a list of the latest transactions.
  2. If valid, the transaction is then recorded within a mining process, where mining nodes gather new transactions and compute a hash of the new block, and which should also contain the hash of the previous block, and then build a transaction log.
  3. Once complete, this becomes part of the official Blockchain in the network, and the miners reach a consensus on the current Blockchain.
  4. Miners receive rewards for successful mining efforts.;
- **crypto currency Ethereum**:
  - was built on the Bitcoin/Blockchain concept but included the concept of smart contracts.
  - Along with creating a new currency (Ether), the main contribution of Ethereum is to create the concept of **peer-to-peer smart contracts** which enables users to create their own contracts, and which will be strictly abided to.;
- **Smart contracts**: are programs stored on a blockchain that run when predetermined conditions are met they typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without an intermediary's involvement or time loss.;
- **Ethereum gas**: This is basically the unit that is used to measure the amount of work that is required to perform a single **Keccak-256 hash**.;
- Although Bitcoin, Ethereum, and Hyperledger all use blockchain: **Ethereum, and Hyperledger are considered "common" options for implementing blockchain** for this course. Hyperledger and Ethereum offer the smart contracts feature.;

## Section 12 Wireless Cryptography and Stream Ciphers

- **Encryption schemes commonly used with Wi-Fi include**:
  - 40-bit RC4 (WEP)
  - TKIP with 128-bit RC4 (WPA – Wi-Fi Protected Access)
  - 128-bit AES-CCMP (WPA-2).;
- **Because of export restrictions, the size of the original key in RC4 was limited to**: 40 bits and was then increased to 128 bits.;
- **Overall WEP is weak from a number of viewpoints**:
  - Small value of IV (24 bits). This meant that it repeated within a reasonable time, and the key could then be attacked.
  - Construction of keys made it susceptible to the weak key attacks (FMS attack).
  - Lack of protection against message replay. There was no protection against cipher streams being played back over the network.
  - Lack of message tampering identification. The method did not support the detection of message tampering.
  - Directly used a master key. The method had no way of updating the keys.;
- **After WEP, WPA fixed what**:
  - there was a strong need to fix the problems, but to keep compatibility, thus WPA supported TKIP, and which increased the IV value to 48 bits (rather than 24 bits).;
- **WPA addressed the weaknesses of WEP, and without requiring significant hardware changes, and focused on two main methods**:
  - WPA-PSK and WPA Enterprise.;
- **WPA-2 (IEEE 802.11i-2004) advanced the WPA standard by**:
  - keeping compatibility with WPA, but adding AES-CCMP (AES-Counter Mode CBCMAC Protocol), which is a block encryption method. Again, it supported two modes: Personal (with a pre-shared key) and Enterprise.;
- **WPA Enterprise is different from WPA how**:
  - no pre-shared key is used, and it also includes a MIC (Message Integrity Check).
  - The MIC mainly guards against the bit flipping attacks identified within WEP.;
- **Mobile phone networks/GSM typically use what type of encryption**:
  - the A5/1 or A5/2 stream encryption method, but almost on its first day of operation it has been a target for crackers, and the source code to crack A5/2 was released within one month of being made public.;
- **A5/3 encryption system fixes what**:
  - known as KASUMI, the Japanese word for “mist”, is the upgrade to A5/1 and uses a block cipher. A5/1 is designed to be used for the GSM network, whereas A5/3 is for 3GPP, and is based on the MISTY1 cipher. 128-bit key.;
- **While WEP contains what weaknesses**:
  - a properly defined stream cipher can be much faster than block ciphers, as they just have to create a key stream from an IV (also known as a nonce value) and a key.;
  - **ChaCha20**:
    - named as it has 20 rounds
    - Google proposed as an alternative to AES to be used with TLS connections.;
- **WEP vs WPA vs WPA2**:

  |                   | WEP              | WPA              | WPA2            |
  | ----------------- | ---------------- | ---------------- | --------------- |
  | Encryption Method | RC4              | TKIP + RC4       | AES-CCMP        |
  | Key Size          | 40-bit           | 128-bit          | 128-bit         |
  | Cipher Type       | Symmetric Stream | Symmetric Stream | Symmetric Block |
  | IV Size           | 24-bit           | 48-bit           | 48-bit          |

  ;
