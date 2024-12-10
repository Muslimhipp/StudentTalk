import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/24/outline";
import Button_log from "./Button_log";
import axios from 'axios';
import {useContext} from "react";
import RootCommentContext from "./RootCommentContext";
function Voting(props){
    
    const rootCommentInfo = useContext(RootCommentContext);
    const {commentsTotals, userVotes} = rootCommentInfo;
    const {commentId} = props;
    const total = commentsTotals && commentId in commentsTotals ? commentsTotals[commentId] : 0;
    const userVote = userVotes && commentId in userVotes ? userVotes[commentId]: 0;
    function sendVote(direction = 'up') {
        const directionNumber = direction === 'up' ? 1 : -1;
        if (directionNumber === userVote) {
          direction = 'unvote';
        }
        const url = 'http://localhost:4000/vote/'+props.commentId+'/'+direction;
        axios.get(url, {withCredentials:true})
          .then(() => {
            rootCommentInfo.refreshVotes();
          })
    }

    function handleVoteUp() {
        sendVote('up');
      }
    
      function handleVoteDown() {
        sendVote('down');
      }

function arrowButton(directionName = 'up') {
    const directionNumber = directionName === 'up' ? 1 : -1;
    let classNames = 'inline-block h-5 relative top-1 ';

    if (directionNumber === userVote) {
      classNames += ' text-messenger_theme';
    } else {
      classNames += ' text-messenger_text-darker hover:text-white';
    }

    if (directionName === 'up') {
      return (
        <button onClick={()=> handleVoteUp}
        className="inline-block w-5 h-5  py-1">
<HandThumbUpIcon class="h-6 w-6 text-messenger_text" />
</button >
      );
    } else {
      return (
        <button  onClick={()=> handleVoteDown}
        className="inline-block w-5 h-5 p-0 m-0">
            <HandThumbDownIcon class="h-6 w-6 text-messenger_text" />
        </button >
      );
    }
  }

      return(
        <div className={"inline"}>
          {arrowButton('up')}  
<div className="inline-blocks">{total}</div>
{arrowButton ('down')}
        </div>
    );
}
export default Voting;