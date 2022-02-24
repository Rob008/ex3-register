import React,{useEffect, useState} from "react";
import { Input ,Calendar,Button} from 'antd';
import "../style.css"
import Form from "antd/lib/form";
import { ToDoInput } from "./ToDoInput";
import { ToDoShow } from "./ToDoShow";

export const Main = () =>{

return(
    <div className="mainToDo">
        <ToDoInput/>
        <ToDoShow/>
    </div>
)
    
}