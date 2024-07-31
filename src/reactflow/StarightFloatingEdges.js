

import { useCallback } from 'react';
import { useStore, getBezierPath, getSmoothStepPath, getStraightPath } from 'reactflow';


import { useSelector } from 'react-redux';
import { combineSlices } from '@reduxjs/toolkit';
import { getEdgeParams } from './utils';

function StarightFloatingEdges({ id, source, target, markerEnd, style }) {
  const connectionLineType = useSelector((state)=>state.nodes.connectionType);

  
  
  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

  let [edgePath]= getStraightPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
    
  })


  return (

      <>
    <defs joint-selector="defs">

<marker id="v-2-532903522" orient="auto" overflow="visible" markerUnits="userSpaceOnUse">
  <path id="v-294" stroke="black" fill="#a0a0a0" stroke-width="1" d="m 20 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.2"></path>
</marker>

<marker id="v-2-242226827" orient="auto" overflow="visible"  markerHeight="7" markerWidth="100" markerUnits="userSpaceOnUse">
{/* <path d=" M55,0 L55,7" stroke="black" fill="none" /> */}

  <path id="v-304" stroke="white" fill="none"  transform="rotate(180)"  stroke-width="1.6" d="M15 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.5 M15,-7 L15,7"></path>
</marker>

  <marker id="crowsfoot-zero-or-many1" markerWidth="15" markerHeight="7" refX="15" refY="3.5" orient="auto">
        
          <path d=" M15,0 L15,7" stroke="black"  stroke-width="1.6" fill="none" />
        
        
      </marker>

      <marker id="crowsfoot-one1" markerWidth="15"  markerHeight="7" refX="0" refY="3.5" orient="auto">
      <path d=" M05,0 L05,7  " stroke="white" fill="none" />
                </marker>

       
      
</defs>

  
    <path
      id={id}
      className="react-flow__edge-path1"
      d={edgePath}
       
      // markerEnd={markerEnd}
      markerStart='url(#crowsfoot-one1)'
      markerEnd='url(#crowsfoot-zero-or-many1)'
     
      style={style}
    />
    </>
    
  );
}

export default StarightFloatingEdges;
