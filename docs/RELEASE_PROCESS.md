# Release Process

d3-milestones uses [Changesets](https://github.com/changesets/changesets) with automated GitHub Actions workflows for secure, streamlined releases.

## Overview

Releases are fully automated using:
- **Changesets** - Version management and changelog generation
- **GitHub Actions** - Automated publishing workflow
- **OIDC** - Secure, token-less npm publishing with provenance attestations
- **GitHub App** - Fine-grained authentication

## For Contributors

### Adding a Changeset

When making changes that should be released:

```bash
yarn changeset
```

This prompts you to:
1. Select change type:
   - **patch** - Bug fixes, documentation
   - **minor** - New features (backward compatible)
   - **major** - Breaking changes
2. Write a summary of the change

Commit the generated changeset file with your PR.

### Example Workflow

```bash
# Make your changes
git checkout -b feature/my-feature

# Add changeset
yarn changeset
# Select: minor
# Summary: "Add support for custom time formats"

# Commit everything
git add .
git commit -m "feat: add custom time format support"
git push
```

## For Maintainers

### Automated Release Flow

1. **PR with changeset merged to `main`**
   - GitHub Actions detects changeset
   - Creates/updates "Release PR"
   - Aggregates all pending changesets
   - Updates `package.json` version and `CHANGELOG.md`

2. **Review Release PR**
   - Verify version bump is appropriate
   - Review changelog entries
   - Check all changes are documented

3. **Merge Release PR**
   - Triggers automated publishing:
     - Runs build and tests
     - Publishes to npm with provenance
     - Creates GitHub release with tags
     - Uploads build artifacts (d3-milestones.zip)

### Manual Release (Emergency)

```bash
yarn version-packages  # Update versions
yarn release           # Build, test, and publish
```

## Initial Setup

Required one-time configuration for repository maintainers.

### 1. Create GitHub App

Create a GitHub App for authentication:

1. Go to **GitHub Settings → Developer settings → GitHub Apps → New GitHub App**
2. Configure:
   - **Name**: `d3-milestones-releaser` (or similar unique name)
   - **Homepage URL**: Repository URL
   - **Webhook**: Uncheck "Active"
   - **Permissions**:
     - Repository permissions → Contents: **Read and write**
     - Repository permissions → Pull requests: **Read and write**
3. Click **Create GitHub App**
4. Generate a private key (downloads .pem file - save securely)
5. Note the **App ID** from the app details page
6. Install app: Settings → Install App → Install on repository

### 2. Configure Repository Secrets

Add to **Repository Settings → Secrets and variables → Actions**:

- **Variable** `APP_ID`
  - Value: Your GitHub App ID
  - Tab: Variables → New repository variable

- **Secret** `APP_PRIVATE_KEY`
  - Value: Contents of the .pem file (include BEGIN/END lines)
  - Tab: Secrets → New repository secret

### 3. Create GitHub Environment

1. Go to **Repository Settings → Environments**
2. Click **New environment**
3. Name: `npm-publish`
4. (Optional) Add protection rules:
   - Required reviewers
   - Deployment branches: `main` only

### 4. npm Configuration

No npm token required! OIDC handles authentication automatically.

The package is already configured with:
```json
"publishConfig": {
  "access": "public",
  "registry": "https://registry.npmjs.org",
  "provenance": true
}
```

Provenance attestations cryptographically link the published package to its source.

## Testing the Setup

Verify the release process works:

```bash
# Create test changeset
yarn changeset
# Select: patch
# Summary: "Test release workflow"

# Commit and push
git add .changeset/
git commit -m "test: verify release workflow"
git push origin main

# Monitor GitHub Actions
# - Release PR should be created
# - Merge Release PR to publish
```

## Troubleshooting

### "Resource not accessible by integration"
- Verify GitHub App has correct permissions
- Ensure App is installed on the repository

### npm publish fails
- Verify `npm-publish` environment exists
- Check workflow has `id-token: write` permission
- Review workflow logs for npm errors

### Build artifacts not uploaded
- Verify zip file exists in `build/` directory
- Check `steps.changesets.outputs.published == 'true'`
- Review workflow logs for upload errors

### Release PR not created
- Verify changeset files exist in `.changeset/` directory
- Check GitHub Actions workflow ran successfully
- Ensure workflow has permission to create PRs

## Architecture

### Files

```
.changeset/
├── config.json          # Changesets configuration
└── README.md            # Quick reference

.github/workflows/
└── release.yml          # Automated release workflow

package.json
├── publishConfig        # npm publishing configuration
└── scripts
    ├── changeset        # Create changeset
    ├── version-packages # Update versions
    └── release          # Build and publish
```

### Workflow Steps

1. **Generate GitHub App Token** - Secure authentication
2. **Checkout Repository** - Fetch full git history
3. **Setup Node.js** - Configure build environment
4. **Upgrade npm** - Ensure OIDC support (npm 9+)
5. **Install Dependencies** - Frozen lockfile install
6. **Get Release Version** - Extract version from changesets
7. **Create Release PR or Publish** - Changesets action
8. **Upload Release Assets** - Attach build artifacts

### Security Features

- **OIDC** - Token-less npm publishing (no long-lived credentials)
- **Provenance** - Cryptographic attestations linking package to source
- **GitHub App** - Granular permissions vs personal access tokens
- **Environment protection** - Optional review requirements
- **Signed commits** - Verified git tags and releases

## Benefits

- **Consistent** - Standardized process across contributors
- **Secure** - No long-lived tokens, cryptographic provenance
- **Automated** - Version management, changelogs, publishing
- **Transparent** - Clear documentation of changes in each PR
- **Traceable** - Audit trail from commit → PR → release → npm

## Commands Reference

```bash
# Development
yarn build              # Build the library
yarn test               # Run all tests
yarn lint               # Lint code

# Release
yarn changeset          # Add a changeset
yarn version-packages   # Update versions (automated)
yarn release            # Publish to npm (automated)
```

## References

- [Changesets Documentation](https://github.com/changesets/changesets)
- [npm Provenance](https://docs.npmjs.com/generating-provenance-statements)
- [GitHub App Tokens](https://github.com/actions/create-github-app-token)
- [OIDC in GitHub Actions](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [Contributing Guidelines](../CONTRIBUTING.md)
