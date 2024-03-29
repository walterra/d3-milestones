import { argTypes, createMilestones } from './milestones';
import data from './assets/milestones-events.json';

export default {
  title: 'd3-milestones',
  argTypes: Object.assign(argTypes, {
    onEventClick: {
      action: 'clicked',
    },
    onEventMouseOver: {
      action: 'mouseover',
    },
    onEventMouseLeave: {
      action: 'mouseleave',
    },
  }),
};

const Template = (args) =>
  createMilestones(
    'Version Milestones with Event API',
    `The chart is responsive, try resizing the browser window. Use the storybook options to trigger examples of the chart's features. The chart implements click, mouseover, and mouseleave. Hover or click on labels to call the corresponding action.`,
    args
  );

export const EventsAPI = Template.bind({});
EventsAPI.args = {
  optimize: true,
  aggregateBy: 'day',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
  },
  data,
};
