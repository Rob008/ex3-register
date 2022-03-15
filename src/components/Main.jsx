import React,{useEffect, useState} from "react";
import { Input ,Calendar,Button} from 'antd';
import "../style.css"
import Form from "antd/lib/form";
import { ToDoInput } from "./ToDoInput";
import { ToDoShow } from "./ToDoShow";
import { SearchInput } from "./SearchInput";


export const Main = () =>{

    const [toDo, setToDo] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const json = localStorage.getItem("todo");
        const loadedTodo = JSON.parse(json);
        if (loadedTodo) {
            setToDo(loadedTodo);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(toDo);
        localStorage.setItem("todo", json);
    }, [toDo]);

    const onFinish =(values)=>{
        values.id=0;
        let times = values.date_picker;
        console.log();
        const newTodo={
            id : Date.now(),
            title: values.title,
            description: values.description,
            date_picker: "2022-02-26T16:20:28.307Z",
        }
        setToDo([...toDo].concat(newTodo));
      }

      const searchTodo=(value)=>{
        let updatedTodos = [...toDo].filter((todo) => todo.title == value);
        setFilteredTodos(updatedTodos);
      }


return(
    <div className="mainToDo">
        <ToDoInput onFinish={onFinish}/>
        <ToDoShow toDo={toDo} setToDo={setToDo} filteredTodos={filteredTodos}/>
        <SearchInput searchTodo={searchTodo}/>
    </div>
)
    
}