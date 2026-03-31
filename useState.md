# useState 

Should've committed this yesterday>>>>

Learnt more about useState. Got to know about previousState.
Used it with a spread operator to change a particular value from my object.

function(){ 
const [color,setColor] = useState({color:"red",brand:"Ford",model: 
"Mustang"});

return(
<p>{color}</p>
<button onClick = { ()=>setColor("Blue")}
); 

}


#2 - functions , spread operators
Learnt about Lambda and Anonymous functions

i.e setCount( ()=>(c)c+1)

Spread Operators are so powerful too, learnt more about their use cases. Used it for a styling cases. 

Learnt about ASI - Automatic Semi-colon Insertion. Make it a good habit to always use your semicolon where necessary so you wouldn't hit an error when deploying. 

learnt about clearTimeout too; best used with a return () = > clearTimeout


