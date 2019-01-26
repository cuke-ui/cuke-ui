import React, { Component } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import ReactMusicPlayer from "react-jinke-music-player";

export default class MusicPlayer extends Component {
  static propTypes = {
    audioLists: PropTypes.array.isRequired,
    theme: PropTypes.oneOf(["dark", "light"]),
    mode: PropTypes.oneOf(["mini", "full"]),
    defaultPlayMode: PropTypes.oneOf([
      "order",
      "orderLoop",
      "singleLoop",
      "shufflePlay"
    ]),
    drag: PropTypes.bool,
    seeked: PropTypes.bool,
    autoPlay: PropTypes.bool,
    playModeText: PropTypes.object,
    panelTitle: PropTypes.string,
    closeText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    openText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    notContentText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    controllerTitle: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    defaultPosition: PropTypes.shape({
      top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),
    onAudioPlay: PropTypes.func,
    onAudioPause: PropTypes.func,
    onAudioEnded: PropTypes.func,
    onAudioAbort: PropTypes.func,
    onAudioVolumeChange: PropTypes.func,
    onAudioLoadError: PropTypes.func,
    onAudioProgress: PropTypes.func,
    onAudioSeeked: PropTypes.func,
    onAudioDownload: PropTypes.func,
    onAudioReload: PropTypes.func,
    onThemeChange: PropTypes.func,
    onAudioListsChange: PropTypes.func,
    onPlayModeChange: PropTypes.func,
    onModeChange: PropTypes.func,
    onAudioListsPanelChange: PropTypes.func,
    onAudioPlayTrackChange: PropTypes.func,
    onAudioListsDragEnd: PropTypes.func,
    showDownload: PropTypes.bool,
    showPlay: PropTypes.bool,
    showReload: PropTypes.bool,
    showPlayMode: PropTypes.bool,
    showThemeSwitch: PropTypes.bool,
    showMiniModeCover: PropTypes.bool,
    toggleMode: PropTypes.bool,
    once: PropTypes.bool,
    extendsContent: PropTypes.array,
    checkedText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    unCheckedText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    defaultVolume: PropTypes.number,
    playModeShowTime: PropTypes.number,
    bounds: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    showMiniProcessBar: PropTypes.bool,
    loadAudioErrorPlayNext: PropTypes.bool,
    preload: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(["auto", "metadata", "none"])
    ]),
    glassBg: PropTypes.bool,
    remember: PropTypes.bool,
    remove: PropTypes.bool,
    defaultPlayIndex: PropTypes.number,
    prefixCls: PropTypes.string.isRequired
  };
  static defaultProps = {
    prefixCls: "cuke-music-player",
    playModeText: {
      order: "顺序播放",
      orderLoop: "列表循环",
      singleLoop: "单曲循环",
      shufflePlay: "随机播放"
    },
    panelTitle: "播放列表",
    closeText: "关闭",
    openText: "打开",
    notContentText: "没有音乐",
    checkedText: "开",
    unCheckedText: "关"
  };

  render() {
    const { prefixCls, className, ...attr } = this.props;

    return <ReactMusicPlayer className={cls(prefixCls, className)} {...attr} />;
  }
}
