import { useEffect, useState, useContext, createContext,useRef,useMemo } from "react";
import { Link } from "react-router-dom";

const myStyle = {
    color:"blue",
    backgroundColor:"white",
    padding:"70px"
}

function Timer() {
const [count,setCount] = useState(0);

useEffect(() => {
    let timer = setTimeout(
        ()=>{
            setCount((c)=>c + 1)
        },1000
    )

return () => clearTimeout(timer)}, 
[]);


    return ( <h1>I've rendered {count} times</h1> );
}


function Counter() {
const [count,setCount] = useState(0);
const [calculation,setCalculation] = useState(0);

useEffect(() => {
    setCalculation(()=> count * 2)
}, [count]);


    return ( 
        <>
         <p>Count:{count}</p>
         <button onClick={()=> setCount ((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
        </>
           
     );
}


 

function Home() {
const [name,setName] = useState({
        brand:"Ford",
        color:"Blue",
        model:"mustang"
    });
    



const updateColor = () => {
    setName(previousState => {
        return ({
        ...previousState, color:"yellow" 
        })
    }); 
}
 


   return (
     <>
     
<h1 style={myStyle}>Welcome:{name.color}</h1> 
      <button onClick={updateColor}>Blue</button>
        <Link to="/Display" className="btn btn-primary px-3 py-3 text-white text-center justify-center align-center mx-5">Connect</Link>
        <Link to="/Contact" className="btn btn-primary px-3 py-3 text-white text-center justify-center align-center mx-5">Connect</Link>

<Timer />
<Counter />
<Futton />
<Component1 />
<Sap />
<Vap />
<Gamms />
<Neo />
<Todos />


        </>
    );
}

export default Home;

<button onClick={()=>setName((c)=> c + 1)}></button>

const Button = {
  color:"red",
  padding:"10px"  
};

const Red = {
    ...Button, color:"black"
};
 
function Futton() {
    return (  
        <><button style={{...Red}}>Me</button>
        </>
    );
}

const UserContext = createContext ();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
  
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
      </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}



function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
 const user = useContext(UserContext)

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}



function Sap() {
const [inputValue,setInputValue] = useState("");
const count = useRef(0);

useEffect(() => {
  count.current = count.current + 1 ;
},);
  return ( 
<>
    <input type="text" 
    value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}
    style={{backgroundColor:"red"}}
    />
    <h1>Render Count: {count.current}</h1>

</>

   );
}

// function Fap() {
// const [inputValue,setInputValue]= useState("");
// const [count,setCount]= useState(0);


// useEffect(() => {
//   setCount(count + 1)
// });



//   return ( 
// <>
//     <input type="text" 
//     value={inputValue}
//     onChange={(e)=>e.target.value}
//     style={{backgroundColor:"red"}}
//     /> <h1>Count: {count}</h1>
// </>

//    );
// }



function Vap() {

const[inputValue,setInputValue] = useState("");
const previousInputValue = useRef("");



useEffect(() => {
  previousInputValue.current = inputValue;
}, [inputValue]);

  return ( 

<>
<input type="text"
value={inputValue}
onChange={(e)=>setInputValue(e.target.value)}

/>

<h2>Current Value: {inputValue}</h2>
<h2>Prev Value: {previousInputValue.current}</h2>

</>

   );
}


function Gamms() {

const inputElement = useRef();

const focusInput = () => {
  return (  
    inputElement.current.focus()
  );
}
 
  return ( 
<>
    <input type="text"
    ref={inputElement}/>

    <button onClick={focusInput}>Focus Input</button>

</>

   );
}




