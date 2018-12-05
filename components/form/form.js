import React, { PureComponent, cloneElement } from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default class CukeForm extends PureComponent {
  static defaultProps = {
    prefixCls: "cuke-form"
  };

  constructor(props) {
    super(props);
    this.schema = {};
  }

  static propTypes = {
    prefixCls: PropTypes.string.isRequired
  };

  get validationSchema() {
    console.log(this.schema);
    return Yup.object().shape(this.schema || {});
  }

  getInitialValuesOfForm = () => {
    // TODO: 收集每一个 item 的初始值 组合起来
    return {};
  };

  getSchemaFromFormItem = name => getSchema => {
    if (!name || !getSchema) {
      return;
    }
    const newSchema = {
      ...this.schema,
      [name]: getSchema(Yup)
    };
    this.schema = newSchema;
  };

  render() {
    const { prefixCls, className, children, onSubmit, style } = this.props;

    console.log(this.validationSchema);

    return (
      <Formik
        initialValues={this.getInitialValuesOfForm}
        validationSchema={this.validationSchema}
        onSubmit={onSubmit}
      >
        {formProps => (
          <Form className={cls(prefixCls, className)} style={style}>
            {React.Children.map(children, (element, index) => {
              return cloneElement(element, {
                key: index,
                formProps,
                dispatchSchemaOfFormItem: this.getSchemaFromFormItem
              });
            })}
          </Form>
        )}
      </Formik>
    );
  }

  componentWillUnmount() {
    this.schema = undefined;
  }
}
