import { useState } from "react";


const Create = (props) => {
    console.log(props)
    let submitHandler = (e) => {
        e.preventDefault();
        let newuser = { fullname, age }
        console.log(newuser)
    }
    let [fullname, setfullname] = useState(" ")
    let [age, setage] = useState("18")


    return (
        <div>
            <h1>Register User</h1>
            <form action="" onSubmit={submitHandler}>
                <input onChange={(e) => { setfullname(e.target.value) }} value={fullname} type="text" name="" id="" placeholder='Enter User Name' />
                <input type="number" onChange={(e) => { setage(e.target.value) }} value={age} name="" id="" placeholder='Age' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Create