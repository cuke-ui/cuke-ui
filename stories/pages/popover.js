import React, { Component } from 'react';
import Popover from '../../components/popover';
import Button from '../../components/button';

export default class PopoverPage extends Component {
  state = {
    visible: false
  };
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  onVisibleChange = (visible) => {
    this.setState({ visible });
  }
  render() {
    return (
      <Popover
        trigger="click"
        title="黄瓜ui"
        content={<Button block onClick={this.onClose}>关闭</Button>}
        visible={this.state.visible}
        onVisibleChange={this.onVisibleChange}
      >
        <Button type="primary">打开</Button>
      </Popover>
    )
  }
}
