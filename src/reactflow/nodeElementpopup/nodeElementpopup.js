import { FaCaretRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {  NodeDuplicate, NodeElementpopupClose, nodesdatashow, datashow} from "../nodereducer/nodeSlice";
import { useEffect } from "react";

import { SlPencil } from "react-icons/sl";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { ImPaste } from "react-icons/im";


import { FaRegClone } from "react-icons/fa6";
function NodeElementpopup({id}){

    const dispatch = useDispatch()
 

  
  function NodeDataShow(e){
    e.stopPropagation()
    dispatch(datashow(true))
    dispatch(nodesdatashow(id))
    dispatch(NodeElementpopupClose())
    
  }
  useEffect(()=>{
    function handleClick(e){
      console.log("key pressed")
      e.stopPropagation();
    
      dispatch(NodeElementpopupClose(id))
    
     
    } 
window.addEventListener('click',handleClick)

return ()=>{
  window.removeEventListener('click',handleClick)
}
  },[])

  const  PopElement = [ {name:"Edit", key:"Ctrl+E", icon:< SlPencil />},{name:"Copy", key:"Ctrl+C", icon:< IoCopyOutline />,}, {name:"Paste", key: "Ctrl+P",icon:<ImPaste />}, {name:"Duplicate", key:"Ctrl+D" , icon:<FaRegClone />}, {name:"Delete", key:"Ctrl+D", icon:<AiOutlineDelete />}]
  
    return(
       
            
        <div className=' absolute left-[-120px]   w-[110px]  top-[-5px] bg-collection_black rounded-md  shadow-md border-[1px] border-solid border-border_color font-firo-mono text-[8px] p-2  transition-all  z-40' onClick={(e)=>e.stopPropagation()}>
            <div className="  absolute right-[-15px]"><FaCaretRight size="20" color="rgb(55, 52, 73)"></FaCaretRight></div>
       <ul  className=" flex flex-col  h-full  gap-3 text-white ">

      

{
  PopElement.map((item,i)=>{
    return(
      <li className=" flex justify-between w-full cursor-pointer" key={i} onClick={(e)=> {e.stopPropagation()
        if(item.name=== "Duplicate"){
          dispatch(NodeDuplicate(id))
          dispatch(NodeElementpopupClose())
        }
        else if(item.name  === "Edit"){
          NodeDataShow(e)
        }
      }} >
      <div className=" flex   h-[10%] items-center gap-1" >
<span>{item.icon}</span>
<span> {item.name}</span>
      </div>
      <div>
    <span>{item.key}</span>
      </div>
     </li>
    )
  })
}

      



       </ul>
        </div>
        
    )
}

export default NodeElementpopup;