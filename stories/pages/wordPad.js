import React, { Component } from 'react';
import WordPad from '../../components/wordPad';
import Button from '../../components/button';
import Message from '../../components/message';
import Row from '../../components/row';
import Col from '../../components/col';

export default class WordPadPage extends Component {
  state = {
    imgUrl: "",
    clear: false,
  }
  onGetImage = () => {
    const img = this.canvas.toDataURL('image/png')
    console.log('获取成功:', img)
    this.setState({
      imgUrl: img
    })
    Message.success('获取成功')
  }
  clearWordPad = ()=> {
    this.setState({
      clear: true
    })
  }
  render() {
    const { imgUrl } = this.state
    return (
      <Row>
        <Col span={8}>
          <h2>用鼠标在上面写字</h2>
          <WordPad
            width={300}
            height={300}
            getCanvas={(canvas, ctx) => this.canvas = canvas}
          />
          <Button type="primary" onClick={this.onGetImage} style={{marginTop: 20}}>获取文字</Button>
          {
            imgUrl ? <img src={imgUrl} /> : undefined
          }
        </Col>
        <Col span={8}>
          <h2>自定义画笔</h2>
          <WordPad
            width={200}
            height={200}
            strokeColor="#396"
            strokeWidth={3}
            style={{
              border: '1px solid #dcdcdc',
              margin: '10px 0'
            }}
          />
        </Col>
        <Col span={8}>
          <h2>清除</h2>
          <WordPad
            width={200}
            height={200}
            clear={this.state.clear}
            onClearComplete={()=> Message.success('清除成功')}
          />
          <Button type="primary" onClick={this.clearWordPad} style={{marginTop: 20}}>清除</Button>
        </Col>
      </Row>
    )
  }
}
