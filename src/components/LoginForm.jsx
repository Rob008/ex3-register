import React,{useEffect, useState} from "react";
import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
import 'antd/dist/antd.css'
import "../style.css"
import { Navigate, useNavigate } from "react-router-dom";


export const LoginForm = () => {

    const [user,setUser]=useState([]);

    useEffect(()=>{
        const json = localStorage.getItem("data");
        
        const loadedUsers = JSON.parse(json);
        if (loadedUsers) {
            setUser(loadedUsers);
        }
    },[]);

  const onFinish = (values) => {
    console.log('Success:', values);
    const json = localStorage.getItem("data");
    const loadedUsers = JSON.parse(json);
    const storgeUsername = loadedUsers.map(values=>values.nickname);
    console.log(loadedUsers.find(value=>value.nickname==values.username));

    if (loadedUsers.find(value=>value.nickname==values.username)) {
        let passIndex = storgeUsername.indexOf(values.username);
            if (loadedUsers[passIndex].password==values.password) {
                localStorage.setItem("token",Math.floor(Math.random() * 77777777));
                console.log(localStorage.getItem("token"));
                navigate("/main")
            }
            else alert("Wrong Password")
    }
    else alert("Wrong UserName")
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const navigate = useNavigate();

  const handleSubmit =()=>{
    navigate("/registration");
  }

  return (
    <div class = "contain">
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" >
          Login 
        </Button>
        <Button type="primary" htmlType="submit" onClick={handleSubmit} id="registerButton">
          Registration
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
  
};
