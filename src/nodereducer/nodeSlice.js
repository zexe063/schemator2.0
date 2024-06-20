

import {createAction, createSlice, createAsyncThunk, combineSlices} from "@reduxjs/toolkit"
import intailnodes from "../intailnodes";
import { act } from "react";
import { MdChatBubbleOutline } from "react-icons/md";


export const setNode = createAsyncThunk(
    "node/onNodeChnage",
    async(data)=>{
    return data
    }
);

export const setEdges = createAsyncThunk(
    "node/onEdgeChnage",
    async(data)=>{
        console.log(data)
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

export const CopyNode = createAsyncThunk(
    "node/CopyNode",
    async(data)=>{
        return data;
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


const node = createSlice({
    name:"node",
    initialState:{
        Nodes: intailnodes,
        Edges:[],
        NodeId: {},
        connectionType : "Bezier",
        Anyliser: false,
        NodeData : null,
        CopyNode : null,
        RedoNodeData : []
      },


    extraReducers:((builder)=>{

        
        builder.addCase(setNode.fulfilled, (state,action)=>{
            state.NodeId = action.payload.NodeId;;
             state.Nodes = action.payload.data
          })

          builder.addCase(setEdges.fulfilled, (state,action)=>{
          state.Edges.push(...action.payload)
          })
      
           builder.addCase(edgetype.fulfilled, (state,action)=>{
            
               state.connectionType = action.payload;
           })

       
           builder.addCase(AddNodeValue.fulfilled, (state,action)=>{
              const {nodeid, value}  = action.payload;
              const id = state.Nodes.length+1;

               
              const nodedata = state.Nodes.forEach((node)=>{
                const childNode = {id:`${id}`,type:"custom", position:{x:0, y:0}, data:{color:"#612a35",arr:[], label:`${value.key}`}, parentNode:`${node.id}`};

                const childEdge = {source:`${node.id}`, target: `${id}`, type:"floating", animated:true}

                if(node.id === nodeid){

               if(value.value === "Object"){
                node.data.arr.push(value);
                  state.Nodes.push(childNode)
                  state.Edges.push(childEdge)
                  
                  
                
               }else{
                    node.data.arr.push(value);
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
              state.Nodes.push(action.payload)
            })
      
       
             
            builder.addCase(CopyNode.fulfilled, (state,action)=>{
              console.log(action.payload);
            })
      
            
            builder.addCase(UndoNode.fulfilled, (state,action)=>{
                // state.Nodes.push(state.RedoNodeData[0])
            //   state.RedoNodeData.pop();
            
            
            const  removenode = state.RedoNodeData.pop();
              state.Nodes.push(removenode)
              console.log(removenode)
               
            })
      
            
            builder.addCase(nodesdatashow.fulfilled, (state,action)=>{
              const schema = state.Nodes.forEach((node)=>{
                  if(node.id == action.payload){
                    state.NodeData = [node]
                  }
              })
           
            
      


    
        })

        

    
    })
})

export default node.reducer;
    



