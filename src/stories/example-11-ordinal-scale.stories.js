import { argTypes, createMilestones } from './milestones';

export default {
  title: 'd3-milestones',
  argTypes,
};

// Sample data for an ordinal scale timeline
const ordinalData = [
  {
    step: 'Step 1',
    detail: 'Planning phase',
  },
  {
    step: 'Step 2',
    detail: 'Research phase',
  },
  {
    step: 'Step 3',
    detail: 'Development phase',
  },
  {
    step: 'Step 4',
    detail: 'Testing phase',
  },
  {
    step: 'Step 5',
    detail: 'Deployment phase',
  },
];

const Template = (args) =>
  createMilestones(
    'Ordinal Scale',
    'This example demonstrates using an ordinal scale instead of time scale',
    args
  );

export const OrdinalScaleExample = Template.bind({});
OrdinalScaleExample.args = {
  scaleType: 'ordinal',
  optimize: true,
  mapping: {
    value: 'step',
    text: 'detail',
  },
  data: ordinalData,
};
