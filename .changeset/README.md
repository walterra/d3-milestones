# Changesets

This folder is used by [@changesets/cli](https://github.com/changesets/changesets) to manage versioning and changelogs.

## Adding a changeset

When you make a change that should be released, run:

```bash
yarn changeset
```

This will prompt you to:
1. Select the type of change (major/minor/patch)
2. Write a summary of the change

The changeset file will be committed with your PR.

## Release process

1. When PRs with changesets are merged to `main`, a "Release" PR is automatically created/updated
2. The Release PR collects all pending changesets and updates the version/changelog
3. When the Release PR is merged, the package is automatically published to npm
