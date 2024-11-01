import Flow from "./reactflow/flow";
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom";
import { Background } from "reactflow";
import "./App.css"

function App(){
  return (
    <div className=" w-full h-full overflow-hidden ">
   <Toaster  />
<Outlet></Outlet>
    
    </div>
  )
}

export default App
