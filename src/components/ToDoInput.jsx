import React,{useEffect, useState} from "react";
import { Input ,Calendar,Button} from 'antd';
import "../style.css"
import Form from "antd/lib/form";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
// localStorage.setItem('todo',JSON.stringify([{"title":"dd","description":"ads","date_picker":"2022-02-26T16:20:28.307Z"}]));
export const ToDoInput = (props) =>{


    const { TextArea } = Input;

    const [toDo,setToDo]=useState();
    const [edValue,setEdValue]=useState();
        // console.log(localStorage.getItem("todo"));

      useEffect(()=>{
        const json = localStorage.getItem("todo");
        const loadedToDo= JSON.parse(json);
        if (loadedToDo) {
            setToDo(loadedToDo);
        }
        console.log(localStorage.getItem("todo"));
    },[]);
    console.log(localStorage.getItem("todo"));


    //   useEffect(()=>{
    //     const json = JSON.stringify(toDo);
    //     localStorage.setItem("todo",json);
    //     // console.log(localStorage)
    //  },[toDo]);

   

      // const onFinish =(values)=>{
      //   values.id=Date.now();
      //   console.log('Success:', values);
      //   setToDo([...toDo].concat(values));
      //   console.log('Success:', toDo);
      //   const json = JSON.stringify(toDo);
      //   localStorage.setItem("todo",json);
      //   // values.date =  values['date-picker'].format('YYYY-MM-DD HH:mm:ss')
      //   // console.log(values);
      // }

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
            onFinish={props.onFinish}
            autoComplete="off"
            //  onFinishFailed={onFinishFailed}
            >
                    <Form.Item
                    label="Title"
                    name="title"
                    value="barrr"
                    rules={[
                    {
                    required: true,
                    message: 'Please input Title!',
                    },
                    ]}
                >
                
                <input placeholder="Title" value="jdjsd"></input>
                
                
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

                <Form.Item name="date_picker" label="Calendar" rules={[
                    {
                        required: true,
                        message: 'Please choose Date!',
                    },
                    ]}>
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
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