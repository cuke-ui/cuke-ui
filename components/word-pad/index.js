import React, { PureComponent } from "react";
import propTypes from "prop-types";
import cls from "classnames";

export default class WordPad extends PureComponent {
  state = {
    isMouseDown: false,
    //上一次的坐标
    lastCoordinate: {
      x: 0,
      y: 0
    }
  };
  static defaultProps = {
    prefixCls: "cuke-word-pad",
    clear: false,
    width: 700,
    height: 700,
    lineCap: "round",
    lineJoin: "round",
    strokeWidth: 10,
    strokeColor: "#444",
    getCanvasRef: () => {},
    onClearComplete: () => {}
  };
  static propTypes = {
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
    strokeColor: propTypes.string,
    strokeWidth: propTypes.number,
    lineJoin: propTypes.string,
    lineCap: propTypes.string,
    getCanvasRef: propTypes.func,
    onClearComplete: propTypes.func,
    prefixCls: propTypes.string.isRequired,
    clear: propTypes.bool
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { prefixCls, className, style } = this.props;
    return (
      <canvas
        className={cls(prefixCls, className)}
        style={style}
        ref={node => (this.canvas = node)}
      >
        你的浏览器不支持 canvas
      </canvas>
    );
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  windowToCanvas(x, y) {
    const { left, top } = this.canvas.getBoundingClientRect();
    return {
      x: Math.round(x - left),
      y: Math.round(y - top)
    };
  }
  bindEvents() {
    this.canvas.onmousedown = e => {
      e.preventDefault();
      this.setState({ isMouseDown: true });
      this.setState({
        lastCoordinate: this.windowToCanvas(e.clientX, e.clientY)
      });
    };
    this.canvas.onmouseup = e => {
      e.preventDefault();
      this.setState({
        isMouseDown: false
      });
    };
    this.canvas.onmouseout = e => {
      e.preventDefault();
      this.setState({
        isMouseDown: false
      });
    };
    this.canvas.onmousemove = e => {
      e.preventDefault();
      const { isMouseDown, lastCoordinate } = this.state;
      const { strokeColor, strokeWidth, lineCap, lineJoin } = this.props;
      if (isMouseDown) {
        //如果鼠标移动的时候鼠标是按下时  执行绘制
        const nowCoordinate = this.windowToCanvas(e.clientX, e.clientY);
        this.ctx.beginPath();
        this.ctx.moveTo(lastCoordinate.x, lastCoordinate.y);
        this.ctx.lineTo(nowCoordinate.x, nowCoordinate.y);
        this.ctx.lineWidth = strokeWidth;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineCap = lineCap; //线是圆滑的
        this.ctx.lineJoin = lineJoin; //两根线过渡圆形
        this.ctx.stroke();

        //更新坐标
        this.setState({
          lastCoordinate: nowCoordinate
        });
      }
    };
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.clear) {
      this.clear();
      if (nextProps.onClearComplete) {
        nextProps.onClearComplete();
      }
    }
  }
  componentDidMount() {
    const { width, height } = this.props;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
    this.bindEvents();
    this.props.getCanvasRef(this.canvas, this.ctx);
  }
  componentWillUnmount() {
    this.canvas = undefined;
  }
}
