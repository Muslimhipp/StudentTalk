function Input (props){
return (
<input {... props} className={"bg-messenger_dark-brighter text-messenger_text p-2 border-messenger_dark-brightest rounded-md block"+ props.className}/>
);    
}
export default Input;