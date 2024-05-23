import React, { memo,useEffect,useRef, useState } from 'react';
import { Background, Handle, Position } from 'reactflow';

function CustomNode({ id,data ,isConnectable}) {

  const [show, Setshow] = useState(false);
  function tester(e){
    console.log(id)
  }

  
  return (
    <div className=" px-3 py-2 h-auto shadow-lg rounded-md bg-white border-[2px] border-r-flowred border-solid  text-[14px]" onClick={tester} onMouseEnter={()=>Setshow(true)} onMouseLeave={()=>Setshow(false)}>
     
     <div className=' flex flex-col justify-between gap-5 '>

     {
      data.arr?.map((value,i)=>{
       return( 
        
       <div key={i}  className=' flex gap-6 w-full font-Dam-sans text-[13px]'>
     <div className=' w-[50%]  flex justify-center items-center text-center'>{value.key}</div>
     <div className=' w-[50%] flex justify-center items-center text-center'>{value.value}</div>
       </div>
    
       )
      })
     }
      

      

     </div>
      

     <Handle id='a' type='source' position={Position.Top}></Handle>
      <Handle id='a' type='target' position={Position.Bottom}></Handle>
      <Handle id='b' type='source' position={Position.Right}></Handle>
      <Handle id='b' type='target' position={Position.Left}></Handle>
     
      
      
    </div>
  );
}
export default memo(CustomNode);
