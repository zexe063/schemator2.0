


import {AiSchemaGenerator } from "../nodereducer/nodeSlice";
import { useDispatch, useSelector} from "react-redux";
import { useRef } from "react";
import toast from "react-hot-toast";
import { IoWarningOutline } from "react-icons/io5";
function  DialogBox(){
    const Ailoading = useSelector((state)=>state.nodes.Ailoading)
const dispatch = useDispatch();
const prompt = useRef(null)


function handleGenerate(){
    if(prompt.current.value  === ""){
        toast("Please Enter Promot", {
        position : "bottom-right",
        style:{
            background:"#3b0b0b",
            border:"1px solid #671b1b",
            color:"#d81f1f",
            fontFamily:"Inter",
            fontSize:"12px",
            fontWeight:"500",
        },
        icon:<IoWarningOutline size={15} color="#d81f1f" />,
        })
        return null;
    }
  const data=   !Ailoading ?  dispatch(AiSchemaGenerator(prompt.current.value)) : null 
    
}
   

    return(
        <div className="  flex flex-col  justify-around w-[400px] h-[270px]   absolute left-[50%] top-[50%]  transform -translate-x-[50%] -translate-y-[50%] bg-collection_black 
        shadow-meduim_shadow transition-all rounded-[6px]  border-[2px] 
        border-solid border-border_color z-larger p-1">
    
    <div className=" w-full h-full flex flex-col items-center  gap-2">
        <p className="text-white w-full flex items-start text-start tracking-tight ml-[20px] text-[14px] font-Inter font-semibold ">Schema Diagram Generation</p>
        <textarea ref={prompt} className=" w-[calc(100%-20px)] font-Inter tracking-tight text-white text-[14px] 
    h-[calc(100%-100px)] max-h-max  bg-slate_3 p-2  outline-none rounded-[4px] resize-none"   spellCheck="false"
    contentEditable="true" placeholder="Enter Prompt For Schema Er Geneartion  ">
        </textarea>
        <p className="text-white w-full flex items-start text-start tracking-tight  ml-[20px] text-[11px] font-Inter font-normal ">Note:use min 20 words for better results</p>
    </div>
    <div className=" flex w-full justify-end relative bottom-7 right-5">
        <div className="  flex justify-center items-center gap-2 bg-blue_primary font-Inter text-white  px-4 py-2 rounded-[4px]" onClick={handleGenerate}>
            {
                Ailoading ? <span>Generating ...</span> : <><span>Generate</span>
           <span>↩</span></>
               
            }
        </div>
    </div>

        </div>
    )
}


export default DialogBox