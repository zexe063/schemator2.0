
  // const intailnodes = [
  //   {id:'1',  type:"custom", position:{x:0, y:0}, data:{id:"1", arr:[{key:"name", value:'String'},
  //   {key:"job", value:"String"},{key:"age", value:"Number"},{key:"gender", value:"String"}]
  //  }},
  
  // {id:'2', type:'custom',data:{ id:"2", arr:[
  //   {key:"videoname", value:"String"},
  // {key:"description", value:"String"},
  // {key:"Id", value:"String"},
  // {key:"owner", value:"String"},
  //   {key:"link", value:"String"},
  //   {key:"thumbnail", value:"String"},
  //   {key:"category", value:"String"},
  //   {key:"views", value:"Number"},
  //   {key:"comments", value:"Number"},
  // ]
  // }, position:{x:100, y:100},},
  
  // { id:"3", type:"custom", position:{x:200, y:200}, data:{id:"3", arr:[

  //   {key:"user" , value:"String"},
  //   {key:"password" , value:"String"},
  //   {key:"last_login" , value:"String"},
  //   {key:"email" , value:"String"},
  //   {key:"first_name" , value:"String"},
  //   {key:"last_name" , value:"String"},
  //   {key:"is_superuser" , value:"Boolean"},
  //   {key:"is_staff" , value:"Boolean"},
  //   {key:"is_active" , value:"Boolean"},
  //   {key:"date_joined" , value:"String"},
  //   {key:"groups" , value:"String"},
  //   {key:"user_permissions" , value:"String"},
    

  // ]}  },
  
  // { id:"4",sourcePosition: 'right',
  // targetPosition: 'left', type:"custom",position:{x:1, y:200},data:{id:"4",arr:[

  //   {key:"subscription", value:"Boolen"},
  //   {key:"timestamp", value:"DateTime"},
  //   {key:"account_id", value:"Id"},
  //   {key:"account_name", value:"String",

  //   }

  // ]} }]

  // export default intailnodes;

  import { FaUser } from "react-icons/fa";
  import { MdSubscriptions } from "react-icons/md"
  import { FaVideo } from "react-icons/fa";
  

import { MdManageAccounts } from "react-icons/md";
import { Position } from "reactflow";




  const intailnodes = [
    
    
    {id:"1",  type:"custom", position:{x:0, y:0}, data:{id:"1", color:"#0073ff", icon:<FaUser />, label: "Hacker", arr:[{ id: 1, key:"name", value:'String'},
      {id: 2, key:"job", value:"String"},{ id: 3,key:"age", value:"Number"},{ id: 4,key:"gender", value:"String"}]
      }},

    {id:'2', type:'custom',data:{ id:"2", color:"#ffcc00", icon: <FaVideo></FaVideo>, label: "Video", arr:[
      { id: 1,key:"videoname", value:"String"},
    {id: 2, key:"description", value:"String"},
    {id: 3, key:"Id", value:"String"},
    {id: 4, key:"owner", value:"String"},
      {id: 5, key:"link", value:"String"},
      {id: 6, key:"thumbnail", value:"String"},
      {id: 7, key:"category", value:"String"},
      { id: 8, key:"views", value:"Number"},
      { id: 9, key:"comments", value:"Number"},
    ]
    }, position:{x:100, y:100},},
    
    { id:"3", type:"custom", position:{x:200, y:200}, data:{id:"3",color:"#ff0073" ,icon : <MdManageAccounts/>, label: "Account", arr:[
  
      {id: 1, key:"user" , value:"String"},
      {id: 2, key:"user" , value:"String"},
      {id: 3, key:"user" , value:"String"},
      {id: 4, key:"password" , value:"String"},
      {id: 5, key:"last_login" , value:"String"},
      {id: 6, key:"email" , value:"String"},
      {id: 7, key:"first_name" , value:"String"},
      {id: 8, key:"last_name" , value:"String"},
      {id: 9, key:"is_superuser" , value:"Boolean"},
      {id: 10, key:"is_staff" , value:"Boolean"},
      {id: 11,key:"is_active" , value:"Boolean"},
      {id: 12, key:"date_joined" , value:"String"},
      {id: 13, key:"groups" , value:"String"},
      {id: 14,key:"user_permissions" , value:"String"},
      
  
    ]}  },


    
    { id:"4",sourcePosition: 'right',
    targetPosition: 'left', type:"custom",position:{x:1, y:200},data:{id:"4", color:"#21a935",  icon:<MdSubscriptions /> ,label: "Subscription", arr:[
  
      { id: 1,key:"subscription", value:"Boolen"},
      {id: 2 ,key:"timestamp", value:"DateTime"},
      {id: 3 ,key:"account_id", value:"Id"},
      {id: 4,key:"account_name", value:"String"}
  
    ]}},

    { id:"23",sourcePosition: 'right',
    targetPosition: 'left', type:"custom",position:{x:1, y:200},data:{id:"4", color:"#21a935",  icon:<MdSubscriptions /> ,label: "user", arr:[
  
      {key:"subscription", value:"Boolen"},
      {key:"timestamp", value:"DateTime"},
      {key:"account_id", value:"Id"},
      {key:"account_name", value:"String"}
  
    ]}},
    { id:"4000",sourcePosition: 'right',
    targetPosition: 'left', type:"custom",position:{x:1, y:200},data:{id:"4", color:"#21a935",  icon:<MdSubscriptions /> ,label: "Subscription", arr:[
  
      {key:"subscription", value:"Boolen"},
      {key:"timestamp", value:"DateTime"},
      {key:"account_id", value:"Id"},
      {key:"account_name", value:"String"}
  
    ]}},
    { id:"400",sourcePosition: 'right',
    targetPosition: 'left', type:"custom",position:{x:1, y:200},data:{id:"4", color:"#21a935",  icon:<MdSubscriptions /> ,label: "Subscription", arr:[
  
      {key:"subscription", value:"Boolen"},
      {key:"timestamp", value:"DateTime"},
      {key:"account_id", value:"Id"},
      {key:"account_name", value:"String"}
  
    ]}},
    { id:"40",sourcePosition: 'right',
    targetPosition: 'left', type:"custom",position:{x:1, y:200},data:{id:"4", color:"#21a935",  icon:<MdSubscriptions /> ,label: "Subscription", arr:[
  
      {key:"subscription", value:"Boolen"},
      {key:"timestamp", value:"DateTime"},
      {key:"account_id", value:"Id"},
      {key:"account_name", value:"String"}
  
    ]}},

    

   
    
   

  ]
  
    export default intailnodes;