import { argTypes, createMilestones } from './milestones';
import data from './assets/lotr.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => {
  // Custom distribution function: Gandalf on top, Frodo below
  const characterDistribution = (data) => {
    // The data object contains a 'values' array with all events in the group
    // Check if any event in this group has character === 'Gandalf'
    if (data.values && data.values.length > 0) {
      return data.values.some((event) => event.character === 'Gandalf');
    }
    return false;
  };

  return createMilestones(
    'Lord of the Rings - Custom Distribution Function',
    'Custom distribution based on character: Gandalf above, Frodo below',
    Object.assign(args, {
      distribution: characterDistribution,
      data: args.data,
    })
  );
};

export const CustomDistribution = Template.bind({});
CustomDistribution.args = {
  optimize: true,
  aggregateBy: 'day',
  parseTime: '%d.%m.%Y',
  data,
};
CustomDistribution.storyName = 'Custom Distribution Function';
