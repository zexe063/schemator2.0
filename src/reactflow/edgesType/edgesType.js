

import Bezier  from "../images/draw.png";
import Line from "../images/arrow.png";
import { useDispatch, useSelector } from "react-redux";
import {AiSchemaGenerator, RedoNode, UndoNode, edgetype } from "../nodereducer/nodeSlice";
import { useEffect, useRef, useState } from "react";
import { CopyNode } from "../nodereducer/nodeSlice";
import { TbArrowRotaryStraight } from "react-icons/tb";
import "./edgesType.css";
import nodetype from "../nodetype";
import { FaCopy } from "react-icons/fa6";
import { FaDiceD20, FaPaste } from "react-icons/fa";
import { IoMdRedo } from "react-icons/io";
import { CiViewTable } from "react-icons/ci";
import axios from "axios"
import { SchemaConverter } from "../nodereducer/nodeSlice";

function EdgeLine(){


 
  
  const RedoNodeData = useSelector((state)=>state.nodes.RedoNodeData);
  const[redo,setRedo] = useState(false);
  const input = document.querySelector("#schemastring")


  useEffect(()=>{
    
    if(RedoNodeData.length> 0){
setRedo(true)
    }
    else{
      setRedo(false)
    }
  },[RedoNodeData])
     const dispatch = useDispatch()

    function connectionline(e){
        const EdgeTypeElement = document.querySelectorAll("img");
         dispatch(edgetype(e.target.alt));

  EdgeTypeElement.forEach((item)=>{
    if(item.id == "active"){
        item.id = null;
    } 

    e.target.id =  'active'
  })
       
    }

    function  onDragStart(event, Nodedatatype){
  //  event.dataTranfer.setData("application/reactflow", Nodedatatype);
  //  event.dataTranfer.effectAllowed = "move";


    }

    function redonewnode(){
      dispatch(UndoNode())
    }
function CopyNodeCAll(){
  // console.log("helo worl")
  dispatch(CopyNode())
}
  
  async function connectschema(){
dispatch(SchemaConverter(input.value))


}
function AiSchema(){
  dispatch(AiSchemaGenerator())
}
  
return (
    <div className='flex w-full'>

    <div className=' flex w-full gap-7 justify-center items-center h-[50px] shadow-sm  border-[1px] border-solid border-border_color'>

 <div className=" cursor-pointer relative" onClick={connectionline}>
<TbArrowRotaryStraight size="25" color="white"></TbArrowRotaryStraight>
<span className=" text-white font-Dam-sans  absolute  top-[20px] left-[18px] text-[8px]">L</span>
 </div>

 <div className=" text-white cursor-pointer relative" onClick={connectionline}>
 <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <path  d="M 5,22 H 15 V 5 H 25" 
              fill="none" 
              stroke="white" 
              
              stroke-width="1.5"/>
      </svg>
      <span className=" text-white font-Dam-sans  absolute  top-[20px] left-[18px] text-[8px]">S</span>
 </div>

  <div  draggable onDragStart={(event)=>onDragStart(event, "node")}>
   <div className=" cursor-pointer"><CiViewTable size={25} color="white"></CiViewTable> </div>
</div>

<div className=" cursor-pointer relative">
  <FaPaste size="20px" style={{color:"#9ca8b3"}}></FaPaste>
  <span className=" text-white font-Dam-sans  absolute  top-[20px] left-[18px] text-[8px]">P</span>
</div>

{
  redo ? <div className=" cursor-pointer  relative"><IoMdRedo style={{color:"#0041D0"}} onClick={redonewnode} ></IoMdRedo><span className=" text-white font-Dam-sans  absolute  top-[20px] left-[18px] text-[8px]">L</span></div> :

  <div className=" cursor-pointer relative"><IoMdRedo style={{color:"#9ca8b3"}} size="25px"></IoMdRedo> <span className=" text-white font-Dam-sans  absolute  top-[20px] left-[18px] text-[8px]">R</span></div>
}

<div>
  <input type="text" placeholder="Enter Schema" id="schemastring"></input>
  <button className="w-[80px] h-[20px]  bg-blue-700  rounded-sm" onClick={connectschema}>connect</button>
</div>

<div>
 
  <button className="w-[80px] h-[20px]  bg-blue-700  rounded-sm" onClick={AiSchema}>ai</button>
</div>
</div>



    </div>

)

}
export default EdgeLine;