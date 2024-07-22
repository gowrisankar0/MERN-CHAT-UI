import React, { useState } from 'react'
import { useEffect } from 'react';
import toast from "react-hot-toast"
const useGetConversations = () => {

    const [loading,setLoading]=useState(false);
    const [conversatios,setConversations]=useState([]);



useEffect(()=>{
    const getConversations = async ()=>{
        setLoading(true)
        try {

            const res = await fetch("http://localhost:4000/api/users");
            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            };
            setConversations(data);
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    };

    getConversations()
},[])


return {loading,conversatios}
  
}

export default useGetConversations