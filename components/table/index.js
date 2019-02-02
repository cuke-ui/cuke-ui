import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Pagination from "../pagination";

export default class Table extends PureComponent {
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
    dataSource: PropTypes.array
  };
  static defaultProps = {
    prefixCls: "cuke-table",
    dataSource: [],
    columns: []
  };
  constructor(props) {
    super(props);
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

  get tableBody() {
    const { prefixCls, columns, dataSource } = this.props;
    return (
      <tbody className={`${prefixCls}-tbody`}>
        {dataSource.map((item, index) => {
          const { key: rowKey } = columns[index];
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
  render() {
    const { className, prefixCls, ...attr } = this.props;

    return (
      <div className={cls(prefixCls, className)} {...attr}>
        <table className={`${prefixCls}-origin-table`}>
          {this.tableHeader}
          {this.tableBody}
        </table>
        <div className={cls(`${prefixCls}-pagination`)} />
        <Pagination />
      </div>
    );
  }
}
