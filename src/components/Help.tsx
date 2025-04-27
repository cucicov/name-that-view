import { Dialog} from '@headlessui/react';


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

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="rounded-2xl p-6
                                w-[100%]
                                phone:w-[95%]
                                ipad:w-[90%]
                                2xl:w-[60%]"
                              style={{
                                  background: 'radial-gradient(circle at center, #005D9D, #053B60, #04264D)'
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
                        mt-[-25px] mb-[20px]
                        phone:mt-[-35px]
                        ipad:mt-[-45px]
                        sm:mt-[-45px]
                        md:mt-[-45px]
                        lg:mt-[-45px]
                        xl:mt-[-65px]
                        2xl:mt-[-85px]">
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-400 focus:outline-none"
                            aria-label="Close dialog"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4
                                phone:h-8 phone:w-8
                                ipad:h-10 ipad:w-10
                                sm:h-10 sm:w-10
                                md:h-10 md:w-10
                                lg:h-10 lg:w-10
                                xl:h-14 xl:w-14
                                2xl:h-20 2xl:w-20"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-4
                        font-montserrat font-bold text-[#5C5C5C]
                        text-[10px] px-[10px] pt-[16px]
                        phone:text-[14px] phone:px-[14px]
                        ipad:text-[20px] ipad:px-[32px]
                        sm:text-[20px] sm:px-[32px]
                        md:text-[20px] md:px-[32px]
                        lg:text-[20px] lg:px-[32px]
                        xl:text-[30px] xl:px-[40px]
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