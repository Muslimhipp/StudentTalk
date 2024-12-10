function Button_log(props){
    let classNames = "border border-gray-300 bg-gray-300 text-messenger_dark rounded-full px-3 font-bold";
    if (props.outline){
        classNames+="text-gray-300";
    }
    else{
        classNames+="bg-gray-300 text-messenger_dark ";
    }
    return(
<button {...props} className= {classNames+props.className}/>
    );
}
export default Button_log;