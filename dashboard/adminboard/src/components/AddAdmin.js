import React, { useState } from "react";
import { useNavigate } from "react-router";



const AddAdmin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [phone, setPhone] = useState();
    const [nationality, setNationality] = useState();
    const [dob, setDob] = useState();
    const [gender, setGender] = useState();
    
    return (
        <>
            <div className="text-black h-[100%] overflow-scroll p-5 bg-black">
                <div className="flex  justify-center items-center h-[100vh]">
                    <div className=" bg-[#3f68aa28] flex flex-col justify-around items-center w-[50rem] h-[40rem] border" >
                        <h1 className="text-4xl font-bold text-[#0762C8] underline">
                            New Admin!
                        </h1>

                        <div className=" w-[100%] flex justify-center  h-[80%]">
                            <form
                                // onSubmit={formSubmit}
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
                                            onChange={(event) => { setNationality(event.target.value) }}
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
                                        ADD ADMIN
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AddAdmin;