import React from "react";

const Biography = () => {
    return (
        <>
            <div className=" flex mt-20">
                <div>
                    <img src="/about.png" />
                </div>
                <div className="w-[50%] ">
                    <p className=" text-xl mb-3">
                        Biography
                    </p>
                    <h1 className=" text-5xl font-bold mb-3">
                        WHO WE ARE!
                    </h1>
                    <p className=" text-sm pr-36 pt-10">
                        Welcome to WeCare, where innovation meets healthcare excellence. Founded with a vision to revolutionize medical administration, we are a dedicated team of professionals committed to enhancing patient care and streamlining hospital operations. With years of experience in healthcare management and technology, we understand the unique challenges faced by hospitals and healthcare facilities in delivering quality care efficiently.

                        At WeCare, we leverage cutting-edge technology and industry best practices to develop robust solutions tailored to the needs of modern healthcare institutions. From patient scheduling and electronic health records (EHR) management to inventory control and billing, our comprehensive suite of tools empowers hospitals to optimize workflow, improve patient outcomes, and achieve operational excellence.

                        Driven by a passion for innovation and a commitment to excellence, we continually strive to evolve and adapt our solutions to meet the evolving needs of the healthcare industry. Partner with us to unlock the full potential of your healthcare facility and embark on a journey towards unparalleled efficiency, quality, and patient satisfaction. Together, let's shape the future of healthcare delivery.
                    </p>
                   
                </div>
            </div>
        </>
    )
}

export default Biography;