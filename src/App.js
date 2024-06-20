import { useState,useCallback,useMemo, useEffect, useRef } from 'react';
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges,addEdge,ConnectionLineType,node,MarkerType, Position, updateEdge, ConnectionMode} from 'reactflow';
import 'reactflow/dist/style.css';
import  "./App.css"
import "./index.css"

import draw from "./images/draw.png";
import arrow from "./images/arrow.png";
import nodetype from './nodetype';
import { setNode, AddNewNode, RedoNode,setEdges } from './nodereducer/nodeSlice';
import { useSelector, useDispatch} from 'react-redux';
import EdgeLine from './edgesType/edgesType';
import Anyliser from './dataanyliser/anyliser';
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-light.min.css';
import SimpleFloatingEdge from './SimpleFloatingEdge';
import { combineSlices } from '@reduxjs/toolkit';
import { IoMdBatteryCharging, IoMdReturnLeft } from 'react-icons/io';
import { SchemaType } from 'mongoose';



const edgeTypes = {
  floating: SimpleFloatingEdge
};


function Flow() {
  console.log()
  const highlight =useRef(null);
  
 

  const dispatch =  useDispatch()
  const nodes = useSelector((state)=> state.nodes.Nodes);
  const edges  =  useSelector((state)=> state.nodes.Edges);
 const Nodeedgetype = useSelector((state)=>state.nodes.connectionType);
 console.log(edges)

//  useEffect(()=>{
//   hljs.highlightAll(highlight.current);
// },[nodes])

 let shechmafinalresult  = ''
  
// here  the scehma agenerate 
  const schema =  nodes.map((item) => {
   
      
    let value = ''
    const schemaLable = item.data.label;
    
const   datatype =  item.data.arr.forEach((nodeitem)=>{
       value =  value  + 
       `
       ${nodeitem.key}: {type: ${nodeitem.value}},
       `
      
})   



const SchemaGenerate = `const ${schemaLable}Schema= new mongoose.schema{(
   ${value}
)}` 

return SchemaGenerate;


  
      
  });

  






  
  const intialedges = [];
  // const [edges, setEdges] = useState(intialedges)

 
  
// here the nodes

const nodeTypes = useMemo(
  () => ({
    custom: nodetype
  }),
  [],
);

// here the nodes changes function 
 
const onNodesChange =  useCallback((changes)=>{


  const updatenodes = applyNodeChanges(changes,nodes);
  
  dispatch(setNode({data:updatenodes, NodeId:changes}))
 
})
    
// const  onEdgesChange = useCallback((changes)=>{
//   setEdges((eds)=> applyEdgeChanges(changes,eds))
// })

  // here onconnect edge functionality
  const onConnect = useCallback(
    (params) => {

      let floatedge = "floating"
      if(ConnectionLineType[Nodeedgetype] === ConnectionLineType.Bezier){
        
    floatedge = "floating"
      }
      else{
      floatedge = ConnectionLineType[Nodeedgetype]
      }
        
      //   setEdges((nds)=>{
          
      //   // return addEdge({...params, type:floatedge, markerEnd:{type:MarkerType.ArrowClosed, color:"black"}, style:{strokeWidth:2, stroke:"black" }, }, nds)
         
        

      // })


      const edge = addEdge({...params, type:floatedge, markerEnd:{type:MarkerType.ArrowClosed, color:"black"}, style:{strokeWidth:2, stroke:"black" }, }, edges);
      dispatch(setEdges(edge))
           
    },
  
    [Nodeedgetype],
  );

  const [rfinstance, setRfinstance] = useState(null)

 
 

  const onDragOver = useCallback((event)=>{
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  })

const onDrop = useCallback((event)=>{
  event.preventDefault()

  const postion = rfinstance.screenToFlowPosition({
    x:event.clientX,
    y: event.clientY
    })

  const NewNode = {
    id:`${nodes.length+1}`,
    type:"custom",
    position: postion,
    data:{id:`${nodes.length+1}`, color:"#0073ff", label:"muraro" ,arr:[]},
    
  }

dispatch(AddNewNode(NewNode))
})

function move(event){
  console.log(event.clientX, event.clientY)
}


 const onNodesDelete = useCallback((nds)=>{
   dispatch(RedoNode(nds))
 })
  return (
    <div>

    <div style={{width: '100vw', height:'100vh' }}>
    
    <EdgeLine></EdgeLine>
    

     <ReactFlow className = "reactflow"
     onNodesChange={onNodesChange}  
       
      onConnect={onConnect} 
      connectionLineType={ConnectionLineType[Nodeedgetype]}
      edges={edges}
       nodes={nodes} 
        nodeTypes={nodeTypes}  
        edgeTypes={edgeTypes}
        connectionMode={ConnectionMode.Loose}
         connectionLineStyle={{strokeWidth:2, stroke:"black"}}
         onInit={setRfinstance}
         
      onDragOver={onDragOver}
         onDrop={onDrop}
         onNodesDelete={onNodesDelete}
         
    
        fitView
          className='reactflow'
          >
      
        <Background />
        <Controls />
      </ReactFlow>
    </div>
    
    <Anyliser></Anyliser>
    
    </div>
  );
}

export default Flow;

