import tape from 'tape';
import milestones from '../src/main';
import * as d3 from 'd3-selection';
import { apm } from './apm';

tape('should render a minimal milestones chart', (t) => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div id="wrapper_milestones"></div>'
  );

  const data = [
    { timestamp: '2012-09-09T00:00', detail: 'v1.0.0' },
    {
      timestamp: '2012-09-10T00:00',
      detail: 'v1.0.1',
      url: 'http://example.com',
    },
    { timestamp: '2012-09-12T00:00', detail: 'v1.1.0' },
  ];

  const transaction = apm.getCurrentTransaction();
  let span;
  if (transaction) {
    transaction.name = 'd3-milestones/karma';
    transaction.addLabels({ 'd3-milestones-layout': 'v1' });
    span = transaction.startSpan('render minimal chart', 'render-chart');
  }

  const timeline = milestones('#wrapper_milestones').mapping({
    timestamp: 'timestamp',
    text: 'detail',
  });

  timeline
    .parseTime('%Y-%m-%dT%H:%M')
    .aggregateBy('second')
    .optimize(true)
    .render(data);

  if (transaction && span) span.end();

  t.plan(4);

  t.false(
    d3.select('#wrapper_milestones .milestones').empty(),
    'should render .milestones element'
  );
  t.false(
    d3
      .select('#wrapper_milestones .milestones .milestones__horizontal_line')
      .empty(),
    'should render .milestones__horizontal_line element'
  );
  t.equal(
    d3.selectAll('#wrapper_milestones .milestones .milestones__group').size(),
    3,
    'should render 3 .milestones__group elements'
  );
  t.equal(
    d3.selectAll('#wrapper_milestones .milestones .milestones__group a').size(),
    1,
    'should render 1 link'
  );

  t.end();
});
