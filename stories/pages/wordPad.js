import React, { Component } from 'react';
import WordPad from '../../components/wordPad';
import Button from '../../components/button';
import message from '../../components/message';

export default class WordPadPage extends Component { 
  state = {
    imgUrl:""
  }
  onGetImage = ()=>{
    const img = this.canvas.toDataURL('image/png')
    console.log('获取成功:',img)
    this.setState({
      imgUrl:img
    })
    message.success('获取成功')
  }
  render(){ 
    const { imgUrl } = this.state
    return (
      <div>
			<h2>用鼠标在上面写字</h2>
			<WordPad
				width={300}
				height={300}
				style={{
					border: '1px solid #444',
					margin: '10px 0'
				}}
s				getCanvas={(canvas, ctx) => this.canvas = canvas}
			/>
			<Button type="primary" onClick={this.onGetImage}>获取文字</Button>
      {
        imgUrl ? <img src={imgUrl}/> : undefined
      }
			<h2>自定义画笔</h2>
			<WordPad
				width={200}
				height={200}
				strokeColor="#396"
				strokeWidth={3}
				style={{
					border: '1px solid #444',
					margin: '10px 0'
				}}
			/>
      </div>
    )
  }
}