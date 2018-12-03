import React, { PureComponent } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import Row from "../row";
import Col from "../col";

export default class FormItem extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-form-item",
    labelCol: {
      span: 3,
      offset: 0
    },
    wrapperCol: {
      span: 21,
      offset: 0
    }
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired
  };

  render() {
    const {
      prefixCls,
      className,
      label,
      name,
      children,
      labelCol,
      wrapperCol,
      formProps: { errors, touched },
      ...attr
    } = this.props;

    const hasError = errors[name] && touched[name];
    return (
      <Row
        className={cls(prefixCls, className, {
          [`${prefixCls}-has-error`]: hasError
        })}
        {...attr}
      >
        <Col {...labelCol} className={`${prefixCls}-label`}>
          {label}
        </Col>
        <Col {...wrapperCol} className={`${prefixCls}-wrapper`}>
          <Field
            name={name}
            render={({ field }) => {
              return React.cloneElement(children, {
                ...field,
                key: `${prefixCls}-${name}`
              });
            }}
          />
          <div className={`${prefixCls}-error-message`}>
            <ErrorMessage name={name} />
          </div>
        </Col>
      </Row>
    );
  }
}
