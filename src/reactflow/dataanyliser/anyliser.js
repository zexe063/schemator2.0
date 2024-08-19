import { useDispatch, useSelector } from "react-redux";
import { NodeDataColor, NodeElementHideRedux, datashow } from "../nodereducer/nodeSlice";
import { useEffect, useState } from "react";
import { AddNodeValue, DeleteNodeValue,NodeFieldValueUpdate,  UpdateLabel, SchemaElementSuffle} from "../nodereducer/nodeSlice";
import {SketchPicker,CirclePicker,TwitterPicker} from "react-color"
import { MdDelete} from "react-icons/md";


import "./alylisher.css"
import { FaUmbraco } from "react-icons/fa";
import { IoMdTennisball } from "react-icons/io";

function Anyliser(){

    const Anylisershow = useSelector((state)=> state.nodes.Anyliser);
   
   
    const dispatch = useDispatch()
    const NewschemaNode = useSelector((state)=> state.nodes.NodeData);
   
    
    let [color, setColor] = useState();
   

    useEffect(()=>{
      
      if(NewschemaNode){
     setColor(NewschemaNode[0].data.color)
 
      }
    },[NewschemaNode])

  
   const [ObjData, setObjData] = useState();
   
 const [drag,setDrag]= useState();



  
    function valuegenerate(e){
       setObjData({...ObjData, [e.target.title]: e.target.value})
       
    }

    function AddSubmit(){
       
  //  dispatch(AddNodeValue({nodeid:id.nodeid,  value:{ id: id.id+1,...ObjData }}));
  dispatch(AddNodeValue({value:{...ObjData }}))


    }

    function  DeleteNodeData(id){
      dispatch(DeleteNodeValue({Nodeid:id.Nodeid, NodeDataId:id.NodeDataId}));
  
    }

    function colorchanager(colorvalue){
dispatch(NodeDataColor(colorvalue.hex))
setColor(colorvalue.hex)


 }
 function colorvalue(colordata){
  console.log("colordata")
 }
    
 function NodeFieldValue(data){
dispatch(NodeFieldValueUpdate(data));

 }

 function LabelChange(data){

dispatch(UpdateLabel(data))
  
 }

const SchemaElementDrag= (e,data)=>{
  // e.stopPropagation();
  // e.preventDefault();
  setDrag(data);
   
  
}

const SchemaElementOver = (dataover)=>{

const firstElement = NewschemaNode[0].data.arr.indexOf(drag);
const secondElement = NewschemaNode[0].data.arr.indexOf(dataover);
console.log(firstElement,secondElement)


const result = NewschemaNode.map((item)=>{
  const arr = item.data.arr;
  const finalarr = [...arr];

    // finalarr[firstElement] = item.data.arr[secondElement];
    // finalarr[secondElement] = item.data.arr[firstElement];
    finalarr[firstElement] = dataover;
    finalarr[secondElement] = drag;
   return finalarr;
  
})

dispatch(SchemaElementSuffle(...result))





}


   
   
    return(
        <div>
        {
              Anylisershow ? <div className=" w-[320px] min-h-screen max-h-auto bg-background_black  absolute right-0  top-[50px]  border-l-[1px] border-solid   border-border_color ">
               { 
                 
                  NewschemaNode && NewschemaNode.map((item,i)=>{
                      return(
                          <div  className="flex flex-col justify-between items-center gap-2 p-2" key={i}>
  
                                <div key={i} className="flex justify-between items-center">
                           
                                          <input defaultValue={item.data.label} onChange={(e)=>LabelChange(e.target.value)}></input>
                                          
                                          </div>
                                       
                               {
                                
                                  item.data.arr && item.data.arr.map((nodeitem)=>{    
                                 
                                       return(
                                          <div key={nodeitem.id} className="flex w-full justify-evenly items-center gap-2 font-firo-mono text-input_text_color font-[10px]" draggable="true" onDragStart={(e)=>SchemaElementDrag(e,nodeitem)}onDrop={()=>SchemaElementOver(nodeitem)} onDragOver={(e)=>e.preventDefault()}>
  
                                         <input type="text" defaultValue={nodeitem.key}   className=" w-auto  bg-transparent border-[1px] border-solid  border-border_color  pl-1 text-[12px] focus:border-[1px] focus:border-solid focus:border-blue-800" onChange={(e)=>NodeFieldValue({Parentid:item.id,key:e.target.value,Childid:nodeitem.id})}></input>
                                      
                                         <select className=" text-[11px] bg-background_black" >
                                          <option value="String">{nodeitem.value}</option>
                                          <option value="Number">Number</option>
                                          <option value="Boolean">Boolean</option>
                                  <option value="Array">Array</option>
                                          <option value="Object">Object.id</option>
                                          <option>Timestamp</option>
                                          
                                         </select>
                                         <MdDelete className=" cursor-pointer" onClick={()=>DeleteNodeData({Nodeid:item.id, NodeDataId: nodeitem.id})}></MdDelete>
                                         
                                      </div>
                                    
                                       )
                                  })
                               }
                                 <div className=" bg-stone-500 w-full h-[2px]"></div>
  
                                 <p className=" text-center font-Dam-sans ">NodeAdder</p>
  
                             <div className=" flex w-full gap-2 justify-evenly items-center text-input_text_color font-firo-mono">
  
                              <input type="text" placeholder="key"  title="key" className=" w-auto bg-transparent border-[1px] border-solid border-border_color p-[1px] pl-1 text-[13px]"onChange={valuegenerate}></input>
                            
                                       <select className=" bg-background_black text-[11px] text-input_text_color" title="value" defaultValue="String" onClick={valuegenerate} >
                                          <option value="String">String</option>
                                          <option value="Number">Number</option>
                                          <option value="Boolean">Boolean</option>
                                          <option value="Array">Array</option>
                                          <option value="Object">Object</option>
                                          <option value="timestamp">Timestamp</option>
                                          
                                         </select>
                                         {/* <button className=" bg-blue-600 p-1 rounded-md text-white text-[12px]" onClick={()=>AddSubmit({nodeid:item.id, id:item.data.arr.length})}>Add</button> */}

                                         <button className=" bg-blue-600 p-1 rounded-md text-white text-[12px]" onClick={()=>AddSubmit()}>Add</button>
                                         
                             </div>
                             <div className=" bg-stone-500 w-full h-[2px] mt-3"></div>
  
                             <div  className=" mt-2  w-full flex flex-col  text-input_text_color gap-3  pl-2 items-center font-Open-Sans">
  
                              <input type="text" placeholder="color" className="  w-auto border-[1px] bg-transparent border-solid border-border_color  p-[1px] pl-1 text-[12px]"  value={color}  id="color"></input>
                              
  
                              <div>
                                <CirclePicker onChange={colorchanager} onClick={colorvalue} circleSpacing={14} circleSize={25}></CirclePicker>
                              </div>
  
                             </div>
  
                             
                          </div>
                      )
                  })
                }
                 <button onClick={()=>dispatch(datashow(false))}>close</button>
            </div> : null
                
      }  
        
        </div>
    )
}


export default Anyliser;