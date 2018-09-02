import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BackTop from '../components/backTop';
import Button from '../components/button';

storiesOf('其他', module)
.add('BackTop 回到顶部', withInfo()(() => (
	<div style={{height:2000}}>
        <h2>基本使用: 往下滚动</h2>

        <BackTop onClick={()=> console.log('click')}/>

        <h2>自定义偏移量： 距离顶部100px显示</h2>

        <BackTop visibilityHeight={100} style={{right:20,bottom:120}}/>

        <h2>自定义位置： 距离顶部800px显示</h2>

        <BackTop visibilityHeight={800} style={{right:100,bottom:100}}/>

        <h2>自定义样式</h2>

        <BackTop visibilityHeight={100} style={{right:200,bottom:50}}>
            <Button type="primary">自定义</Button>
        </BackTop>
    </div>
)))
