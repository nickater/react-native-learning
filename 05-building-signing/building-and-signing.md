# Building & Signing for App Stores (45-55 minutes)

## Learning Objectives
- Understand app signing requirements
- Learn the traditional (painful) way vs. modern EAS approach
- Master the EAS CLI for automated credential management

## Why App Signing is Required

App stores require apps to be **cryptographically signed** to:
1. **Verify Identity**: Prove who created the app
2. **Ensure Integrity**: Confirm the code hasn't been tampered with
3. **Enable Security Features**: Allow secure features like push notifications

## The Traditional (Painful) Way

### Android Signing - Manual Process
1. Generate a Java Keystore file (`.jks`)
2. Create a `keystore.properties` file with passwords
3. Configure Gradle build scripts
4. Keep sensitive files secure (but accessible for builds)

### iOS Signing - Manual Process
1. Create a Certificate Signing Request (CSR)
2. Generate a Distribution Certificate in Apple Developer Portal
3. Create a Provisioning Profile
4. Download and install certificates in Xcode
5. Manage expiration dates and renewals

### Problems with Manual Approach
- **Complex Setup**: Many steps, easy to make mistakes
- **Security Risk**: Sensitive files stored locally
- **Team Coordination**: Sharing certificates securely
- **Expiration Management**: Certificates expire and need renewal
- **Platform Differences**: Different processes for iOS and Android

## The Modern Way: Expo Application Services (EAS)

EAS automates the entire build and signing process through cloud services:

### EAS Build
- Builds your app in the cloud
- Handles all platform-specific configuration
- Supports custom native code (if needed)

### EAS Submit
- Submits your app to app stores
- Handles store-specific requirements
- Automates upload process

### EAS Credentials (The Game Changer)
- **Automated Creation**: Generates signing credentials for you
- **Secure Storage**: Keeps credentials in encrypted cloud storage
- **Team Sharing**: Easy credential sharing across team members
- **Auto-Renewal**: Handles certificate renewals

## EAS CLI Commands

The following commands show the complete workflow from setup to deployment.

See `eas-commands.md` for the step-by-step command reference.
