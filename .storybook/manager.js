import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

import p from '../package.json';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `d3-milestones v${p.version}`,
  }),
});
