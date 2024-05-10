import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router";
import Messages from "./Messages";
import AddDoctor from "./AddDoctor";
import AddAdmin from "./AddAdmin";
import AllDoctors from "./AllDoctors.js";

const Dashboard = () => {
    return (
        <>
            <div className="h-[100vh] flex items-center bg-[#0762C8]">
                <Sidebar />
                <div
                    className="h-[100vh]  w-[95%]"
                >
                    <Routes>
                        <Route path='/admin/messages' element={<Messages />} />
                        <Route path='/add/doctor' element={<AddDoctor/>} />
                        <Route path='/add/admin' element={<AddAdmin/>} />
                        <Route path='/show/doctors' element={<AllDoctors/>} />
                    </Routes>
                </div>

            </div>
        </>
    )
}

export default Dashboard;