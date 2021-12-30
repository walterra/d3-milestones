import { argTypes, createMilestones } from './milestones';
import data from './assets/covid19.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => createMilestones('COVID19 Quotes', undefined, args);

export const COVID19 = Template.bind({});
COVID19.args = {
  optimize: true,
  aggregateBy: 'day',
  parseTime: '%Y-%m-%d',
  mapping: {
    timestamp: 'date',
    text: 'title',
  },
  data,
};
