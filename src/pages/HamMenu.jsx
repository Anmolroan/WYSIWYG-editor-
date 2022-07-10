import React ,{useState} from 'react'
import { BiCollapse } from 'react-icons/bi'; 
import MainCollection from './MainCollection';

function HamMenu() {
    const [collection,setCollection]=useState([1,2,3,4]);
    const handleAdd =()=>{
        const temp =collection[collection.length-1]+1;
        setCollection([...collection,temp])
    }
  return (
    <div className="w-80 border-2 border-slate-300 overflow-y-scroll  h-screen">
    <div className="upperdiv flex  ">
    <span className="mr-48">DFIN</span>
    <span className="text-red-300" onClick={handleAdd}> +</span>
    <span> <BiCollapse/></span>
    <span>{">>"}</span>

    </div>
    {
        collection.map((el,i)=>{
            return <MainCollection number ={collection[i]}  key={i}></MainCollection>
        })
    }
   
   
    </div>
  )
}

export default HamMenu