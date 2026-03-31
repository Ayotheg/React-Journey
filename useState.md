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
