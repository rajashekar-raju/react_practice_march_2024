import React, { useState } from "react"

const Login = () => {

    const [value,setValue] = useState(false);

    return (
        <div>
            {
                value ? <span>LoggedIn Successfully</span> : (
                    <>
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <div>
                                <label className="flex flex-col mb-3">Username:</label>
                                <input type="text" required/>
                            </div>
                            <div className="flex flex-col">
                                <label>Password:</label>
                                <input type="password" required/>
                            </div>
                            <div>
                                <button type="submit" onClick={()=>setValue(true)} className="px-4 py-2 m-2 bg-blue-800 rounded-lg">Login</button>
                            </div>
                        </form>
                    </>
                )
            }
        </div>
    )
}
export default Login