import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Pagination from "../pagination";
import Spin from "../spin";

export default class Table extends PureComponent {
  state = {
    pageIndex: this.props.pagination.pageIndex || 1
  };
  static propsTypes = {
    prefixCls: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.any,
        width: PropTypes.number,
        render: PropTypes.func,
        key: PropTypes.string,
        dataIndex: PropTypes.string
      })
    ),
    dataSource: PropTypes.array,
    loading: PropTypes.bool,
    loadingTip: PropTypes.string
  };
  static defaultProps = {
    prefixCls: "cuke-table",
    dataSource: [],
    columns: [],
    pagination: {
      pageIndex: 1,
      pageSize: 10
    },
    loading: false,
    loadingTip: ""
  };
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps({ pagination }, { pageIndex }) {
    if (pagination.pageIndex !== pageIndex) {
      return {
        pageIndex
      };
    }
    return null;
  }
  get tableHeader() {
    const { prefixCls, columns } = this.props;
    return (
      <thead className={`${prefixCls}-thead`}>
        <tr>
          {columns.map(({ title }, index) => {
            return <th key={`thead-${index}`}>{title}</th>;
          })}
        </tr>
      </thead>
    );
  }

  get dataSource() {
    const { dataSource, pagination } = this.props;
    const { pageIndex } = this.state;
    return dataSource.slice(
      (pageIndex - 1) * pagination.pageSize,
      pageIndex * pagination.pageSize
    );
  }

  get tableBody() {
    const { prefixCls, columns } = this.props;
    return (
      <tbody className={`${prefixCls}-tbody`}>
        {this.dataSource.map((item, index) => {
          const { key: rowKey } = columns[index] || {};
          return (
            <tr key={rowKey || `tbody-${index}`}>
              {columns.map(column => {
                const { dataIndex, render } = column;
                const value = item[dataIndex];
                return (
                  <td key={`td-${dataIndex}`}>
                    {(render && render(value, item, index)) || value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }

  get total() {
    return this.props.dataSource.length;
  }

  onPageChange = (pageIndex, pageSize) => {
    this.setState(
      {
        pageIndex
      },
      () => {
        this.props.pagination.onChange(pageIndex, pageSize);
      }
    );
  };
  render() {
    const {
      className,
      prefixCls,
      pagination,
      loading,
      loadingTip,
      dataSource, //eslint-disable-line
      ...attr
    } = this.props;
    const { pageIndex } = this.state;

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <Spin spinning={loading} tip={loadingTip} size="large">
          <table className={`${prefixCls}-origin-table`}>
            {this.tableHeader}
            {this.tableBody}
          </table>
          {!!pagination && (
            <div className={cls(`${prefixCls}-pagination`)}>
              <Pagination
                current={pageIndex}
                total={this.total}
                {...pagination}
                onChange={this.onPageChange}
              />
            </div>
          )}
        </Spin>
      </div>
    );
  }
}
