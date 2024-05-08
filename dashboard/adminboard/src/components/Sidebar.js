import React, { useContext } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import axios from "axios";
import { Context } from "..";
import { toast } from "react-toastify";

const Sidebar = () => {
    const navigate = useNavigate();
    const { isAuth, setIsAuth } = useContext(Context);
    const handleLogout = async () => {
        console.log(1);
        try {

            await axios.get("http://localhost:4000/api/v1/admin/logout",
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            ).then(() => {
                setIsAuth(false);
                navigate('/login');
            })

        } catch (error) {

        }
    }
    return (
        <>
            <div className=" text-5xl w-[5%] items-center text-[white] flex flex-col justify-around h-[60%]">
                <TiHome />
                <FaUserDoctor onClick={() => { navigate("/dashboard/add/doctor") }} />
                <MdAddModerator />
                <IoPersonAddSharp onClick={() => { navigate("/dashboard/add/admin") }} />

                <AiFillMessage onClick={() => { navigate("/dashboard/admin/messages") }} />
                <RiLogoutBoxFill onClick={handleLogout} />
            </div>
        </>
    )
}

export default Sidebar;