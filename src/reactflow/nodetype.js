

import React, { memo,useEffect,useRef, useState } from 'react';
import { Background, Handle, Position,  getConnectedEdges,getOutgoers, useEdges,useNodes ,NodeToolbar} from 'reactflow';
import { connect, useDispatch, useSelector } from 'react-redux';
import { datashow, nodepopup, nodesdatashow, UpdateNode } from './nodereducer/nodeSlice';
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import NodeElementpopup from './nodeElementpopup/nodeElementpopup';
import toast from 'react-hot-toast';



function CustomNode({ id,data,selected ,isConnectable}) {




  const newnodes = useNodes();
 const edges = useEdges();
  const color = {border: '#000000',} 
  const [show,Setshow] = useState(true)
const dispatch = useDispatch()






  const tester = (e) => {
 console.log(selected)
    e.stopPropagation();
    dispatch(datashow(true));
    dispatch(nodesdatashow(id));


   
  
    
  }


  function  childnodeshow(Handle){
    const connectedEdges =getConnectedEdges(newnodes, edges);
  // ... here the extarct edge 


    const extractedge = connectedEdges.forEach((edge)=>{
     if(edge.sourceHandle === `${Handle}-right`){

      // here ethe extract node
   const extraxtnode = newnodes.forEach((node)=>{
    if(node.id === edge.target){
     dispatch(UpdateNode(node.id))
    }
   })

     }
    

    })


       
Setshow(!show)

  
    


  }

  function nodeElement(e){
    e.stopPropagation()
    
 dispatch(nodepopup(id))


    
  }

  function NodeElementpopupPostion(){

  }


function SchemaElementDrag(e){
  e.stopPropagation()
  console.log(e.target.value)
  console.log("helo")
}
function hover(){
  console.log("helo")
}
  
  return (
   

    
    
   <>

    
    <div className="min-w-[180px] h-auto   shadow-md rounded-[4px] border-[1px] border-solid border-border_color  bg-collection_black "  onClick={tester}>

 <div className=' relative transition-all z-50' id='NodeElementpopup'>
 {
 data.NodeElementpopup ? <NodeElementpopup id={id}></NodeElementpopup> : null
 }
   </div>



  <div className=' flex justify-between   w-full items-center  font-Inter text-[11px] tracking-wider font-semibold px-2 h-5 rounded-sm text-white ' style={{backgroundColor:`${data.color}`}} >
    <div className=' text-white' >{data.label}<span  className=' ml-2'>schema</span></div>
    <div onClick={nodeElement} className='  cursor-pointer'><HiDotsVertical></HiDotsVertical></div>
  </div>

<div className=' flex w-full flex-col  flex-grow'>
     {
      
      data.arr?.map((value,i)=>{
     
       return( 
        
        <div  className=' flex w-full justify-between  gap-3 h-8 px-2 pt-2  font-mono  text-[12px] font-light  relative  hover:`${hover}`  '  key={i} >
      <Handle type='source' position={Position.Right} id={`${value.key}-right`} style={{visibility:"visible"}} />
    
        <div className=' text-white font-medium'>{value.key}</div>
    {
      (()=>{
  if(value.value==="String"){
    return   <div className=' text-string_color font-medium'>
       {value.value}
    </div>
    
  }
  else if(value.value==="Number"){
    return   <div className='  text-number_color font-medium '>
    {value.value}
 </div>
  }

  else if(value.value==="timestamp" || value.value === "Date"){
    return   <div className='   text-date_color font-medium '>
    {value.value}
 </div>
  }
  else if(value.value === "Array" || value.value === "Boolean"  ){
    return   <div className='  w-auto text-Array_color font-medium '>
    {value.value}
 </div>
  }
  else if( value.value ==="ObjectId" ){
    return   <div className='  text-Objectid_color font-medium '>
    {value.value}
 </div>
  }

  else if( value.value ==="Null" ){
    return   <div className=' text-Null_color font-medium '>
    {value.value}
 </div>
  }
  else if( value.value ==="Object[]" || value.value === "Object" ){
    return   <div className='   text-undefined_color font-medium '>
    {value.value}
 </div>
  }

  else if( value.value === "Date" || value.value === "Mixed" ){
    return   <div className='   text-date_color font-medium '>
    {value.value}
 </div>
  }

  else{
    return   <div className='   text-white font-medium '>
    {value.value}
 </div>
  }
      })()
    }
      <div className='  text-white'>null</div>
     <div  className=' text-white font-[15px] cursor-pointer' onClick={(e)=>childnodeshow(value.key)}>
{
  
  value.value === "Object" ||  value.value === "Object[]"? show ? <BiSolidShow></BiSolidShow> : <BiSolidHide></BiSolidHide> : null
  
  
  
}
     </div>
     
     <Handle type='target' position={Position.Left} id={`${value.key}-left`}   style={{visibility:"hidden"}} />
       

   
     
       </div>


       
    
       )
      })

     }

</div>
      

      

  

  

  {/* <div >
 <Handle type="source" position={Position.Top}   id="a"  className=' opacity-0'  />
       <Handle type="source" position={Position.Right}  id="b"     />
      <Handle type="source" position={Position.Bottom}  id="c"  className=' opacity-0'  /> 
      <Handle type="source" position={Position.Left}  style={{top:10}} id="d" className=' opacity-0'  />
      </div> 
      */}
    </div> 
   
  </>
  );


}


export default memo(CustomNode);
