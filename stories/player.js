import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import MusicPlayer from '../components/musicPlayer';
import Turntable from '../components/turnTable/';

storiesOf('娱乐', module)
	.add(
		'MusicPlayer 音乐播放器',
		withInfo(
			`
  详细文档请查看 [https://github.com/lijinke666/react-music-player](https://github.com/lijinke666/react-music-player)
    
    `
		)(() => (
			<MusicPlayer
				audioLists={[
					{
						name: '星球坠落',
						singer: '中国新说唱',
						musicSrc: 'http://mp3.flash127.com/public/t/id/45169.html',
						cover:
							'http://p1.music.126.net/4k-pMEO-en8IE6PdJoAYfg==/109951163429466895.jpg?param=130y130'
					}
				]}
			/>
		))
	)

	.add(
		'TurnTable 抽奖转盘',
		withInfo(
			`
  详细文档请查看 [https://github.com/lijinke666/react-turntable)
    
    `
		)(() => (
			<Turntable
				{...{
					prizes: new Array(8).fill(0).map((_,i)=> `奖品${i+1}`),
					onStart(){
						//在转动之前 会触发 返回 false 会停止转动  可以再这个方法里面做一些判断
						console.log('start...')
						return true
					},
					onComplete(prize) {
						alert(prize);
					}
				}}
			/>
		))
	);
