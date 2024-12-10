import { useContext, useState } from "react";
import CommunityContext from "./CommunityContext";
import { Popup } from "./Popup";
import Button_log from "./Button_log";
import Input from "./Input";
import RedirectContext from "./RedirectContext";
function CommunityFormModal(){
    const {show,SetShow}=useContext(CommunityContext);
   const [name,setName]= useState();
   const [desk,setDesk]= useState();
   const [avatar,setAvatar]= useState();
   const [cover,setCover]= useState();
   const{setRedirect}= useContext(RedirectContext);
    if(!show){
    return null;
    }
    function create(){
       const data ={name,desk,avatar,cover}; 
axios.post('/communities', data, {withCredentials:true})
.then(()=>{
setRedirect('/r/'+ name);
SetShow(false);
});
    }
    return(
        <Popup open={show} onClickOut={()=> SetShow(false)}>
        <h1 className=" text-2xl mb-5">Создать обсуждение</h1>
        <Input value={name} onChange={ev => setName(ev.target.value)} placeholder={'Имя'} className="w-full mb-3"/>
        <Input value={desk} onChange={ev => setDesk(ev.target.value)} placeholder={'Описание'} className="w-full mb-3"/>
        <Input value={avatar} onChange={ev => setAvatar(ev.target.value)} placeholder={'Аватар'} className="w-full mb-3"/>
        <Input value={cover} onChange={ev => setCover(ev.target.value)} placeholder={'Фон'} className="w-full mb-3"/>
        <div className="text-right">
        <Button_log onClick={()=> SetShow(false)}  outline className={'px-4 py-2'}>Отменить</Button_log>
            <Button_log onClick={()=>create()} className={'px-6 py-2'}>Своё обсуждение!</Button_log></div>
        
        </Popup>
    );
}
export default CommunityFormModal;