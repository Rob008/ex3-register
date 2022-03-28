import React,{useEffect, useState} from "react";
import "../style.css"
import { ToDoInput } from "../components/ToDoInput";
import { ToDoShow } from "../components/ToDoShow";
import { SearchInput } from "../components/SearchInput";


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
        // let updatedTodos = [...toDo].filter((todo) => todo.title == value);
        
        if (value === ""){
            setFilteredTodos([...toDo]);
            return;
        }
        const updatedTodos = ([...toDo].filter((item)=>
            item.title.toLowerCase().indexOf(value.toLowerCase()) !==-1
            ));
        setFilteredTodos(updatedTodos);
      }


return(
    <div className="mainToDo">
        <div className="searchDiv">
        <SearchInput  id="searchInput" searchTodo={searchTodo}/>
        </div>
        <div className="todoShow">
        <ToDoInput onFinish={onFinish}/>
        <ToDoShow toDo={toDo} setToDo={setToDo} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos}/>
        </div>
    </div>
)
    
}