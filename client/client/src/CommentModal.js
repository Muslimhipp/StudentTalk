import PostContent from "./PostContent";
import ClickOutHandler  from "react-clickout-handler/dist/index'";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
function CommentModal(props){
    const visiableClass= props.open ? ' block': 'hidden';
    const [comment,setComment]= useState({});
    useEffect(() => {
        axios.get('http://localhost:4000/comments/'+props.id)
        .then(response => {setComment(response.data);
        });
        }, [props.id]);
    function close(){
        setComment({});
        props.onClickOut();
    }
    return(
      /*  <div className={" w-screen h-screen fixed top-0  bottom-0 overflow-scroll left-0 z-20 flex-center"+visiableClass} style={{backgroundColor: 'rgba (0,0,0,.8)'}}>
           <ClickOutHandler onClickOut={()=>close()}>
            <div className=" block overflow-scroll" style={{maxHeight:"calc(100vh-200px)"}}>
<div className="  w-3/4 sm:w-1/2 md:w-1/2 text-messenger_text   self-center mx-auto rounded-md">
<PostContent open={true} {...comment}/>
{!!comment && !!comment._id &&(
    <>
    <hr className="border-messenger_border my-4"/>
    <CommentForm rootId={comment._id} parentId={comment._id}/>
    <hr className="border-messenger_border my-4"/>
    <Comments parentId={comment._id} comments={[{body:''}]}/>
    </>
)}*/
<div className={"w-screen h-screen fixed top-0 left-0 z-20 flex "+visiableClass} style={{backgroundColor:'rgba(0,0,0,.8)'}}>
<div className="block overflow-scroll w-screen">
  <ClickOutHandler onClickOut={() => close()}>
    <div className="border my-4 border-messenger_dark-brightest w-3/4 lg:w-1/2 bg-messenger_dark-brighter text-reddit_text self-center p-4 mx-auto rounded-md">
      <div>
        <Comment comment={comment} id={props.id} />
</div>
</div>
</ClickOutHandler>
        </div>
        </div>
    );
}
export default CommentModal;