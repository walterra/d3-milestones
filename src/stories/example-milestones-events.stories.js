import { argTypes, createMilestones } from './milestones';
import { data as milestonesDataEvents } from './data-milestones-events';

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

const Template = (args) => createMilestones(args);

export const EventsAPI = Template.bind({});
EventsAPI.args = {
  optimize: true,
  aggregateBy: 'day',
  distribution: 'top-bottom',
  orientation: 'horizontal',
  parseTime: '%Y-%m-%dT%H:%M',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
  },
  data: milestonesDataEvents,
};
