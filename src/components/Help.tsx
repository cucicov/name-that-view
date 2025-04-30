import { Dialog} from '@headlessui/react';
import closeButton from "../img/close.png";


interface HelpDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const helpItems = [
    "Make sure your sound is turned ON. If you’re playing via videoconference, ensure you are sharing screen with sound.",
    "Give 30-60 seconds per question before moving on to the next question. You may play the audio/video clip multiple times.",
    "Players/Teams can write their answers on a piece of paper. At the end of the round, exchange answer sheets with another player/team for scoring (this is done to ensure fairness).",
    "The Host will make all final judgement calls and their decision will be final.",
    "(Optional) Consider making the final round worth 2x points!",
    "Have a great game!"
];


function Help({ isOpen, onClose }: HelpDialogProps)  {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="relative z-50"
        >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4 ">
                <Dialog.Panel className="rounded-xl p-[2vw]
                                w-[100%]
                                phone:w-[95%] phone:max-w-[730px] phone:p-[2vw]
                                ipad:w-[90%] ipad:max-w-[890px]
                                sm:w-[90%] sm:max-w-[890px]
                                md:w-[90%] md:max-w-[890px]
                                lg:w-[90%] lg:max-w-[890px]
                                xl:w-[90%] xl:max-w-[1340px] xl:rounded-2xl
                                2xl:w-[90%] 2xl:max-w-[1780px]"
                              style={{
                                  background: 'radial-gradient(circle at center, #005D9D, #053B60)'
                              }}>
                    <Dialog.Title className="text-white flex-1 text-center
                        font-montserrat font-black text-[20px]
                        phone:text-[24px]
                        ipad:text-[32px]
                        sm:text-[32px]
                        md:text-[32px]
                        lg:text-[32px]
                        xl:text-[48px]
                        2xl:text-[64px]">
                        INSTRUCTIONS
                    </Dialog.Title>
                    <div className="flex flex-1 flex-direction-row-reverse justify-end
                        mt-[-25px] mb-[2vw]
                        phone:mt-[-30px]
                        ipad:mt-[-38px]
                        sm:mt-[-38px]
                        md:mt-[-38px]
                        lg:mt-[-38px]
                        xl:mt-[-60px]
                        2xl:mt-[-76px]
                        ">
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-400 focus:outline-none"
                            aria-label="Close dialog"
                        >
                            <img src={closeButton} alt="Close" className="h-auto object-contain
                            w-[18px]
                            phone:w-[22px]
                            ipad:w-[28px]
                            sm:w-[28px]
                            md:w-[28px]
                            lg:w-[28px]
                            xl:w-[48px]
                            2xl:w-full" />
                        </button>
                    </div>

                    <div className="bg-white rounded-xl p-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.55)]
                        font-montserrat font-bold text-[#5C5C5C]
                        text-[length:min(10px,4vw)] pt-[16px]
                        phone:text-[14px] phone:px-[14px] phone:p-4
                        ipad:text-[20px] ipad:px-[32px]
                        sm:text-[20px] sm:px-[32px]
                        md:text-[20px] md:px-[32px]
                        lg:text-[20px] lg:px-[32px]
                        xl:text-[30px] xl:px-[40px] xl:rounded-2xl
                        2xl:text-[40px] 2xl:px-[50px] 2xl:pt-[40px]">
                        <ul className="list-disc list-inside space-y-2">
                            {helpItems.map((item, index) => (
                                <li key={index} className="pb-[2px]
                                    md:pb-[16px]
                                    2xl:pb-[24px]">
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>

    )
}

export default Help;