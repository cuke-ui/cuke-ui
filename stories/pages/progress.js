import React, { Component } from 'react';
import Progress from '../../components/progress';
import Button from '../../components/button';

export default class ModalPage extends Component {
	state = {
		percent: 10
	};
	onCancel = value => {
		this.setState({
			percent: value
		});
  };
  render(){
    return (
      <div>
        <Progress percent={this.state.percent} animation={false}/>
        <Progress percent={this.state.percent} />
        <Button size="small" onClick={()=> this.setState({percent:this.state.percent-2})}>-</Button>
        <Button size="small" onClick={()=> this.setState({percent:this.state.percent+2})}>+</Button>
      </div>
    )
  }
}