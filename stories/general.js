import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';
import './styles/button.less';

import "../components/button/styles.less";
import { UpIcon } from '../components/icon';

storiesOf('普通', module).add(
  'Button 按钮',
  withInfo(`
      代码演示
    
      ~~~js
      <Button>点我</Button>
      ~~~
    
    `)(() => (
      <div className="button-example">
        <h2>基本使用</h2>

        <Button onClick={action('clicked')}>默认</Button>

        <Button type="primary" onClick={action('clicked')}>
          主色调
      </Button>

        <Button type="info" onClick={action('clicked')}>
          信息
      </Button>

        <Button type="warning" onClick={action('clicked')}>
          警告
      </Button>

        <Button type="error" onClick={action('clicked')}>
          错误
      </Button>

        <Button type="success" onClick={action('clicked')}>
          成功
      </Button>

        <Button disabled onClick={action('clicked')}>
          禁用
      </Button>

        <Button type="primary" dashed onClick={action('clicked')}>
          虚线
      </Button>

        <Button type="primary" loading={true} onClick={action('clicked')}>
          加载中
      </Button>

        <Button type="primary" block onClick={action('clicked')}>
          100%
      </Button>

        <h2>空心按钮</h2>
        <Button type="primary" hollow onClick={action('clicked')}>
          主色调
      </Button>

        <Button type="info" hollow onClick={action('clicked')}>
          信息
      </Button>

        <Button type="warning" hollow onClick={action('clicked')}>
          警告
      </Button>

        <Button type="error" hollow onClick={action('clicked')}>
          错误
      </Button>

        <Button type="success" hollow onClick={action('clicked')}>
          成功
      </Button>
        <Button type="primary" hollow disabled onClick={action('clicked')}>
          禁用
      </Button>

        <Button type="primary" hollow dashed onClick={action('clicked')}>
          虚线
      </Button>

        <Button type="primary" hollow loading={true} onClick={action('clicked')}>
          加载中
      </Button>

        <Button type="primary" hollow block onClick={action('clicked')}>
          100%
      </Button>

        <h2>三个大小</h2>

        <Button type="primary" size="large">
          大
      </Button>

        <Button type="primary">
          中
      </Button>

        <Button type="primary" size="small">
          小
      </Button>

        <h2>圆形按钮</h2>

        <Button type="primary" circle>
        <UpIcon/>
        </Button>

        <Button type="info" circle>
        <UpIcon/>
        </Button>

        <Button type="primary" circle>
          <UpIcon/>
        </Button>

        <h2>链接</h2>
        <Button href="#">主页</Button>
        <Button type="primary" href="https://github.com/cuke-ui/cuke-ui.git">GITHUB</Button>
      </div>
    ))
);
