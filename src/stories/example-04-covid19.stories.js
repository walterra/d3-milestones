import { argTypes, createMilestones } from './milestones';
import { data as covid19Data } from './data-covid19';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => createMilestones('COVID19 Quotes', undefined, args);

export const COVID19 = Template.bind({});
COVID19.args = {
  optimize: true,
  aggregateBy: 'day',
  distribution: 'top-bottom',
  orientation: 'horizontal',
  parseTime: '%Y-%m-%d',
  mapping: {
    timestamp: 'date',
    text: 'title',
  },
  data: covid19Data,
};
