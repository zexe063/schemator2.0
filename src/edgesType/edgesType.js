

import Bezier  from "../images/draw.png";
import Line from "../images/arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { RedoNode, UndoNode, edgetype } from "../nodereducer/nodeSlice";
import { useEffect, useRef, useState } from "react";

import "./edgesType.css";
import nodetype from "../nodetype";
import { FaCopy } from "react-icons/fa6";
import { FaDiceD20, FaPaste } from "react-icons/fa";
import { IoMdRedo } from "react-icons/io";

function EdgeLine(){


 
  
  const RedoNodeData = useSelector((state)=>state.nodes.RedoNodeData);
  const[redo,setRedo] = useState(false);


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
 console.log("drag is start")

    }

    function redonewnode(){
      dispatch(UndoNode())
    }

  
  
return (
    <div className='flex w-full'>

    <div className=' flex w-full gap-7 justify-center items-center h-[50px] shadow-sm '>
   <img src={Bezier} alt='Bezier' className='w-7 h-7 cursor-pointer' onClick={connectionline} id="active"></img>
  <img src={Line} alt='Straight' className='w-5 h-5 cursor-pointer' onClick={connectionline} ></img>
  <img src={Line} alt='SmoothStep' className='w-5 h-5 cursor-pointer' onClick={connectionline}></img>

 
  <div  draggable onDragStart={(event)=>onDragStart(event, "node")}>
   <div className=" rounded-sm bg-pink-600 w-[30px] h-[30px] mt-2"></div>
   <p className="  font-Dam-sans  text-[10px] text-center">Node</p>
</div>

<div className="  rounded-sm w-[30px] h-[30px] flex justify-center items-center  cursor-pointer" style={{ backgroundColor:"#DDD"}}><FaCopy style={{color:"#9ca8b3"}}></FaCopy></div>

<div className="  rounded-sm w-[30px] h-[30px] flex justify-center items-center  cursor-pointer" style={{ backgroundColor:"#DDD"}}><FaPaste style={{color:"#9ca8b3"}}></FaPaste></div>

{
  redo ? <div className="  rounded-sm w-[30px] h-[30px] flex justify-center items-center  cursor-pointer" style={{ backgroundColor:"#DDD", border:"2px solid #0041D0"}}><IoMdRedo style={{color:"#0041D0"}} onClick={redonewnode}></IoMdRedo></div> :

  <div className="  rounded-sm w-[30px] h-[30px] flex justify-center items-center  cursor-pointer" style={{ backgroundColor:"#DDD"}}><IoMdRedo style={{color:"#9ca8b3"}}></IoMdRedo></div>
}

</div>

    </div>

)

}
export default EdgeLine;