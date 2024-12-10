import axios from "axios";
import { createContext, useEffect, useState } from "react";
export default  CommunityContext = createContext();
const [show,setShow] = useState(false);
const [community,setCommunity]= useState();
const [communityInfo,setCommunityInfo]=useState({});

useEffect(()=> {
    if(!community){
        setCommunityInfo({});
return;
    } 
axios.get('/communities/'+community).
then(response => {
    setCommunityInfo(response.data);
});    
},[community]);
export function CommunityContextProvider({children}){
    return(
        <CommunityContext.Provider value={{show,setShow, community, setCommunity,...communityInfo}}>{children}</CommunityContext.Provider>
    );
}