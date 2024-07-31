
import { useCallback } from 'react';
import { useStore,  getSmoothStepPath, getBezierPath } from 'reactflow';

import { getEdgeParams } from './utils.js';
import { useSelector } from 'react-redux';
import { combineSlices } from '@reduxjs/toolkit';


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

  const midX = (sx + tx) / 2;
  const midY = (sy + ty) / 2;
  return (

      <>
    <defs joint-selector="defs">

<marker id="v-2-532903522" orient="auto" overflow="visible" markerUnits="userSpaceOnUse">
  <path id="v-294" stroke="black" fill="#a0a0a0" stroke-width="1" d="m 20 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.2"></path>
</marker>

<marker id="v-2-242226827" orient="auto" overflow="visible"  markerHeight="7" markerWidth="100" markerUnits="userSpaceOnUse">
{/* <path d=" M55,0 L55,7" stroke="black" fill="none" /> */}

  <path id="v-304" stroke="white" fill="none"  transform="rotate(180)" stroke-width="1.6" d="M15 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.5 M15,-7 L15,7"></path>
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
      <circle cx={midX} cy={midY} r="5" fill="none" stroke="white" strokeWidth="1">
     
     </circle>
    </>
    
  );
}

export default SimpleFloatingEdge;


// import { useCallback } from 'react';
// import { useStore } from 'reactflow';
// import { getEdgeParams } from './utils.js';
// import { useSelector } from 'react-redux';

// function PreciseSmoothStepEdge({ id, source, target, markerEnd, style }) {
//   const connectionLineType = useSelector((state) => state.nodes.connectionType);
  
//   const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
//   const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

//   if (!sourceNode || !targetNode) {
//     return null;
//   }

//   const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

//   const createSmoothStepPath = () => {
//     const offset = 30; // Horizontal distance of the vertical step from source and target
//     const cornerRadius = 10; // Radius for the rounded corners
    
//     const [x1, y1] = [sx, sy];
//     const [x2, y2] = [tx, ty];
    
//     const horizontalLength = Math.abs(x2 - x1);
//     const verticalLength = Math.abs(y2 - y1);
    
//     const leftToRight = x1 < x2;
//     const topToBottom = y1 < y2;
    
//     let path = `M ${x1} ${y1} `;
    
//     if (horizontalLength > offset * 2) {
//       // Case 1: Enough horizontal space for full smooth step
//       const midX = (x1 + x2) / 2;
      
//       if (verticalLength > 0) {
//         path += `H ${leftToRight ? midX - cornerRadius : midX + cornerRadius} `;
//         path += `Q ${midX} ${y1} ${midX} ${y1 + (topToBottom ? cornerRadius : -cornerRadius)} `;
//         path += `V ${y2 + (topToBottom ? -cornerRadius : cornerRadius)} `;
//         path += `Q ${midX} ${y2} ${leftToRight ? midX + cornerRadius : midX - cornerRadius} ${y2} `;
//       } else {
//         // Straight line for same y-coordinate
//         // path += `H ${x2} `;
//         const horizontalLength = Math.min(horizontalLength / 2, offset);
//       const stepX = x1 + (leftToRight ? horizontalLength : -horizontalLength);
//       }
//     } else {
//       // Case 2: Not enough horizontal space, create a single vertical step
//       const stepX = x1 + (leftToRight ? offset : -offset);
      
//       if (verticalLength > cornerRadius * 2) {
//         path += `H ${stepX + (leftToRight ? -cornerRadius : cornerRadius)} `;
//         path += `Q ${stepX} ${y1} ${stepX} ${y1 + (topToBottom ? cornerRadius : -cornerRadius)} `;
//         path += `V ${y2 + (topToBottom ? -cornerRadius : cornerRadius)} `;
//         path += `Q ${stepX} ${y2} ${stepX + (leftToRight ? cornerRadius : -cornerRadius)} ${y2} `;
//       } else {
//         // Direct diagonal for very short distances
//         path += `L ${x2} ${y2} `;
//       }
//     }
    
//     path += `H ${x2}`;
    
//     return path;
//   };

//   const edgePath = createSmoothStepPath();
//   const midX = (sx + tx) / 2;
//   const midY = (sy + ty) / 2;

//   return (
//     <>
//       <defs joint-selector="defs">
//         {/* Your existing marker definitions */}
//         <marker id="v-2-532903522" orient="auto" overflow="visible" markerUnits="userSpaceOnUse">
//           <path id="v-294" stroke="black" fill="#a0a0a0" strokeWidth="1" d="m 20 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.2"></path>
//         </marker>
//         <marker id="v-2-242226827" orient="auto" overflow="visible" markerHeight="7" markerWidth="100" markerUnits="userSpaceOnUse">
//           <path id="v-304" stroke="white" fill="none" transform="rotate(180)" strokeWidth="1.6" d="M15 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.5 M15,-7 L15,7"></path>
//         </marker>
//         <marker id="crowsfoot-zero-or-many" markerWidth="15" markerHeight="7" refX="15" refY="3.5" orient="auto">
//           <circle cx="7.5" cy="3.5" r="2" stroke="black" fill="white" />
//           <path d=" M15,0 L15,7" stroke="black" fill="none" />
//         </marker>
//         <marker id="crowsfoot-one" markerWidth="15" markerHeight="7" refX="0" refY="3.5" orient="auto">
//           <path d=" M05,0 L05,7 M07,0 L07,7 " stroke="white" fill="none" />
//         </marker>
//         <marker id="mid-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
//           <circle cx="5" cy="5" r="4" fill="white" stroke="black" strokeWidth="1" />
//           <path d="M 2 5 L 8 5" stroke="black" strokeWidth="1" />
//           <path d="M 5 2 L 5 8" stroke="black" strokeWidth="1" />
//         </marker>
//       </defs>

//       <path
//         id={id}
//         className="react-flow__edge-path"
//         d={edgePath}
//         strokeWidth={5}
//         stroke='white'
//         markerEnd='url(#v-2-242226827)'
//         markerStart='url(#crowsfoot-one)'
//         fill="none"
//         style={style}
//       />
//       <circle cx={midX} cy={midY} r="5" fill="none" stroke="white" strokeWidth="1" />
//     </>
//   );
// }

// export default PreciseSmoothStepEdge;


// import { useCallback } from 'react';
// import { useStore } from 'reactflow';
// import { getEdgeParams } from './utils.js';
// import { useSelector } from 'react-redux';

// function OptimizedSmoothStepEdge({ id, source, target, markerEnd, style }) {
//   const connectionLineType = useSelector((state) => state.nodes.connectionType);
  
//   const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
//   const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

//   if (!sourceNode || !targetNode) {
//     return null;
//   }

//   const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

//   const createSmoothStepPath = () => {
//     const offset = 30; // Horizontal/vertical offset for the step
//     const cornerRadius = 10; // Radius for the rounded corners
    
//     const [x1, y1] = [sx, sy];
//     const [x2, y2] = [tx, ty];
    
//     const horizontalDiff = Math.abs(x2 - x1);
//     const verticalDiff = Math.abs(y2 - y1);
    
//     const leftToRight = x1 < x2;
//     const topToBottom = y1 < y2;
    
//     let path = `M ${x1} ${y1} `;
    
//     if (sourcePos === 'bottom' || sourcePos === 'top') {
//       // Vertical to horizontal connection
//       const verticalLength = Math.min(verticalDiff / 2, offset);
//       const stepY = y1 + (topToBottom ? verticalLength : -verticalLength);
      
//       path += `V ${stepY - (topToBottom ? cornerRadius : -cornerRadius)} `;
//       path += `Q ${x1} ${stepY} ${x1 + (leftToRight ? cornerRadius : -cornerRadius)} ${stepY} `;
//       path += `H ${x2 - (leftToRight ? cornerRadius : -cornerRadius)} `;
//       path += `Q ${x2} ${stepY} ${x2} ${stepY + (topToBottom ? cornerRadius : -cornerRadius)} `;
//       path += `V ${y2}`;
//     } else {
//       // Horizontal to vertical connection
//       const horizontalLength = Math.min(horizontalDiff / 2, offset);
//       const stepX = x1 + (leftToRight ? horizontalLength : -horizontalLength);
      
//       path += `H ${stepX - (leftToRight ? cornerRadius : -cornerRadius)} `;
//       path += `Q ${stepX} ${y1} ${stepX} ${y1 + (topToBottom ? cornerRadius : -cornerRadius)} `;
//       path += `V ${y2 - (topToBottom ? cornerRadius : -cornerRadius)} `;
//       path += `Q ${stepX} ${y2} ${stepX + (leftToRight ? cornerRadius : -cornerRadius)} ${y2} `;
//       path += `H ${x2}`;
//     }
    
//     return path;
//   };

//   const edgePath = createSmoothStepPath();
//   const midX = (sx + tx) / 2;
//   const midY = (sy + ty) / 2;

//   return (
//     <>
//       <defs joint-selector="defs">
//         {/* Your existing marker definitions */}
//         <marker id="v-2-532903522" orient="auto" overflow="visible" markerUnits="userSpaceOnUse">
//           <path id="v-294" stroke="black" fill="#a0a0a0" strokeWidth="1" d="m 20 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.2"></path>
//         </marker>
//         <marker id="v-2-242226827" orient="auto" overflow="visible" markerHeight="7" markerWidth="100" markerUnits="userSpaceOnUse">
//           <path id="v-304" stroke="white" fill="none" transform="rotate(180)" strokeWidth="1.6" d="M15 0 l -20 7.5 l 19.85 -7.5 l -19.85 -7.5 l 20 7.5 M15,-7 L15,7"></path>
//         </marker>
//         <marker id="crowsfoot-zero-or-many" markerWidth="15" markerHeight="7" refX="15" refY="3.5" orient="auto">
//           <circle cx="7.5" cy="3.5" r="2" stroke="black" fill="white" />
//           <path d=" M15,0 L15,7" stroke="black" fill="none" />
//         </marker>
//         <marker id="crowsfoot-one" markerWidth="15" markerHeight="7" refX="0" refY="3.5" orient="auto">
//           <path d=" M05,0 L05,7 M07,0 L07,7 " stroke="white" fill="none" />
//         </marker>
//         <marker id="mid-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
//           <circle cx="5" cy="5" r="4" fill="white" stroke="black" strokeWidth="1" />
//           <path d="M 2 5 L 8 5" stroke="black" strokeWidth="1" />
//           <path d="M 5 2 L 5 8" stroke="black" strokeWidth="1" />
//         </marker>
//       </defs>

//       <path
//         id={id}
//         className="react-flow__edge-path"
//         d={edgePath}
//         strokeWidth={5}
//         stroke='white'
//         markerEnd='url(#v-2-242226827)'
//         markerStart='url(#crowsfoot-one)'
//         fill="none"
//         style={style}
//       />
//       <circle cx={midX} cy={midY} r="5" fill="none" stroke="white" strokeWidth="1" />
//     </>
//   );
// }

// export default OptimizedSmoothStepEdge;