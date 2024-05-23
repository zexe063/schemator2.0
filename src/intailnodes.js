
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


  const intailnodes = [
    {id:'1',  type:"custom", position:{x:0, y:0}, data:{id:"1", label: "User", arr:[{key:"name", value:'String'},
    {key:"job", value:"String"},{key:"age", value:"Number"},{key:"gender", value:"String"}]
    }},
    
    {id:'2', type:'custom',data:{ id:"2", label: "Video", arr:[
      {key:"videoname", value:"String"},
    {key:"description", value:"String"},
    {key:"Id", value:"String"},
    {key:"owner", value:"String"},
      {key:"link", value:"String"},
      {key:"thumbnail", value:"String"},
      {key:"category", value:"String"},
      {key:"views", value:"Number"},
      {key:"comments", value:"Number"},
    ]
    }, position:{x:100, y:100},},
    
    { id:"3", type:"custom", position:{x:200, y:200}, data:{id:"3", label: "Account", arr:[
  
      {key:"user" , value:"String"},
      {key:"password" , value:"String"},
      {key:"last_login" , value:"String"},
      {key:"email" , value:"String"},
      {key:"first_name" , value:"String"},
      {key:"last_name" , value:"String"},
      {key:"is_superuser" , value:"Boolean"},
      {key:"is_staff" , value:"Boolean"},
      {key:"is_active" , value:"Boolean"},
      {key:"date_joined" , value:"String"},
      {key:"groups" , value:"String"},
      {key:"user_permissions" , value:"String"},
      
  
    ]}  },
    
    { id:"4",sourcePosition: 'right',
    targetPosition: 'left', type:"custom",position:{x:1, y:200},data:{id:"4", label: "Subscription", arr:[
  
      {key:"subscription", value:"Boolen"},
      {key:"timestamp", value:"DateTime"},
      {key:"account_id", value:"Id"},
      {key:"account_name", value:"String",
  
      }
  
    ]} }]
  
    export default intailnodes;