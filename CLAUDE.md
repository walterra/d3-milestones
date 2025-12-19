# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- Build: `yarn build`
- Start dev server: `yarn start` or `yarn watch`
- Storybook: `yarn storybook`

## Test Commands

- All tests: `yarn test`
- Jest tests only: `yarn test-jest`
- Single Jest test: `npx jest src/path/to/file.test.js`
- Karma tests: `yarn test-karma`
- Watch tests: `yarn test-watch`

## Lint Commands

- Lint code: `yarn lint`
- Try `yarn lint --fix` before fixing linting errors manually

## Release Commands

- Add changeset: `yarn changeset`
- Version packages: `yarn version-packages`
- Publish release: `yarn release`

## Code Style Guidelines

- Use ES6 modules with named exports
- Follow ESLint and Prettier rules defined in .eslintrc.json
- Write Jest tests for new functionality
- Use kebab-case for filenames (with leading underscore for internal modules)
- Follow D3.js conventions and API patterns
- Add changeset for all user-facing changes (`yarn changeset`)
- Keep code backward compatible when possible

## Architecture Overview

### Core Entry Point

- `src/main.js` - Main factory function that creates timeline instances and orchestrates all functionality

### Scale Types

The library supports two scale types (configurable via `.scaleType()`):

- `time` - Uses D3 time scale for chronological data with timestamps
- `ordinal` - Uses D3 ordinal scale for categorical data without timestamps

### Internal Modules (prefixed with underscore)

- `_defaults.js` - Default configuration values for all timeline options
- `_api.js` - API factory that creates the fluent interface for method chaining
- `_transform.js` - Data transformation logic to prepare raw data for rendering
- `_optimize.js` - Label overlap detection and vertical displacement algorithm
- `_time_parse.js` - Time parsing utilities wrapping D3 time-format
- `_time_format.js` - Time formatting utilities wrapping D3 time-format
- `_aggregate_formats.js` - Time format strings for different aggregation levels
- `_css.js` - CSS class name constants
- `_is_above.js` - Determines label distribution (top/bottom or left/right)
- `_get_available_width.js` - Calculates available width for labels
- `_get_next_group_height.js` - Calculates vertical spacing for groups
- `_get_attribute.js` - Utility to safely extract attributes from data objects

### Rendering Flow

1. User calls `milestones(selector)` to create timeline instance
2. User configures via chained methods (`.mapping()`, `.scaleType()`, `.orientation()`, etc.)
3. User calls `.render(data)` to transform data and create DOM elements
4. Data flows through `_transform.js` to create nested structure grouped by time/ordinal keys
5. D3 selections render timeline groups, bullets, and labels
6. If `optimize` is enabled, `_optimize.js` adjusts label positions to avoid overlaps
7. Optional callbacks fire: `onEventClick`, `onEventMouseOver`, `onEventMouseLeave`, `renderCallback`

### Configuration System

The library uses closure-based state management. Each configuration method (e.g., `setOrientation`, `setScaleType`) updates local variables that are captured in the closure, and the public API is returned via the `api()` factory.

### Auto-resize Behavior

Uses `ResizeObserver` to automatically re-render timeline when container size changes. This can be disabled with `.autoResize(false)`.

### Test Structure

- Jest tests: Unit tests for individual modules (files ending in `.test.js`)
- Karma tests: Browser-based integration tests in `test/*-test.js`
- Both test runners use Babel to transpile ES6 modules

## Release Process

Uses Changesets with automated GitHub Actions workflow. See [docs/RELEASE_PROCESS.md](docs/RELEASE_PROCESS.md) for complete details.

## Changesets

**Do NOT use `yarn changeset`** - it's interactive. Create files directly:

```markdown
# .changeset/<descriptive-name>.md

---

"d3-milestones": patch|minor|major

---

Concise single-line description for CHANGELOG.md (not implementation details)
```

**Guidelines for changeset messages:**

- ✅ **Good**: "Add Jest testing infrastructure with 70% coverage thresholds and automated CI testing"
- ❌ **Bad**: Listing every file changed, configuration option, or implementation detail
- Focus on **user-facing value** or **high-level feature addition**
- Keep it **one line** when possible (two max)
- Think: "What would a user want to see in release notes?"

## Technical Writing Style

For documentation, JSDoc comments, git messages, all human facing text, direct factual statements only, no filler words (very/really/quite/just/simply/basically/actually/literally/comprehensive), no hedging (probably/maybe/might/could/should), no obvious phrases (please note/it's important to/keep in mind), start with present tense verbs (fetches/calculates/returns), state what not how, one line when possible, omit self-evident type information, active voice only, remove redundant phrases (in order to→to, completely finished→finished), every adjective must add information, sentences under 20 words, if removing a word preserves meaning remove it, strip all decoration keep only information.

## Git Operation Permissions

Permission for git operations applies to the immediate next action only. Each commit,
branch switch, push, or PR creation requires explicit user approval. Completing a requested
git operation does not authorize subsequent git operations.

**When unexpected git state occurs** (wrong branch, conflicts, missing upstream, extra
commits):

1.  Run `git status` and `git branch`
2.  Show output and explain the issue
3.  Ask how to proceed
4.  Wait for explicit instruction

Never attempt to fix git issues (cherry-pick, rebase, branch switches) without asking
first.
