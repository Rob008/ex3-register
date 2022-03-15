import React, { useEffect, useState } from "react";
import { Input, Calendar, Button, Card } from 'antd';
import "../style.css"
import Form from "antd/lib/form";
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

export const ToDoShow = (props) => {
    const [editableDescription, setEditableDescription] = useState();
    const [editableTitle, setEditableTitle] = useState();
    const [editing, setEditing] = useState()



    const handleSubmitDel = (item) => {
        console.log(item);
        let updatedTodos = [...props.toDo].filter((todo) => todo.id !== item);
        props.setToDo(updatedTodos);

        let toDostr = JSON.stringify(props.toDo);
        localStorage.setItem("todo", toDostr)
    }

    function sumbitEditingTodo(id) {
        const updatedTodos = [...props.toDo].map((todo) => {
            console.log(todo);
            if (todo.id === id) {
                todo.title = editableTitle;
                todo.description = editableDescription;
            }
            console.log(todo);
            return todo;

        });
        props.setToDo(updatedTodos);
        setEditing(false);
    }

    return (

        <div className="site-card-border-less-wrapper">
            {props.filteredTodos.length ?
                props.filteredTodos.map((item) => (
                    <Typography key={item.id} className="todo" style={{ width: 300, margin: 20 }} >
                        <Title editable={editing ? { onChange: setEditableTitle } : false} level={3} >{item.title}</Title>
                        <Paragraph editable={editing ? { onChange: setEditableDescription } : false}>{item.description}</Paragraph>
                        <p>{item.date_picker}</p>

                        <div id="changeButton">
                            {editing ? <Button type="link" onClick={() => sumbitEditingTodo(item.id)}>Submit</Button> :
                                <Button type="link" onClick={() => setEditing(true)}>Edit</Button>
                            }
                            <Button id="delete" onClick={() => handleSubmitDel(item.id)}>Delete</Button>
                        </div>

                    </Typography>))

                : props.toDo.map((item) => (
                    <Typography key={item.id} className="todo" style={{ width: 300, margin: 20 }} >
                        <Title editable={editing ? { onChange: setEditableTitle } : false} level={3} >{item.title}</Title>
                        <Paragraph editable={editing ? { onChange: setEditableDescription } : false}>{item.description}</Paragraph>
                        <p>{item.date_picker}</p>

                        <div id="changeButton">
                            {editing ? <Button type="link" onClick={() => sumbitEditingTodo(item.id)}>Submit</Button> :
                                <Button type="link" onClick={() => setEditing(true)}>Edit</Button>
                            }
                            <Button id="delete" onClick={() => handleSubmitDel(item.id)}>Delete</Button>
                        </div>

                    </Typography>

                )

                )}
        </div>

    )


}