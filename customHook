#Custom Hook 


I did customHook today. It allows for reusable code and makes your codebase organized. 

  I made a call to a weather API, so basically you use it with useState, and useEffect. 


  import {useState, useEffect} from "react"

  function useFetch() {
const [data,setData] = useState (null) //Advisable to write the default as null cause you are passing either an array or object so it wont throw am error. 

const useFetcher (url) () = > (
   fetch (url)
  .then((res)=> res.json());
  .then((data)=> setData((data)))
  
  
return [data] 
  }


//Import in another file

const [data] = useFetcher ("example.url")

// Either you are receiving an array of object from the API. Use PostMan to check what kind 

const Payload() => (

{data && data.map((item)=> (
<p key = {item.id} > {data} 
{...item} 

) )

