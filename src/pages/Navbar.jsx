import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineSearch } from 'react-icons/md'; 
import { AiOutlineTeam } from 'react-icons/ai'; 
import { BiBell } from 'react-icons/bi';   
import HamMenu from './HamMenu';
function Navbar() {
  return (
    <>
    <div className="flex  border-2 border-white-400 p-2">
        <div className="" onClick={() => {}}>
            <GiHamburgerMenu/>
        </div>
        <div className="border-2 border-slate-200 flex  ml-12">
         <span className="p-1"> <MdOutlineSearch/></span>
        <input type="text" className="outline-0" placeholder="difin"/>
        </div>
        <div className="ml-96 pl-96 flex" > +<AiOutlineTeam/> <span className=" text-sm  text-slate-400">INVITE TEAM MEMBERS</span></div>
        <div className ="ml-12 mr-10"><BiBell/></div>
        <div>user image</div>
       
    </div>
    <HamMenu/>
    </>
  )
}

export default Navbar