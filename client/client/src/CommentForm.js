import { useContext,useState } from "react";
import UserContext from "./UserContext";
import Button_log from "./Button_log";
import TextArea from "./TextArea";
import axios from "axios"; 
function CommentForm(props){
    const userInfo= useContext(UserContext);
    const [commentBody,setCommentBody]= useState('');
    function postComment(e) {
        e.preventDefault();
        const data = {body:commentBody, parentId:props.parentId,rootId:props.rootId,};
        axios.post('http://localhost:4000/comments', data, {withCredentials:true})
          .then(response => {
            setCommentBody('');
            if (props.onSubmit) {
              props.onSubmit();
            }
          });
      }
return(
    <div className="text-messenger_dark">
        {userInfo.username && (
            <div className="mb-2">
                Комментарий от {userInfo.username}
            </div>
        ) }
    <form onSubmit={e => postComment(e)}>
<TextArea className="w-full mb-3" 
onChange={e => setCommentBody(e.target.vaule)}
value={commentBody}
placeholder={'Your comment.You can use markdown here'}/>
<div className="text-right">
    {!!props.onCancel && (
        <Button_log outline className="p-2 mr-2" onClick={e => props.onCancel() }>Отменить</Button_log>
    )}
    <Button_log className="p-2">Комментировать</Button_log>
</div>
    </form>
    </div>
);
}
export default CommentForm;