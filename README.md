[![npm](https://img.shields.io/npm/v/d3-milestones.svg?maxAge=2592000)](https://www.npmjs.com/package/d3-milestones)
[![npm](https://img.shields.io/npm/l/d3-milestones.svg?maxAge=2592000)](https://www.npmjs.com/package/d3-milestones)
[![npm](https://img.shields.io/npm/dt/d3-milestones.svg?maxAge=2592000)](https://www.npmjs.com/package/d3-milestones)

# d3-milestones

A d3 based timeline visualization.

![The Viking Timeline](example/vikings.png)

## Installing

To use it via NPM, use `npm install d3-milestones`. 

The most quick way to get going is to use `unpkg.com` as a CDN to include the library directly into your HTML file.

```html
<link rel="stylesheet" href="https://unpkg.com/d3-milestones/build/d3-milestones.css">
<script src="https://unpkg.com/d3-milestones/build/d3-milestones.min.js"></script>

<div id="timeline"></div>

<script>
  milestones('#timeline')
    .mapping({
      'timestamp': 'year',
      'text': 'title'
    })
    .parseTime('%Y')
    .aggregateBy('year')
    .render([
      { year: 789, title: 'Vikings begin attacks on England.' },
      { year: 840, title: 'Vikings found Dublin in Ireland.' }
      ...
      { year: 1050, title: 'The city of Oslo is founded in Norway.' },
      { year: 1066, title: 'Battle of Hastings.' }
    ]);
</script>
```

Head over here to see this example in action: https://beta.observablehq.com/@walterra/vikings-timeline.

## Examples

There are more examples included in the github repository. These examples should give you an idea how to work with the library. 

- clone the repository and from within its directory run the following commands:
- `npm install` should fetch all required dependencies and create the build files.
- `npm start` spins up a web server. It will output the host/ip you should head your browser to, e.g.:
  - http://localhost:8080/example/milestones.html
  - http://localhost:8080/example/vikings.html
  - http://localhost:8080/example/os_category-labels.html

## API Reference

### General Usage

To initialize *d3-milestones*, pass a DOM Id to its main factory:

```javascript
  const vis = milestones('#wrapper');
```

The returned object exposes the following API:

<a name="aggregateBy" href="#aggregateBy">#</a> vis.<b>aggregateBy</b>(<i>interval</i>)

Sets the aggregation interval for the event data, where *interval* can be one of `second`, `minute`, `hour`, `day`, `week`, `month`, `quarter` or `year`.

<a name="mapping" href="#mapping">#</a> vis.<b>mapping</b>(<i>configObject</i>)

Sets overrides for the default attributes for the expected data structure of an event. This defaults to:

```js
  {
    category: undefined,
    entries: undefined,
    timestamp: 'timestamp',
    text: 'text'
  };
```

The method allows you to override single or multiple attributes to map them to fields in your original data with a single call like:

```js
    vis.mapping({
      'timestamp': 'year',
      'text': 'title'
    })
```

<a name="optimize" href="#optimize">#</a> vis.<b>optimize</b>(<i>boolean</i>)

Enables/Disables the label optimizer. When enabled, the optimizer attempts to avoid label overlap by vertically displacing labels.

<a name="parseTime" href="#parseTime">#</a> vis.<b>parseTime</b>(<i>specifier</i>)

Specifies the formatter for the timestamp field. The specifier string is expected to resemble a format described here: https://github.com/d3/d3-time-format#locale_format

<a name="labelFormat" href="#labelFormat">#</a> vis.<b>labelFormat</b>(<i>specifier</i>)

The `labelFormat` for the time label for each milestones defaults to `'%Y-%m-%d %H:%M'`. Using `aggregateBy`, `labelFormat` will be set automatically to a reasonable format corresponding to the aggregation level. Still, this method is available to override this behavior with a custom `labelFormat`.

<a name="useLabels" href="#useLabels">#</a> vis.<b>useLabels</b>(<i>boolean</i>)

Enables/Disables the display of labels.

<a name="render" href="#render">#</a> vis.<b>render</b>(<i>[data]</i>)

When called without `data` this triggers re-rendering the existing visualization.

`data` is expected to be an array of event objects with fields matching either the expected defaults (`timestamp` and `text` attribute) or the provided mapping via `.mapping()`.

## More

`d3-milestones` is also available as a visualization plugin for Kibana here: https://github.com/walterra/kibana-milestones-vis
