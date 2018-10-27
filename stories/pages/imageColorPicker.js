import React, { PureComponent } from 'react';
// import ImageColorPicker from '../../components/imageColorPicker';


export default class ImageColorPickerPage extends PureComponent {
  onChange = e => {
    console.log(e.target.value, e.target.checked);
  };
  onGroupChange = value => {
    console.log('选中:', value);
  };
  render() {
    return (
      <div>
        <h2>基本使用</h2>
      </div>
    );
  }
}
