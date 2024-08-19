



import { useCallback } from 'react';
import { useStore,  getSmoothStepPath, getBezierPath, Position } from 'reactflow';

import { getEdgeParams } from './utils.js';
import { useSelector } from 'react-redux';
// import { combineSlices } from '@reduxjs/toolkit';


function SimpleFloatingEdge({ id, source, target, markerEnd, style }) {
  const connectionLineType = useSelector((state)=>state.nodes.connectionType);

  
  
  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

  let [edgePath]= getSmoothStepPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
    borderRadius : 15
    
  })

  let chevronRotation = 0;
  switch (targetPos) {
    case Position.Top:
      chevronRotation = -90;
      break;
    case Position.Right:
      chevronRotation = 0;
      break;
    case Position.Bottom:
      chevronRotation = 90;
      break;
    case Position.Left:
      chevronRotation = 180;
      break;
  }

  const midX = (sx + tx) / 2;
  const midY = (sy + ty) / 2;
  return (

      <>
    <defs joint-selector="defs">

<marker id="v-2-532903522" orient="auto" overflow="visible" markerUnits="userSpaceOnUse">
  <path id="v-294" stroke="black" fill="#a0a0a0" stroke-width="1" d="m 20 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.2"></path>
</marker>

 
{/* <marker id="v-2-242226827" orient="auto" overflow="visible"  markerHeight="7" markerWidth="10" markerUnits="userSpaceOnUse">
 

  <path id="v-304" stroke="white" fill="none"  transform="rotate(90)" stroke-width="1"  d="M15 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.5 M15,-7 L15,7"></path>

 
  </marker>  */}


 <marker id="v-2-242226827" orient="auto" overflow="visible" markerHeight="7" markerWidth="10" markerUnits="userSpaceOnUse" refX="2.5" refY="1">
  
  <path transform='rotate(90)'
        d="M 8,-2 L1,5 L-6,-2"
        fill="none"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
       
      />
</marker>
 



  <marker id="crowsfoot-zero-or-many" markerWidth="15" markerHeight="7" refX="15" refY="3.5" orient="auto">
          <circle cx="7.5" cy="3.5" r="2" stroke="black" fill="white" />
          <path d=" M15,0 L15,7" stroke="black" fill="none" />
        
        
      </marker>

      <marker id="crowsfoot-one" markerWidth="15"  markerHeight="7" refX="0" refY="3.5" orient="auto">
      <path d=" M05,0 L05,7 M07,0 L07,7 " stroke="white" fill="none" />
                </marker>

                <marker id="mid-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <circle cx="5" cy="5" r="4" fill="white" stroke="black" strokeWidth="1" />
          <path d="M 2 5 L 8 5" stroke="black" strokeWidth="1" />
          <path d="M 5 2 L 5 8" stroke="black" strokeWidth="1" />
        </marker>
       
        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="black" />
        </marker>
      
</defs>

  
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      strokeWidth={5}
      stroke='white'
      markerEnd='url(#v-2-242226827)'
      markerStart='url(#crowsfoot-one)'
      strokeLinecap='round'
      strokeLinejoin='round'
     
  
      
    
     
      style={style}
    />
   
   <g transform={`translate(${midX}, ${midY})`}>

  

   <circle r="6" fill="none" stroke="white" strokeWidth="1"/>
  <path transform={`rotate(${chevronRotation})`}
        d="M-3,-2 L0,2 L3,-2"
        fill="none"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
       
      />
  
</g> 
   

      
    
    </>
    
  );
}

export default SimpleFloatingEdge;