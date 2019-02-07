import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Table from "../index";

const dataSource = [
  {
    name: "黄瓜",
    count: 1,
    id: 1
  },
  {
    name: "西瓜",
    count: 344,
    id: 2
  },
  {
    name: "香蕉",
    count: 199,
    id: 3
  }
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "名字",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "数量",
    dataIndex: "count",
    key: "count"
  },
  {
    title: "操作",
    dataIndex: "setting",
    key: "setting",
    render: (value, data, index) => <Button>删除</Button>
  }
];

import Button from "../../button";
import Empty from "../../empty";
import Pagination from "../../pagination";
import Spin from "../../spin";
import Checkbox from "../../checkbox";

describe("<Table/>", () => {
  it("should render Table", () => {
    const wrapper = render(<Table columns={columns} dataSource={dataSource} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-table class name", () => {
    const wrapper = shallow(
      <Table columns={columns} dataSource={dataSource} />
    );
    assert(wrapper.find(".cuke-table").length === 1);
    assert(wrapper.find(".cuke-table-origin-table").length === 1);
    assert(wrapper.find(".cuke-table-pagination").length === 1);
    assert(wrapper.find(".cuke-table-tbody").length === 1);
  });
  it("should render empty table", () => {
    const wrapper = shallow(<Table columns={columns} dataSource={[]} />);
    assert(wrapper.find(Empty).length === 1);
    assert(wrapper.find(Pagination).length === 0);
    assert(wrapper.find(".cuke-table-tbody").length === 0);
  });

  it("should find custom render", () => {
    const wrapper = render(<Table columns={columns} dataSource={dataSource} />);
    expect(wrapper.text()).toContain("删除");
  });

  it("should can not render Pagination when pagination is false", () => {
    const wrapper = shallow(
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    );
    assert(wrapper.find(Pagination).length === 0);
  });

  it("should render Spin when is loading", () => {
    const wrapper = shallow(
      <Table columns={columns} dataSource={dataSource} loading />
    );
    assert(wrapper.find(Spin).length === 1);
  });

  it("should render border", () => {
    const wrapper = shallow(
      <Table columns={columns} dataSource={dataSource} bordered />
    );
    assert(wrapper.find(".cuke-table-bordered").length === 1);
  });

  it("should render row selection", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          onChange,
          getCheckboxProps(record) {
            console.log("record: ", record);
          }
        }}
      />
    );
    assert(wrapper.find(Checkbox).length === 4);
    wrapper
      .find(Checkbox)
      .at(0)
      .simulate("change", {
        target: {
          checked: true
        }
      });
    expect(onChange).toHaveBeenCalled();
  });
});
