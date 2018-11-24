import React, { PureComponent, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Button from "../button";

// TODO:
export default class Upload extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-upload"
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.fileRef = createRef();
  }

  onChange = e => {
    console.log(this.fileRef.current.files);
  };
  onSelect = () => {
    this.fileRef.current.click();
  };

  render() {
    const {
      prefixCls,
      className,
      children,
      multiple,
      accept,
      ...attr
    } = this.props;

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <input
          type="file"
          hidden
          multiple={multiple}
          accept={accept}
          ref={this.fileRef}
          onChange={this.onChange}
        />
        <Button onClick={this.onSelect}>{children}</Button>
      </div>
    );
  }
}
