import { Fragment, useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";



// const Read = (props) => {
//   const username = props.username;
//   const setUsername = props.setUsername;

//   const changeHandler = () => {
//     setUsername("Satya");
//   }
//   return (
//     <div>
//       <h1>Username</h1>
//       <h2>{username}</h2>
//       <button onClick={changeHandler}>Change User</button>
//     </div>
//   )
// }

// export default Read



const Read = () => {

  const [todos, settodos] = useContext(todocontext)
  
  
 

  const deleteAll = ()=>{
    settodos([]);

    toast.error("All Todo Are Deleted")
  }

  const deleteHandler = (id)=>{
    const filtertodo = todos.filter((todo)=> todo.id != id);
    settodos(filtertodo);

    toast.error("Todo Deleted!")
  }
  const rendertodos = todos.map((todo) => {
    return <li className=" mb-2 flex justify-between items-center bg-cyan-300 p-2 rounded " key={todo.id}>{todo.title} | <button className=" text-l text-red-600" onClick={() => deleteHandler(todo.id)}>Delete</button></li>

  })
  return (
    <div className="w-[30%] p-10">
      <h1 className=" text-5xl text-thin mb-10"> <span className="text-red-400">Pending</span> Todos:</h1>
      <ol className="text-white">{rendertodos}</ol>
      <button className="border text-2xl px-6 py-2 rounded-lg mt-5 text-red-400" onClick={deleteAll}>Delete All</button>
    </div>
  )
}

export default Read;