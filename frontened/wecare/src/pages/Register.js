import React, { useContext, useState } from "react";
import { Context } from "..";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Register = () => {

    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [phone, setPhone] = useState();
    const [nationality , setNationality ] = useState();
    const [dob, setDob] = useState();
    const [gender, setGender] = useState();

    const formSubmit = async(event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, phone, nationality, dob, gender);

        try{
            await axios.post(
                "http://localhost:4000/api/v1/patient/register",
                
                {
                    firstName, lastName, email, phone, dob, gender, nationality , role:"Patient", password
                },
                {
                    withCredentials:true,
                    headers:{
                        "Content-Type":"application/json",
                    }
                }
            ).then((res)=>{
                setIsAuthenticated(true);
                navigate("/");
                toast.success("Successfully Register! ");
            }).catch(error=>{
                toast.error(error.response.data.message);
            })
        }catch(error){
            
            console.log(error);
        }

    }

    if (isAuthenticated) {
        return navigate("/");
    }

    return (
        <>

            <div className="flex justify-center items-center h-[100vh]">
                <div className=" flex flex-col justify-around items-center w-[50rem] h-[40rem] border" >
                    <h1 className="text-4xl font-bold ">
                        Sign Up
                    </h1>

                    <div className=" w-[100%] flex justify-center  h-[75%]">
                        <form
                            onSubmit={formSubmit}
                            className="flex w-[80%] flex-col justify-around items-center"
                        >



                            <div className="flex w-[100%]">
                                <div className="w-[100%] mr-5 ">
                                    <input

                                        type="text"
                                        placeholder="FirstName"
                                        className=" pl-3  text border w-full h-[3rem] rounded"
                                        onChange={(event) => { setFirstname(event.target.value) }}
                                        value={firstName}

                                    />
                                </div>
                                <div className="w-[100%]  ">
                                    <input

                                        type="text"
                                        placeholder="LastName"
                                        className=" pl-3 text border w-full h-[3rem] rounded"
                                        onChange={(event) => { setLastname(event.target.value) }}
                                        value={lastName}

                                    />
                                </div>
                            </div>
                            <div className="flex w-[100%]">
                                <div className="w-[100%] mr-5">
                                    <select
                                        className=" pl-3 text border w-full h-[3rem] rounded"
                                        onChange={(event) => { setGender(event.target.value) }}
                                        value={gender}
                                        id="Gender"
                                    >
                                        <option value="Gender">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>

                                    </select>
                                </div>
                                <div className="w-[100%]">
                                    <input
                                        type="number"
                                        placeholder="Mobile"
                                        className=" pl-3 text border w-full h-[3rem] rounded"
                                        onChange={(event) => { setPhone(event.target.value) }}
                                        value={phone}

                                    />
                                </div>
                            </div>
                            <div className="flex w-[100%]">
                                <div className="w-[100%] mr-5">
                                    <input
                                        type="number"
                                        placeholder="Adharcard Number"
                                        className=" pl-3 text border w-full h-[3rem] rounded"
                                        onChange={(event) => { setNationality (event.target.value) }}
                                        value={nationality}

                                    />
                                </div>
                                <div className="w-[100%]">
                                    <input
                                        type="date"
                                        placeholder="DOB"
                                        className=" pl-3 text border w-full h-[3rem] rounded"
                                        onChange={(e) => { setDob(e.target.value) }}
                                        value={dob}

                                    />
                                </div>
                            </div>



                            <div className="w-[100%]">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    value={email}
                                    id="Email"
                                />
                            </div>


                            <div className="w-[100%]">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className=" pl-3 text border w-full h-[3rem] rounded"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    value={password}
                                    id="Password"
                                />
                            </div>


                            <div className="text-center w-[100%]">
                                <button
                                    type="submit"
                                    className=" hover:bg-[#0077b5] hover:text-white duration-500 border border-[#0077b5] font-bold text-[#0077b5] w-full h-[3rem] mt-3 rounded  "
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                    <p
                        onClick={() => { navigate('/login') }}
                        className=" cursor-pointer text-gray-400">Already a user? Login</p>
                </div>
            </div>

        </>
    )
}

export default Register;