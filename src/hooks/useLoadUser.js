import React, { useEffect, useState } from "react";


export const useLoadUser = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const json = localStorage.getItem('data');
        const loadedUsers = JSON.parse(json);
        if (loadedUsers) {
            setUser(loadedUsers);
        }
    },[]);

    return user;
}

