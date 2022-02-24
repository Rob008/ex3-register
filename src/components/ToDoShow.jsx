import React,{useEffect, useState} from "react";
import { Input ,Calendar,Button,Card } from 'antd';
import "../style.css"
import Form from "antd/lib/form";

export const ToDoShow = () => {

    const [toDo,setToDo]=useState([]);

    useEffect(()=>{
        const json = localStorage.getItem("toDoing");
        const loadedToDo= JSON.parse(json);
        if (loadedToDo) {
            setToDo(loadedToDo);
        }
    },[]);


return(

    <div className="toDoShow">
        
        <Card title="Card title" bordered={false} style={{ width: 100 }}>
        <p>Card content</p>
        </Card>
        <Card title="Card title" bordered={false} style={{ width: 100 }}>
        <p>Card content</p>
        </Card>

    </div>

)


}