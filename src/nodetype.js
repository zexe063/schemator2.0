import React, { memo,useEffect,useRef, useState } from 'react';
import { Background, Handle, Position } from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import { datashow, nodesdatashow } from './nodereducer/nodeSlice';

function CustomNode({ id,data ,isConnectable}) {

  const color = {border: '#000000',}
  const [show,Setshow] = useState(false)
const dispatch = useDispatch()

  function tester(e){
    
    console.log(id)
    e.stopPropagation()
     dispatch(datashow(true))
     dispatch(nodesdatashow(id))
  const elemenet = e.target.getBoundingClientRect();
  console.log(elemenet.top, elemenet.left, elemenet.right, elemenet.bottom)
  }




  
  return (
   

    
    
   
    <div className="min-w-[170px] min-h-[170px]  max-w-[400px] px-3 py-2 h-auto shadow-lg rounded-md   bg-white text-[15px]" style={{border:`2px solid ${data.color}`}} onClick={tester}>
     
     
     <div className=' flex flex-col  justify-between gap-4 '>

  <div className=' flex justify-between  font-Dam-sans text-[14px] p-1 rounded-sm'   style={{backgroundColor:`${data.color}`}}>
    <div>{data.label}</div>
    <div>{data.icon}</div>
  </div>

     {
      data.arr?.map((value,i)=>{
       return( 
        
        
       <div  className=' flex justify-between gap-3  font-Dam-sans text-[14px]' key={i} >
     <div className='  font-medium'>{value.key}</div>
     <div className='' style={{color:`${data.color}`}}>{value.value}</div>
     
       </div>

     
  
    
    
       )
      })
     }
      

      

     </div>

  
{/* 
<Handle id='b' type='source' position={Position.Right} ></Handle>
    <Handle id='b' type='target' position={Position.Left} ></Handle>
    <Handle id='c' type='source' position={Position.Top} ></Handle>
    <Handle id='c' type='target' position={Position.Bottom} ></Handle> */}
 
      
 <Handle type="source" position={Position.Top}  id="a" />
      <Handle type="source" position={Position.Right}  id="b" />
      <Handle type="source" position={Position.Bottom}  id="c" />
      <Handle type="source" position={Position.Left}   id="d" />
    
    </div>
    
  );
}
export default memo(CustomNode);
