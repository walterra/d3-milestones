import '../styles/styles.less';
import './example-styles.less';

import milestones from '../main';

const DIV_ID = 'timeline';

// used to increment the wrapping DIV's id.
let iteration = 0;

export const argTypes = {
  optimize: {
    control: { type: 'boolean' },
    defaultValue: true,
  },
  distribution: {
    options: ['top-bottom', 'top', 'bottom'],
    control: { type: 'radio' },
    defaultValue: 'top-bottom',
  },
  orientation: {
    options: ['horizontal', 'vertical'],
    control: { type: 'radio' },
    defaultValue: 'horizontal',
  },
  aggregateBy: {
    options: [
      'second',
      'minute',
      'hour',
      'day',
      'week',
      'month',
      'quarter',
      'year',
    ],
    control: { type: 'select' },
    defaultValue: 'year',
  },
  parseTime: {
    control: { type: 'text' },
    defaultValue: '%Y',
  },
  mapping: {
    control: { type: 'object' },
  },
  data: {
    control: { type: 'object' },
  },
};

export const createMilestones = (
  title,
  description,
  {
    aggregateBy,
    data,
    distribution,
    mapping,
    optimize,
    onEventClick,
    onEventMouseOver,
    onEventMouseLeave,
    orientation,
    parseTime,
  }
) => {
  iteration++;

  const divId = `${DIV_ID}-${iteration}`;

  function render() {
    milestones(`#${divId}`)
      .mapping(mapping)
      .parseTime(parseTime)
      .aggregateBy(aggregateBy)
      .onEventClick(onEventClick)
      .onEventMouseOver(onEventMouseOver)
      .onEventMouseLeave(onEventMouseLeave)
      .optimize(optimize)
      .orientation(orientation)
      .distribution(distribution)
      .render(data);
  }

  // Wait until the wrapping DIV exists, only then render.
  function checkElement() {
    const wrapper = document.getElementById(divId);
    if (!wrapper) {
      window.setTimeout(checkElement, 100);
    } else {
      render();
    }
  }

  checkElement();

  return `
<div class="d3Milestones">
  <h2>${title}</h2>
  ${description ? `<p>${description}</p>` : ''}
  <div id="${divId}" class="timeline"></div>
</div>
  `;
};
