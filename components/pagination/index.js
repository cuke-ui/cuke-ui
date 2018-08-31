import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Button from "../button";
import "./styles.less";

export default class Pagination extends PureComponent {
	defaultCurrentPage = 1;
	typeConfig = {
		prev: "prev",
		next: "next"
	};
	state = {
		current: 1
	};
	static defaultProps = {
		prefixCls: "cuke-pagination",
		current: "N/A",
		total: "N/A",
		separator: "/",
		locale: {
			prevText: "上一页",
			nextText: "下一页"
		},
		onChange: () => {}
	};
	static propTypes = {
		prefixCls: PropTypes.string.isRequired,
		separator: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		total: PropTypes.oneOfType([
			PropTypes.number.isRequired,
			PropTypes.string.isRequired
		]), //总数
		current: PropTypes.oneOfType([
			//当前索引
			PropTypes.number.isRequired,
			PropTypes.string.isRequired
		]),
		locale: PropTypes.object, //自定义按钮
		onChange: PropTypes.func //回调(type,current)
	};
	getPageList = type => {
		let { current } = this.state;
		const { prev } = this.typeConfig;
		const _current = type === prev ? --current : ++current;
		this.props.onChange(type, _current);
		this.setState({
			current: _current
		});
	};
	render() {
		const {
			prefixCls,
			total,
			separator,
			locale: { prevText, nextText },
			className,
			...attr
		} = this.props;
		const { prev, next } = this.typeConfig;
		const { current } = this.state;

		return (
			<section className={cls(prefixCls, className)} {...attr}>
				{current <= this.defaultCurrentPage ? (
					<Button disabled>{prevText}</Button>
				) : (
					<Button type="primary" onClick={() => this.getPageList(prev)}>
						{prevText}
					</Button>
				)}
				<span className={`${prefixCls}-pages`}>
					<span className={`${prefixCls}-page-index`}>{current}</span>{" "}
					{separator} {total}
				</span>
				{current >= total ? (
					<Button disabled>{nextText}</Button>
				) : (
					<Button type="primary" onClick={() => this.getPageList(next)}>
						{nextText}
					</Button>
				)}
			</section>
		);
	}
	componentDidMount() {
		this.setState({
			current: this.props.current
		});
	}
	componentWillReceiveProps({ current }) {
		this.setState({
			current
		});
	}
}
