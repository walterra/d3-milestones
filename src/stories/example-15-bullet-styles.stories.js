import { argTypes, createMilestones } from './milestones';
import data from './assets/bullet-styles.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'Bullet Styles',
    'Custom bullet colors, sizes, and borders using bulletStyle',
    args
  );

export const BulletStyles = Template.bind({});
BulletStyles.args = {
  aggregateBy: 'year',
  optimize: true,
  parseTime: '%Y',
  mapping: {
    timestamp: 'year',
    text: 'text',
    bulletStyle: 'bulletStyle',
  },
  data,
};
