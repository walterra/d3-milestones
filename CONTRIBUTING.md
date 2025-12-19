# Contributing to d3-milestones

Contributions are welcome! This document provides guidelines for contributing to the project.
This is important: Before contributing a PR, check in with the maintainer. Comment on an existing issue if you want to pick it up or create a new one with a description of what you'd like to work on. Without this, PRs might get rejected if they don't align with the scope of the project.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies: `yarn install`
4. Create a branch for your feature/fix

## Development

- Build: `yarn build`
- Start dev server: `yarn start` or `yarn watch`
- Run tests: `yarn test`
- Run linter: `yarn lint` (use `yarn lint --fix` to auto-fix)
- Storybook: `yarn storybook`

## Making Changes

### Code Style

- Use ES6 modules with named exports
- Follow ESLint and Prettier rules defined in .eslintrc.json
- Write Jest tests for new functionality
- Use kebab-case for filenames (with leading underscore for internal modules)
- Follow D3.js conventions and API patterns
- Keep code backward compatible when possible

### Adding a Changeset

When you make a change that should be released, run:

```bash
yarn changeset
```

This will prompt you to:

1. Select the type of change:
   - **patch**: Bug fixes and minor improvements
   - **minor**: New features (backward compatible)
   - **major**: Breaking changes
2. Write a clear summary of the change

The changeset file will be committed with your PR.

### Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for new public APIs
- Keep CLAUDE.md updated for architectural changes

## Pull Requests

- Create a PR with a clear description
- Ensure all tests pass (`yarn test`)
- Ensure linting passes (`yarn lint`)
- Include a changeset if the change should be released
- Reference any related issues

## Release Process

Releases are automated via GitHub Actions. See [docs/RELEASE_PROCESS.md](docs/RELEASE_PROCESS.md) for complete details.

Quick summary:
1. PRs with changesets merged to `main` trigger Release PR creation
2. Release PR is reviewed and merged by maintainers
3. Package is automatically published to npm with provenance attestations

## Reporting Issues

- Check existing issues first
- Include browser/Node.js version
- Provide a minimal reproduction example
- Include expected vs actual behavior

## Code Review

All submissions require review. Maintainers will provide feedback and may request changes.

## Documentation Style

For JSDoc comments, git messages, and documentation:

- Use present tense verbs (fetches, calculates, returns)
- Avoid filler words (very, really, just, simply, basically, actually, literally, comprehensive)
- Avoid hedging (probably, maybe, might, could, should)
- Avoid obvious phrases (please note, it's important to, keep in mind)
- Keep sentences under 20 words
- Be direct and factual
- Use active voice only

## License

By contributing, you agree that your contributions will be licensed under the Apache-2.0 License.
