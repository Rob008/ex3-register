import React,{useEffect, useState} from "react";
import { Input ,Calendar,Button} from 'antd';
import "../style.css"
import Form from "antd/lib/form";

export const ToDoInput = () =>{


    const { TextArea } = Input;

    const [toDo,setToDo]=useState([]);

    const onPanelChange = (value, mode) =>{
        // console.log(value);
        const doDate = value._d;
        console.log(doDate);
      }

      useEffect(()=>{
        const json = localStorage.getItem("toDoing");
        const loadedToDo= JSON.parse(json);
        if (loadedToDo) {
            setToDo(loadedToDo);
        }
    },[]);

      useEffect(()=>{
        const json = JSON.stringify(toDo);
        localStorage.setItem("toDoing",json);
        console.log(localStorage)
     },[toDo]);

      const onFinish =(values)=>{
        console.log('Success:', values);
        setToDo([...toDo].concat(values));
        console.log('Success:', toDo);
        onPanelChange();
      }
      


    return(
        <div className="mainInput">
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
            autoComplete="off"
            //  onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                    {
                    required: true,
                    message: 'Please input Title!',
                    },
                    ]}
                >
                <Input placeholder="Title" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                    {
                        required: true,
                        message: 'Please input Description!',
                    },
                    ]}
                >
                 <TextArea rows={4} placeholder="Please input Description!" maxLength={300} />
                </Form.Item>

                <Form.Item
                    label="Calendar"
                    name="calendar"
                    rules={[
                    {
                        required: true,
                        message: 'Please choose Date!',
                    },
                    ]}
                >
                <div className="site-calendar-demo-card">
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
                </Form.Item>
            
                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" >
                    Submit
                    </Button>
                </Form.Item>
    
          </Form>
        </div>
    )   
    
}