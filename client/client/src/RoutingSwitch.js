import {Routes, Route, BrowserRouter as Router, useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Board from './Board';
import CommentPage from './CommentPage';
import CommentModal from './CommentModal';
import SearchResultPage from './SearchResultPage';
function RoutingSwitch(){
    const history = useNavigate();
    const[commentId, setCommentId]=useState(null);
    let location = useLocation();
    if (location?.state?.commentId){
        if (location?.state?.source){
            location.pathname='/r/'+location.state.source;
        }else{
            location,pathname='/';
        }
        if(!commentId){
            setCommentId(location.state.commentId);
        }
    }
    function close(){
        history.pushState({pathname:location.pathname});
        setCommentId(null);
    }


    return(
    <div>
       {commentId && (
        <div>
             <CommentModal
            id={commentId}
            open={postOpen}
            onClickOut={() => close()} />
        </div>
       )}
       <Routes location={location}>
        <Route exact path="/" component={Board}/>
        <Route exact path="/r/:community" component={Board}/>
        <Route exact path="comments/:id" component={CommentPage} />
    <Route exact path="/search/:text" component={SearchResultPage}/>
    </Routes>
    </div>
);
}
export default RoutingSwitch