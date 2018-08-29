import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Row from '../components/row';
import Col from '../components/col';
import "./styles/grid.less"

storiesOf('布局', module).add('Grid 栅栏', withInfo()(() => (
	<div>
		<h2>24格网格</h2>
    {
      [8,6,4,2].map((span,i)=>{
        return (
          <Row className="example-row" key={i}>
            {
              new Array(24 / span).fill().map((_,j)=>(
                <Col className="example-col" span={span} key={j}>{span}</Col>
              ))
            }
          </Row>
        )
      })
    }

    <h2>设置 gutter</h2>

    <Row className="example-row" gutter={10}>
      <Col span={8} className="example-col">8</Col>
      <Col span={8} className="example-col">8</Col>
      <Col span={8} className="example-col">8</Col>
    </Row>

    <h2>设置间隙</h2>
    <Row className="example-row">
      <Col span={8} className="example-col">8</Col>
      <Col span={8} offset={8} className="example-col">8</Col>
    </Row>
    <Row className="example-row">
      <Col span={10} className="example-col">10</Col>
      <Col span={2} offset={2} className="example-col">2</Col>
      <Col span={2} offset={2} className="example-col">2</Col>
      <Col span={5} offset={1} className="example-col">5</Col>
    </Row>
	</div>
)))
