import { configure } from '@storybook/react';

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  require('../stories/general');    //普通
  require('../stories/player');     //视听娱乐
  require('../stories/navigation'); //导航
  require('../stories/dataEntry'); //数据录入
}

configure(loadStories, module);