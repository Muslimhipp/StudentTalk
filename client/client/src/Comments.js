import {useState, useContext} from 'react';
import TimeAgo from 'timeago-react';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Button_log from './Button_log';
import RootCommentContext from './RootCommentContext';
import CommentForm from './CommentForm';
import Voting from './Voting';
function Comments(props) {
    const [showForm,setShowForm] = useState(false);
    const comments = props.comments.filter(comment => props.parentId === comment.parentId);
    const rootCommentInfo = useContext(RootCommentContext);
    return(
        <div className='my-2 text-messenger_text'>
            {comments.map(comment => {
        let replies = props.comments.filter(commend => commend.parentId === comment._id);
        return (
            <div className='mb-2'>
            <div className="flex mb-2">
            <div className="bg-messenger_text w-12 h-12 rounded-full mr-2"/>
            <div className="leading-10 pr-2 text-lg font-sans">{comment.author}</div>
            <TimeAgo className="leading-10 text-md font-sans" datetime={comment.postedAt}/>
            </div>
            <div className="border-l-2 border-messenger_text-darker p-3 pb-0"
                 style={{marginLeft:'18px'}}>
              <div className="pl-5 -mt-5">
            <div><ReactMarkdown remarkPlugins={[gfm]} children={comment.body} />
            </div>
            <Voting commentId={comment._id}/>
            <Button_log type={'button'}
                        onClick={() => setShowForm(comment._id)}
                        className="bg-messenger_dark-brighter text-messenger_text-darker border-none py-2 pl-0 pr-0">Ответить</Button_log>
                {comment._id === showForm && (
                  <CommentForm
                    parentId={comment._id}
                    rootId={props.rootId}
                    onSubmit={() => {
                      setShowForm(false);
                      rootCommentInfo.refreshComments();
                    }}
                    showAuthor={false}
                    onCancel={e => setShowForm(false)}/>
                )}
                 {replies.length > 0 && (
                  <Comments comments={props.comments} parentId={comment._id} rootId={props.rootId} />
                )}
            </div>
            </div>
            </div>
        );
      })}
        </div>
    );
}
export default Comments;