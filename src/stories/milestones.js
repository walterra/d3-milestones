import '../styles/styles.less';
import './example-styles.less';

import milestones from '../main';

const DIV_ID = 'timeline';

let iteration = 0;

export const createMilestones = ({
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
}) => {
  iteration++;

  function render() {
    milestones(`#${DIV_ID}-${iteration}`)
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

  function checkElement() {
    const wrapper = document.getElementById(`${DIV_ID}-${iteration}`);
    if (!wrapper) {
      window.setTimeout(checkElement, 100);
    } else {
      render();
    }
  }
  checkElement();

  const div = document.createElement('div');
  div.id = `${DIV_ID}-${iteration}`;
  div.className = 'timeline';
  return div;
};
