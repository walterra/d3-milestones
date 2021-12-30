# Development Notes

- For every update, don't forget to add a note in [CHANGELOG.md](./CHANGELOG.md).
- How to do a release:
  - `git checkout main`
  - Check if [CHANGELOG.md](./CHANGELOG.md) is up to date.
  - Update the version number in [package.json](./package.json).
  - Update milestones example in `/src/stories/data-milestones.js`.
  - `git commit -m "Bump version to <version-number>. ..."`
  - `git tag <version-number>`
  - `yarn build-storybook`
  - `yarn deploy-storybook`
  - `git push origin main`
  - `git push --tags`
  - `npm publish`
