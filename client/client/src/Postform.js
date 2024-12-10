import Avatar from './Avatar.png';
import { useContext } from 'react';
import PostFormModalContext from './PostFormModalContext';
function Postform(){
  const modalContext=useContext(PostFormModalContext);
return(
<div className='bg-messenger_dark px-6 py-4 text-gray-400'>
<div className='border border-messenger_border p-2 rounded-md flex bg-messenger_dark-brighter'></div>
  <div  className='rounded-full bg-gray-500 overflow-hidden w-8 h-8'>
    <img src={Avatar} className='' alt="" style={{filter:"invert(100%)"}}/>
  </div>
  <form action='' className='flow-frow bg-messenger_dark-brighter border border-messenger_border ml-4 mr-2 '>
    <input type='text'
     onFocus={e => {
      e.preventDefault();
      modalContext.setShow(true);}}
     className='bg-messenger_dark-brightest  p-2 flex-grow rounded-md ' placeholder='Новый Пост'/></form>
  </div>
  );
}
export default Postform