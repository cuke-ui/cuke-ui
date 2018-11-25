import React, { PureComponent, createRef } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import Button from "../button";
import message from "../message";
import Progress from "../progress";
import Modal from "../modal";

const formatFileSize = fileSize => {
  const sizeUnitArr = ["Byte", "KB", "MB", "GB"];
  if (fileSize === 0) {
    return "0 KB";
  }
  const i = parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)));
  if (i === 0) {
    return fileSize + sizeUnitArr[i];
  }
  return (fileSize / 1024 ** i).toFixed(0) + sizeUnitArr[i];
};

const uploadFileType = "file";
const uploadImageType = "image";
const uploadFileTypeNames = {
  [uploadFileType]: "文件",
  [uploadImageType]: "图片"
};

// 上传 对应 进度条属性 的状态
const UPLOAD_STATUS = {
  ERROR: "error",
  SUCCESS: "success",
  PROGRESS: "progress",
  ABORT: "warning",
  TIMEOUT: "warning"
};

// 默认图片上传文件后缀名限制
const imageReg = /\/(?:jpeg|jpg|png|gif|svg)/i;

export default class Upload extends PureComponent {
  state = {
    uploadList: []
  };
  static defaultProps = {
    prefixCls: "cuke-upload",
    showUploadList: true, //是否显示上传文件列表
    multiple: false, //是否允许多选
    maxSize: 1024, //上传文件大小限制
    directory: false, //是否上传文件夹
    type: uploadFileType, //上传的文件类型 图片 还是 文件
    typeName: uploadFileTypeNames[uploadFileType],
    name: "file", //后端接收文件字段名
    onComplete: () => {},
    onError: () => {},
    onStart: () => {},
    onTimeOut: () => {},
    onProgress: () => {}
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    showUploadList: PropTypes.bool,
    directory: PropTypes.bool,
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    typeName: PropTypes.any,
    name: PropTypes.string,
    type: PropTypes.oneOf([uploadFileType, uploadImageType])
  };

  constructor(props) {
    super(props);
    this.fileRef = createRef();
  }

  get typeName() {
    return this.props.typeName || uploadFileTypeNames[this.props.type];
  }

  getCover(file) {
    return window.URL.createObjectURL(file);
  }

  onSelect = () => {
    const files = [...this.fileRef.current.files];
    files.forEach((file, index) => {
      const cover =
        (this.props.type === uploadImageType && this.getCover(file)) || "";
      const fileInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: UPLOAD_STATUS.PROGRESS,
        cover
      };
      if (
        (this.props.beforeUpload && !this.props.beforeUpload(fileInfo)) ||
        !this.defaultBeforeUpload(fileInfo)
      ) {
        return;
      }
      const uploadList = [...this.state.uploadList];
      uploadList.push(fileInfo);
      this.setState(
        {
          uploadList
        },
        () => {
          this.onUploadFile(fileInfo, index);
        }
      );
    });
  };

  changeUploadStatus = (status, index) => {
    const uploadList = [...this.state.uploadList];
    uploadList[index].status = status;
    this.setState({ uploadList, uploading: false });
  };

  onUploadFile = (file, index) => {
    const { name, action } = this.props;
    const formData = new FormData();
    const xhr = new XMLHttpRequest();

    formData.append(name, file);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const res = JSON.parse(xhr.responseText);
          this.changeUploadStatus(UPLOAD_STATUS.SUCCESS, index);
          this.props.onComplete(res);
        } else {
          this.changeUploadStatus(UPLOAD_STATUS.ERROR, index);
          this.props.onError();
        }
      }
    };

    xhr.onloadstart = () => {
      this.changeUploadStatus(UPLOAD_STATUS.PROGRESS, index);
      this.props.onStart();
    };
    xhr.onerror = err => {
      this.changeUploadStatus(UPLOAD_STATUS.ERROR, index);
      this.props.onError(err);
    };
    xhr.onabort = err => {
      this.changeUploadStatus(UPLOAD_STATUS.ABORT, index);
      this.props.onAbort(err);
    };
    xhr.ontimeout = err => {
      this.changeUploadStatus(UPLOAD_STATUS.TIMEOUT, index);
      this.props.onTimeOut(err);
    };
    xhr.onloadend = e => {
      this.setState({ uploading: false });
    };
    xhr.upload.onprogress = e => {
      const { loaded, total } = e;
      const progress = Math.round((loaded * 100) / total);
      const uploadList = [...this.state.uploadList];
      uploadList[index].progress = progress;
      uploadList[index].status = UPLOAD_STATUS.PROGRESS;
      this.props.onProgress(e, progress);
      this.setState({ uploadList });
    };

    xhr.open("POST", action, true);
    xhr.send(formData);
  };

  isImage = type => {
    return imageReg.test(type);
  };

  defaultBeforeUpload = ({ size, type }) => {
    const { maxSize, type: uploadType } = this.props;
    const imageType = type.split("/").pop();

    if (uploadType === uploadImageType && !this.isImage(type)) {
      message.error(`${this.typeName} 不支持 ${imageType} 格式`);
      return false;
    }

    if (maxSize && typeof maxSize === "number") {
      const fileSize = size / 1024;
      if (fileSize > maxSize) {
        message.error(
          `${this.typeName} 最大支持 ${formatFileSize(maxSize * 1024)}`
        );
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

  onPreviewCover = cover => () => {
    Modal.info({
      title: "预览",
      showMask: true,
      okText: "关闭",
      content: (
        <div className={`${this.props.prefixCls}-preview`}>
          <img src={cover} />
        </div>
      )
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
      type,
      typeName, //eslint-disable-line
      maxSize, //eslint-disable-line
      beforeUpload, //eslint-disable-line
      showUploadList, //eslint-disable-line
      onStart, //eslint-disable-line
      onComplete, //eslint-disable-line
      onTimeOut, //eslint-disable-line
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
        {showUploadList && (
          <ul className={cls(`${prefixCls}-upload-list`)}>
            {uploadList.map(
              ({ name, size, progress, status, cover }, index) => {
                const hasCover = type === uploadImageType && cover;
                return (
                  <li
                    key={index}
                    className={cls(`${prefixCls}-upload-item`, {
                      [`${prefixCls}-upload-item-has-cover`]: hasCover
                    })}
                  >
                    {hasCover && (
                      <div
                        className={cls(`${prefixCls}-upload-item-cover`)}
                        onClick={this.onPreviewCover(cover)}
                        style={{
                          backgroundImage: `url(${cover})`
                        }}
                      />
                    )}
                    <div className={cls(`${prefixCls}-upload-item-content`)}>
                      <div
                        className={cls(`${prefixCls}-upload-item-file-info`)}
                      >
                        <span>{name}</span>
                        <span>/</span>
                        <span>{formatFileSize(size)}</span>
                      </div>
                      <Progress
                        percent={progress}
                        type={status}
                        className={`${prefixCls}-upload-item-progress`}
                      />
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        )}
      </div>
    );
  }
}
