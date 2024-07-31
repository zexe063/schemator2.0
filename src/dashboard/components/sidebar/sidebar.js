


import brandname from "./fevicon.ico.png"




function Sidebar({dashboard}){

   


    return(
        <div className=" w-full h-full">

          <div className=" w-full h-50px flex  items-center gap-1">
            <div><img src={brandname} alt="brandname" className=" w-[50px]  h-[50px]"></img></div>
            <div className=" font-Inter font-medium text-[15px] mr-5">The Kms</div>
          </div>


          <div   className=" bg-grey_300 shadow-small_shadow border-[1px] border-solid border-grey_400 flex items-center justify-between  w-[90%] h-[35px] rounded-md pl-4 cursor-pointer mt-7">

         <div className=" flex items-center gap-2">

         <div><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M1.7.5A1.2 1.2 0 00.5 1.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 004.3.5H1.7zM7.7.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 0010.3.5H7.7zM1.7 6.5A1.2 1.2 0 00.5 7.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H1.7zM7.7 6.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H7.7z" fill="currentColor"></path></svg></div>

       
     
         
         <div className="  flex items-center">
            <span className=" font-Inter text-[14px] font-semibold">All Files</span>
         </div>
          </div>

       <div className=" pr-6 font-Inter text-[13px] font-medium">A</div>

          </div>

{/* here start the selection in sidebar */}
<div className=" mt-[200px]">
  
<div   className="flex items-center justify-between  w-[90%] h-[35px] pl-4 cursor-pointer text-grey_1700_secondary">

<div className=" flex items-center gap-2">

<div><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M1.7.5A1.2 1.2 0 00.5 1.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 004.3.5H1.7zM7.7.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 0010.3.5H7.7zM1.7 6.5A1.2 1.2 0 00.5 7.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H1.7zM7.7 6.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H7.7z" fill="currentColor"></path></svg></div>

<div className="  flex items-center">
   <span className=" font-Inter text-[13px] ">All Files</span>
</div>
 </div>

<div className=" pr-6 font-Inter text-[13px] font-medium">A</div>

 </div>



{/* second option */}

<div   className="flex items-center justify-between  w-[90%] h-[35px] pl-4 cursor-pointer text-grey_1700_secondary">

<div className=" flex items-center gap-2">

<div><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M1.7.5A1.2 1.2 0 00.5 1.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 004.3.5H1.7zM7.7.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 0010.3.5H7.7zM1.7 6.5A1.2 1.2 0 00.5 7.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H1.7zM7.7 6.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H7.7z" fill="currentColor"></path></svg></div>

<div className="  flex items-center">
   <span className=" font-Inter text-[13px] ">All Files</span>
</div>
 </div>

<div className=" pr-6 font-Inter text-[13px] font-medium">A</div>

 </div>

 {/* third option */}
 <div   className="flex items-center justify-between  w-[90%] h-[35px] pl-4 cursor-pointer text-grey_1700_secondary" onClick={dashboard}>

<div className=" flex items-center gap-2">

<div><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M1.7.5A1.2 1.2 0 00.5 1.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 004.3.5H1.7zM7.7.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 0010.3.5H7.7zM1.7 6.5A1.2 1.2 0 00.5 7.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H1.7zM7.7 6.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H7.7z" fill="currentColor"></path></svg></div>

<div className="  flex items-center">
   <span className=" font-Inter text-[13px] ">upgrade</span>
</div>
 </div>

<div className=" pr-6 font-Inter text-[13px] font-medium">A</div>

 </div>
 {/* fourth option */}
 <div   className="flex items-center justify-between  w-[90%] h-[35px] pl-4 cursor-pointer text-grey_1700_secondary">

<div className=" flex items-center gap-2">

<div><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M1.7.5A1.2 1.2 0 00.5 1.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 004.3.5H1.7zM7.7.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V1.7A1.2 1.2 0 0010.3.5H7.7zM1.7 6.5A1.2 1.2 0 00.5 7.7v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H1.7zM7.7 6.5a1.2 1.2 0 00-1.2 1.2v2.6a1.2 1.2 0 001.2 1.2h2.6a1.2 1.2 0 001.2-1.2V7.7a1.2 1.2 0 00-1.2-1.2H7.7z" fill="currentColor"></path></svg></div>

<div className="  flex items-center">
   <span className=" font-Inter text-[13px] ">All Files</span>
</div>
 </div>

<div className=" pr-6 font-Inter text-[13px] font-medium">A</div>

 </div>

</div>{/* selection sidebar parent  ended*/}

        </div>// parent div
    )
}

export default Sidebar;