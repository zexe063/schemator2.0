import { FaCaretRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {  NodeDuplicate, NodeElementpopupClose, nodesdatashow, datashow} from "../nodereducer/nodeSlice";
function NodeElementpopup({id}){

    const dispatch = useDispatch()
  function  nodeDuplicate(e){
    e.stopPropagation();
    dispatch(NodeDuplicate(id))
    dispatch(NodeElementpopupClose(id))
  }

  function nodeElementpopupClose(e){
    e.stopPropagation();
    dispatch(NodeElementpopupClose(id))
   
    
  }
  function NodeDataShow(e){
    e.stopPropagation()
    dispatch(datashow(true))
    dispatch(nodesdatashow(id))
    
  }
    return(
       
            
        <div className=' absolute left-[-140px]  top-[-5px] bg-nodeElementpopup shadow-nodeElementpopupShadow  rounded-sm w-[120px] h-[180px]   font-Dam-sans text-[12px] p-2  transition-all z-larger' >
            <div className=" absolute right-[-15px]"><FaCaretRight size="20" color="rgb(55, 52, 73)"></FaCaretRight></div>
       <ul  className=" flex flex-col  gap-3 text-white">
        <li className=" cursor-pointer  flex justify-between">Copy<span>Ctrl+C</span></li>
        <li className=" cursor-pointer  flex justify-between">Paste<span>Ctrl+P</span></li>
        <li className=" cursor-pointer  flex justify-between" onClick={nodeDuplicate}>Duplicate<span>Ctrl+D</span></li>
        <li className=" cursor-pointer  flex justify-between">Delete<span>Ctrl+D</span></li>
        <li className=" cursor-pointer  flex justify-between" onClick={NodeDataShow}>Edit<span>Ctrl+E</span></li>
        <li className=" cursor-pointer  flex justify-between" onClick={nodeElementpopupClose}>Close</li>
       </ul>
        </div>
        
    )
}

export default NodeElementpopup;