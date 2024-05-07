import React from "react";


const Hero = ({ title }) => {
   
    return (
        <>
            <div className="flex relative  justify-between">
                <div className="flex flex-col justify-center w-[40%] pl-20 pt-32 ">
                    <div className=" mb-10"
                    >
                        <h1 className=" text-5xl font-bold text-[#0077b5]"
                        >
                            {title}
                        </h1>
                    </div>
                    <div>
                        <p>
                            ZeeCare Medical Institute is a state-of-the-art facility dedicated
                            to providing comprehensive healthcare services with compassion and
                            expertise. Our team of skilled professionals is committed to
                            delivering personalized care tailored to each patient's needs. At
                            ZeeCare, we prioritize your well-being, ensuring a harmonious
                            journey towards optimal health and wellness.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden w-[35%] p-16">
                    <img src="/hero.png" alt="hero" className="animated-image"/>
                    <span className="absolute top-[-200px] right-[-400px]  z-[-1]">
                        <img src="/vector.png" alt="vector"  />
                    </span>
                </div>

            </div>
        </>
    )
}

export default Hero;