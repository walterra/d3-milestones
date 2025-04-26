import { argTypes, createMilestones } from './milestones';
import data from './assets/image-formats.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'Image formats',
    `This example demonstrates the use of different image formats for milestone elements.`,
    args
  );

export const ImageFormats = Template.bind({});
ImageFormats.args = {
  optimize: true,
  aggregateBy: 'year',
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'img',
  },
  data,
};
