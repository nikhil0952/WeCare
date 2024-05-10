import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { useNavigate } from "react-router";
import axios from "axios";

const AllDoctors = () => {

    const { isAuth, setIsAuth } = useContext(Context);
    const navigate = useNavigate();

    const [allDoctors, setAllDoctors] = useState([]);

    useEffect(
        () => {
            const fetchData = async () => {
                await axios.get(
                    "http://localhost:4000/api/v1/doctors",
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                ).then(res => {

                    setAllDoctors(res.data.doctors);
                    // console.log(res.data.doctors);
                    // console.log(allDoctors);
                }).catch(error => {
                    console.log(error);
                })
            };
            fetchData();
        },
        []
    );


    if (!isAuth) {
        return navigate("/login");
    }
    if(!allDoctors){
        return navigate("/dashboard");
    }

    
    return (
        <>
            <div className=" h-[100%] overflow-scroll p-5 bg-black">
                <div className=" text-white text-5xl font-bold underline mb-10">
                    Doctors
                </div>
                <div className="flex flex-wrap ">
                    {
                        allDoctors.map((values, index) => {
                            return (
                                <>
                                    <div className="flex flex-col  justify-around items-center h-[33rem] rounded-xl w-[25rem] m-5  bg-white ">
                                        <div class="avatar-container ">
                                            <img class="avatar" src={values.docAvatar.url} alt="Avatar" />
                                        </div>
                                        <h1 className=" underline text-2xl">{values.firstName + " " + values.lastName}</h1>

                                        <div className="text-lg">
                                            <div className="flex">
                                                <h1 className="text-[#0762C8] under font-bold">Email :  &nbsp;</h1>
                                                <h2>{values.email}</h2>
                                            </div>
                                            <div className="flex">
                                                <h1 className="text-[#0762C8] font-bold">Phone : &nbsp;</h1>
                                                <h2>{values.phone}</h2>
                                            </div>
                                            <div className="flex">
                                                <h1 className="text-[#0762C8] font-bold">Date-of-Birth  : &nbsp;</h1>
                                                <h2>{values.dob}</h2>
                                            </div>
                                            <div className="flex">
                                                <h1 className="text-[#0762C8] font-bold">Department  : &nbsp;</h1>
                                                <h2>{values.doctorDepartment}</h2>
                                            </div>
                                            <div className="flex">
                                                <h1 className="text-[#0762C8] font-bold">Gender : &nbsp;</h1>
                                                <h2>{values.gender}</h2>
                                            </div>
                                            <div className="flex">
                                                <h1 className="text-[#0762C8] font-bold">Department  : &nbsp;</h1>
                                                <h2>{values.doctorDepartment}</h2>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default AllDoctors;