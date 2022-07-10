import React,{useState} from 'react'

function MainCollection({number,pl}) {
    const [flag,setFlag] =useState(false)
  return (
    <div>
    <h4 className={`font-bold pl-2`} onClick={() => setFlag(!flag)}>{flag?"^":">"} collection .  {number} </h4>
    </div>
  )
}

export default MainCollection