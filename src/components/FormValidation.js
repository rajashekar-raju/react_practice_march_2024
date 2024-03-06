import React, { useState } from 'react'

const FormValidation = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);

    function handleEmailValidation(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailRegex.test(email);
    }

    function handlePasswordValidation(password) {
        return password.length >= 6
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!handleEmailValidation(email)){
            setEmailError(true)
            return
        }

        if(!handlePasswordValidation(password)){
            setPasswordError(true);
            return
        }
        
    }

  return (
    <div className='w-1/2 mx-auto shadow-lg rounded-lg mt-5'>
        <form onSubmit={handleFormSubmit}>
            <div className='flex flex-col w-3/4 mx-auto mb-3'>
                <label className='m-2'>Name:</label>
                <input type="text" placeholder='enter your name' className='px-4 py-2 m-2 border border-black rounded-lg'/>
            </div>
            <div className='flex flex-col w-3/4 mx-auto mb-3'>
                <label className='m-2'>Email:</label>
                <input type="text" placeholder='enter your email' className='px-4 py-2 m-2 border border-black rounded-lg' onChange={(e)=>{setEmail(e.target.value)}}/>
                {emailError && <span>invalid email</span>}
            </div>
            <div className='flex flex-col w-3/4 mx-auto mb-3'>
                <label className='m-2'>password:</label>
                <input type="password" placeholder='enter your password' className='px-4 py-2 m-2 border border-black rounded-lg' onChange={(e)=>{setPassword(e.target.value)}}/>
                {passwordError && <span>password length should be six </span>}
            </div>
            <button className='px-3 py-2 rounded-lg bg-green-800 ml-28 mb-3'>submit</button>
        </form>
    </div>
  )
}

export default FormValidation