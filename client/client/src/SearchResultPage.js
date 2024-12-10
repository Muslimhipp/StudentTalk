import { useState } from "react";
import { Link } from "react-router-dom";

function SearchResultPage(props){
    const {text}= props.match.params;
    const [comments, setComments] = useState([]);
    const [communities,setCommunities]= useState([]);
    useEffect(()=> {
        axios.get('/search?phrase='+text, {withCredentials:true})
      .then(response => {
        setComments(response.data.comments);
        setCommunities(response.data.communities);
    });
    }, []);
    return(
<div className=' bg-messenger_dark'>
    {communities.map(community=>{
        <Link 
        className={" block bg-messenger_dark-brighter p-3 mx-6  border-messenger_border text-messenger_text rounded nb-2 border hover:border-white"}
         to={'/r/'+community.name}>r/{community.name}</Link>
    })}
    {comments.map(comment=>(
      <Post {...comment}  isListing={true}/>
    ))}
   </div>
   );
}
export default SearchResultPage;