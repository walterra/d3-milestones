import { argTypes, createMilestones } from './milestones';
import { data as lotrData } from './data-lotr';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) => {
  const gandalfData = args.data.filter((d) => d.character === 'Gandalf');
  const frodoData = args.data.filter((d) => d.character === 'Frodo');

  const gandalf = createMilestones(
    'Lord of the Rings Categorical Top/Bottom Timeline',
    undefined,
    Object.assign(args, {
      distribution: 'top',
      data: gandalfData,
    }),
    'timeline-gandalf',
    'height: 200px !important'
  );
  const frodo = createMilestones(
    undefined,
    undefined,
    Object.assign(args, {
      distribution: 'bottom',
      data: frodoData,
    }),
    'timeline-frodo',
    'height: 200px !important; margin-top: -200px !important'
  );
  return gandalf + frodo;
};

export const LordOfTheRings = Template.bind({});
LordOfTheRings.args = {
  optimize: true,
  autoResize: true,
  aggregateBy: 'day',
  distribution: 'top-bottom',
  orientation: 'horizontal',
  parseTime: '%d.%m.%Y',
  mapping: {
    timestamp: 'timestamp',
    text: 'text',
  },
  data: lotrData,
};
