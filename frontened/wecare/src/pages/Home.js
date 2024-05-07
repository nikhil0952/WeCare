import React from "react";
import Hero from "../components/Hero.js";
import Biography from "../components/Biography.js";
import Department from "../components/Department.js";
import MessageForm from "../components/MessageForm.js";

const Home = ()=>{
    return(
        <>
        <Hero 
        title={"Welcome to WeCare Medical Institute | Your Trusted Healthcare Provider"}
        />
        <Biography/>
        <Department/>
        <MessageForm/>
        </>
    )
}

export default Home;