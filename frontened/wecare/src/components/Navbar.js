import React, { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Context } from "../index.js"
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = async()=>{
        try{

            await axios.get("http://localhost:4000/api/v1/patient/logout",
                {
                    withCredentials:true,
                    headers:{
                        "Content-Type":"application/json",
                    }
                }
            ).then(()=>{
                setIsAuthenticated(false);
                toast.success("logout successfully");
            })

        }catch(error){

        }
    }

    const handleLogin = ()=>{
        navigate("/login");
    }

    

    return (
        <>
            <nav className="flex justify-around fixed w-[100%] z-50 p-2 bg-[#0076b5b1]">
                <div 
                className=" text-3xl font-bold underline"
                onClick={()=>{navigate("/")}}
                >
                    WeCare
                </div>
                <div className="flex justify-around  w-[15%] text-black">
                    <div className="flex justify-between items-center w-[100%]">
                        <h1 
                        onClick={()=>{navigate("/")}}
                        >
                            Home
                        </h1>
                        <h1
                        onClick={()=>{navigate("/appointment")}}
                        >
                            Appointment
                        </h1>
                        {/* <h1
                        onClick={()=>{navigate("/aboutus")}}
                        >
                            AboutUs
                        </h1> */}
                    </div>
                </div>
                {
                        isAuthenticated ?
                            (
                                <button className="w-[8rem] text-lg  rounded text-[white] bg-black"
                                onClick={handleLogout}
                                >Logout</button>
                            )
                            :
                            (
                                <button className="w-[8rem] text-lg  rounded text-[white] bg-black"
                                onClick={handleLogin}
                                >Login</button>
                            )
                    }
            </nav>
        </>
    )
}

export default Navbar;