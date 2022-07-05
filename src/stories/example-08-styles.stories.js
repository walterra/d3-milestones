import { argTypes, createMilestones } from './milestones';
import data from './assets/styles.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => createMilestones('Styles', undefined, args);

export const Styles = Template.bind({});
Styles.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'text',
  },
  data,
};
