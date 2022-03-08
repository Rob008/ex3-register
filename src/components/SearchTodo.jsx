import React, { useState } from 'react';
import {Input} from 'antd';

export const SearchTodo = function(){
    const arr = localStorage.getItem("todo");
    const [filteredArr, setFilteredArr] = useState(arr);
    console.log(arr)
    function handleChange(event)
    {
        if (event.target.value === ""){
            setFilteredArr(arr);
            return;
        }
        const filterValues = (arr.filter((item)=>
            item.toLowerCase().indexOf(event.target.value.toLowerCase()) !==-1
            ));
        setFilteredArr(filterValues);
    }
    return(
       <div id= "search1">
       Serach: <Input name = "search" onChange={handleChange}></Input>
       {filteredArr && filteredArr.map((item)=> (<div id="items">{item}</div>))}
       </div>
    )
}

