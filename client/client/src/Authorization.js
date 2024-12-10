import { withPrefix } from "autoprefixer/lib/browsers";
import Button_log from "./Button_log";
import Input from "./Input";
import axios from "axios";
import { useState, useContext } from "react";
import ClickOutHandler from 'react-clickout-handler/dist/index';
import Authorizationcontest from "./Authorizationcontest";
import UserContext from "./UserContext";
import PostFormModalContext from "./PostFormModalContext";
function Authorization (){
    const [modalType, setModalType] = useState('login');
    const [email, setEmail]= useState('');
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const modalContext= useContext(Authorizationcontest);
    const User = useContext(UserContext);
    const visiableClass = modalContext.show !== false ? ' block' : 'hidden'; 
if (modalContext.show && modalContext.show !== modalType){
    setModalType(modalContext.show);
}
    function register(e){
    e.preventDefault();
    const data ={ email,username, password};
    axios.post('http://localhost:4000/register',data,{withCredentials:true})
    .then(() => {username.setUser({username});
    modalContext.setShow(false);
    setEmail('');
    setPassword('');
    setUsername('');
    });
    
}

function login(){
    const data={username,password}
    axios.post('http://localhost:4000/login', data,{withCredentials:true})
    .then(()=> {modalContext.setShow(false); 
        User.setUser({username});
    });
}
     return(
    <div className={" w-screen h-screen fixed top-0 left-0 z-30 flex-center"+visiableClass} style={{backgroundColor: 'rgba (0,0,0,.6)'}}>
        <ClickOutHandler onClickOut={()=>modalContext.setShow(false)}>
        <div className=" border border-gray-600  bg-messenger_dark p-5 w-3/4 sm:w-1/2 md:w-1/4 text-messenger_text   self-center mx-auto rounded-md"></div>
        {modalType === 'login' && (
             <h1 className="text-2xl mb-5">Логин</h1>
        )}
        {modalType === 'register' && (
             <h1 className="text-2xl mb-5">Регистрация</h1>
        )}
        {modalType === 'register' && (
        <label>
            <span className="text-messenger_text-darker text-sm">Почта:</span>
            <Input type="email" className="mb-3 w-full" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        )}
        <label>
            <span className="text-messenger_text-darker text-sm">Пользователь:</span>
            <Input type="text" className="mb-3 w-full" value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
            <span className="text-messenger_text-darker text-sm">Пароль:</span>
            <Input type="password" className="mb-3 w-full " value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        {modalType ==='login' && ( <Button_log className="w-full py-2" style={{borderRadius:'.3rem'}} onClick= {()=>login}>
            Войти</Button_log>)}
       
           {modalType ==='register' && (<Button_log className="w-full py-2" style={{borderRadius:'.3rem'}} onClick={e=>register(e)}>
            Зарегистрироваться</Button_log>)} 
                    <div className=" border border-gray-600  bg-messenger_dark p-5 w-3/4 sm:w-1/2 md:w-1/4 text-messenger_text   self-center mx-auto rounded-md"></div>
        {modalType === 'login' && (
              <div>
              В первый раз у нас? <button className="text-blue-600" onClick={() => modalContext.setShow(register)}>Зарегистрироваться</button>
              </div>
        )}
           {modalType === 'register' && (
              <div>
              Вспомнили, что уже бывали? <button className="text-blue-600" onClick={() => modalContext.setShow(login)}>Войти</button>
              </div>
        )}
       </ClickOutHandler>
        </div>
 );
}
export default Authorization;
