## [`main`](https://github.com/walterra/d3-milestones/tree/main)

- Add `renderCallback()` method to apply customizations after rendering is complete. ([#79](https://github.com/walterra/d3-milestones/issues/79))
- Added support for custom HTML ID attributes for milestone elements. ([#78](https://github.com/walterra/d3-milestones/issues/78))
- Added WebP format to the list of supported image formats.

## [`v1.4.7`](https://github.com/walterra/d3-milestones/tree/v1.4.7)

- Update `.nvmrc` to `16.18` (243ef09).

## [`v1.4.6`](https://github.com/walterra/d3-milestones/tree/v1.4.6)

- Update `.nvmrc` to `16.17` (6cdf96e).

## [`v1.4.5`](https://github.com/walterra/d3-milestones/tree/v1.4.5)

- Update `.nvmrc` to `16.16` (da77577).

## [`v1.4.4`](https://github.com/walterra/d3-milestones/tree/v1.4.4)

- Dependency updates.

## [`v1.4.3`](https://github.com/walterra/d3-milestones/tree/v1.4.3)

- Update `.nvmrc` to `16.14`.
- Fixes Karma setup.
- Switched functional tests to use Firefox instead of Chrome.
- Switched to Babel from Buble.
- Updates `d3` modules.

## [`v1.4.2`](https://github.com/walterra/d3-milestones/tree/v1.4.2)

- Fix `autoResize` if passed in `selector` is already an element and not just a string. (a25b41a)

## [`v1.4.1`](https://github.com/walterra/d3-milestones/tree/v1.4.1)

- Fix `autoResize` to consider wrapping element instead of overall browser window. ([#62](https://github.com/walterra/d3-milestones/issues/62))

## [`v1.4.0`](https://github.com/walterra/d3-milestones/tree/v1.4.0)

- Support for custom styles for text elements. ([#11](https://github.com/walterra/d3-milestones/issues/11))

## [`v1.3.0`](https://github.com/walterra/d3-milestones/tree/v1.3.0)

- Expose option `urlTarget` to be able to set the `target` attribute when labels are rendered as links. ([#44](https://github.com/walterra/d3-milestones/issues/44))

## [`v1.2.2`](https://github.com/walterra/d3-milestones/tree/v1.2.2)

- Optimize layout for last item. (6f7ab03)

## [`v1.2.1`](https://github.com/walterra/d3-milestones/tree/v1.2.1)

- Fix `autoResize` on load. Improved defaults handling. ([#47](https://github.com/walterra/d3-milestones/issues/47))

## [`v1.2.0`](https://github.com/walterra/d3-milestones/tree/v1.2.0)

- Expose `autoResize` as an option. ([#46](https://github.com/walterra/d3-milestones/issues/46))
- Fixes stale event listeners. ([#45](https://github.com/walterra/d3-milestones/issues/45))

## [`v1.1.0`](https://github.com/walterra/d3-milestones/tree/v1.1.0)

- Support for labels to be displayed as links ([#31](https://github.com/walterra/d3-milestones/issues/31))

## [`v1.0.1`](https://github.com/walterra/d3-milestones/tree/v1.0.1)

- Fix build setup to no longer require `npx-force-resolutions` ([#27](https://github.com/walterra/d3-milestones/issues/27))

## [`v1.0.0`](https://github.com/walterra/d3-milestones/tree/v1.0.0)

- Layout optimizations ([#16](https://github.com/walterra/d3-milestones/issues/16))

## [`v1.0.0-beta2`](https://github.com/walterra/d3-milestones/tree/v1.0.0-beta2)

- Fixes vertical orientation when used with multiple categories ([#23](https://github.com/walterra/d3-milestones/issues/23))
- Adds documentation for label distribution in `README.md`.
- Updated project setup to include `jest` for unit tests and `prettier` for code formatting.

## [`v1.0.0-beta1`](https://github.com/walterra/d3-milestones/tree/v1.0.0-beta1)

- Added an option to switch between horizontal and vertical orientation of the timeline ([#1](https://github.com/walterra/d3-milestones/issues/1))

## [`v1.0.0-alpha14`](https://github.com/walterra/d3-milestones/tree/v1.0.0-alpha14)

- Added Math.round on the x.range to accommodate widths with decimal. Used in Grid Layouts with rows and columns. ([#10](https://github.com/walterra/d3-milestones/pull/10)) Thanks @jelohipolitocruz

## [`v1.0.0-alpha13`](https://github.com/walterra/d3-milestones/tree/v1.0.0-alpha13)

- Fixes an issue where resizing would result in multiple label elements ([#7](https://github.com/walterra/d3-milestones/pull/7)). Thanks @avborhanian
