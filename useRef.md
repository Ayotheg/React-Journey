#useRef 

import {useRef, useState, useEffect } from "react";

Learnt about using useRef. Using it with useState and useEffect.
function App() {
const [time,setTime] = useState("")
const lamb = useRef(0); 

useEffect(()=> {
lamb.current = lamb.current + 1; 
),[time]}

return(

<input 
type = "text"
value = {time}
onChange = {(e)=>setTime (e.target.value)}
/> 
<h1>Time State:{time}</h1>
<h1> Render Count: {setTime} </h1>

);
})

Learnt about using useRef to store previous value, focus using (current.focus)
useRef does not update the UI but rather store the value. 

function Ide(){

const Ref = useRef (0);

const focusInput = Ref.current.focus()

} 