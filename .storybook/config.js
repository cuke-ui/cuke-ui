import { configure } from '@storybook/react';

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  require('../stories/button.js');
  require('../stories/musicPlayer.js');
}

configure(loadStories, module);