


import { useDispatch, useSelector } from "react-redux";
import {AiSchemaGenerator, RedoNode, UndoNode, edgetype,dialogBoxRedux } from "../nodereducer/nodeSlice";
import { useEffect,  useState } from "react";
import { CopyNode } from "../nodereducer/nodeSlice";

import "./edgesType.css";
import axios from "axios"
import { SchemaConverter } from "../nodereducer/nodeSlice";
import { FaRegPaste } from "react-icons/fa6";
import { LiaRedoAltSolid } from "react-icons/lia";
import { AiOutlineRobot } from "react-icons/ai";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";



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
  dispatch(dialogBoxRedux())
}

const iconArr = [
  {name:"arrow", icon:<MdOutlineArrowRightAlt  size={15} color="white"/>},
  {name:"table", icon:<CiViewTable size={15} color="white"/>, ondrag:onDragStart},
  {name:"copy", icon:<FaRegPaste size={15} color="white"/>},
  {name:"redo", icon:<LiaRedoAltSolid size={15} color="white"/>, onclick:redonewnode},
  {name:"ai", icon:<AiOutlineRobot size={15} color="white"/>, onclick:AiSchema},
  {name:"database", icon:<BsDatabaseAdd size={15} color="white"/>},
]
  
return (
   
<nav className=" w-full absolute top-[10px] flex justify-center items-center">

<div className=" z-larger shadow-xl  p-2 pr-4 gap-3 flex justify-center  items-center  bg-background_black  rounded-[4px] border-[1px] border-solid border-border_color ">
  {
    iconArr.map((item)=>{
      return(
        <div 
          className="cursor-pointer bg-slate_3 w-[30px] h-[30px] flex justify-center items-center rounded-[4px] " 
          onClick={item.onclick}
         draggable="true"
title={item.name}
        >
          {item.icon}
        </div>
      )
    })
  }
</div>
</nav>

   

)

}
export default EdgeLine;