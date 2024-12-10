import './style.css';
import Header from './Header';
import Authorization from './authorization';
import {useState, useEffect} from 'react';
import UserContext from './UserContext';
import axios from 'axios';
import PostFormModel from './PostFormModel';
import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import Authorizationcontest from './Authorizationcontest';
import Board from './Board';
import Routing from './Routing';
import CommentPage from './CommentPage';
import PostFormModalContext from './PostFormModalContext';
import RedirectContext from './RedirectContext';
import { CommunityContextProvider } from './CommunityContext';
axios.defaults.baseURL='http://localhost:4000/';
function App() {
  const [ShowAuthmodel,setShowAuthmodel]= useState(false);
  const [user, setUser] = useState({});
  const [showPostFormModal,setShowPostFormModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => 
    {axios.get('http://localhost4000/user', {withCredentials:true})
  .then(response => setUser(response.data));
}, []);
  function logout(){
 axios.post('http://localhost:4000/logout', {},{withCredentials:true})
  . then(()=> setUser({}));
  }
 
  return (
  <Authorizationcontest.Provider value={{show:ShowAuthmodel,setShowAuthmodel}} >
   <PostFormModalContext.Provider value={{show:showPostFormModal,setShow:setShowPostFormModal}}>
  <CommunityContextProvider>
   <UserContext.Provider value={{...user,logout,setUser}} >
   <RedirectContext.Provider value={{redirect,setRedirect}}>
   <Routing/>
   </RedirectContext.Provider>
   </UserContext.Provider>
   </CommunityContextProvider>
   </PostFormModalContext.Provider>
   </Authorizationcontest.Provider>
  );
}

export default App;
