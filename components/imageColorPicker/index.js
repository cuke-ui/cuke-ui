// import React, { PureComponent } from "react";
// import cls from "classnames";
// import PropTypes from "prop-types";

// export default class ImageColorPicker extends PureComponent {
// 	static defaultProps = {
// 		prefixCls: "cuke-image-color-picker",
// 		onChange: () => {}
// 	};

// 	static propTypes = {
// 		prefixCls: PropTypes.string.isRequired,
// 		onChange: PropTypes.func
// 	};

// 	onChange = e => {
// 		this.props.onChange(e);
// 	};

// 	render() {
// 		const { prefixCls, className, children, ...attr } = this.props;

// 		return (
// 			<canvas
// 				ref={node => (this.canvas = node)}
// 				className={cls(prefixCls, className)}
// 				{...attr}
// 			/>
// 		);
// 	}
// 	handleImage = () => {
// 		console.log(this.props);
// 		const { src } = this.props;
// 		const canvas = this.canvas;
// 		const ctx = canvas.getContext("2d");

// 		console.log(src);
// 		ctx.drawImage(image, 0, 0, image.width, image.height);

// 		canvas.addEventListener("mousemove", e => {
// 			const x = event.layerX;
// 			const y = event.layerY;
// 			//获取一像素
// 			const { data } = ctx.getImageData(x, y, 1, 1);
// 			//每一个像素 有 r,g,b,a 构成
// 			const [r, g, b] = data;
// 			const a = data[3] / 255;
// 			const rgba = `rgba(${r},${g},${b},${a})`;
// 			console.log(rgba);
// 		});
// 	};
// 	componentDidMount() {
// 		this.handleImage();
// 	}
// }
