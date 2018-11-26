import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Upload, { formatFileSize } from "../index";
import Button from "../../button";
import Progress from "../../progress";

const uploadList = [
  {
    name: "test",
    size: 1024,
    progress: 10,
    status: "progress",
    cover: "https://www.test.jpg"
  }
];

describe("<Upload/>", () => {
  it("should render a <Upload/> components", () => {
    const wrapper = shallow(<Upload>选择文件</Upload>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should find file input", () => {
    const wrapper = shallow(<Upload>选择文件</Upload>);
    expect(wrapper.find("input")).toHaveLength(1);
  });
  it("should find cuke-upload classnames", () => {
    const wrapper = shallow(<Upload>选择文件</Upload>);
    expect(wrapper.find(".cuke-upload")).toHaveLength(1);
  });
  it("should can not find upload list when no select", () => {
    const wrapper = shallow(<Upload>选择文件</Upload>);
    expect(wrapper.find(".cuke-upload-upload-item")).toHaveLength(0);
  });
  it("should format file size", () => {
    expect(formatFileSize(1024)).toEqual("1KB");
    expect(formatFileSize(10)).toEqual("10Byte");
    expect(formatFileSize(1024 * 10)).toEqual("10KB");
    expect(formatFileSize(1024 * 1024 * 10)).toEqual("10MB");
    expect(formatFileSize(1024 * 1024 * 1024 * 10)).toEqual("10GB");
  });
  it("should find Button in Upload component", () => {
    const wrapper = shallow(
      <Upload type="image">
        <Button>选择</Button>
      </Upload>
    );
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it("should trigger onPreview", () => {
    const onPreview = jest.fn();
    const wrapper = shallow(
      <Upload type="image" onPreview={onPreview}>
        1
      </Upload>
    );
    wrapper.setState({
      uploadList
    });
    wrapper.find(".cuke-upload-upload-item-cover").simulate("click");
    expect(onPreview).toHaveBeenCalled();
  });
  it("should render upload list", () => {
    const wrapper = shallow(<Upload type="image">1</Upload>);
    wrapper.setState({
      uploadList
    });
    expect(wrapper.find(".cuke-upload-upload-list")).toHaveLength(1);
  });
  it("should render Progress in upload list", () => {
    const wrapper = shallow(<Upload type="image">1</Upload>);
    wrapper.setState({
      uploadList
    });
    expect(wrapper.find(Progress)).toHaveLength(1);
  });
  it("should render file info in upload list", () => {
    const wrapper = shallow(<Upload type="image">1</Upload>);
    wrapper.setState({
      uploadList
    });
    expect(wrapper.text()).toContain("test");
    expect(wrapper.text()).toContain("1KB");
  });
  it("should pass is image req", () => {
    const wrapper = new Upload();
    expect(wrapper.isImage("image/png")).toEqual(true);
    expect(wrapper.isImage("test")).toEqual(false);
  });
  it("should pass beforeUpload validate", () => {
    const wrapper = new Upload({ maxSize: 100, uploadType: "image" });
    expect(
      wrapper.defaultBeforeUpload({ size: 1024, type: "image/png" })
    ).toEqual(true);
  });
  it("should get image ", () => {
    const wrapper = new Upload();
    expect(wrapper.loadImage("http://test.jpg")).toEqual(Promise.resolve());
  });
  it.skip("should trigger onSelect", () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      <Upload type="image" onSelect={onSelect}>
        选择文件
      </Upload>
    );
    wrapper.setState({
      uploadList
    });
    wrapper.find("input").simulate("change");
    expect(onSelect).toHaveBeenCalled();
  });
});
