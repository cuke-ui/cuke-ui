import React, { PureComponent, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Button from "../button";
import message from "../message";

const formatFileSize = fileSize => {
  const sizeUnitArr = ["Byte", "KB", "MB", "GB"];
  if (fileSize === 0) {
    return "0 KB";
  }
  const i = parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)));
  if (i === 0) {
    return fileSize + sizeUnitArr[i];
  }
  return (fileSize / 1024 ** i).toFixed(1) + sizeUnitArr[i];
};

const uploadFileType = "file";
const uploadImageType = "image";
const uploadFileTypeNames = {
  [uploadFileType]: "文件",
  [uploadImageType]: "图片"
};
const imageReg = /\/(?:jpeg|jpg|png|gif|svg)/i;

// TODO:  完成图片列表渲染
export default class Upload extends PureComponent {
  state = {
    uploadList: []
  };
  static defaultProps = {
    prefixCls: "cuke-upload",
    showUploadList: true,
    multiple: true,
    beforeUpload: () => true,
    maxSize: 1024,
    directory: false,
    type: uploadImageType,
    typeName: uploadFileTypeNames[uploadImageType]
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    showUploadList: PropTypes.bool,
    directory: PropTypes.bool,
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    typeName: PropTypes.any,
    type: PropTypes.oneOf([uploadFileType, uploadImageType])
  };

  constructor(props) {
    super(props);
    this.fileRef = createRef();
  }

  get typeName() {
    return this.props.typeName || uploadFileTypeNames[this.props.type];
  }

  onSelect = () => {
    const files = [...this.fileRef.current.files][0];
    const { name, size, type } = files;
    const uploadList = [...this.state.uploadList];
    const fileInfo = {
      name,
      size,
      type
    };
    uploadList.push(fileInfo);
    if (
      this.props.beforeUpload(fileInfo) ||
      this.defaultBeforeUpload(fileInfo)
    ) {
      this.setState({
        uploadList
      });
      console.log(11);
    }
  };

  defaultBeforeUpload = ({ size, type }) => {
    const { maxSize, type: uploadType } = this.props;
    const imageType = type.split("/").pop();

    if (uploadType === uploadImageType && !imageReg.test(type)) {
      message.error(`${this.typeName} 不支持 ${imageType} 格式`);
      return false;
    }

    if (maxSize && typeof maxSize === "number") {
      const fileSize = size / 1024;
      if (fileSize > maxSize) {
        message.error(`${this.typeName} 最大支持 ${formatFileSize(maxSize)}`);
        return false;
      }
    }
    return true;
  };

  _onSelect = () => {
    this.fileRef.current.click();
  };

  loadImage = src => {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => res(img);
      img.onerror = rej;
    });
  };

  render() {
    const {
      prefixCls,
      className,
      children,
      multiple,
      disabled,
      accept,
      directory,
      typeName, //eslint-disable-line
      maxSize, //eslint-disable-line
      beforeUpload, //eslint-disable-line
      showUploadList, //eslint-disable-line
      ...attr
    } = this.props;

    const { uploadList } = this.state;
    const isDirectory = directory
      ? {
          webkitdirectory: "true"
        }
      : {};

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <input
          type="file"
          hidden
          multiple={multiple}
          accept={accept}
          ref={this.fileRef}
          onChange={this.onSelect}
          {...isDirectory}
        />
        <Button onClick={this._onSelect} disabled={disabled}>
          {children}
        </Button>
        <ul className={cls(`${prefixCls}-upload-list`)}>
          {uploadList.map(({ name, size, type }, index) => {
            return (
              <li key={index}>
                {name}
                {type}
                {formatFileSize(size)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
