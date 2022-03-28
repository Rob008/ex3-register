import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
} from 'antd';
import 'antd/dist/antd.css'
import "../style.css"
import { useNavigate } from "react-router-dom";




const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  
  let checking = 0;

  useEffect(() => {
    const json = JSON.stringify(user);
    localStorage.setItem("data", json);
  }, [user]);

  const onFinish = (values) => {
    setUser([...user].concat(values));
    navigate("/login");
  };



  const prefixSelector = (
    <Form.Item name="prefix" noStyle>

      <Option value="374">+374</Option>

    </Form.Item>
  );


  return (
    <div className="App" >
      <div class="contain">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '374',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
              checking += 1,
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              checking += 1,
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              checking += 1,
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
              checking += 1,
            ]}
          >
            <Input />
          </Form.Item>



          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
              checking += 1,
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }
              }
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
              checking += 1,
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve(checking += 1) : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" >
              Register
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}