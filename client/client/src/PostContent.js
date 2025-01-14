import TimeAgo from 'timeago-react';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
function PostContent(props) {
    return (
   <div>
   <h5 className='text-messenger_text-darker text-sm mb-1'>Опубликовал u/{props.author}<TimeAgo datetime={props.postedAt}/></h5>
   <h2 className="text-xl mb-3">{props.title}</h2>
   <div className="text-sm leading-6">
    <ReactMarkdown plugins={[gfm]} children={props.body}></ReactMarkdown>
    
   </div>
   </div>
    );
  }
  
  export default PostContent;