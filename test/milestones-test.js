import tape from 'tape';
import milestones from '../src/main';
import * as d3 from 'd3-selection';

tape('should render a minimal milestones chart', t => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div id="wrapper"></div>'
  );

  const data = [
    { 'timestamp' : '2012-09-09T00:00', 'detail':'v1.0.0' },
    { 'timestamp' : '2012-09-10T00:00', 'detail':'v1.0.1' },
    { 'timestamp' : '2012-09-12T00:00', 'detail':'v1.1.0' }
  ];

  const timeline = milestones('#wrapper')
    .mapping({
      timestamp: 'timestamp',
      text: 'detail'
    });

  timeline
    .parseTime('%Y-%m-%dT%H:%M')
    .aggregateBy('second')
    .optimize(true)
    .render(data);

  t.plan(3);

  t.false(d3.select('#wrapper .milestones').empty(), 'should render .milestones element');
  t.false(d3.select('#wrapper .milestones .milestones__horizontal_line').empty(), 'should render .milestones__horizontal_line element');
  t.equal(d3.selectAll('#wrapper .milestones .milestones__group').size(), 3, 'should render 3 .milestones__group elements');

  t.end();
});
