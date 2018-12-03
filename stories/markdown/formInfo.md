# Form 表单

> 基本使用

```js
  import { Form, Input, Button } from 'cuke-ui'
   
  class Demo extends React.Component {
    render(){
      const formItemLayout = {
        labelCol: { 
          span: 8
        },
        wrapperCol: {
          span: 16
        }
      };
      return (
        <Form>
          <Form.Item label="用户名:" name="username" {...formItemLayout}>
            <Input placeholder="请输入用户名"/>
          </Form.Item>
          <Form.Item label="密码:" name="password" {...formItemLayout}>
            <Input placeholder="请输入密码" type="password"/>
          </Form.Item>
          <Button htmlType="submit" type="primary">提交</Button>
        </Form>
      )
    }
  }

```

## 一些说明

```js
<Form.Item name="username">
  <Input placeholder="请输入用户名"/>
</Form.Item>
```

`<Form.Item/>` 接受一个 唯一的 `name` 用于标识当前的字段值, 然后我会帮你 帮当前的 `Input` 自动绑定 `onChange` 事件, `value` 值, `onBlur` 事件,


## 站在巨人的肩膀

表单无疑是一个组件库 最难搞定的部分, 最早我有想过 基于 `rc-form` "深克隆" 一个 `Form` 组件, 知道 我发现了 [Formik](https://jaredpalmer.com/formik), 看了作者的演讲和 官方文档
我认为这是一种更优雅的解决方式, 没有那么多的黑科技, 于是基于它简单封装了一下 继续下滑感受一下 : )

