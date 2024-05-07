import React, { useContext, useState } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const formSubmit = async(event) => {
        event.preventDefault();
        console.log(email, password, confirmPassword);

        try{
            await axios.post("http://localhost:4000/api/v1/login",
                {email, password, confirmPassword, role:"Patient"},
                {
                    withCredentials:true,
                    headers:{
                        "Content-Type":"application/json",
                    }
                }
            ).then((res)=>{
                console.log(res);
                setIsAuthenticated(true);
                navigate("/");
                toast.success("Login successfully!");
            })
        }catch(error){
            toast.error(error.response.data.message);

        }
    }

    if (isAuthenticated) {
        return navigate("/");
    }

    return (
        <>

            <div className="flex justify-center items-center h-[100vh] ">
                <div className=" flex flex-col justify-around items-center w-[30rem] h-[30rem] border" >
                    <h1 className="text-4xl font-bold underline ">
                        Login
                    </h1>
                    <p>
                        Please Login to Continue !
                    </p>

                    <div className=" w-[100%] flex justify-center  h-[50%]">
                        <form
                            onSubmit={formSubmit}
                            className="flex w-[80%] flex-col justify-around items-center"
                        >
                            <div className="w-[100%] ">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    id="Email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    value={email}
                                />
                            </div>

                            <div className="w-[100%]">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    id="Password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    value={password}
                                />
                            </div>
                            <div className="w-[100%]">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    id="Password"
                                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                                    value={confirmPassword}
                                />
                            </div>

                            <div className="text-center w-[100%]">
                                <button
                                    type="submit"
                                    className=" hover:bg-[#0077b5] hover:text-white duration-500 border border-[#0077b5] font-bold text-[#0077b5] w-full h-[3rem] mt-3 rounded  ">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <p
                        onClick={() => { navigate('/register') }}
                        className=" cursor-pointer text-gray-400">New user? signup
                    </p>
                </div>
            </div>
        </>
    );
}
export default Login;