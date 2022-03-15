import React,{useEffect, useState} from "react";
import { Input } from "antd";
const { Search } = Input;

export const SearchInput = (props) =>{
    

    return (
        <Search
        placeholder="input search text"
        onSearch={value => props.searchTodo(value)}
        style={{ width: 200 }}
        className="search"
    />
    )
}