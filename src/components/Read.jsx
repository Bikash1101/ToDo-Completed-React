import { useState } from "react"


const Read = (props) => {
  const username = props.username;
  const setUsername = props.setUsername;
  
  const changeHandler = () => {
    setUsername("Satya");
  }
  return (
    <div>
      <h1>Username</h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>Change User</button>
    </div>
  )
}

export default Read