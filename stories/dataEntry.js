import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import WordPad from '../components/wordPad';
import Button from '../components/button';

storiesOf('数据录入', module).add('WordPad 写字板', () => (
	<div>
    <h3>用鼠标在上面写字</h3>
		<WordPad
			width={300}
			height={300}
			style={{
				border: '1px solid #444',
        margin:"10px 0"
			}}
      getCanvas={(canvas,ctx)=> action(canvas,ctx)}
		/>
    <Button type="primary">获取文字</Button>

    <h3>自定义画笔</h3>
    <WordPad
			width={200}
			height={200}
      strokeColor="#396"
      strokeWidth={3}
			style={{
				border: '1px solid #444',
        margin:"10px 0"
			}}
      
		/>
	</div>
));
