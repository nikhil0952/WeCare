import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const formSubmit = async(event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, phone, message);
        try {
            await axios.post(
                "http://localhost:4000/api/v1/send",
                {firstName, lastName, email, phone, message},
                {
                    withCredentials:true,
                    headers:{
                        "Content-Type":"application/json",
                    }
                }

            ).then(
                (res)=>{
                    console.log(res);
                    toast.success("Message Send Successfully!");
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                }
            )
        } catch (error) {
            toast.error("Please fill full form !");
        }
    }

    return (
        <>
            <div className=" mt-40">
                <h1 className=" text-5xl font-bold text-center">
                    Send Us A Message!
                </h1>
                <form onSubmit={formSubmit} className="p-14">

                    <div className="p-5 flex justify-between">
                        <input
                            className="messageForm" type="text" placeholder="FirstName"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                        <input className="messageForm" type="text" placeholder="LastName"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />
                    </div>
                    <div className="p-5 flex justify-between">
                        <input className="messageForm" type="text" placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <input className="messageForm" type="text" placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}
                        />
                    </div>
                    <div className="p-5">
                        <textarea rows={7} className="message" placeholder="Message"
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                        ></textarea>
                    </div>
                    <div className="p-5 text-center">
                        <button className=" bg-[#0077b5] text-white w-40 rounded text-2xl font-bold"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>



                </form>
            </div>

        </>
    )
}

export default MessageForm;