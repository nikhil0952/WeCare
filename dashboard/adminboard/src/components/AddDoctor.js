import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";


const AddDoctor = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [phone, setPhone] = useState();
    const [nationality, setNationality] = useState();
    const [dob, setDob] = useState();
    const [gender, setGender] = useState();
    const [doctorDepartment, setDoctorDepartment] = useState();
    const [docAvatar, setDocAvatar] = useState();
    const departmentsArray = [
        "Pediatrics",
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Radiology",
        "Physical Therapy",
        "Dermatology",
        "ENT",
    ];
    const handleAvatar = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setDocAvatar(file);
        };
      };// to create a image in file
    const formSubmit = async (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, phone, dob, gender, nationality, password, doctorDepartment, docAvatar);

        try {
            
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("dob", dob);
            formData.append("gender", gender);
            formData.append("nationality", nationality);
            formData.append("password", password);
            formData.append("doctorDepartment", doctorDepartment);
            formData.append("docAvatar", docAvatar);
            console.log(formData);
            await axios.post(
                "http://localhost:4000/api/v1/doctor/register",
                formData
                ,
                {
                    withCredentials: true,
                    headers: {
                        headers: { "Content-Type": "multipart/form-data" },//to send form
                    }
                }
            ).then(
                res => {
                    navigate("/dashboard/show/doctors");
                    toast.success("Successfully added!")
                    console.log(res);
                    
                    setEmail("");
                    setFirstname("");
                    setLastname("");
                    setDocAvatar("");
                    setDoctorDepartment("");
                    setGender("");
                    setPhone("");
                    setDob("");
                    setNationality("");
                    setPassword("");
                }
            ).catch(error => {
                console.log(error);
            })
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div className="text-black h-[100%] overflow-scroll p-5 bg-black">
                <div className="flex  justify-center items-center h-[100vh]">
                    <div className=" bg-[#3f68aa28] flex flex-col justify-around items-center w-[50rem] h-[40rem] border" >
                        <h1 className="text-4xl font-bold text-[#0762C8] underline">
                            ADD NEW DOCTOR!
                        </h1>

                        <div className=" w-[100%] flex justify-center  h-[80%]">
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
                                <div className="flex w-[100%]">
                                    <div className="w-[100%] mr-5">
                                        <select className=" pl-3 text border w-full h-[3rem] rounded"
                                            onChange={(event) => { setDoctorDepartment(event.target.value) }}
                                            value={doctorDepartment}
                                        >
                                            <option value="">
                                                Select Department
                                            </option>
                                            {
                                                departmentsArray.map((dep, index) => {
                                                    return (
                                                        <option value={dep} key={index}>
                                                            {dep}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="w-[100%] flex justify-center items-center">
                                        <input

                                            type="file"
                                            onChange={handleAvatar}
                                            // onChange={(event) => { setDocAvatar(event.target.value) }}
                                            // value={docAvatar}

                                        />
                                    </div>
                                </div>


                                <div className="text-center w-[100%]">
                                    <button
                                        type="submit"
                                        className=" hover:bg-[#0077b5] hover:text-white duration-500 border border-[#0077b5] font-bold text-[#0077b5] w-full h-[3rem] mt-3 rounded  "
                                    >
                                        REGISTER
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

export default AddDoctor;