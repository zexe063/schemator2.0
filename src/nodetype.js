import React, { memo,useEffect,useRef, useState } from 'react';
import { Background, Handle, Position } from 'reactflow';

function CustomNode({ id,data ,isConnectable}) {

  const color = {border: '#000000',}
  const [show,Setshow] = useState(false)

  
  function tester(e){

  }



  
  return (
    <>
   
    <div className="min-w-[170px]  max-w-[400px] px-3 py-2 h-auto shadow-lg rounded-md   bg-white text-[15px]" style={{border:`2px solid ${data.color}`}}>
     
     
     <div className=' flex flex-col w-full justify-between gap-4 '>

  <div className=' flex justify-between w-full font-Dam-sans text-[14px] p-1 rounded-sm bg-yellow-300'>
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

   
   {/* {
    show?    <div>
    <Handle id='b' type='source' position={Position.Right}></Handle>
    <Handle id='b' type='target' position={Position.Left} ></Handle>
    <Handle id='c' type='source' position={Position.Top} ></Handle>
    <Handle id='c' type='target' position={Position.Bottom} ></Handle>
     
     </div> :
        null
   }  */}

<Handle id='b' type='source' position={Position.Right} ></Handle>
    <Handle id='b' type='target' position={Position.Left} ></Handle>
    <Handle id='c' type='source' position={Position.Top} ></Handle>
    <Handle id='c' type='target' position={Position.Bottom} ></Handle>


      
    </div>
    </>
  );
}
export default memo(CustomNode);
