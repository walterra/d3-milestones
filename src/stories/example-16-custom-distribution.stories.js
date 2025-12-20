import { argTypes, createMilestones } from './milestones';
import data from './assets/lotr.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const ObjectTemplate = (args) => {
  // Object-based distribution: Gandalf on top, Frodo below
  return createMilestones(
    'Lord of the Rings - Object-based Distribution',
    'Declarative distribution using field matching: Gandalf above, Frodo below',
    Object.assign(args, {
      distribution: { field: 'character', top: 'Gandalf', bottom: 'Frodo' },
      data: args.data,
    })
  );
};

export const CustomDistributionObject = ObjectTemplate.bind({});
CustomDistributionObject.args = {
  optimize: false, // Optimization not supported with custom distributions
  parseTime: '%d.%m.%Y',
  data,
};
CustomDistributionObject.storyName = 'Custom Distribution (Object)';

const FunctionTemplate = (args) => {
  // Function-based distribution for advanced logic
  const characterDistribution = (data) => {
    // The data object contains a 'values' array with all events in the group
    // Check if any event in this group has character === 'Gandalf'
    if (data.values && data.values.length > 0) {
      return data.values.some((event) => event.character === 'Gandalf');
    }
    return false;
  };

  return createMilestones(
    'Lord of the Rings - Function-based Distribution',
    'Advanced distribution using custom function: Gandalf above, Frodo below',
    Object.assign(args, {
      distribution: characterDistribution,
      data: args.data,
    })
  );
};

export const CustomDistributionFunction = FunctionTemplate.bind({});
CustomDistributionFunction.args = {
  optimize: false, // Optimization not supported with custom distributions
  parseTime: '%d.%m.%Y',
  data,
};
CustomDistributionFunction.storyName = 'Custom Distribution (Function)';
