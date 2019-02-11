import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Pagination from "../pagination";
import Spin from "../spin";
import Empty from "../empty";
import Checkbox from "../checkbox";

export default class Table extends PureComponent {
  state = {
    pageIndex: this.props.pagination.pageIndex || 1,
    selectedRows: [],
    isSelectAll: false
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
    loadingTip: PropTypes.string,
    bordered: PropTypes.bool,
    showHeader: PropTypes.bool,
    rowSelection: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        onChange: PropTypes.func,
        getCheckboxProps: PropTypes.func
      })
    ])
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
    loadingTip: "",
    bordered: false,
    showHeader: true, // 是否显示表头
    rowSelection: false
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
    const { selectedRows } = this.state;
    const { prefixCls, columns, rowSelection } = this.props;
    const isIndeterminate =
      selectedRows.length >= 1 && selectedRows.length < this.dataSource.length;
    return (
      <thead className={`${prefixCls}-thead`}>
        <tr>
          {rowSelection && (
            <th key={`thead-checkbox`}>
              <Checkbox
                onChange={this.onSelectAllChange}
                checked={selectedRows.length >= 1}
                indeterminate={isIndeterminate}
              />
            </th>
          )}
          {columns.map(({ title }, index) => {
            return <th key={`thead-${index}`}>{title}</th>;
          })}
        </tr>
      </thead>
    );
  }

  get isIndeterminate() {
    const { selectedRows } = this.state;
    return (
      selectedRows.length >= 1 && selectedRows.length < this.dataSource.length
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

  rows = [];

  get tableBody() {
    const { prefixCls, columns, rowSelection } = this.props;
    const { selectedRows, isSelectAll } = this.state;
    this.rows = [];
    return (
      <tbody className={`${prefixCls}-tbody`}>
        {this.dataSource.map((item, index) => {
          const { key: rowKey = `tbody-${index}` } = columns[index] || {};
          const isChecked =
            isSelectAll ||
            !!selectedRows.find(
              row => JSON.stringify(row) === JSON.stringify(item)
            );
          const checkboxProps =
            (rowSelection &&
              rowSelection.getCheckboxProps &&
              rowSelection.getCheckboxProps(item)) ||
            {};
          this.rows.push(checkboxProps.disabled || false);
          return (
            <tr key={rowKey}>
              {rowSelection && (
                <td key={`tbody-checkbox`}>
                  <Checkbox
                    checked={!checkboxProps.disabled && isChecked}
                    onChange={this.onRowCheckboxChange(item)}
                    {...checkboxProps}
                  />
                </td>
              )}
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

  get hasData() {
    return this.props.dataSource.length >= 1;
  }

  onSelectAllChange = e => {
    const isSelectAll = e.target.checked;
    const selectedRows = isSelectAll
      ? [...this.dataSource].filter((_, index) => !this.rows[index])
      : [];
    const selectedRowKeys = selectedRows.map(({ key }) => key);
    this.setState({
      isSelectAll,
      selectedRows
    });
    if (this.props.rowSelection && this.props.rowSelection.onChange) {
      this.props.rowSelection.onChange(selectedRowKeys, selectedRows);
    }
  };
  onRowCheckboxChange = selectedRow => e => {
    const checked = e.target.checked;
    let selectedRows = [...this.state.selectedRows];
    if (checked) {
      selectedRows.push(selectedRow);
    } else {
      selectedRows = selectedRows.filter(
        row => JSON.stringify(selectedRow) !== JSON.stringify(row)
      );
    }
    this.setState({
      selectedRows
    });
    if (this.props.rowSelection && this.props.rowSelection.onChange) {
      this.props.rowSelection.onChange(selectedRows);
    }
  };

  onPageChange = (pageIndex, pageSize) => {
    this.setState(
      {
        pageIndex
      },
      () => {
        if (this.props.pagination && this.props.pagination.onChange) {
          this.props.pagination.onChange(pageIndex, pageSize);
        }
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
      bordered,
      showHeader,
      rowSelection, //eslint-disable-line
      dataSource, //eslint-disable-line
      ...attr
    } = this.props;
    const { pageIndex } = this.state;

    return (
      <div
        className={cls(prefixCls, className, {
          [`${prefixCls}-bordered`]: bordered
        })}
        {...attr}
      >
        <Spin spinning={loading} tip={loadingTip} size="large">
          <table className={`${prefixCls}-origin-table`}>
            {showHeader && this.tableHeader}
            {this.hasData && this.tableBody}
          </table>
          {!this.hasData && <Empty />}
          {!!pagination &&
            this.hasData && (
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
