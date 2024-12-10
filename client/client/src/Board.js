import { useContext, useEffect } from 'react';
import BoardHeader from './BoardHeader';
import Postform from './Postform';
import PostListing from './PostListing';
import {useLocation, useParams} from "react-router-dom";
import CommunityContext from './CommunityContext';
function Board(){
    const {community:communityFromUrl}= useParams();
    const{setCommunity} = useContext(CommunityContext);
    useEffect(()=>{
setCommunity(communityFromUrl);
    },[communityFromUrl] );
    return(
<div>
<BoardHeader />
<Postform />
<PostListing/>
</div>
    );
}
export default Board;