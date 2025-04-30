import {useEffect, useRef, useState} from "react";
import {GameSettings} from "../utils/types.ts";

interface SettingsProps {
    isOpen: boolean;
    onClose: () => void;
    settings: GameSettings;
}


function Settings({ isOpen, onClose, settings }: SettingsProps) {
    const {
        maxRounds,
        minRounds,
        maxQuestionsPerRound,
        minQuestionsPerRound,
        startingRounds,
        startingQuestionsPerRound,
    } = settings;

    const [rounds, setRounds] = useState(startingRounds);
    const [questionsPerRound, setQuestionsPerRound] = useState(startingQuestionsPerRound);

    useEffect(() => {
        setRounds(startingRounds);
        setQuestionsPerRound(startingQuestionsPerRound);
    }, [startingRounds, startingQuestionsPerRound]);


    function handleRoundsChange(value: number) {
        if ((rounds + value) < minRounds) {
            setRounds(minRounds);
        } else if ((rounds + value) > maxRounds) {
            setRounds(maxRounds);
        } else {
            setRounds((rounds + value));
        }
    }

    function handleQuestionsChange(value: number) {
        if ((questionsPerRound + value) < minQuestionsPerRound) {
            setQuestionsPerRound(minQuestionsPerRound);
        } else if ((questionsPerRound + value) > maxQuestionsPerRound) {
            setQuestionsPerRound(maxQuestionsPerRound);
        } else {
            setQuestionsPerRound((questionsPerRound + value));
        }
    }

    const settingsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);


    return (
        <>
            {/*backdrop*/}
            {isOpen && <div className="fixed inset-0 bg-black/80" aria-hidden="true" />}

            <div ref={settingsRef} className={`fixed top-0 right-0 z-50 shadow-xl bg-[#024D80]
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                w-1/2 h-[calc((var(--real-vh,1vh)*90)-20px)]
                top-1/2 -translate-y-1/2 rounded-l-[16px]
                small-phone:w-[300px]
                phone:w-[300px] phone:rounded-l-[16px]
                ipad:w-[380px] ipad:rounded-l-[24px] ipad:h-[calc((var(--real-vh,1vh)*100)-20px)]
                sm:w-[320px] sm:rounded-l-[32px]
                md:w-[320px] md:rounded-l-[36px]
                lg:w-[420px] lg:rounded-l-[42px]
                xl:w-[420px] xl:rounded-l-[48px]
                2xl:w-[580px] 2xl:h-[calc(100vh-60px)] 2xl:mt-[30px] 2xl:mb-[30px] 2xl:rounded-l-[60px]`}>

                <div className="
                    m-[10px] pt-[10px]
                    phone:m-[12px]
                    ipad:m-[16px]
                    sm:m-[20px]
                    md:m-[24px]
                    lg:m-[30px]
                    xl:m-[32px]
                    2xl:m-[36px]">
                    <div className="flex justify-center font-montserrat font-black text-white tracking-wide
                        pb-[10px] border-b-[1px] border-white border-opacity-30
                        text-[16px]
                        phone:text-[18px] phone:pb-[14px]
                        ipad:text-[24px] ipad:pb-[18px]
                        sm:text-[24px] sm:pb-[20px]
                        md:text-[24px] md:pb-[22px]
                        lg:text-[32px] lg:pb-[30px]
                        xl:text-[32px] xl:pb-[32px] xl:border-b-[2px]
                        2xl:text-[48px] 2xl:pb-[36px]">
                        Settings
                    </div>

                    <div className="replaceable-wrapper border-0 border-gray-200
                        pt-[12px] text-[11px] font-montserrat font-bold text-white
                        phone:text-[16px] phone:pt-[14px]
                        ipad:text-[20px] ipad:pt-[18px]
                        sm:text-[14px] sm:pt-[20px]
                        md:text-[14px] md:pt-[22px]
                        lg:text-[18px] lg:pt-[30px]
                        xl:text-[20px] xl:pt-[32px]
                        2xl:text-[28px] 2xl:pt-[36px]">
                        <div className="flex flex-col">
                            <div className="flex mb-[10px] items-center
                                phone:mb-[12px]
                                ipad:mb-[24px]
                                sm:mb-[24px]
                                md:mb-[24px]
                                lg:mb-[32px]
                                xl:mb-[32px]
                                2xl:mb-[42px]">
                                <div className="flex grow flex-col">
                                    Rounds
                                    <br/>
                                    <span className="phone:text-[14px] text-[#FBD11E]
                                        ipad:text-[18px]
                                        sm:text-[12px]
                                        md:text-[12px]
                                        lg:text-[16px]
                                        xl:text-[18px]
                                        2xl:text-[26px]">
                                        (Max = 4 Rounds)</span>
                                </div>
                                <div className="bg-[#E4E4E4] flex items-center
                                    rounded-md w-[50px] h-[25px] pl-[5px] pr-[5px]
                                    phone:w-[65px] phone:h-[28px]
                                    ipad:w-[100px] ipad:h-[40px]
                                    sm:rounded-md sm:w-[90px] sm:h-[36px]
                                    md:rounded-md md:w-[90px] md:h-[36px]
                                    lg:rounded-lg lg:w-[110px] lg:h-[45px]
                                    xl:rounded-xl xl:w-[110px] xl:h-[45px]
                                    2xl:rounded-2xl 2xl:w-[160px] 2xl:h-[60px]">
                                    <button className="flex grow justify-center text-[#525252]"
                                        onClick={() => handleRoundsChange(-1)}>
                                        -
                                    </button>
                                    <div className="flex grow justify-center text-[#525252]">
                                        {rounds}
                                    </div>
                                    <button className="flex grow justify-center text-[#525252]"
                                        onClick={() => handleRoundsChange(1)}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex grow flex-col">
                                    Questions Per Round
                                    <br/>
                                    <span className="phone:text-[14px] text-[#FBD11E]
                                        ipad:text-[18px]
                                        sm:text-[12px]
                                        md:text-[12px]
                                        lg:text-[16px]
                                        xl:text-[18px]
                                        2xl:text-[26px]">
                                        (Max = 10 Questions)</span>
                                </div>
                                <div className="bg-[#E4E4E4] flex items-center
                                    rounded-md w-[50px] h-[25px] pl-[5px] pr-[5px]
                                    phone:w-[65px] phone:h-[28px]
                                    ipad:w-[100px] ipad:h-[40px]
                                    sm:rounded-md sm:w-[90px] sm:h-[36px]
                                    md:rounded-md md:w-[90px] md:h-[36px]
                                    lg:rounded-lg lg:w-[110px] lg:h-[45px]
                                    xl:rounded-xl xl:w-[110px] xl:h-[45px]
                                    2xl:rounded-2xl 2xl:w-[160px] 2xl:h-[60px]">
                                    <button className="flex grow justify-center text-[#525252]"
                                        onClick={() => handleQuestionsChange(-1)}>
                                        -
                                    </button>
                                    <div className="flex grow justify-center text-[#525252]">
                                        {questionsPerRound}
                                    </div>
                                    <button className="flex grow justify-center text-[#525252]"
                                        onClick={() => handleQuestionsChange(1)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;