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
  orientation,
  parseTime,
}) => {
  const div = document.createElement('div');

  iteration++;
  div.id = `${DIV_ID}-${iteration}`;
  div.className = 'timeline';

  function render() {
    var timeline = milestones(`#${DIV_ID}-${iteration}`)
      .mapping(mapping)
      .parseTime(parseTime)
      .aggregateBy(aggregateBy);

    timeline
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

  return div;
};
