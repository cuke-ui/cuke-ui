import { configure,setAddon } from '@storybook/react';
import {name,repository} from "../package.json"
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
// import { setDefaults } from '@storybook/addon-info';
import "../components/styles/app.less"

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  require('../stories/general');    //普通
  require('../stories/player');     //视听娱乐
  require('../stories/navigation'); //导航
  require('../stories/dataEntry'); //数据录入
}

setOptions({
  name: name,
  url: repository,
});
setAddon(infoAddon);
configure(loadStories, module);