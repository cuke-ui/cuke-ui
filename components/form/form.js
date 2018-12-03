import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default class CukeForm extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-form",
    schema: () => ({})
  };

  static propTypes = {
    prefixCls: PropTypes.string.isRequired
  };

  // TODO: 是一次性写所有的 schema 还是 写在每一个 item 里 然后统一收集 ?
  getSchemaOfForm = () => {
    return Yup.object().shape(this.props.schema(Yup) || {});
  };

  getInitialValuesOfForm = () => {
    // TODO: 收集每一个 item 的初始值 组合起来
    return {};
  };

  render() {
    const {
      prefixCls,
      className,
      children,
      onSubmit,
      schema, // eslint-disable-line
      ...attr
    } = this.props;

    return (
      <Formik
        initialValues={this.getInitialValuesOfForm}
        validationSchema={this.getSchemaOfForm}
        onSubmit={onSubmit}
      >
        {formProps => (
          <Form className={cls(prefixCls, className)} {...attr}>
            {React.Children.map(children, (element, index) => {
              return cloneElement(element, {
                key: index,
                formProps
              });
            })}
          </Form>
        )}
      </Formik>
    );
  }
}
