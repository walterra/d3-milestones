import '../styles/styles.less';
import './example-styles.less';

import milestones from '../main';

// used to increment the wrapping DIV's id.
let iteration = 0;

export const argTypes = {
  optimize: {
    control: { type: 'boolean' },
  },
  autoResize: {
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
  urlTarget: {
    options: ['_blank', '_self', '_parent', '_top'],
    control: { type: 'radio' },
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
    autoResize,
    urlTarget,
  },
  DIV_ID = 'timeline',
  style = ''
) => {
  iteration++;

  const divId = `${DIV_ID}-${iteration}`;

  function render() {
    const m = milestones(`#${divId}`);

    mapping && m.mapping(mapping);
    aggregateBy && m.aggregateBy(aggregateBy);
    distribution && m.distribution(distribution);
    optimize && m.optimize(optimize);
    onEventClick && m.onEventClick(onEventClick);
    onEventMouseOver && m.onEventMouseOver(onEventMouseOver);
    onEventMouseLeave && m.onEventMouseLeave(onEventMouseLeave);
    orientation && m.orientation(orientation);
    parseTime && m.parseTime(parseTime);
    autoResize && m.autoResize(autoResize);
    urlTarget && m.urlTarget(urlTarget);

    m.render(data);
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
  <canvas id="bitmap" style="border: 1px solid gray;margin-left:5.5px"></canvas>
  <div class="d3Milestones">
      ${title ? `<h2>${title}</h2>` : ''}
      ${description ? `<p>${description}</p>` : ''}
      ${timeline}
    </div>
  `;
};
