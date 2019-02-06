import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import MusicPlayer from "../components/music-player";
import Turntable from "../components/turn-table";
import message from "../components/message";
import Col from "../components/col";
import Row from "../components/row";
import Modal from "../components/modal";
import "../components/message/styles.less";
import "../components/modal/styles.less";
import "react-jinke-music-player/assets/index.css";
import "react-turntable/assets/index.css";

const prizes = new Array(8).fill(0).map((_, i) => `奖品${i + 1}`);

storiesOf("娱乐", module)
  .add(
    "MusicPlayer 音乐播放器",
    withInfo(
      `
  详细文档请查看 [https://github.com/lijinke666/react-music-player](https://github.com/lijinke666/react-music-player)
    
    `
    )(() => (
      <MusicPlayer
        audioLists={[
          {
            name: "难得",
            singer: "安来宁",
            cover: "//cdn.lijinke.cn/nande.jpg",
            musicSrc: "//cdn.lijinke.cn/nande.mp3"
          },
          {
            name: "Despacito",
            singer: "Luis Fonsi",
            cover:
              "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
            musicSrc: () => {
              return Promise.resolve(
                "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
              );
            }
          },
          {
            name: "Bedtime Stories",
            singer: "Jay Chou",
            cover:
              "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
            musicSrc:
              "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3"
          }
        ]}
      />
    ))
  )

  .add(
    "TurnTable 抽奖转盘",
    withInfo(
      `
  详细文档请查看 [https://github.com/lijinke666/react-turntable)
    
    `
    )(() => (
      <Row>
        <Col>
          <h2>基本使用</h2>
          <Turntable
            {...{
              prizes,
              onComplete(prize) {
                console.log(prize);
                message.success(prize);
              }
            }}
          />
        </Col>
        <Col>
          <h2>自定义配置</h2>
          <Turntable
            {...{
              prizes,
              width: 300,
              height: 300,
              speed: 2000,
              duration: 10000,
              clickText: "自定义",
              primaryColor: "#355",
              secondaryColor: "#f63",
              fontStyle: {
                color: "#ccc",
                size: "14px",
                fontWeight: "none",
                fontVertical: false,
                fontFamily: "Microsoft YaHei"
              },
              onComplete(prize) {
                console.log(prize);
                message.success(prize);
              }
            }}
          />
        </Col>
        <Col>
          <h2>文字竖排显示</h2>
          <Turntable
            {...{
              prizes,
              fontStyle: {
                color: "#fff",
                fontVertical: true
              },
              onComplete(prize) {
                console.log(prize);
                message.success(prize);
              }
            }}
          />
        </Col>
        <Col>
          <h2>自定义行为</h2>
          <Turntable
            {...{
              prizes,
              onStart() {
                Modal.confirm({
                  title: "请充值",
                  content: "充值500元才可以转转盘"
                });
                return false;
              },
              onComplete(prize) {
                console.log(prize);
                message.success(prize);
              }
            }}
          />
        </Col>
      </Row>
    ))
  );
