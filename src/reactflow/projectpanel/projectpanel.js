import { IoIosArrowForward, IoIosArrowDown, IoMdReturnRight } from "react-icons/io";
import { SiFiles } from "react-icons/si";
import "./projectpanel.css"
import { useDispatch, useSelector } from "react-redux";
import { BiSolidHdd, BiSolidHide, BiSolidShow } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { NodeElementHideRedux } from "../nodereducer/nodeSlice";
import { useState,useEffect, useRef } from "react";
import { FaTableCellsLarge } from "react-icons/fa6";
import MonacoEditor from "react-monaco-editor"
import Editor from "@monaco-editor/react"
import * as monaco from 'monaco-editor';
import { ForwardEngineer } from "../nodereducer/nodeSlice";
import debounce from 'lodash.debounce'; 

function ProjectPanel(){


  const dispatch = useDispatch()
  const nodes = useSelector((state)=>state.nodes.Nodes);
  const edges = useSelector((state)=>state.nodes.Edges);
  const refrences  = useSelector((state)=>state.nodes.Refrences);
  const [open,setOpen] = useState({
    node:true,
    edge:true,
    reference:true
  });
  

  const  Erdiagram = [
    {name:"node", data:nodes},
    {name:"edge", data:edges},
    {name:"reference", data:refrences}
  ];

  function NodeElementHide(e,id){
    e.stopPropagation();
      dispatch(NodeElementHideRedux(id))
  }
  

  function toggleFolder(foldername){
setOpen((prev)=> ({...prev, [foldername]: !prev[foldername]}))
  }
 
  const [code, setCode] = useState("// Your MongoDB schema here\n");
const editorRef = useRef()


// forward eneginenring started

  const handleEditorChange = debounce((value, event) => {
    console.log(value)
    setCode(value);
    function generateId() {
      return Math.random().toString(36).substr(2, 9);
    }
    
    function extractSchemas(code) {
      const schemaRegex = /const\s+(\w+Schema)\s*=\s*new\s+Schema\(\{([\s\S]*?)\}\);/g;
      // const schemaRegex = /(?:const|let|var)\s+(\w+Schema)\s*=\s*new\s+Schema\(\{([\s\S]*?)\}\);/g;

      const matches = Array.from(code.matchAll(schemaRegex));
      return matches.map(match => ({
        name: match[1],
        fields: extractFields(match[2])
      }));
    }
    
    function extractFields(schemaBody) {
      const fieldRegex = /(\w+):\s*\{([^}]+)\}/g;
      const matches = Array.from(schemaBody.matchAll(fieldRegex));
      return matches.map(match => ({
        key: match[1],
        value: simplifyType(match[2]),
        ref: extractRef(match[2])
      }));
    }
    
    function simplifyType(typeInfo) {
      if (typeInfo.includes('Schema.Types.ObjectId')) return 'ObjectId';
      if (typeInfo.includes('String')) return 'String';
      if (typeInfo.includes('Number')) return 'Number';
      if (typeInfo.includes('Date')) return 'Date';
      if (typeInfo.includes('Boolean')) return 'Boolean';
      if (typeInfo.startsWith('[')) return 'Array';
      if(typeInfo.includes('Object')) return 'Object';
      if(typeInfo.startsWith('{}')) return 'Object';
      return 'Mixed';
    }
    
    function extractRef(typeInfo) {
      const refMatch = typeInfo.match(/ref:\s*['"](\w+)['"]/);
      return refMatch ? refMatch[1] : null;
    }
    
    function createNodes(schemas) {
     
        const startX = 50;
        const startY = 50;
        const horizontalGap = 400;
        const verticalGap = 300;
        const nodesPerColumn = 3;
    
      return schemas.map((schema, index) => {
        const column = Math.floor(index / nodesPerColumn);
        const row = index % nodesPerColumn;
    
        const x = startX + column * horizontalGap;
        const y = startY + row * verticalGap;
    let color = "#";
    const colorcode = "1234567890abcdef";
    for(let i=0; i<6; i++){
        color +=  colorcode[Math.floor(Math.random()*15)];
    }
        return {
          id: schema.name,
          type: "custom",
          position: { x, y },
          show:true,
          data: {
            id: generateId(),
            color: color,
            icon: "<FaDatabase />",
            label: schema.name.replace('Schema', ''),
            arr: schema.fields.map((field, id) => ({ id: id + 1, ...field }))
          }
        };
      });
    }
    
    function createEdges(schemas) {
      
      const edges = [];
      schemas.forEach(schema => {
        schema.fields.forEach(field => {
          if (field.ref) {
            edges.push({
              id: `${schema.name}-${field.key}-${field.ref}Schema`,
              source: `${field.ref}Schema`,
              target: schema.name,
            
              label: field.key,
              type: 'floating',
              style: { stroke: `white` }
            });
          }
        });
      });
      return edges;
    }
    
    function convertToReactFlow(code) {
      const schemas = extractSchemas(code);
      const nodes = createNodes(schemas);
      const edges = createEdges(schemas);
      return { nodes, edges };
    }

    const {nodes,edges} = convertToReactFlow(value)
   const diagram = {nodes,edges};

  
dispatch(ForwardEngineer(diagram))

  },300);

  const editorOptions = {
minimap:{enabled:true},
    automaticLayout: true,
    wordWrap: true,

    scrollBeyondLastLine: false,
 fontSize:13,
 fontFamily: "'Fira Mono', monospace"
  };


  
  
    return(
//         <div id="project" className=" w-[270px] z-larger h-[calc(100%-50px)] absolute top-[50px]  overflow-y-auto   left-0   shadow-background_black bg-background_black  border-solid border-r-[1px] border-border_color text-white">
          
//           <div className=" mt-8 ">
//           {
            
            
            
//            Erdiagram.map((diagram,i)=>{
       
//     return (
//       <div  id=" porjectfolder" className=" flex   w-full  h-auto pl-3  flex-col  " key={i}>

//             <div id="folder" className=" transition-all w-full min-h-[30px] 
//                mt-2 max-h-auto text-white font-firo-mono text-[13px] border-t-[1px] border-solid border-border_color cursor-pointer" >
//               <div className=" flex gap-2 w-full items-center text-center mt-1"  key={i}  onClick={(e)=>toggleFolder(diagram.name)}> 
//          <span>{open[diagram.name] ? <IoIosArrowDown></IoIosArrowDown>  : <IoIosArrowForward></IoIosArrowForward>}</span>
//          <span> <SiFiles></SiFiles></span>
//         <span> 
         
//         {diagram.name}
//         </span>
//        </div>

     
//      {
//       open[diagram.name] &&
      
//       <ul className=" flex gap-1 flex-col  mt-1 ml-2">
//       {
//         (()=>{
         
//       if(diagram.name == "node"){
//        return  diagram.data.map((item)=>{
//           return (
//             <li className=" transition-all flex  justify-between items-center">
//  <span className="   flex  justify-center items-center gap-2"><FaTableCellsLarge color={item.data.color}></FaTableCellsLarge>{item.data.label}</span>
// <div className=" flex gap-2  mr-3">
// <span onClick={(e)=>NodeElementHide(e,item.id)}>{ item.show ? <BiSolidHide></BiSolidHide> : <BiSolidShow></BiSolidShow>}</span>
// <span><HiDotsVertical></HiDotsVertical></span>
// </div>

//  </li> 
//           )
//         })
//       }
    
//       else if(diagram.name == "edge"){
//     return   diagram.data.map((item)=>{
//         return (
//           <li key={item.id} className=" flex transition-all justify-between items-center w-full text-white text-[13px] cursor-pointer hover:bg-background_black hover:text-background_white">
//             <div className="flex gap-2 w-full items-center text-center">
//             <span> <IoMdReturnRight></IoMdReturnRight></span>
//             <span>  {item.id} </span>
//              </div>
//              <span className=" mr-3"><HiDotsVertical></HiDotsVertical></span>
//             </li>
//         )
//        })
//       }

//       else{
//         return diagram.data.map((item)=>{
//          return (
//           <li className=" flex transition-all justify-between items-center ">
// <div className="flex gap-2  items-center justify-center pr-3 ">
// <svg xmlns="http://www.w3.org/2000/svg" width="16px" stroke= "yellow" height="16px" viewBox="0 0 30 32" class="sMQL_ dbm-icon mV5Zw iTCKZ"><title>reference-id</title><path d="M30 6v2h-7c-0.552 0-1 0.448-1 1v12c0 1.657-1.343 3-3 3l-9.1 0.001c-0.464 2.282-2.481 3.999-4.9 3.999-2.761 0-5-2.239-5-5s2.239-5 5-5c2.419 0 4.437 1.718 4.9 4.001l9.1-0.001c0.552 0 1-0.448 1-1v-12c0-1.657 1.343-3 3-3h7z"></path></svg>
// {item.refrence}</div>
// <span className="  mr-3"><HiDotsVertical></HiDotsVertical></span>
//  </li>
//           )
//         })
        
//       }
//         })()
//       }
//        </ul>
       
   
//      }

//          </div>

//               </div>
//     )
//             })
            
            
    
//           }




// </div>





//        </div>
            

<div style={{width:"400px", height:"87vh"}}>
<Editor ref={editorRef}
width="400px"
  height="95vh"
  defaultLanguage="javascript"
  defaultValue={code}
  onChange={handleEditorChange}
  theme="vs-dark"
  options={editorOptions}
  onMount={(editor,monaco)=>{
      editor.focus()
      editorRef.current = editor
  }} 
/>
</div>

           

    
    )
}
export default ProjectPanel;



