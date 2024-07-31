

// import React, { memo,useEffect,useRef, useState } from 'react';
// import { Background, Handle, Position,  getConnectedEdges, getOutgoers, useEdges,useNodes } from 'reactflow';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { datashow, nodepopup, nodesdatashow, UpdateNode } from './nodereducer/nodeSlice';
// import { BiSolidHide } from "react-icons/bi";
// import { BiSolidShow } from "react-icons/bi";
// import { HiDotsVertical } from "react-icons/hi";
// import NodeElementpopup from './nodeElementpopup/nodeElementpopup';

// function CustomNode({ id,data ,isConnectable}) {

 


//   const newnodes = useNodes();
//  const edges = useEdges();
//   const color = {border: '#000000',}
//   const [show,Setshow] = useState(true)
// const dispatch = useDispatch()






//   const tester = (e) => {
//     e.stopPropagation();
//     dispatch(datashow(true));
//     dispatch(nodesdatashow(id));
  
    
//   }


//   function  childnodeshow(Handle){
//     const connectedEdges =getConnectedEdges(newnodes, edges);
//   // ... here the extarct edge 


//     const extractedge = connectedEdges.forEach((edge)=>{
//      if(edge.sourceHandle === `${Handle}-right`){

//       // here ethe extract node
//    const extraxtnode = newnodes.forEach((node)=>{
//     if(node.id === edge.target){
//      dispatch(UpdateNode(node.id))
//     }
//    })

//      }
    

//     })


       
// Setshow(!show)

  
    


//   }

//   function nodeElement(e){
//     e.stopPropagation()
    
//  dispatch(nodepopup(id))


    
//   }

//   function NodeElementpopupPostion(){
// // alert("her ethe postion is chnaged")
//   }



  
//   return (
   

    
    
   
//     // <div className="min-w-[170px] min-h-[70px]  max-w-[400px]  px-3 py-2 h-auto shadow-lg rounded-md   bg-white text-[15px]"  onClick={tester}>
//     <div className="min-w-[170px] min-h-[70px] max-w-auto max-h-auto   shadow-lg rounded-md  bg-collection_black "  onClick={tester}>

//  <div className=' relative transition-all z-50' id='NodeElementpopup'>
//  {
//  data.NodeElementpopup ? <NodeElementpopup id={id}></NodeElementpopup> : null
//  }
//    </div>

//  <div className=' flex flex-col  justify-between gap-4 '>

//   <div className=' flex justify-between  font-Open-Sans text-[11px] font-semibold p-[3px] rounded-sm' style={{backgroundColor:`${data.color}`}}>
//     <div>{data.label}</div>
//     <div onClick={nodeElement} className=' cursor-pointer'><HiDotsVertical></HiDotsVertical></div>
//   </div>

//      {
      
//       data.arr?.map((value,i)=>{
     
//        return( 
        
        
//        <div  className=' flex gap-3 px-2 font-Open-Sans text-[11px]  font-medium  relative' key={i} >
//         <Handle type='source' position={Position.Right} id={`${value.key}-right`} style={{visibility:"hidden"}} />
//      <div className= ' w-[33.3%] text-white'>{value.key}</div>
//      <div className='w-[33.3%]' style={{color:`${data.color}`}}>{value.value}</div>
//      <div className='w-[33.3%]' style={{color:`${data.color}`}}>null</div>
//      <div  className=' text-white font-[15px] cursor-pointer' onClick={(e)=>childnodeshow(value.key)}>
// {
  
//   value.value === "Object" ? show ? <BiSolidShow></BiSolidShow> : <BiSolidHide></BiSolidHide> : null
  
  
  
// }
//      </div>
     
//      <Handle type='target' position={Position.Left} id={`${value.key}-left`}   style={{visibility:"hidden"}} />
       

   
     
//        </div>


       
    
    
//        )
//       })
//      }
      

      

//      </div>

  

 
      
//  <Handle type="source" position={Position.Top}  id="a" />
//        <Handle type="source" position={Position.Right}  id="b" />
//       <Handle type="source" position={Position.Bottom}  id="c" /> 
//       <Handle type="source" position={Position.Left}   id="d" />
    
//     </div>
   
  
//   );


// }


// export default memo(CustomNode);




import React, { memo,useEffect,useRef, useState } from 'react';
import { Background, Handle, Position,  getConnectedEdges, getOutgoers, useEdges,useNodes } from 'reactflow';
import { connect, useDispatch, useSelector } from 'react-redux';
import { datashow, nodepopup, nodesdatashow, UpdateNode } from './nodereducer/nodeSlice';
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import NodeElementpopup from './nodeElementpopup/nodeElementpopup';

function CustomNode({ id,data ,isConnectable}) {

 


  const newnodes = useNodes();
 const edges = useEdges();
  const color = {border: '#000000',}
  const [show,Setshow] = useState(true)
const dispatch = useDispatch()






  const tester = (e) => {
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
// alert("her ethe postion is chnaged")
  }



  
  return (
   

    
    
   
    // <div className="min-w-[170px] min-h-[70px]  max-w-[400px]  px-3 py-2 h-auto shadow-lg rounded-md   bg-white text-[15px]"  onClick={tester}>
    <div className="min-w-[170px]  shadow-lg rounded-sm  bg-collection_black "  onClick={tester}>

 <div className=' relative transition-all z-50' id='NodeElementpopup'>
 {
 data.NodeElementpopup ? <NodeElementpopup id={id}></NodeElementpopup> : null
 }
   </div>



  <div className=' flex justify-between   items-center  font-Open-Sans text-[11px] font-semibold px-2 h-5 rounded-sm text-white' style={{backgroundColor:`${data.color}`}}>
    <div className=' text-white'>{data.label}</div>
    <div onClick={nodeElement} className='  cursor-pointer'><HiDotsVertical></HiDotsVertical></div>
  </div>

<div className=' flex flex-col  flex-grow'>
     {
      
      data.arr?.map((value,i)=>{
     
       return( 
        
        
       <div  className=' flex gap-3 h-8 px-2 pt-2  font-Open-Sans text-[11px]  font-medium  relative' key={i} >
        <Handle type='source' position={Position.Right} id={`${value.key}-right`} style={{visibility:"hidden"}} />
     <div className= ' w-1/3 text-white font-medium'>{value.key}</div>
     <div className='w-1/3 text-white font-medium'>{value.value}</div>
     <div className='w-1/3 text-white'>null</div>
     <div  className=' text-white font-[15px] cursor-pointer' onClick={(e)=>childnodeshow(value.key)}>
{
  
  value.value === "Object" ? show ? <BiSolidShow></BiSolidShow> : <BiSolidHide></BiSolidHide> : null
  
  
  
}
     </div>
     
     <Handle type='target' position={Position.Left} id={`${value.key}-left`}   style={{visibility:"hidden"}} />
       

   
     
       </div>


       
    
    
       )
      })
     }

</div>
      

      

  

  

 
      
 <Handle type="source" position={Position.Top}   id="a" />
       <Handle type="source" position={Position.Right}  id="b" />
      <Handle type="source" position={Position.Bottom}  id="c" /> 
      <Handle type="source" position={Position.Left}  style={{top:10}} id="d" />
    
    </div>
   
  
  );


}


export default memo(CustomNode);

