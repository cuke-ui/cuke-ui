import assert from "power-assert";
import React from "react";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CityPicker from "../index";
import Input from "../../input";
import CityPickerCore from "../CityPickerCore";

const cityList = [
  {
    group: "热门",
    resources: [
      {
        id: 1,
        name: "成都"
      }
    ]
  },
  {
    group: "ABCDE",
    resources: [
      {
        id: 1,
        name: "成都"
      },
      {
        id: 2,
        name: "资阳"
      }
    ]
  },
  {
    group: "FGHIJ",
    resources: [
      {
        id: 3,
        name: "上海"
      },
      {
        id: 4,
        name: "乐至"
      }
    ]
  },
  {
    group: "KLMNO",
    resources: [
      {
        id: 5,
        name: "自贡"
      },
      {
        id: 6,
        name: "北京"
      },
      {
        id: 7,
        name: "香港"
      },
      {
        id: 8,
        name: "南京"
      },
      {
        id: 9,
        name: "简阳"
      }
    ]
  },
  {
    group: "PQRST",
    resources: [
      {
        id: 10,
        name: "广州"
      }
    ]
  },
  {
    group: "UVWXYZ",
    resources: [
      {
        id: 11,
        name: "西安"
      }
    ]
  }
];

describe("<CityPicker/>", () => {
  it("should render CityPicker", () => {
    const wrapper = render(<CityPicker cityList={cityList} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render Input when render CityPicker", () => {
    const wrapper = shallow(<CityPicker cityList={cityList} />);
    assert(wrapper.find(Input).length === 1);
  });

  it("should render CityPickerCore when render CityPicker", () => {
    const wrapper = shallow(<CityPicker cityList={cityList} />);
    assert(wrapper.find(CityPickerCore).length === 1);
  });

  it("should render cuke-city-picker classnames", () => {
    const wrapper = shallow(<CityPicker cityList={cityList} />);
    assert(wrapper.find(".cuke-city-picker").length === 1);
  });

  it("should render cuke-city-picker-core classnames", () => {
    const wrapper = shallow(<CityPickerCore cityList={cityList} />);
    assert(wrapper.find(".cuke-city-picker-core").length === 1);
  });
  it("should render CityPickerCore ", () => {
    const wrapper = shallow(<CityPicker cityList={cityList} />);
    assert(wrapper.find(CityPickerCore).length === 1);
  });

  it("should render custom number active city group", () => {
    const wrapper = shallow(
      <CityPicker cityList={cityList} defaultActiveGroup={2} />
    );
    assert(wrapper.state().selectedCityGroup === 2);
  });

  it("should render custom string active city group ", () => {
    const wrapper = shallow(
      <CityPicker cityList={cityList} defaultActiveGroup={"热门"} />
    );
    assert(wrapper.state().selectedCityGroup === "热门");
  });

  it("should render custom disabled city group and can not trigger click event ", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <CityPicker
        onCityGroupChange={onChange}
        cityList={cityList}
        disabledGroups={[0, 1, 2, 3, 4, 5, 6]}
      />
    );
    wrapper.find(".cuke-city-picker").simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should render can trigger city group change event ", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <CityPicker onCityGroupChange={onChange} cityList={cityList} />
    );
    wrapper.find(".cuke-city-picker").simulate("click");
    setTimeout(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it("should render can trigger city group change event ", () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <CityPicker onCityChange={onChange} cityList={cityList} />
    );
    wrapper.find(".cuke-city-picker").simulate("click");
    setTimeout(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
