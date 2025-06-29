# EAS CLI Commands Reference

This guide shows the complete workflow for building and deploying React Native apps using EAS.

## Prerequisites

- Expo account (free at expo.dev)
- Apple Developer account ($99/year for iOS)
- Google Play Developer account ($25 one-time for Android)

## Initial Setup

### 1. Install EAS CLI
```bash
npm install -g eas-cli
```

### 2. Login to Expo
```bash
eas login
```

### 3. Configure Project for EAS
```bash
# Run this in your project root
eas build:configure
```

This creates an `eas.json` file with build profiles:

```json
{
  "cli": {
    "version": ">= 5.4.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

## Credential Management (The Magic Step)

Instead of manually creating keystores and certificates, let EAS handle everything:

### Android Credentials
```bash
# This will guide you through creating or uploading a Java Keystore
# For a new project, choose "Generate new keystore"
eas credentials --platform android
```

**What this does:**
- Creates a `keystore.jks` file (if you don't have one)
- Generates secure passwords
- Uploads credentials to EAS secure storage
- Links credentials to your project

### iOS Credentials
```bash
# This will guide you through creating certificates and provisioning profiles
# You'll need an Apple Developer account
eas credentials --platform ios
```

**What this does:**
- Communicates with Apple Developer Portal on your behalf
- Creates a **Distribution Certificate** (proves you're a trusted developer)
- Creates a **Provisioning Profile** (allows app installation)
- Handles all private keys securely
- No need to download/install anything locally

## Building Your App

### Development Build (for testing with Expo Go alternative)
```bash
# Build for internal testing
eas build --profile development --platform ios
eas build --profile development --platform android
```

### Preview Build (for TestFlight/Internal Testing)
```bash
# Build for beta testing
eas build --profile preview --platform ios
eas build --profile preview --platform android
```

### Production Build (for app stores)
```bash
# Build for app store release
eas build --profile production --platform ios
eas build --profile production --platform android

# Or build both platforms at once
eas build --profile production --platform all
```

## Submitting to App Stores

### Submit to App Store (iOS)
```bash
# Configure submission settings (first time only)
eas submit --platform ios --latest

# For subsequent submissions
eas submit --platform ios
```

### Submit to Google Play (Android)
```bash
# Configure submission settings (first time only)
eas submit --platform android --latest

# For subsequent submissions
eas submit --platform android
```

## Useful Commands

### Check Build Status
```bash
# View build status and logs
eas build:list

# View specific build details
eas build:view [BUILD_ID]
```

### Manage Credentials
```bash
# View all credentials for your account
eas credentials

# Reset credentials (if you need to start over)
eas credentials --platform ios --clear-all
eas credentials --platform android --clear-all
```

### Project Information
```bash
# View project configuration
eas project:info

# View build configuration
eas build:inspect --profile production --platform ios
```

## Pro Tips

1. **Start with Preview Builds**: Test your app thoroughly before production builds
2. **Use Development Builds**: For testing features that require device-specific APIs
3. **Automate with CI/CD**: EAS can be integrated with GitHub Actions or other CI systems
4. **Monitor Build Times**: Production builds can take 10-20 minutes
5. **Version Management**: Increment version numbers in `app.config.js` for each release

## Troubleshooting

### Common Issues
- **Apple Developer Account**: Make sure it's active and paid
- **Bundle Identifier**: Must be unique and match your Apple Developer account
- **Package Name**: Must be unique on Google Play
- **Permissions**: Ensure your app.config.js includes required permissions

### Getting Help
```bash
# View detailed help for any command
eas build --help
eas submit --help
eas credentials --help
```
