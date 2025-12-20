# Label Optimization Layout Issues

## Context

The d3-milestones library distributes events over time exactly on the timeline - gaps between events reflect the actual temporal distribution in the data. The layout optimization algorithm's goal is to **densely pack labels without overlap as close to the timeline base as possible**, creating an organic view where labels are positioned optimally in dense areas.

## Current Issues

Analysis based on the "Custom Distribution (Object)" story showing Lord of the Rings timeline with Gandalf events above and Frodo/hobbit events below.

### 1. **Inefficient Vertical Displacement**
- **"Gandalf reaches Hobbiton" (3018-04-12)**: Positioned far above the timeline despite having ample space - could be positioned directly at the timeline base with minimal vertical offset
- **Wasted vertical space**: Multiple labels use unnecessarily large vertical offsets when closer positioning would avoid overlaps

### 2. **Label Overlap Not Fully Resolved**
- **"Gandalf leaves Hobbiton" (3018-06-30)** and **"Gandalf imprisoned in Orthanc by Saruman" (3018-07-20)**: These labels appear to overlap or are very close to overlapping
- Both could be positioned closer to the timeline base with proper spacing

### 3. **Global Baseline Distance Too Conservative**
- The dense section (Sept-Oct) successfully avoids overlaps, which is good
- However, the **entire set of labels** (both above and below) could collectively be compressed closer to the timeline baseline
- Current algorithm appears to use excessive safety margins rather than optimal tight packing

### 4. **Edge Label Text Alignment Issue**
- **"The fellowship leaves Rivendell at dawn" (3018-12-31)**: Text extends beyond the right canvas edge
- Label orientation should flip (text should extend leftward from the connector) when positioned at the timeline's right boundary
- Missing right-edge detection and automatic label flip logic

## Required Improvements

The optimization algorithm needs to:

1. **Reduce unnecessary vertical offsets** for isolated labels with clear space
2. **Resolve remaining overlaps** in the June-July region
3. **Compress all labels globally** toward the timeline baseline while maintaining overlap-free layout
4. **Add boundary awareness** to flip label text alignment when approaching canvas edges

## Success Criteria

- Isolated labels should be positioned at or near timeline baseline (minimal vertical offset)
- No label overlaps anywhere on the timeline
- Dense regions should maintain tight packing with just enough vertical separation to avoid overlaps
- Labels near canvas edges should automatically flip text orientation to prevent cutoff
- Overall vertical height of label distribution should be minimized while maintaining readability
