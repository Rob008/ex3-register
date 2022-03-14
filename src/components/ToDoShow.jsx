import React,{useEffect, useState} from "react";
import { Input ,Calendar,Button,Card } from 'antd';
import "../style.css"
import Form from "antd/lib/form";
import { SearchTodo } from "./SearchTodo";

export const ToDoShow = (props) => {
    const [toDo,setToDo]=useState([]);
    console.log(toDo);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [editing, setEditing] = useState("hidden")


    useEffect(()=>{
        const json = localStorage.getItem("todo");
        const loadedToDo= JSON.parse(json);
        if (loadedToDo) {
            setToDo(loadedToDo);
        }
        // console.log(localStorage.getItem("todo"));
    },[]);

    // useEffect(() => {
    //     const json = JSON.stringify(toDo);
    //     localStorage.setItem("todo", [...toDo].concat(json));
    // }, [toDo]);


    const handleSubmitDel=(item)=>{
        console.log(item);
        let updatedTodos = [...props.toDo].filter((todo) => todo.id !== item);
        props.setToDo(updatedTodos);

        let toDostr = JSON.stringify(props.toDo);
        localStorage.setItem("todo",toDostr)
    }

    const handleSubmitEdit =(item)=>{
        setEditing("text");
        item.title=title;
        item.description=description;
      }
      
      const hiddenT=()=>{
        return editing
      }

return(

    <div className="site-card-border-less-wrapper">
        {/* <SearchTodo/> */}
        
        {props.toDo.length && props.toDo.map((item)=>(
                            <Card key={Math.floor(Math.random() * 9876)} title={item.title} style={{width:300,margin:20}} >
                            <p>
                                {item.description}
                            </p>
                            <p>{item.date_picker}</p>

                            <div id="changeButton">
                            <Button type="primary" id="edit" onClick={()=>handleSubmitEdit(item)}>Edit</Button>
                            <Button id="delete" onClick={()=>handleSubmitDel(item.id)}>Delete</Button>
                            </div>
                            <div id="editingInput">
                                <input id="editInput" type={hiddenT()} onChange={event => setTitle(event.target.value)}/>
                                <input id="editInput" type={hiddenT()} onChange={event => setDescription(event.target.value)}/>
                            </div>
                        </Card>
                        
        )

        )}
    </div>

)


}