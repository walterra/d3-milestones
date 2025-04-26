import { argTypes, createMilestones } from './milestones';
import data from './assets/milestones-with-ids.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'Custom ID Attributes',
    `This example demonstrates the use of custom HTML ID attributes for milestone elements. Each milestone element has a unique ID attribute that can be used for direct DOM access or styling.`,
    args
  );

export const CustomIds = Template.bind({});
CustomIds.args = {
  optimize: true,
  aggregateBy: 'day',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
    url: 'giturl',
    id: 'customId',
  },
  urlTarget: '_blank',
  data,
};
