import tape from 'tape';
import milestones from '../src/main';
import * as d3 from 'd3-selection';
import { startTransaction } from './apm';
import { delay } from './delay';

const TEST_NAME =
  'should render a minimal milestones chart with attached events';

tape(TEST_NAME, (t) => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div id="wrapper_event"></div>'
  );

  const data = [
    { timestamp: '2012-09-09T00:00', detail: 'v1.0.0' },
    { timestamp: '2012-09-10T00:00', detail: 'v1.0.1' },
    { timestamp: '2012-09-12T00:00', detail: 'v1.1.0' },
  ];

  const { endTransaction } = startTransaction(TEST_NAME);

  const timeline = milestones('#wrapper_event')
    .onEventClick((d) => {
      t.equal(d.text, 'v1.0.0', 'click event text should match label text');
    })
    .onEventMouseOver((d) => {
      t.equal(d.text, 'v1.0.0', 'mouseover event text should match label text');
    })
    .onEventMouseLeave((d) => {
      t.equal(d.text, 'v1.0.0', 'mouseover event text should match label text');
    })
    .mapping({
      timestamp: 'timestamp',
      text: 'detail',
    });

  timeline
    .parseTime('%Y-%m-%dT%H:%M')
    .aggregateBy('second')
    .optimize(true)
    .render(data);

  endTransaction();

  t.plan(3);

  return delay(1000).then(function () {
    d3.select('#wrapper_event .milestones-text-label').each(function (d, i) {
      var onClickFunc = d3.select(this).on('click');
      onClickFunc.apply(this, [d, i]);
    });

    d3.select('#wrapper_event .milestones-text-label').each(function (d, i) {
      var onClickFunc = d3.select(this).on('mouseover');
      onClickFunc.apply(this, [d, i]);
    });

    d3.select('#wrapper_event .milestones-text-label').each(function (d, i) {
      var onClickFunc = d3.select(this).on('mouseleave');
      onClickFunc.apply(this, [d, i]);
    });

    t.end();
  });
});
