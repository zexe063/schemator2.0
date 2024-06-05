import { useState,useCallback,useMemo } from 'react';
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges,addEdge,ConnectionLineType,node,MarkerType, Position} from 'reactflow';
import 'reactflow/dist/style.css';
import  "./App.css"

import draw from "./images/draw.png";
import arrow from "./images/arrow.png";
import nodetype from './nodetype';
import intailnodes from './intailnodes';



function Flow() {


  // here the connectionline function 
  const [connectiontype, setConnectiontype] = useState();



  function connectionline(node){
 node.target.style.border = '1px solid black'
 node.target.style.Backgroundcolor= "red"
   setConnectiontype(node.target.alt);
   
 
  }
  const intialedges = [];
  const [edges, setEdges]= useState(intialedges);
  
// here the nodes


const nodeTypes = useMemo(
  () => ({
    custom: nodetype
  }),
  [],
);



  const [nodes,setNodes] = useState(intailnodes);

 
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({...params, type:ConnectionLineType[connectiontype], markerEnd:{type:MarkerType.ArrowClosed, color:"black"}, style:{strokeWidth:2, stroke:"black" }, },eds)),
    
    [connectiontype],
  );


  
  return (
    <div style={{width: '100vw', height:'100vh' }}>
   
   <div className='flex justify-center items-center'>
      <div className=' flex gap-2 justify-center items-center w-[50px] h-[40px] shadow-sm '>
     
     <img src={draw} alt='Bezier' className='w-7 h-7 cursor-pointer' onClick={connectionline}></img>
   
    <img src={arrow} alt='Straight' className='w-5 h-5 cursor-pointer' onClick={connectionline}></img>
    <img src={arrow} alt='SmoothStep' className='w-5 h-5 cursor-pointer bg-red-900' onClick={connectionline}></img>
  
  
      </div>
      </div>
  


     <ReactFlow onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} connectionLineType={ConnectionLineType[connectiontype]}
      edges={edges} nodes={nodes} nodeTypes={nodeTypes}  connectionLineStyle={{strokeWidth:2, stroke:"black"}} className='reactflow'>
      
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;

