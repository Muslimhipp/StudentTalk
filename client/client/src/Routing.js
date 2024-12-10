import Header from "./Header";
import {BrowserRouter as Router,  Navigate} from "react-router-dom";
import RoutingSwitch from "./RoutingSwitch";
import PostFormModel from "./PostFormModel";
import Authorization from "./Authorization";
import {useContext, useEffect} from "react";
import RedirectContext from "./RedirectContext";
function Routing() {
    const {redirect,setRedirect} = useContext(RedirectContext);
    useEffect(() => {
      if (redirect) {
        setRedirect(false);
      }
    }, [redirect]);
    return (
      <Router>
        {redirect && (
          < Navigate to={redirect} />
        )}
        {!redirect && (
          <>
            <Header />
            <RoutingSwitch />
            <PostFormModel />
            <CommunityFormModal/>
            <Authorization />
          </>
        )}
      </Router>
    );
  }
  
  export default Routing;