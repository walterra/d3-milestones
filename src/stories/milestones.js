import '../styles/styles.less';
import './example-styles.less';

import milestones from '../main';

// used to increment the wrapping DIV's id.
let iteration = 0;

export const argTypes = {
  optimize: {
    control: { type: 'boolean' },
  },
  distribution: {
    options: ['top-bottom', 'top', 'bottom'],
    control: { type: 'radio' },
  },
  orientation: {
    options: ['horizontal', 'vertical'],
    control: { type: 'radio' },
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
  },
  parseTime: {
    control: { type: 'text' },
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
  },
  DIV_ID = 'timeline',
  style = ''
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

  const timeline = `<div id="${divId}" class="timeline" style="${style}"></div>`;

  if (!title && !description) {
    return timeline;
  }

  return `
    <div class="d3Milestones">
      ${title ? `<h2>${title}</h2>` : ''}
      ${description ? `<p>${description}</p>` : ''}
      ${timeline}
    </div>
  `;
};
