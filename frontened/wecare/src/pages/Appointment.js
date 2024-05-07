import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Appointment = () => {

    useEffect(() => {
        const fetchDoctor = async () => {

            await axios.get(
                "http://localhost:4000/api/v1/doctors",
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            ).then((res) => {
                setDoctor(res.data.doctors);

            }).catch(error=>{
                navigate("/login");
                toast.error("Please Login! ");
            })
        }; fetchDoctor()
    }, []);

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
    const [department, setDepartment] = useState();
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [phone, setPhone] = useState();
    const [nationality, setNationality] = useState();
    const [dob, setDob] = useState();
    const [appointmentDate, setAppointmentDate] = useState();
    const [gender, setGender] = useState();

    const [doctor, setDoctor] = useState([]);

    const formSubmit = async (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, phone, nationality, dob, gender,appointmentDate, department, doctorFirstName, doctorLastName, address);


        try {
            await axios.post(
                "http://localhost:4000/api/v1/appointment",

                {
                    firstName, lastName, email, phone, nationality, dob,appointmentDate, gender, department, doctorFirstName, doctorLastName, address
                },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            ).then((res) => {
                toast.success("Appointment Registered! ");
            }).catch(error => {
                toast.error(error.response.data.message);
            })
        } catch (error) {

            console.log(error);
        }

    }



    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center items-center h-[120vh]">
                <div className=" flex flex-col justify-around items-center w-[50rem] h-[40rem] border" >
                    <h1 className="text-4xl font-bold underline ">
                        Appointment
                    </h1>

                    <div className=" w-[100%] flex justify-center  h-[90%]">
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
                                        placeholder="Date Of Birth"
                                        className=" pl-3 text border w-full h-[3rem] rounded"
                                        onChange={(e) => { setDob(e.target.value) }}
                                        value={dob}

                                    />
                                </div>
                            </div>

                            <div className="flex w-[100%]">
                                <div className="w-[100%] mr-5">
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
                                        type="date"
                                        placeholder="Appointment date"
                                        className=" pl-3 text border w-full h-[3rem] rounded"
                                        onChange={(e) => { setAppointmentDate(e.target.value) }}
                                        value={appointmentDate}

                                    />
                                </div>
                            </div>




                            <div className="flex w-[100%]">
                                <div className="w-[100%] mr-5">
                                    <select className=" pl-3 text border w-full h-[3rem] rounded"
                                        value={department}
                                        onChange={(e) => {
                                            setDepartment(e.target.value);
                                            setDoctorFirstName("");
                                            setDoctorLastName("");

                                        }}
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
                                <div className="w-[100%]">
                                    <select className=" pl-3 text border w-full h-[3rem] rounded"
                                        value={`${doctorFirstName} ${doctorLastName}`}
                                        onChange={(e) => {
                                            const [firstName, lastName] = e.target.value.split(" ");
                                            setDoctorFirstName(firstName);
                                            setDoctorLastName(lastName);
                                        }}
                                        disabled={!department}
                                    >
                                        <option value="">Select doctor</option>
                                        {
                                            doctor.filter((doctor) => doctor.doctorDepartment === department).map(
                                                (doc, index) => {

                                                    return (
                                                        <option
                                                            value={`${doc.firstName} ${doc.lastName}`} key={index}
                                                        >
                                                            {doc.firstName} {doc.lastName}
                                                        </option>
                                                    )
                                                }
                                            )
                                        }
                                    </select>
                                </div>

                            </div>
                            <textarea rows={3} className="message" placeholder="Address"
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                            ></textarea>

                            <div className="text-center w-[100%]">
                                <button
                                    type="submit"
                                    className=" hover:bg-[#0077b5] hover:text-white duration-500 border border-[#0077b5] font-bold text-[#0077b5] w-full h-[3rem] mt-3 rounded  "
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Appointment;