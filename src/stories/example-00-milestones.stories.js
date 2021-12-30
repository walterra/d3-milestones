import { argTypes, createMilestones } from './milestones';
import data from './assets/milestones.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'Version Milestones',
    `The chart is responsive, try resizing the browser window. Use the storybook's options to trigger examples of the chart's features`,
    args
  );

export const MilestonesReleases = Template.bind({});
MilestonesReleases.args = {
  optimize: true,
  aggregateBy: 'day',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
    url: 'giturl',
  },
  data,
};
