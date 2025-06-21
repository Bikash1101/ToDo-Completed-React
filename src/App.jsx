// // import React from 'react'



import Create from "./components/Create";
import Read from "./components/Read";

// const App = () => {
//    var arr = [{name: 'virat', age:37},
//     {name: 'Rajat', age: 27},
//     {name: 'Phil' , age: 29}
//    ];

//    var newarr = arr.map((profile , index)=>{
//     console.log(profile,index)
//         return(
//           <li key={index}>
//             <span>Name : {profile.name}</span>
//             <span> age: {profile.age}</span>
//           </li>
//         )
//    });

//   return (
//     <div>
//       <h1>Rendering JSON Data</h1>
//       <ol>{newarr}</ol>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import Create from './components/Create';
// import Read from './components/Read';

// const App = () => {
//   const [username, setUsername] = useState("Bikash")
//   return (
//     <div>
//       <Create />
//       <hr />
//       <Read user={username} setusername={setUsername} />
//     </div>
//   )
// }

// export default App




const App = () => {

  
  
// const [completed, setcompleted] = useState(false);
// const [city, setcity] = useState("delhi")






  return (
    <div className=" flex w-screen h-screen bg-violet-700 p-10 text-white">
      <Create />
      <Read />
    </div>
  )
}

export default App