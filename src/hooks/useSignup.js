import { useContext, useState } from "react";
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {

    const [lodaing,setLoading] =useState(false);
    const {setAuthUser} = useAuthContext()


    const signup = async ({fullName,userName,password,confirmPassword,gender})=>{

        const success = handleInputErrors({fullName,userName,password,confirmPassword,gender})
     if(!success) return;
   

     setLoading(true)
    try {

        const res = await fetch("http://localhost:4000/api/auth/signup",{
            method:"POST",
            headers: {"Content-Type" :"application/json"},
            body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
        });

        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        };
        console.log(data);
        localStorage.setItem("chat-user",JSON.stringify(data));

        //context
        setAuthUser(data)

      
        
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
}


return {lodaing,signup}

}

export default useSignup;


function handleInputErrors({fullName,userName,password,confirmPassword,gender}) {

    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error("please fill all the fields");
        return false
    };

    if(password!==confirmPassword){
        toast.error("Password does not match");
        return false;
    }

    if(password.length <6){
        toast.error("password must at least 6 charecter");
        return false
    };

    return true;
    
}