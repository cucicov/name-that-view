import namethatimg from "../img/namethat.png";
import helpimg from "../img/help.png";
import settingsimg from "../img/settings.png";
import arrowUp from "../img/arrow-up.png";
import arrowDown from "../img/arrow-down.png";
import Settings from "./Settings.tsx";
import {useState} from "react";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {GameSettings} from "../utils/types.ts";
import Help from "./Help.tsx";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useRef } from 'react';


function HomePage() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    const [editionId, setEditionId] = useState(1); //TODO: set edition ID dynamically based on selection in the left list.

    // SLIDER
    const splideRef = useRef<any>(null);

    const splideOptions = {
        direction: 'ttb',
        wheel: true,
        arrows: false, // Disable default arrows
        pagination: true,
        perPage: 6,
        gap: '1rem',
        height: '60vh',
        breakpoints: {
            750: { // small-phone
                height: '50vh',
            },
            852: { // phone
                height: '50vh',
            },
            1194: { // ipad
                height: '55vh',
            },
            1280: { // sm
                height: '50vh',
            },
            1366: { // md
                height: '40vh',
            },
            1440: { // lg
                height: '35vh',
            },
            1920: { // xl
                height: '50vh',
            },
            2560: { // 2xl
                height: '50vh',
            },
        },

    };
    const goToPrev = () => {
        splideRef.current?.go('<');
    };
    const goToNext = () => {
        splideRef.current?.go('>');
    };



    const { data: settings, isLoading, error } = useQuery({
        queryKey: ['settings', editionId],
        queryFn: async (): Promise<GameSettings> => {
            if (!import.meta.env.VITE_API_URL) {
                throw new Error('VITE_API_URL is not defined');
            }
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/settings/${editionId}`);
            console.log("Settings: ", response.data);
            return response.data;
        },
        placeholderData: {
            maxRounds:1,
            minRounds:1,
            maxQuestionsPerRound:1,
            minQuestionsPerRound:1,
            startingRounds:1,
            startingQuestionsPerRound:1}
    });

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    if (isLoading) console.log("Loading settings for Edition:", editionId, "...");
    if (error) console.log("Error loading settings: ", error);
    if (!settings) return (
        <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
    );

    return (
        <>
            <div className="flex flex-col w-full h-dvh">

                {/* HEADER */}
                <div className="
                    flex justify-center overflow-visible
                    phone:mt-[7px]
                    ipad:mt-[12px]
                    sm:mt-[16px]
                    md:mt-[24px]
                    2xl:mt-[36px]">
                    <div className="flex justify-center">
                        <img
                            src={namethatimg}
                            alt="Image with aspect"
                            className="w-1/2 h-full object-cover rounded overflow-visible
                                phone:h-[36px] phone:w-auto
                                ipad:h-[53px] ipad:w-auto
                                sm:h-[53px] sm:w-auto
                                md:h-[53px] md:w-auto
                                lg:h-[53px] lg:w-auto
                                xl:h-[64px] xl:w-auto
                                2xl:h-[84px] 2xl:w-auto "
                        />
                    </div>
                </div>

                {/* BODY */}
                <div className="flex h-screen">
                    <div className="flex grow items-center justify-center">
                        <div className="replaceable-wrapper border-1 border-gray-200 flex flex-col
                            w-full">
                            {/*SLIDER*/}
                            <div className="flex justify-center items-center">
                                <button
                                    onClick={goToPrev}
                                    className="w-4 h-auto
                                         phone:w-6
                                         ipad:w-8
                                         sm:w-10
                                         md:w-12
                                         lg:w-14
                                         xl:w-16
                                         2xl:w-20">
                                    <img src={arrowUp}
                                         alt="Arrow Up"
                                         className="w-4 h-auto
                                         phone:w-6
                                         ipad:w-8
                                         sm:w-10
                                         md:w-12
                                         lg:w-14
                                         xl:w-16
                                         2xl:w-20" />
                                </button>
                            </div>
                            <div className="relative">
                                <Splide
                                    ref={splideRef}
                                    options={splideOptions}
                                    className="font-montserrat font-black
                                        text-[12px] py-2
                                        phone:text-[18px] phone:py-4
                                        ipad:text-[28px] ipad:py-6
                                        sm:text-[36px] sm:py-8
                                        md:text-[24px] md:py-10
                                        lg:text-[24px] lg:py-10
                                        xl:text-[36px] xl:py-14
                                        2xl:text-[48px] 2xl:py-16"
                                    aria-label="Vertical Slider"
                                >
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(1)}>1980s Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(2)}>1990s Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Chistmas Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Halloween Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Tom Cruise Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>TV Show Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Some Longer Title Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Unknown Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Special Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Batman Edition *SPECIAL* featuring Donald Trump</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>-1 Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>NullPointer Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Slide 13</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Slide 14</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="h-full flex items-center justify-center text-white">
                                            <button onClick={() => setEditionId(3)}>Slide 15</button>
                                        </div>
                                    </SplideSlide>
                                </Splide>
                            </div>
                            {/* Custom Navigation Buttons */}
                            {/*<div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">*/}
                            <div className="flex justify-center items-center">
                                <button
                                    onClick={goToNext}
                                    className="w-4 h-auto
                                         phone:w-6
                                         ipad:w-8
                                         sm:w-10
                                         md:w-12
                                         lg:w-14
                                         xl:w-16
                                         2xl:w-20"
                                >
                                    <img src={arrowDown}
                                         alt="Arrow Down"
                                         className="w-4 h-auto
                                         phone:w-6
                                         ipad:w-8
                                         sm:w-10
                                         md:w-12
                                         lg:w-14
                                         xl:w-16
                                         2xl:w-20" />
                                </button>
                            </div>
                            {/*</div>*/}



                        </div>
                    </div>
                    <div className="grow flex items-center justify-center
                            phone:grow
                            ipad:grow-[0.4]
                            sm:grow-[0.2]
                            md:grow
                            lg:grow
                            xl:grow
                            2xl:grow">
                        <div className="
                            phone:w-[256px] phone:h-[256px]
                            ipad:w-[512px] ipad:h-[512px]
                            sm:w-[560px] sm:h-[560px]
                            md:w-[370px] md:h-[370px]
                            lg:w-[370px] lg:h-[370px]
                            xl:w-[640px] xl:h-[640px]
                            2xl:w-[800px] 2xl:h-[800px]
                            w-[200px] h-[200px] max-h-[60vh] aspect-square">
                            <img
                                src="https://placehold.co/800x800.jpg?text=800px-Image-1980-Edition"
                                alt="Edition Image"
                                className="w-full h-full object-cover
                                    border-[2px] border-[#053B60]
                                    phone:border-[4px]
                                    ipad:border-[5px]
                                    sm:border-[4px]
                                    md:border-[4px]
                                    lg:border-[4px]
                                    xl:border-[5px]
                                    2xl:border-[7px]"
                            />
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex justify-center items-center
                    pb-[10px]
                    phone:pb-[10px]
                    ipad:pb-[32px]
                    sm:pb-[42x]
                    md:pb-[42px]
                    lg:pb-[42px]
                    xl:pb-[42px]
                    2xl:pb-[56px]">

                    {/* FOOTER HELP */}
                    <div className="flex
                        pl-[16px]
                        phone:pl-[24px]
                        ipad:pl-[24px]
                        sm:pl-[36x]
                        md:pl-[36px]
                        lg:pl-[42px]
                        xl:pl-[42px]
                        2xl:pl-[94px]">
                        <div className="
                            phone:w-[36px] phone:h-[36px]
                            ipad:w-[53px] ipad:h-[53px]
                            sm:w-[53px] sm:h-[53px]
                            md:w-[53px] md:h-[53px]
                            lg:w-[52px] lg:h-[53px]
                            xl:w-[64px] xl:h-[64px]
                            2xl:w-[84px] 2xl:h-[84px]
                            w-[24px] h-[24px] max-h-[75vh] aspect-square">
                            <button className="p-0" onClick={() => setIsHelpOpen(true)}>
                                <img
                                    src={helpimg}
                                    alt="Image with aspect"
                                    className="w-full h-full object-cover rounded"
                                />
                            </button>
                        </div>
                    </div>

                    {/* FOOTER BUTTON */}
                    <div className="flex grow justify-center">
                        <div className="replaceable-wrapper border-0 border-gray-200">
                            <button className="gradient-btn
                                relative
                                overflow-hidden
                                text-white
                                font-bold
                                py-2 px-4
                                rounded
                                cursor-pointer">
                                <span className="relative z-10 font-montserrat font-black
                                      phone:text-[18px]
                                      ipad:text-[24px]
                                      sm:text-[24px]
                                      md:text-[24px]
                                      lg:text-[24px]
                                      xl:text-[32px]
                                      2xl:text-[48px]">
                                START GAME
                                </span>
                            </button>
                        </div>
                    </div>

                    {/*// FOOTER SETTINGS*/}
                    <div className="flex
                        pr-[16px]
                        phone:pr-[24px]
                        ipad:pr-[24px]
                        sm:pr-[36x]
                        md:pr-[36px]
                        lg:pr-[42px]
                        xl:pr-[42px]
                        2xl:pr-[94px]">
                        <div className="
                            phone:w-[36px] phone:h-[36px]
                            ipad:w-[53px] ipad:h-[53px]
                            sm:w-[53px] sm:h-[53px]
                            md:w-[53px] md:h-[53px]
                            lg:w-[52px] lg:h-[53px]
                            xl:w-[64px] xl:h-[64px]
                            2xl:w-[84px] 2xl:h-[84px]
                            w-[24px] h-[24px] max-h-[75vh] aspect-square">
                            <button className="p-0" onClick={toggleSettings}>
                                <img
                                    src={settingsimg}
                                    alt="Image with aspect"
                                    className="w-full h-full object-cover rounded"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Settings
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                settings={settings}
            />

            <Help
                isOpen={isHelpOpen}
                onClose={() => setIsHelpOpen(false)}
            />

        </>
    )
}

export default HomePage;