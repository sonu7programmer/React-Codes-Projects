import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleInput = (e)=>{
    setName(e.target.value)
    localStorage.setItem('name', e.target.value)
  }
  const handlePass = (e)=>{
    setPassword(e.target.value)
    localStorage.setItem('password', e.target.value)
  }
  const AddDet = ()=>{
    alert('Details Added Successfully')
    setName('')
    setPassword('')
  }
  const CheckDet = ()=>{
    const storedName = localStorage.getItem('name')
    const storedPassword = localStorage.getItem('password')
    if(storedName === name && storedPassword === password){
      alert('Details Matched Successfully')
      localStorage.clear()
    }else{
      alert('Details do not match')
    }}
  return (
    <>
      <input type="text" placeholder='Enter your name: ' onChange={handleInput} />
      <input type="password" placeholder='Enter your password: ' onChange={handlePass} /><br />
      <button onClick={AddDet}>Add Details</button>
      <button onClick={CheckDet}>Check Details</button>
      <h1>Your name is: {name}</h1>
      <h1>Your password is: {password}</h1>
    </>
  )
}
export default App
