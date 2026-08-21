import { argTypes, createMilestones } from './milestones';
import data from './assets/llm-releases.json';

export default {
  title: 'd3-milestones',
  argTypes,
};

const Template = (args) =>
  createMilestones(
    'OpenAI and Anthropic Model Releases',
    'Major public model releases through August 2026 from official company announcements. Select a model to open its source.',
    args,
  );

export const LlmReleases = Template.bind({});
LlmReleases.args = {
  optimize: true,
  aggregateBy: 'month',
  parseTime: '%Y-%m-%d',
  mapping: {
    category: 'company',
    entries: 'models',
    timestamp: 'date',
    text: 'name',
    url: 'source',
  },
  data,
  urlTarget: '_blank',
};
LlmReleases.storyName = 'LLM Releases by Company';
