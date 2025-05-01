import nextButton from "../img/next-button.png"
import prevButton from "../img/previous-button.png"
import questionImg from "../img/question.svg"
import sampleAudio from "../img/sample.mp3"
import AudioPlayer from "./AudioPlayer.tsx";


const Question = () => {
    return (
        <>
            <div className="flex flex-col w-full h-dvh overflow-hidden">

                {/* HEADER */}
                <div className=" border-2 border-red-400
                    flex flex-[1] justify-center overflow-visible h-full">
                    <div className="">
                        <button>
                            <img className="w-[9vw] min-w-[18px]
                                    small-phone:w-[68px]
                                    phone:w-[76px]
                                    ipad:w-[76px]
                                    sm:w-[76px]
                                    md:w-[76px]
                                    lg:w-[76px]
                                    xl:w-[76px]
                                    2xl:w-[150px]"
                                 src={prevButton} alt=""/>
                        </button>
                    </div>
                    <div className="flex grow justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <div className="font-montserrat font-black leading-none text-[#8796A0] py-[0.5vh]
                                        text-[length:max(12px,2vw)] whitespace-nowrap
                                        small-phone:text-[length:max(16px,2vw)]
                                        phone:text-[length:max(20px,2vw)]
                                        ipad:text-[length:max(32px,2vw)]
                                        sm:text-[length:max(32px,2vw)]
                                        md:text-[length:max(32px,2vw)]
                                        lg:text-[length:max(32px,2vw)]
                                        xl:text-[length:max(42px,2vw)]
                                        2xl:text-[length:max(56px,2vw)]">
                                ROUND 1
                            </div>
                            <div className="
                                        text-[length:max(20px,3vw)] whitespace-nowrap
                                        small-phone:text-[length:max(28px,3vw)]
                                        phone:text-[length:max(32px,3vw)]
                                        ipad:text-[length:max(56px,3vw)]
                                        sm:text-[length:max(56px,3vw)]
                                        md:text-[length:max(56px,3vw)]
                                        lg:text-[length:max(56px,3vw)]
                                        xl:text-[length:max(64px,3vw)]
                                        2xl:text-[length:max(84px,3vw)]">
                                <div className="font-montserrat font-black leading-none text-[#FFFFFF]
                                    drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                    QUESTION 1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button>
                            <img className="w-[9vw] min-w-[18px]
                                    small-phone:w-[68px]
                                    phone:w-[76px]
                                    ipad:w-[76px]
                                    sm:w-[76px]
                                    md:w-[76px]
                                    lg:w-[76px]
                                    xl:w-[76px]
                                    2xl:w-[150px]"
                                 src={nextButton} alt=""/>
                        </button>
                    </div>
                </div>

                {/* BODY */}
                <div className="flex flex-[3] h-full items-center justify-center border-2 border-gray-200">
                    <div className="bg-black w-[60%] h-full rounded-xl flex flex-col justify-center items-center p-[3vw]">
                        <div className="bg-[#4D4D4D] w-full h-full rounded-xl flex flex-col justify-center items-center p-[3vw]">
                            <img src={questionImg} alt=""
                                className="w-[25vh]"/>
                        </div>
                        <div className="border-2 border-white">
                            <AudioPlayer audioUrl={sampleAudio} />
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flexjustify-center items-end border-2 border-green-200
                    flex-[0.1]
                    phone:flex-[0.2]
                    ipad:flex-[0.3]
                    sm:flex-[1]">

                </div>
            </div>
        </>
    )
}

export default Question;