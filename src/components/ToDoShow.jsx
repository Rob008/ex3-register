import React,{useEffect, useState} from "react";
import { Input ,Calendar,Button,Card } from 'antd';
import "../style.css"
import Form from "antd/lib/form";
import { SearchTodo } from "./SearchTodo";

export const ToDoShow = () => {
    const json = localStorage.getItem("todo");
    const [toDo,setToDo]=useState([]);

    useEffect(()=>{
        const json = localStorage.getItem("todo");
        const loadedToDo= JSON.parse(json);
        if (loadedToDo) {
            setToDo(loadedToDo);
        }
        // console.log(localStorage.getItem("todo"));
    },[]);
    const handleSubmitEdit=(event)=>{
        console.log(event.target.value) 

    };
    const handleSubmitDel=(item)=>{
        localStorage.removeItem(item);
        console.log(item)
    }

return(

    <div className="site-card-border-less-wrapper">
        {/* <SearchTodo/> */}
        {console.log(toDo)}
        {toDo.length && toDo.map((item)=>(
                            <Card key={Math.floor(Math.random() * 9876)} title={item.title} style={{width:300,margin:20}} >
                            <p>
                                {item.description}
                            </p>
                            <p>{item.date_picker}</p>

                            <div id="changeButton">
                            <Button type="primary" id="edit" value={item.title} onClick={handleSubmitEdit}>Edit</Button>
                            <Button id="delete" onClick={handleSubmitDel}>Delete</Button>
                            </div>
                        </Card>
        )

        )}
    </div>

)


}