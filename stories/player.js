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
					onComplete(prize) {
						console.log('prize:', prize);
					}
				}}
			/>
		))
	);
