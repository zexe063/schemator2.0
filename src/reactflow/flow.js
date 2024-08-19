

import { useState,useCallback,useMemo, useEffect, useRef } from 'react';
import ReactFlow, { Controls, Background, applyNodeChanges,   applyEdgeChanges,addEdge,ConnectionLineType,MarkerType, Position, updateEdge, ConnectionMode, StraightEdge, BackgroundVariant, MiniMap, Panel, useReactFlow, ReactFlowProvider, useViewport} from 'reactflow';
import 'reactflow/dist/style.css';

import "./flow.css"


import nodetype from './nodetype';
import { setNode, AddNewNode, RedoNode,setEdges } from './nodereducer/nodeSlice';
import { useSelector, useDispatch} from 'react-redux';
import EdgeLine from './edgesType/edgesType';
import Anyliser from './dataanyliser/anyliser';
import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-light.min.css';
import SimpleFloatingEdge from './SimpleFloatingEdge';
import StarightFloatingEdges from './StarightFloatingEdges';
import NodeElementpopup from './nodeElementpopup/nodeElementpopup';
import ProjectPanel from './projectpanel/projectpanel';
import dagre from "dagre"
import { FaSearch, FaSlash } from 'react-icons/fa';







const edgeTypes = {
  floating: SimpleFloatingEdge,
StraightEdge:StarightFloatingEdges,

};




function Flow() {
 
  const highlight =useRef(null);
  
 

  const dispatch =  useDispatch()
  const nodes = useSelector((state)=> state.nodes.Nodes);
  const edges  =  useSelector((state)=> state.nodes.Edges);
 const Nodeedgetype = useSelector((state)=>state.nodes.connectionType);








 

  



//  useEffect(()=>{
//   hljs.highlightAll(highlight.current);
// },[layoutedNodes])

 let shechmafinalresult  = ''
  
// here  the scehma agenerate 
//   const schema =  nodes.map((item) => {
   
      
//     let value = ''
//     const schemaLable = item.data.label;
    
// const   datatype =  item.data.arr.forEach((nodeitem)=>{
//        value =  value  + 
//        `
//        ${nodeitem.key}: {type: ${nodeitem.value}},
//        `
      
// })   

// const SchemaGenerate = `const ${schemaLable}Schema= new mongoose.schema{(
//    ${value}
// )}` 

// return SchemaGenerate;

//   });

  

  

const nodeTypes = useMemo(
  () => ({
    custom: nodetype
  }),
  [],
);

// here the Nodes changes function 
 
const onNodesChange =  useCallback((changes)=>{


  const updatelayoutedNodes = applyNodeChanges(changes,nodes);
  
  dispatch(setNode({data:updatelayoutedNodes, NodeId:changes}))
 
})
    
// const  onEdgesChange = useCallback((changes)=>{
//   setEdges((eds)=> applyEdgeChanges(changes,eds))
// })

  // here onconnect edge functionality
  const onConnect = useCallback(
    (params) => {
    

     let flowedge;

     

     
     if(ConnectionLineType[Nodeedgetype] === ConnectionLineType.SmoothStep){
   flowedge=  "floating"
     }
     else{
    
      flowedge=  "StraightEdge"
     }

     
     
   
     
     
      const edge = addEdge({...params, type:flowedge,style:{strokeWidth:1, stroke:"white" },},edges);
      dispatch(setEdges(edge))
           
    },
  
    [Nodeedgetype],
  );

  const [rfinstance, setRfinstance] = useState(null)

 const mousemove = useCallback((event)=>{
  let position = rfinstance.screenToFlowPosition({
    x:event.clientX,
    y: event.clientY
  
  })
 

 })

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
    data:{id:`${nodes.length+1}`,NodeElementpopup:false, show:true, color:"#0073ff", label:`collection${nodes.length}` ,arr:[{ id:"1", key:"_id", value:"ObjectId"}]},
    
  }

dispatch(AddNewNode(NewNode))

})

function move(event){
  console.log(event.clientX, event.clientY)
}


 const onNodesDelete = useCallback((nds)=>{
   dispatch(RedoNode(nds))
 })

 const { setViewport, zoomIn, zoomOut } = useReactFlow()
 const {x,y,zoom } = useViewport();


 const  handleTransform = useCallback((e)=>{
  e.stopPropagation()
  setViewport({x:0, y:0, zoom:1}, {duration:800})
 
 },[setViewport])
  return (
    
   
     <div className=' flex justify-center items-center'> 

<div>
<EdgeLine></EdgeLine>
</div>

    
<div>
  <ProjectPanel></ProjectPanel>
  </div>
  

  <div   style={{width:"100vw", height:"100vh", position:"relative", top:"50px", left:"0px"}}>

     <ReactFlow style={{width: '100%', height:'100%', backgroundColor:"#1c1e24", } }

    onNodesDelete={onNodesDelete}
      onConnect={onConnect} 
      connectionLineType={ConnectionLineType[Nodeedgetype]}
      onNodesChange={onNodesChange}
      nodes={nodes}
      edges={edges}

        nodeTypes={nodeTypes}  
        edgeTypes={edgeTypes}
        connectionMode={ConnectionMode.Loose}
         connectionLineStyle={{strokeWidth:2, stroke:"white"}}
         onInit={setRfinstance}
     fitView
       minZoom={0}
      elevateEdgesOnSelect
      onDragOver={onDragOver}
         onDrop={onDrop}
      
      
    
               
          >
          
      
       {/* <Background /> */}

       
        {/* <MiniMap></MiniMap> */}
        <Controls />
        
      </ReactFlow>
      </div>
      
      <Anyliser></Anyliser>
    </div>

  
 
    
   
    
   
  );


  
  
}



// export default Flow;

function FlowWithProvider(props) {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
 
export default FlowWithProvider;