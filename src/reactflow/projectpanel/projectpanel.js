import { IoIosArrowForward, IoIosArrowDown, IoMdReturnRight } from "react-icons/io";
import { SiFiles } from "react-icons/si";
import "./projectpanel.css"
import { useDispatch, useSelector } from "react-redux";
import { BiSolidHdd, BiSolidHide, BiSolidShow } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { NodeElementHideRedux } from "../nodereducer/nodeSlice";
import { useState } from "react";
import { FaTableCellsLarge } from "react-icons/fa6";
function ProjectPanel(){


  const dispatch = useDispatch()
  const nodes = useSelector((state)=>state.nodes.Nodes);
  const edges = useSelector((state)=>state.nodes.Edges);
  const refrences  = useSelector((state)=>state.nodes.Refrences);
  const [open,setOpen] = useState({
    node:true,
    edge:true,
    reference:true
  });
  

  const  Erdiagram = [
    {name:"node", data:nodes},
    {name:"edge", data:edges},
    {name:"reference", data:refrences}
  ];

  function NodeElementHide(e,id){
    e.stopPropagation();
      dispatch(NodeElementHideRedux(id))
  }
  

  function toggleFolder(foldername){
setOpen((prev)=> ({...prev, [foldername]: !prev[foldername]}))
  }
  
    return(
        <div id="project" className=" w-[270px] z-larger h-[calc(100%-50px)] absolute top-[50px]  overflow-y-auto   left-0   shadow-background_black bg-background_black  border-solid border-r-[1px] border-border_color text-white">
          
          <div className=" mt-8 ">
          {
            
            
            
           Erdiagram.map((diagram,i)=>{
       
    return (
      <div  id=" porjectfolder" className=" flex   w-full  h-auto pl-3  flex-col  " key={i}>

            <div id="folder" className=" transition-all w-full min-h-[30px] 
               mt-2 max-h-auto text-white font-firo-mono text-[13px] border-t-[1px] border-solid border-border_color cursor-pointer" >
              <div className=" flex gap-2 w-full items-center text-center mt-1"  key={i}  onClick={(e)=>toggleFolder(diagram.name)}> 
         <span>{open[diagram.name] ? <IoIosArrowDown></IoIosArrowDown>  : <IoIosArrowForward></IoIosArrowForward>}</span>
         <span> <SiFiles></SiFiles></span>
        <span> 
         
        {diagram.name}
        </span>
       </div>

     
     {
      open[diagram.name] &&
      
      <ul className=" flex gap-1 flex-col  mt-1 ml-2">
      {
        (()=>{
         
      if(diagram.name == "node"){
       return  diagram.data.map((item)=>{
          return (
            <li className=" transition-all flex  justify-between items-center">
 <span className="   flex  justify-center items-center gap-2"><FaTableCellsLarge color={item.data.color}></FaTableCellsLarge>{item.data.label}</span>
<div className=" flex gap-2  mr-3">
<span onClick={(e)=>NodeElementHide(e,item.id)}>{ item.show ? <BiSolidHide></BiSolidHide> : <BiSolidShow></BiSolidShow>}</span>
<span><HiDotsVertical></HiDotsVertical></span>
</div>

 </li> 
          )
        })
      }
    
      else if(diagram.name == "edge"){
    return   diagram.data.map((item)=>{
        return (
          <li key={item.id} className=" flex transition-all justify-between items-center w-full text-white text-[13px] cursor-pointer hover:bg-background_black hover:text-background_white">
            <div className="flex gap-2 w-full items-center text-center">
            <span> <IoMdReturnRight></IoMdReturnRight></span>
            <span>  {item.id} </span>
             </div>
             <span className=" mr-3"><HiDotsVertical></HiDotsVertical></span>
            </li>
        )
       })
      }

      else{
        return diagram.data.map((item)=>{
         return (
          <li className=" flex transition-all justify-between items-center ">
<div className="flex gap-2  items-center justify-center pr-3 ">
<svg xmlns="http://www.w3.org/2000/svg" width="16px" stroke= "yellow" height="16px" viewBox="0 0 30 32" class="sMQL_ dbm-icon mV5Zw iTCKZ"><title>reference-id</title><path d="M30 6v2h-7c-0.552 0-1 0.448-1 1v12c0 1.657-1.343 3-3 3l-9.1 0.001c-0.464 2.282-2.481 3.999-4.9 3.999-2.761 0-5-2.239-5-5s2.239-5 5-5c2.419 0 4.437 1.718 4.9 4.001l9.1-0.001c0.552 0 1-0.448 1-1v-12c0-1.657 1.343-3 3-3h7z"></path></svg>
{item.refrence}</div>
<span className="  mr-3"><HiDotsVertical></HiDotsVertical></span>
 </li>
          )
        })
        
      }
        })()
      }
       </ul>
       
   
     }

         </div>

              </div>
    )
            })
            
            
    
          }




</div>





       </div>
            

           

    
    )
}
export default ProjectPanel;



