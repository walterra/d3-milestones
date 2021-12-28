import { argTypes, createMilestones } from './milestones';
import { data as milestonesData } from './data-milestones';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => createMilestones(args);

export const MilestonesReleases = Template.bind({});
MilestonesReleases.args = {
  optimize: true,
  aggregateBy: 'day',
  distribution: 'top-bottom',
  orientation: 'horizontal',
  parseTime: '%Y-%m-%dT%H:%M',
  mapping: {
    timestamp: 'timestamp',
    text: 'detail',
    url: 'giturl',
  },
  data: milestonesData,
};
