import ClickOutHandler from "react-clickout-handler";
import TextArea from "./TextArea";
import Button_log from "./Button_log";
import Input from "./Input";
import { useState,useContext} from "react";
import ReactMarkdown from "react-markdown";
import gfm from'remark-gfm';
import { Children } from "react";
import Markdown from "react-markdown";
import { redirect } from "react-router-dom";
import PostFormModalContext from "./PostFormModalContext";
import axios from "axios";
import Authorizationcontest from "./Authorizationcontest";
import CommunityContext from "./CommunityContext";
function PostFormModel(){
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [newPostId, setNewPostId] = useState(null);
const {community}= useContext(CommunityContext);
  const modalContext = useContext(PostFormModalContext);
  const authModalContext = useContext(Authorizationcontest);
    const visiableClass = modalContext.show ? 'block' : 'hidden';
    function createPost() {
        const data = {title,body,community};
        axios.post('http://localhost:4000/comments', data, {withCredentials:true})
          .then(response => {
            setNewPostId(response.data._id);
          })
          .catch(error => {
            console.log(error);
            if (error.response.status === 401) {
              authModalContext.setShow('login');
            }
          });
      }
      if (newPostId) {
        return (<redirect to={'/comments/'+newPostId} />);
      }
    return(
         <div className={" w-screen h-screen fixed top-0 left-0 z-20 flex-center"+visiableClass} style={{backgroundColor: 'rgba (0,0,0,.8)'}}>
        <ClickOutHandler onClickOut={()=>{}}>
        <div className=" border border-gray-600  bg-messenger_dark p-5 w-3/4  md:w-2/4 text-messenger_text   self-center mx-auto rounded-md">
        <h1 className=" text-2xl mb-5">Создать пост</h1>
        <Input className={"w-full mb-3"} placeholder={"Заголовок"}  onChange={e => setTitle(e.target.value) } value={title}/>
       <TextArea className={'w-full mb-3'} placeholder={"Текст поста (required)"}  onChange={e => setBody(e.target.value)} value={body}/>
     
       <div className="text-right">
       <Button_log onClick={()=> modalContext.setShow(false)}  outline className={'px-4 py-2'}>Отменить</Button_log>
       <Button_log  onClick={() => createPost()}className={'px-4 py-2'}>Опубликовать</Button_log>
        </div>
        </div>
    
    </ClickOutHandler>
    </div>
);
}
export default PostFormModel;