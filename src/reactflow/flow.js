

import { useState,useCallback,useMemo, useEffect, useRef } from 'react';
import ReactFlow, { Panel, Controls, Background, applyNodeChanges,   applyEdgeChanges,addEdge,ConnectionLineType,MarkerType, Position, updateEdge, ConnectionMode, StraightEdge, BackgroundVariant, MiniMap, useReactFlow, ReactFlowProvider, useViewport, useStore} from 'reactflow';
import 'reactflow/dist/style.css';

import "./flow.css"
import Erdiagrampanel from './ErdiagramPanel/Erdiagrampanel';
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
import DialogBox from './dialogbox/dialogbox';


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
 const dialogBox = useSelector((state)=>state.nodes.dialogBox)

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
    
   
     <div id='main-canvas'> 
 
 <div id='nav' className=' absolute top-0 left-0 w-full  z-20'>
<EdgeLine></EdgeLine>
 </div>

<div id='dialogBox'>
 {dialogBox? <DialogBox /> : null}
</div>
  

  <div   style={{width:"100vw", height:"100vh",}}>
  <ReactFlow style={{width: '100%', height:'100%', backgroundColor:"#1c1e24",   overflow:"hidden" } }
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
          
<div className='absolute top-[40px] left-0 '>
  <Erdiagrampanel></Erdiagrampanel>
</div>
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