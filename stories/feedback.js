import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import message from '../components/message';
import Button from '../components/button';
import '../stories/styles/message.less';

storiesOf('操作反馈', module)
.add('Message 消息提示', withInfo(
  `
    基本使用 
    ~~~js
    message.success(content,duration(秒), callback, isDarkTheme)
    message.error(content,duration, callback, isDarkTheme)
    message.loading(content,duration, callback, isDarkTheme)
    message.warning(content,duration, callback, isDarkTheme)
    message.info(content,duration, callback, isDarkTheme)
    ~~~
  `
)(() => (
  <div className="message-example">
    <h3>基本使用</h3>
    <Button type="primary" onClick={()=> message.success('我是渣渣辉!')}>成功</Button>
    <Button type="error" onClick={()=> message.error('我是渣渣辉!')}>错误</Button>
    <Button type="warning" onClick={()=> message.warning('真香警告!')}>警告</Button>
    <Button type="info" onClick={()=> message.info('黄瓜 ui!')}>信息</Button>
    <Button type="primary" onClick={()=> message.loading('我是渣渣辉!')}>加载中</Button>

    <h3>自定义延时</h3>
    <Button type="primary" onClick={()=> message.loading('10秒后关闭',10)}>10秒过后关闭</Button>

    <h3>回调函数</h3>
    <Button type="primary" onClick={()=> message.loading('领取中...',3,()=> message.success('领取成功'))}>屠龙宝刀点击就送</Button>
  
    <h3>两种主题</h3>
    <Button type="primary" onClick={()=> message.info('你永远不懂我伤悲')}>白天</Button>  
    <Button type="primary" onClick={()=> message.info('像白天不懂夜的黑',2,undefined,true)}>黑夜</Button>  
  </div>
)))
