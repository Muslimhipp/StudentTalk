import ClickOutHandler from "react-clickout-handler/dist/index";
 export function Popup({children,open, onClickOut}){
    const visiableClass = open ? 'block' : 'hidden';
    return( <div className={" w-screen h-screen fixed top-0 left-0 z-20 flex-center"+visiableClass} style={{backgroundColor: 'rgba (0,0,0,.8)'}}>
        <ClickOutHandler onClickOut={()=>{onClickOut()}}>
        <div className=" border border-gray-600  bg-messenger_dark p-5 w-3/4  md:w-2/4 text-messenger_text   self-center mx-auto rounded-md">{children}</div>
        </ClickOutHandler>
        </div>);
}