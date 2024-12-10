import{Link} from "react-router-dom";
import PostContent from "./PostContent";
import { useContext } from "react";
import CommunityContext from "./CommunityContext";
function Post(props) {
const {community}= useContext(CommunityContext);
    let postClasses= " block border   p-2 rounded-md"+ (props.open ? "" : "hover:border-messenger_text cursor-pointer");
    if (props.isListing) {
      postClasses += " bg-messenger_dark-brighter p-3 mx-6 border-2 border-messenger_border";
    } else {
      postClasses += " border-none";
    }
    return (
        <div className='px-6 text-messenger_text pb-4 '>
           {props.open && (
        <div className={postClasses}>
          <PostContent {...props} />
        </div>
      )}
      {!props.open && (  
  <Link to={{pathname:'/comments/'+(props.rootId || props._id),state:{commentId:(props.rootId || props._id),source:community }}} className={postClasses}>
   <PostContent {...props}/>
   </Link>
   )}
</div>
  

   
    );
   
}
export default Post;
