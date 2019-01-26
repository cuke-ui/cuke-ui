import React from "react";
import assert from "power-assert";
import { render, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MusicPlayer from "../index";

const audioLists = [
  {
    name: "星球坠落",
    singer: "中国新说唱",
    musicSrc: "http://mp3.flash127.com/public/t/id/45169.html",
    cover:
      "http://p1.music.126.net/4k-pMEO-en8IE6PdJoAYfg==/109951163429466895.jpg?param=130y130"
  }
];

describe("<MusicPlayer/>", () => {
  it("should render a <MusicPlayer/> components", () => {
    const wrapper = render(<MusicPlayer audioLists={audioLists} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should find cuke-music-player classnames", () => {
    const wrapper = shallow(<MusicPlayer audioLists={audioLists} />);
    assert(wrapper.find(".cuke-music-player").length === 1);
  });
});
