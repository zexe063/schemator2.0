

import {createAction, createSlice, createAsyncThunk, combineSlices} from "@reduxjs/toolkit"
// import intailnodes from "../intailnodes";
import { act } from "react";
import { MdChatBubbleOutline } from "react-icons/md";
import axios from "axios";
import { ConnectionLineType } from "reactflow";
import dagre from "dagre"
import { CiBowlNoodles } from "react-icons/ci";


export const setNode = createAsyncThunk(
    "node/onNodeChnage",
    async(data)=>{
    return data
    }
);

export const setEdges = createAsyncThunk(
    "node/onEdgeChnage",
    async(data)=>{
        
 return data;
    }
)

export const edgetype  = createAsyncThunk(

    "node/edgetype", 
    async(data1)=>{

        return data1;
    }
)


export const datashow = createAsyncThunk(
    "node/anylisher",
    async(data)=>{
       
         return data;
    }
)
export const nodesdatashow = createAsyncThunk(
    "node/nodedatashow",
     async(id)=>{
        return id;
     }
)



export const AddNodeValue = createAsyncThunk(
    "node/addnodedata",
    async(data)=>{
        return data;
    }
)

export const DeleteNodeValue = createAsyncThunk(
    "node/deletenodedata",
    async(data)=>{
        return data;
 
    }
)
export const NodeDataColor = createAsyncThunk(
    "node/NodeDataColor",
  async(color)=>{
    return color
  }
)

export  const AddNewNode =  createAsyncThunk(
    "node/AddNewNode",
    async(newNode)=>{
     return  newNode
    }
)
    
export const NodeFieldValueUpdate = createAsyncThunk(
    "node/NodeFieldValueUpdate",
    async(data)=>{
        return data
    }
)



export const RedoNode = createAsyncThunk(
    "node/RedoNode",
    async(data)=>{
        return data;
    }
)

export const UndoNode = createAsyncThunk(
    "node/UndoNode",
    async(data)=>{
        return data
    }
)

export const  CopyNode = createAsyncThunk(
    "node/CopyNode",
    async(data)=>{
        return data
    }
)
export const UpdateNode = createAsyncThunk(
    "node/UpdateNode",
    async(data)=>{
        return data
    }
)

export const nodepopup = createAsyncThunk(
    "node/nodepoup",
    async(id)=>{
        return id;
    }
)


export const SchemaConverter = createAsyncThunk(
    "node/SchemaConverter",
    async(data)=>{
        
        const schemparser  =  await axios.post("http://localhost:9000/erdiagram",{
            schemaurl:data
          });
      

                   
  const getLayoutedElements = (nodes, edges, direction = "TB") => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
  
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction, ranksep: 200, nodesep: 100, edgesep: 170, ranker: "longest-pat" });
  
    nodes.forEach((node) => {
      const nodeWidth = 172;
      const nodeHeight = node.data.arr ? 36 + (node.data.arr.length * 20) : 36;
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
  
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
  
    dagre.layout(dagreGraph);
  
    const layoutedNodes = nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      const nodeWidth = 172;
      const nodeHeight = node.data.arr ? 36 + (node.data.arr.length * 20) : 36;
  
      // Create a completely new node object
      return {
        id: node.id,
        type: node.type,
        position: {
          x: nodeWithPosition.x - nodeWidth / 2,
          y: nodeWithPosition.y - nodeHeight / 2
        },
        data: { ...node.data },
     
        targetPosition: isHorizontal ? "left" : "top",
        sourcePosition: isHorizontal ? "right" : "bottom",
      };
    });
  
    // Create new edge objects
    const layoutedEdges = edges.map(edge => ({ ...edge }));
  
    return { nodes: layoutedNodes, edges: layoutedEdges };
  };

  const result = getLayoutedElements(schemparser.data.nodes, schemparser.data.edges);

if(schemparser.status === 200){
 alert("connection sucess")
}


       return result;
    }   
)
 export const NodeDuplicate = createAsyncThunk(
    "node/NodeDuplicate",
    async(id)=>{
      return id;  
    }
)

export const NodeElementpopupClose = createAsyncThunk(
    "node/nodelementpoupclose",
    async (id)=>{
        return id;
    }
    )

    export const AiSchemaGenerator = createAsyncThunk(
        "/node/AiSchemaGenerator",
        async()=>{
            const data = await axios.post("http://localhost:9000/newdiagram");
            console.log(data)
            
  const getLayoutedElements = (nodes, edges, direction = "TB") => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
  
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction, ranksep: 200, nodesep: 100, edgesep: 170, ranker: "longest-pat" });
  
    nodes.forEach((node) => {
      const nodeWidth = 172;
      const nodeHeight = node.data.arr ? 36 + (node.data.arr.length * 20) : 36;
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });
  
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });
  
    dagre.layout(dagreGraph);
  
    const layoutedNodes = nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      const nodeWidth = 172;
      const nodeHeight = node.data.arr ? 36 + (node.data.arr.length * 20) : 36;
  
      // Create a completely new node object
      return {
        id: node.id,
        type: node.type,
        position: {
          x: nodeWithPosition.x - nodeWidth / 2,
          y: nodeWithPosition.y - nodeHeight / 2
        },
        data: { ...node.data },
        style: { 
          width: 'auto', 
          height: 'auto',
          ...node.style
        },
        targetPosition: isHorizontal ? "left" : "top",
        sourcePosition: isHorizontal ? "right" : "bottom",
      };
    });
  
    // Create new edge objects
    const layoutedEdges = edges.map(edge => ({ ...edge }));
  
    return { nodes: layoutedNodes, edges: layoutedEdges };
  };

  const result = getLayoutedElements(data.data.nodes, data.data.edges);
return result; 
            // return data.data
        }
    )

 export const UpdateLabel = createAsyncThunk(
    "node/updateLabel",
    async(data)=>{
    return data;
    }
  )

const node = createSlice({
    name:"node",
    initialState:{
        Nodes:[],
        Edges:[],
        NodeId: {},
        Refrences:[],
        connectionType :"SmoothStep",
        Anyliser: false,
        NodeData : null,
        CopyNode : null,
        RedoNodeData : [],
        show:true
      },
      
      reducers:{


 NodeElementHideRedux:(state,action)=>{
  
  state.Nodes.forEach((node)=>{
     if(node.id === action.payload){

  node.show ? node.hidden  = false : node.hidden = true;
   node.show = !node.show;
     }else{
       return node
     }
 
  })
 },

 SchemaElementSuffle:(state,action)=>{
   state.Nodes.forEach((node) => {
      if(node.id ===   state.NodeId){
       node.data.arr = action.payload
       state.NodeData[0].data .arr = action.payload
      }
   });
  },

  ForwardEngineer:(state,action)=>{
    state.Nodes = action.payload.nodes;
    state.Edges = action.payload.edges;
  }



      },


    extraReducers:((builder)=>{

        
        builder.addCase(setNode.fulfilled, (state,action)=>{
         
            // state.NodeId = action.payload.NodeId[0].id;
             state.Nodes = action.payload.data
          })

          builder.addCase(setEdges.fulfilled, (state,action)=>{
            
          state.Edges.push(...action.payload)
     
         
          
          state.Nodes.forEach((Sourcenode)=>{

            if(Sourcenode.id === action.payload[0].source){
             const Sourcekey =  Sourcenode.data.label;
            
             state.Nodes.forEach((Targetnode)=>{
          
               if(Targetnode.id === action.payload[0].target){
                const Targetkey = Targetnode.data.label;

                const refrenceResult = {refrence:`${Sourcekey}_${Targetkey}`};
                 state.Refrences.push(refrenceResult);
                 Targetnode.data.arr.push({id:Targetnode.data.arr.length, key:Sourcekey, value:"ObjectId"})
               }

              })
            }
          })
            
          

              })
             
          
       
      
           builder.addCase(edgetype.fulfilled, (state,action)=>{
            
               state.connectionType = action.payload;
           })

       
           builder.addCase(AddNodeValue.fulfilled, (state,action)=>{
              const { value}  = action.payload;
              const id = state.Nodes.length+1;

               
              const nodedata = state.Nodes.forEach((node,index)=>{
            
                if(node.id === state.NodeId){
                    
            
              
               const y = 20 + (32*(node.data.arr.length)+6);

               
                    const childNode = {id:`${id}`,type:"custom", draggable:true, position:{x:200, y:y}, data:{color:"#000000",arr:[], label:`${value.key}{}`}, parentNode:`${node.id}`};

                    const childEdge = {source:`${node.id}`, target: `${id}`, sourceHandle:`${value.key}-right`, targetHandle:"d", type:"default", animated:true}

               if(value.value === "Object"){

                // node.data.arr.push(value);
                node.data.arr = [...node.data.arr, {id:node.data.arr.length+1, ...value}]
              
                state.NodeData[0].data.arr.push({id:node.data.arr.length+1, ...value})
                
                  state.Nodes.push(childNode)
                  state.Edges.push(childEdge)
             
                  
                  
                
               }else{
                    // node.data.arr.push(value);
                    node.data.arr = [...node.data.arr, {id:node.data.arr.length+1, ...value}]
                    state.NodeData[0].data.arr.push({id:node.data.arr.length+1, ...value})
                    
               }
                }

    
              })
           })
      
           
      
           builder.addCase(DeleteNodeValue.fulfilled, (state,action)=>{
              const {Nodeid, NodeDataId}  = action.payload;
      
         const nodevalue = state.Nodes.map((node)=>{
          if(node.id === Nodeid){
              node.data.arr.splice(NodeDataId-1,1)
          }
          return node;
          
         })
      state.Nodes = nodevalue
      
           })
      
      
           builder.addCase(NodeFieldValueUpdate.fulfilled,(state,action)=>{
              state.Nodes.forEach((node)=>{
                if(node.id ===  action.payload.Parentid){
      node.data.arr.forEach((childNode)=>{
        if(childNode.id === action.payload.Childid){
     childNode.key = action.payload.key
      }
              })
                }
              })
           })
      
           builder.addCase(NodeDataColor.fulfilled, (state,action)=>{
              const color =  action.payload
              const Nodeid = state.NodeData[0].id;
              state.Nodes.forEach((node)=>{
                  if(node.id == Nodeid){
                      node.data.color =  color;
                  }
              })
           })
            builder.addCase(RedoNode.fulfilled, (state,action)=>{
              action.payload.forEach((node)=>{
                   state.RedoNodeData.push(node)
              })
           })
        
           builder.addCase(datashow.fulfilled, (state,action)=>{
              state.Anyliser = action.payload;
           })
      
            builder.addCase(AddNewNode.fulfilled, (state,action)=>{
            //   state.Nodes.push(action.payload)
            state.Nodes = [...state.Nodes, action.payload]
            // state.Nodes = action.payload
            })
      
       
            builder.addCase(CopyNode.fulfilled,(state,action)=>{
            const DuplicateNode = action.payload
            })
     
            
            builder.addCase(UndoNode.fulfilled, (state,action)=>{
                // state.Nodes.push(state.RedoNodeData[0])
            //   state.RedoNodeData.pop();
            
            
            const  removenode = state.RedoNodeData.pop();
              state.Nodes.push(removenode)
           
               
            })
            builder.addCase(SchemaConverter.fulfilled, (state,action,Error)=>{
    //             const colorarr = ["#f44336","#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#ffeb3b","#ff9800", "#ff5722", "#795548","#00bcd4", "#8bc34a",
    // "#607d8b", "#009688", "#8bc34a"]
    //         const instailnodes = [];
    //         action.payload.forEach((nodeitem, nodeindex)=>{
    //             const id = nodeindex + 1;
                
    //             const randomindex = Math.floor(Math.random()*colorarr.length);

    //             const node  = {
    //                 id:`${id}`, type:"custom", position:{x:100*nodeindex, y:100*nodeindex}, data:{label:`${nodeitem.name}`,color:colorarr[randomindex], arr:[
                        
    //                 ]}
    //             }
                
    //         nodeitem.fields.forEach((field, fieldindex)=>{
    //             const fieldsid = fieldindex+1
            
    //             node.data.arr.push({id:fieldsid, key:`${field.key}`, value:`${field.value}`})

    //         })
    // instailnodes.push(node) 
        
     
    //         })
            
    //    state.Nodes = instailnodes;

   state.Nodes =  action.payload.nodes;
   state.Edges =action.payload.edges;
        })

        builder.addCase(UpdateNode.fulfilled, (state,action)=>{
          state.Nodes.forEach((item)=>{
             if(item.id === action.payload){
              item.hidden = state.show;
              state.show = !state.show;
              console.log(item)
             
             }
             
          })
        })

        
      
            
            builder.addCase(nodesdatashow.fulfilled, (state,action)=>{
              const schema = state.Nodes.forEach((node)=>{
                  if(node.id == action.payload){
                    state.NodeData = [node]
                    state.NodeId   = action.payload;
                  }
              })
        
        })

        builder.addCase(nodepopup.fulfilled, (state,action)=>{
            state.Nodes.forEach((item)=>{
                item.data.NodeElementpopup = false;

            })

            state.Nodes.forEach((item)=>{
                if(item.id === action.payload){
             item.data.NodeElementpopup  =  true;
                }
            })
        })
        
        // NodeDupliacte;

        builder.addCase(NodeDuplicate.fulfilled,(state,action)=>{
            state.Nodes.forEach((node)=>{
                if(node.id === action.payload){
                const NewDuplicateNode = { id:`${state.Nodes.length+1}`, position:{x:node.position.x+100, y:node.position.y+100}, type:"custom", data:{label:`collection${state.Nodes.length+1}`, arr:node.data.arr, color:node.data.color, NodeElementpopup:false}};
                state.Nodes.push(NewDuplicateNode)
                
                }       
            })
        })

        builder.addCase(NodeElementpopupClose.fulfilled, (state,action)=>{
            state.Nodes.forEach((node)=>{
                // if(node.id === action.payload){
                //     node.data.NodeElementpopup = false
                // }

                node.data.NodeElementpopup = false
            })
        })

        builder.addCase(AiSchemaGenerator.fulfilled, (state,action)=>{
            state.Nodes = action.payload.nodes;
            state.Edges = action.payload.edges;
            // console.log(action.payload)
        })

         builder.addCase(UpdateLabel.fulfilled, (state,action)=>{
     
           state.Nodes.forEach((node)=>{
           
            if(node.id === state.NodeId){
               node.data.label = action.payload;
            }
           })
         })
        

    
    })
})

export default node.reducer;
    
export  const {NodeElementHideRedux,SchemaElementSuffle,ForwardEngineer} = node.actions


