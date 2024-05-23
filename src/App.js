// import { useState,useCallback,useMemo } from 'react';
// import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges,addEdge,ConnectionLineType,node,MarkerType, Position} from 'reactflow';
// import 'reactflow/dist/style.css';
// import  "./App.css"

// import draw from "./images/draw.png";
// import arrow from "./images/arrow.png";
// import nodetype from './nodetype';
// import intailnodes from './intailnodes';


// function Flow() {


//   // here the connectionline function 
//   const [connectiontype, setConnectiontype] = useState();



//   function connectionline(node){
//  node.target.style.border = '1px solid black'
//  node.target.style.Backgroundcolor= "red"
//    setConnectiontype(node.target.alt);
   
 
//   }
//   const intialedges = [];
//   const [edges, setEdges]= useState(intialedges);
  
// // here the nodes


// const nodeTypes = useMemo(
//   () => ({
//     custom: nodetype
//   }),
//   [],
// );


//   const [nodes,setNodes] = useState(intailnodes);

 
//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     [],
//   );
//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     [],
//   );

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge({...params, type:ConnectionLineType[connectiontype], markerEnd:{type:MarkerType.ArrowClosed}, style:{strokeWidth:1.5, }, },eds)),
    
//     [connectiontype],
//   );


  
//   return (
//     <div style={{width: '100vw', height:'100vh' }}>
   
//    <div className='flex justify-center items-center'>
//       <div className=' flex gap-2 justify-center items-center w-[50px] h-[40px] shadow-sm'>
     
//      <img src={draw} alt='Bezier' className='w-7 h-7 cursor-pointer' onClick={connectionline}></img>
   
//     <img src={arrow} alt='Straight' className='w-5 h-5 cursor-pointer' onClick={connectionline}></img>
//     <img src={arrow} alt='SmoothStep' className='w-5 h-5 cursor-pointer bg-red-900' onClick={connectionline}></img>
  
  
//       </div>
//       </div>
  


//      <ReactFlow onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} connectionLineType={ConnectionLineType[connectiontype]}
//       edges={edges} nodes={nodes} nodeTypes={nodeTypes} connectionLineStyle={{strokeWidth:1.9,}}  className="reactflow">
      
//         <Background />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }

// export default Flow;


import React, { useState, useCallback, useMemo, useRef, cloneElement } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  ConnectionLineType,
  MarkerType,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import "./App.css"

import draw from "./images/draw.png";
import arrow from "./images/arrow.png";
import nodetype from './nodetype';
import intailnodes from './intailnodes';

// Mongoose import
const mongoose = require('mongoose');

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(intailnodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [connectiontype, setConnectiontype] = useState(); // Default connection type

  const arr = document.querySelectorAll("img");
  

 


  function connectionline(node) {
 


    
    setConnectiontype(node.target.alt);
    


     arr.forEach((item)=>{
      if(item.id == 'active'){
  item.id = null
      }

     })


    node.target.id = "active"


     

    
     

      

    }


  const nodeTypes = useMemo(
    () => ({ custom: nodetype }),
    []
  );

  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge({
  //     ...params,
  //     type: ConnectionLineType[connectiontype],
  //     markerEnd: { type: MarkerType.ArrowClosed },
  //     style: { strokeWidth: 1.5 },
  //   }, eds)),
  //   console.log(params)
  //   [connectiontype],
  // );
  
  const onConnect = useCallback(
    (params) => 
     
      setEdges((eds) => addEdge({
            ...params,
            type: ConnectionLineType[connectiontype],
            markerEnd: { type: MarkerType.ArrowClosed },
           style: { strokeWidth: 1.5 },
          }, eds)),
    
    [connectiontype]

  );


  
  

  const elementTypeToSchemaType = {
    custom: (nodeData) => {
      const schema = {};
      nodeData.arr.forEach(item => {
        let type = 'String'; // Default to String
        if (item.value === "Number") {
          type = 'Number';
        } else if (item.value === "Boolean") {
          type = 'Boolean';
        } 
        // Add more type mappings as needed

        schema[item.key] = type;
      });
      return schema;
    }
  };

  // Function to generate the Mongoose schema script
// Function to generate the Mongoose schema script
const generateSchemaScript = (elementTypeToSchemaType) => { 
  const schemas = {}; // Store schemas for each entity
  const manyToManyRelationships = []; // Track many-to-many relationships

  // 1. Create a schema for each node, defining relationships as you go
  nodes.forEach(node => {
    if (node.data && node.data.arr) {
      const nodeSchema = elementTypeToSchemaType.custom(node.data);

      // Analyze edges to find relationships for this node
      edges.forEach(edge => {
        const sourceNode = nodes.find(node => node.id === edge.source);
        const targetNode = nodes.find(node => node.id === edge.target);

        if (sourceNode && targetNode && targetNode.data && targetNode.data.label) {
          if (sourceNode.id === node.id) { 
            // This node is the source of the relationship

            // Determine the relationship type based on the edge type
            if (edge.type === ConnectionLineType.Bezier) {
              // One-to-many: Add array of references
              nodeSchema[`${targetNode.data.label.toLowerCase()}s`] = [{ 
                type: mongoose.Schema.Types.ObjectId, 
                ref: targetNode.data.label 
              }];

            } else if (edge.type === ConnectionLineType.SmoothStep) {
              // Many-to-many: Add array of references and track the relationship
              nodeSchema[`${targetNode.data.label.toLowerCase()}s`] = [{ 
                type: mongoose.Schema.Types.ObjectId, 
                ref: targetNode.data.label 
              }];
              manyToManyRelationships.push({ 
                source: sourceNode.data.label, 
                target: targetNode.data.label 
              });

            } else if (edge.type === ConnectionLineType.Straight) {
              // One-to-one: Add a single reference
              nodeSchema[`${targetNode.data.label.toLowerCase()}`] = { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: targetNode.data.label 
              };
            } 
          } 
          // You can add logic here to handle cases where the current node is the target
          // of the relationship (e.g., for many-to-many relationships where you want
          // to add the inverse reference)
        } 
      });

      // Create the schema with the relationships included
      schemas[node.id] = new mongoose.Schema(nodeSchema); 
      console.log("Schema created for node:", node.id);
    } else {
      console.error("Error: Node data is missing or invalid for node:", node);
    }
  });

  // 3. Generate the script
  let script = `const mongoose = require('mongoose');\n\n`;

  // Create schemas for each node
  Object.entries(schemas).forEach(([nodeId, schema]) => {
    script += `const ${nodeId}Schema = ${schema.toString()};\n\n`;
    script += `const ${nodeId}Model = mongoose.model('${nodeId}', ${nodeId}Schema);\n\n`;
  });

  // Create schemas for many-to-many relationships
  manyToManyRelationships.forEach(relationship => {
    const collectionName = `${relationship.source.toLowerCase()}${relationship.target.toLowerCase()}s`;
    script += `const ${collectionName}Schema = new mongoose.Schema({\n`;
    script += `  ${relationship.source.toLowerCase()}: { type: mongoose.Schema.Types.ObjectId, ref: '${relationship.source}' },\n`;
    script += `  ${relationship.target.toLowerCase()}: { type: mongoose.Schema.Types.ObjectId, ref: '${relationship.target}' }\n`;
    script += `});\n\n`;
    script += `const ${collectionName}Model = mongoose.model('${collectionName}', ${collectionName}Schema);\n\n`;
  });

  return script;
};

// Log the schema to the console
  // Trigger on nodes OR edges change

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div className='flex justify-center items-center gap-8'>
        <div className=' flex gap-2 justify-center items-center w-[50px] h-[40px] shadow-sm'>
          <img src={draw} alt='Bezier' className='w-7 h-7 cursor-pointer'  id='active'  onClick={connectionline}/>
          <img src={arrow} alt='Straight' className='w-5 h-5 cursor-pointer' onClick={connectionline} />
          <img src={arrow} alt='SmoothStep' className='w-5 h-5 cursor-pointer'  onClick={connectionline}/>
        </div>
        <div className=' text-white text-[12px]'>  <button onClick={() => console.log(generateSchemaScript(elementTypeToSchemaType))} className=" font-Dam-sans bg-blue-600 rounded-sm p-[5px] text-[12px]) {
          
        }">
          Generate Schema
        </button></div>
      
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType[connectiontype]}
        connectionLineStyle={{ strokeWidth: 1.9 }}
        className="reactflow"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;