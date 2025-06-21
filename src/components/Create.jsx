import { useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext } from "react";
import { todocontext } from "../Wrapper";

// const Create = (props) => {
//     console.log(props)
//     let submitHandler = (e) => {
//         e.preventDefault();
//         let newuser = { fullname, age }
//         console.log(newuser)
//     }
//     let [fullname, setfullname] = useState(" ")
//     let [age, setage] = useState("18")


//     return (
//         <div>
//             <h1>Register User</h1>
//             <form action="" onSubmit={submitHandler}>
//                 <input onChange={(e) => { setfullname(e.target.value) }} value={fullname} type="text" name="" id="" placeholder='Enter User Name' />
//                 <input type="number" onChange={(e) => { setage(e.target.value) }} value={age} name="" id="" placeholder='Age' />
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     )
// }

// export default Create





const Create = () => {

    const [todos, settodos] = useContext(todocontext)
  

  const { register, //two way binding keliye
    handleSubmit, //submission keliye
    reset, //form ko reset karne keliye
    formState: { errors } } = useForm() // errors detect karne keliye

  const submitHandler = (data) => {
    console.log(data)
    data.isCompleted = false;
    data.id = nanoid();
    console.log(data)

    // settodos([...todos , newtodo])

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos)

    toast.success("Todo Created!")


    reset();
  }
  return (
    <div className=" w-[70%] p-10 text-center mx-auto">
      <h1 className="text-5xl text-thin mb-10">Set <span className="text-red-400">Reminder</span> Task</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title can't be empty" })}
          className="border-b text-2xl p-2 font-thin outline-0"
          type="text" placeholder="Title" />
        <br />
        {errors && errors.title && errors.title.message && <small className="text-red-400 text-thin">{errors.title.message}</small>}
        <br />
        <br />
        <button className="border-3 text-xl px-10 py-2 rounded-lg mt-5">Create Todo</button>
      </form>
    </div>
  )
}

export default Create