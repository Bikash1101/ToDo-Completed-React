// // import React from 'react'

import { useState } from "react"

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

  const [todos, settodos] = useState([
    { id: 1, title: "Kaam Karle Bhai", isCompleted: false }
  ])
const [title, settitle] = useState("");
const [completed, setcompleted] = useState(false);
const [city, setcity] = useState("delhi")

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input
        onChange={(e) =>(console.log(e.target.value))} 
        value={title}
        type="text" placeholder="Title"/>
        <br />
        <input
        checked= {completed}
         onChange={(e) => (setcompleted(e.target.checked))} type="checkbox" /> Completed
        <br />
        <select value={city} onChange={(e)=>setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <br />
        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default App