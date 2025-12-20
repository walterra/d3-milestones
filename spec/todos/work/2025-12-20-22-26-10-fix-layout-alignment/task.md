# Fix layout issues for custom field-based label alignment

**Status:** In Progress
**Created:** 2025-12-20-22-26-10
**Started:** 2025-12-20-22-29-02
**Agent PID:** 13680

## Description

Fix four critical layout optimization issues in the custom field-based label alignment feature (Lord of the Rings timeline example). The optimization algorithm currently creates excessive vertical spacing, fails to resolve all overlaps, and doesn't handle canvas edge cases.

**Success criteria:**
- Isolated labels positioned at or near timeline baseline (minimal vertical offset)
- Zero label overlaps anywhere on the timeline  
- Dense regions maintain tight packing with just enough separation
- Labels near canvas edges flip text orientation to prevent cutoff
- Existing classic top-bottom layout remains unchanged (Vikings example)

**Test approach:**
- Automated: Jest unit tests for optimization logic edge cases
- Manual: Visual verification of http://localhost:6006/?path=/story/d3-milestones--custom-distribution-object (Lord of the Rings)
- Regression: Verify http://localhost:6006/?path=/story/d3-milestones--vikings still works correctly

## Implementation Plan

- [x] Fix Issue #1: Reduce initial padding/vertical offset for isolated labels (src/_optimize.js:~180-250)
  - Start labels at baseline (0 padding) by default
  - Only add padding when overlap detected
  - Test: Label with no neighbors should have 0 padding
  - VERIFIED: "Gandalf reaches Hobbiton" and other isolated labels now at baseline

- [ ] Fix Issue #2: Improve overlap detection accuracy (src/_optimize.js:~350-450)
  - Fix horizontal overlap calculation logic
  - Ensure same-side-only checking for custom distributions
  - Test: Two adjacent labels should not overlap after optimization

- [x] Fix Issue #3: Aggressive global baseline compression (src/_optimize.js:~530-610)
  - Moved minPadding logic OUTSIDE per-item loop to run once per group
  - Fixed to work independently for above/below sides
  - Reduces all labels on each side by their minimum padding
  - NOTE: Working but may need further tuning for Vikings-level compression

- [x] Fix Issue #4: Add edge detection and label flip logic (src/_optimize.js:~115-180)
  - Fixed isLast detection for custom distributions (each side has its own rightmost)
  - Enhanced edge overflow detection with space calculations
  - Flip label orientation (cssLastClass) for edge labels
  - VERIFIED: "The fellowship leaves Rivendell" now extends left and is fully visible

- [ ] Add comprehensive Jest tests (new file: src/_optimize.test.js)
  - Test padding reduction logic
  - Test overlap detection for custom distributions
  - Test edge case handling

- [ ] Manual visual testing
  - Load Lord of the Rings story in Storybook
  - Verify all four issues resolved
  - Take before/after screenshots

- [ ] Regression testing
  - Verify Vikings story still renders correctly
  - Run existing test suite

## Review

- [ ] Check for edge cases not covered by tests
- [ ] Verify no performance regressions
- [ ] Check code follows project style guidelines

## Notes

[To be filled during implementation]
