import { argTypes, createMilestones } from './milestones';

export default {
  title: 'd3-milestones',
  argTypes,
};

// Sample data for an ordinal scale timeline with categories
const categoriesData = [
  {
    category: 'Frontend',
    steps: [
      {
        step: 'Requirements',
        detail: 'Gather interface requirements',
      },
      {
        step: 'Wireframes',
        detail: 'Create wireframes and mockups',
      },
      {
        step: 'Implementation',
        detail: 'Develop frontend components',
      },
      {
        step: 'Testing',
        detail: 'Test frontend components',
      },
    ],
  },
  {
    category: 'Backend',
    steps: [
      {
        step: 'Architecture',
        detail: 'Design system architecture',
      },
      {
        step: 'Database',
        detail: 'Create database schema',
      },
      {
        step: 'API',
        detail: 'Implement API endpoints',
      },
      {
        step: 'Integration',
        detail: 'Connect frontend and backend',
      },
    ],
  },
  {
    category: 'DevOps',
    steps: [
      {
        step: 'Environment',
        detail: 'Set up development environment',
      },
      {
        step: 'CI/CD',
        detail: 'Configure CI/CD pipeline',
      },
      {
        step: 'Deployment',
        detail: 'Prepare deployment strategy',
      },
      {
        step: 'Monitoring',
        detail: 'Set up monitoring tools',
      },
    ],
  },
];

const Template = (args) =>
  createMilestones(
    'Ordinal Scale with Categories',
    'This example demonstrates using an ordinal scale with multiple categories',
    args
  );

export const OrdinalScaleCategories = Template.bind({});
OrdinalScaleCategories.args = {
  scaleType: 'ordinal',
  optimize: true,
  mapping: {
    category: 'category',
    entries: 'steps',
    value: 'step',
    text: 'detail',
  },
  data: categoriesData,
};
