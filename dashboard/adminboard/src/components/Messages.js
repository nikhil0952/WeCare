import React, { useEffect, useState } from "react";
import axios from "axios";
const Messages = () => {

    const [dataMessages, setDataMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/api/v1/get/messages",
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                );
                setDataMessages(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        // Return a cleanup function if necessary
        // For this case, since there are no dependencies, cleanup isn't needed
    }, []); // Dependency array

    console.log(dataMessages);

    return (
        <>
            <div className="text-white h-[100%] overflow-scroll p-5 bg-black">
                <div className=" text-5xl font-bold underline mb-10">
                    Messages
                </div>
                <div className="flex flex-col">
                    {
                        dataMessages.map((value, index) => {
                            return (
                                <div key={index} className="h-[11rem] m-5 text-lg rounded-xl p-5 bg-[#3f68aa28] ">
                                    <div className="flex">
                                        <h1 className="text-[#0762C8] font-bold">FirstName :&nbsp; </h1>
                                        <h2>{value.firstName}</h2>
                                    </div>
                                    <div className="flex">
                                        <h1 className="text-[#0762C8] font-bold">LastName : &nbsp; </h1>
                                        <h2>{value.lastName}</h2>
                                    </div>
                                    <div className="flex">
                                        <h1 className="text-[#0762C8] font-bold">Email :  &nbsp;</h1>
                                        <h2>{value.email}</h2>
                                    </div>
                                    <div className="flex">
                                        <h1 className="text-[#0762C8] font-bold">Phone Number  : &nbsp;</h1>
                                        <h2>{value.phone}</h2>
                                    </div>
                                    <div className="flex">
                                        <h1 className="text-[#0762C8] font-bold">Message  : &nbsp;</h1>
                                        <h2>{value.message}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Messages;