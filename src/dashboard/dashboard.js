
import 'boxicons'
import Sidebar from "./components/sidebar/sidebar"
import Price from './components/pricingcard/price';
import { useState } from 'react';
import "./dashboard.css";


 function Dashboard(){
    
    const [pricecard, setPricecard] = useState(false);

function dashboard(){
   
    setPricecard(true)
    const  parent = document.querySelector("#parent");
 parent.style.backgroundColor ="rgba(0,0,0,0.05)"
}   
    
    return(
        <div className=" w-full h-[730px] flex gap-[80px]" id="parent">
        
       {
        pricecard?  <div className=' absolute flex justify-center items-center w-full h-[730px]'>
        <Price></Price>
    </div>: null
       }
     <div className="w-[350px] h-[720px]  border-r-[1px] border-solid border-grey_400 box-border pt-7 pl-3">
       <Sidebar dashboard={dashboard}></Sidebar>
     </div>

     <div className=" w-[100%] h-[690px] mt-[30px] flex  flex-col gap-[40px] font-Inter font-medium">
        <div className="">Start Desigining Schema ...</div>
<div className=" flex  gap-8">

<div className="flex flex-col gap-2 cursor-pointer">
<div className=" w-[400px] h-[220px] rounded-2xl border-[1px] border-dashed border-grey_400_secondary flex justify-center items-center"  id='mongoose'>
    <span><box-icon name='plus' color="#2866df" size="lg"></box-icon></span>
</div>
<div className=" font-Inter  text-sm font-small relative left-1">Mongoose Schema Designer</div>
</div>

{/* second designer */} 
<div className="flex flex-col gap-2 cursor-pointer "> 

<div className=" w-[400px] h-[220px] rounded-2xl border-[1px] border-solid  shadow-small_shadow bg-grey_200 border-grey_400_secondary flex justify-center items-center">
    <span><box-icon name='file' color="#2866df" size="lg"></box-icon></span>
</div>

<div className=" font-Inter  text-sm font-small relative left-1">SQL Schema Designer</div>
</div> 
</div> 

    

 </div> 

     
          
        </div>
    )
 }
 export default Dashboard