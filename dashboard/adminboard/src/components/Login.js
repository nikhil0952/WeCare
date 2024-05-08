import React, { useContext, useState , useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Context } from "..";


const Login = () => {

    const { isAuth, setIsAuth } = useContext(Context);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password, confirmPassword);

        await axios.post(
            "http://localhost:4000/api/v1/login",
            {email,password,confirmPassword, role:"Admin"},
            {
                withCredentials:true,
                headers:{
                    "Content-Type": "application/json",
                }
            }
        ).then((res)=>{
            
            toast.success("Successfully login!");
            console.log(res);
            navigate('/dashboard');
        }).catch(error=>{
            toast.error(error.response.data.message)
            console.log(error);
        })
    }

    return (
        <>
            <div className="flex flex-col h-[100vh] justify-center items-center">
                <div className="h-[60%] flex flex-col justify-around items-center ">
                    <div className=" flex flex-col justify-between text-center">
                        <div
                            className=" underline font-bold text-8xl"
                        >
                            WeCare
                        </div>
                        <div
                            className="text-2xl "
                        >
                            Welcome to weCare!
                        </div>
                        <div>
                            Only Admin are allowed to access these resources!
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex justify-around h-[50%] flex-col w-[40rem]"
                    >
                        <input
                            className="w-[100%] border h-[3rem] rounded p-3"
                            type="email" placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <input
                            className="w-[100%] border h-[3rem] rounded p-3"
                            type="password" placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <input
                            className="w-[100%] border h-[3rem] rounded p-3"
                            type="password" placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />
                        <input
                            className=" border hover:bg-[#0762C8] hover:cursor-pointer transition hover:text-[white] text-[#0762C8]  font-bold h-[3rem] rounded "
                            type="submit" placeholder="Login"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;