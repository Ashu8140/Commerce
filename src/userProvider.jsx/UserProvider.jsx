import { useEffect, useState } from "react";
import { UserContext } from "../Context";
import axios from "axios";

function UserProvider({children}){
     const [user,setUser]=useState();
     const [Loading,setLoading]=useState(true);

   function HandleLogout(){
    localStorage.removeItem("token");
    setUser(undefined);
  }
  
    
  useEffect(()=>{
      const token =localStorage.getItem("token");

      if(token){
        axios.get("https://myeasykart.codeyogi.io/me",{
          headers:{
            Authorization:token,
          },
        }).then((response)=>{
          setUser(response.data);
       setLoading(false);
        })
      }else{
       setLoading(false);
      }
    },[]);
    
  if (Loading) {
    return <div>Loading user info...</div>;
  }

    return <UserContext.Provider value={{user,setUser,HandleLogout}} >{children}</UserContext.Provider>
   
    ;
}
export default UserProvider;