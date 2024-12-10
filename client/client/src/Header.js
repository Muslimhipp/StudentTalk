import Logo from './Logo.png';
import Avatar from './Avatar.png';
import './style.css';
import Button_log  from './Button_log';
import { MagnifyingGlassCircleIcon, BellIcon, PlusCircleIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowDownCircleIcon, UserCircleIcon, LoginIcon,UserMinusIcon  } from '@heroicons/react/24/outline';
import { useState, useContext} from 'react';
import ClickOutHandler from '';
import UserContext from './UserContext';
import {Link} from 'react-router-dom';
import Authorization from './Authorization';
import PostFormModalContext from './PostFormModalContext';
import CommunityContext from './CommunityContext';
function Header() {
  const [userDropdownvisibility, setUserDropdownVisibiltyClasss]=useState('hidden');
  const [plusDropdownvisibility, setPlusDropdownVisibiltyClasss]=useState('hidden');
  const [searchText,setSearchText] = useState('');
  const {setRedirect} = useContext(RedirectContext);
  const {setShow:setShowPost}= useContext(PostFormModalContext);
  const {setShow:setShowCommunity}= useContext(CommunityContext);
  function toggleUseDropdown(){
    if (userDropdownvisibility === "hidden"){
      setUserDropdownVisibiltyClasss('block');
    }
    else
    {
      setUserDropdownVisibiltyClasss('hidden');
    }
  }
   const authModal= useContext(Authorization);
   const User = useContext(UserContext);
   function doSearch(e){
    e.preventDefault();
    setRedirect('/search'+encodeURIComponent());
   }
  return (
    <header className="flex w-full bg-theme_dark">
      <div className='mx-4 flex relative'>
        <Link to="/">
        <img src={Logo} alt="" className=" w-8 h-8 mr-4" />
        </Link>
        <form onSubmit={doSearch} className='bg-gray-700 px-4 flex rounded-md border border-border_theme mx-4 flex-grow'>
          <MagnifyingGlassCircleIcon className="text-gray-400 h-5 w-5 mt-1" />
          <input type="text" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-yellow-50"
                 placeholder="Search"
                 value={searchText}
                 onChange={ev => setSearchText(ev.target.value)} ></input>
         
        </form>
        {User.username && (
          <>
          <button className='px-2 py-1'><BellIcon className="text-gray-400 w-5 h-5 m-1 mx-2" /></button>
        <button className='px-2 py-1'><ChatBubbleOvalLeftEllipsisIcon className="text-gray-400 w-5 h-5 m-1 mx-2" /></button>
        <ClickOutHandler onClickOut={()=> setPlusDropdownVisibiltyClasss('hidden')}>
        <button onClick={() =>setPlusDropdownVisibiltyClasss('block')} className='px-2 py-1'><PlusCircleIcon className="text-gray-400 w-5 h-5 m-1 mx-2 " /></button>
        <div className={'aboslute right-0 top-8 bg-messenger_dark border border-gray-700 z-10 rounde-md text-messenger_dark' +plusDropdownvisibility} style={{width: '300px'}}>
       <div className='relative'>
       <button onClick={()=> {setShowPost(true); 
       setPlusDropdownVisibiltyClasss('hidden');}}
        className='block  w-50 py-2 px-3 hover: bg-gray-300 hover:text-black text-sm'>
          <PlusCircleIcon className=" text-gray-500 w-5 h-5 mr-2"/>
          Создать пост
        </button>
        <button onClick={()=> {setShowCommunity(true);
setPlusDropdownVisibiltyClasss('hidden');
               }       }
        className='block   py-2 px-3 hover: bg-gray-300 hover:text-black text-sm'>
          <PlusCircleIcon className=" text-gray-500 w-5 h-5 mr-2"/>
          Создать community
        </button>
        </div>
        </div>
        </ClickOutHandler>
        </>
      )}
      {!User.username && (<div className='mx-2 hidden sm:block'>
          <Button_log outline={1} className="mr-1 h-8" onClick={()=> authModal.setShow('login')}>Log in</Button_log>
          <Button_log className="mr-1 h-8" onClick={()=> authModal.setShow('register')}>Sign Up</Button_log>
        </div>)}
        {/*<button className='px-2 py-1'><BellIcon className="text-gray-400 w-5 h-5 m-1 mx-2" /></button>
        <button className='px-2 py-1'><ChatBubbleOvalLeftEllipsisIcon className="text-gray-400 w-5 h-5 m-1 mx-2" /></button>
        <button className='px-2 py-1'><PlusCircleIcon className="text-gray-400 w-5 h-5 m-1 mx-2 " /></button>*/}
        

        <ClickOutHandler on onClickOut={() => setUserDropdownVisibiltyClasss('hidden')}>
        <button className='rounded-md flex ml-4 border  border-gray-700' onClick={() => toggleUseDropdown()}>
          {!User.username && (<UserCircleIcon className='="w-6 h-6 text-gray-400 p-1'/>)}
          {User.username && (<div className=' rounded-md w-8 h-8 bg-grey-700'> <img src={Avatar} alt="" className='block w-8 h-8' /></div>)}
          
          <ArrowDownCircleIcon className="text-gray-500 w-6 h-6 mt-2 ml-2" />
        </button>
        <div className={'aboslute right-0 top-8 bg-messenger_dark border border-gray-700 z-10 rounde-md text-messenger_dark' +userDropdownvisibility}>
        {User.username && (
        <span className='block  w-50 py-2 px-3 hover: bg-gray-300 text-sm'>
          Привет, {User.username}!
        </span>
        )}
        {!User.username && (<button
        onClick={()=> authModal.setShow('login')}
        className='block  w-50 py-2 px-3 hover: bg-gray-300 hover:text-black text-sm'>
          <UserCircleIcon className=" text-gray-500 w-5 h-5 mt-2 m-1"/>
          Log In / Sign Up
        </button>)}
        {User.username && (<button
        onClick={()=> User.logout()}
        className='block  w-50 py-2 px-3 hover: bg-gray-300 hover:text-black text-sm'>
          <UserMinusIcon className=" text-gray-500 w-5 h-5 mt-2 m-1"/>
          Log Out
        </button>)}
        </div>
        </ClickOutHandler>
      </div>
    </header>
  );
}
export default Header;