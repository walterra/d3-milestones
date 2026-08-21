# Responsive GIF

Generates `docs/assets/d3-milestones-responsive.gif` from the Vikings Storybook story.

## Prerequisites

Install project dependencies:

```bash
yarn install
```

Install Google Chrome and ImageMagick. On macOS:

```bash
brew install imagemagick
```

The script uses this default Chrome path:

```text
/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

Set `CHROME_PATH` when Chrome uses another location.

## Generate the GIF

Start Storybook on port 6007:

```bash
yarn storybook --port 6007
```

Run the generator in another terminal:

```bash
yarn gif:responsive
```

Pass a path to preserve the current GIF for comparison:

```bash
yarn gif:responsive docs/assets/d3-milestones-responsive-new.gif
```

Set `STORYBOOK_URL` when Storybook uses another origin:

```bash
STORYBOOK_URL=http://127.0.0.1:7007 yarn gif:responsive
```

## Capture settings

The generator:

- loads the `d3-milestones--vikings` story
- captures a 1600×900 Chrome viewport
- animates the story width from 1400px to 800px and back
- records 96 JPEG frames at quality 90
- fixes the timeline axis at 402px during reflow
- encodes frames with ImageMagick
- resizes the output to 960×540
- limits the GIF to 192 colors
- sets a 70ms frame delay and infinite loop

Expected output:

- dimensions: 960×540
- frames: 96
- duration: 6.72 seconds

## Verify

```bash
ffprobe -v error \
  -show_entries stream=width,height,nb_frames \
  -show_entries format=duration,size \
  docs/assets/d3-milestones-responsive.gif

ffmpeg -v error \
  -i docs/assets/d3-milestones-responsive.gif \
  -f null -
```
