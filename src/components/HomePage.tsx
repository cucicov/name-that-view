import namethatimg from "../img/namethat.png";
import helpimg from "../img/help.png";
import settingsimg from "../img/settings.png";
import arrowDownClick from "../img/arrow-down-click.png";
import arrowDown from "../img/arrow-down.png";
import Settings from "./Settings.tsx";
import {useEffect, useState} from "react";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {GameSettings} from "../utils/types.ts";
import Help from "./Help.tsx";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
// @ts-ignore
import '@splidejs/react-splide/css';
import { useRef } from 'react';


function HomePage() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [perPageCount, setPerPageCount] = useState(6);


    useEffect(() => {
        const updatePerPage = () => {
            if (window.innerHeight <= 400) {  // ipad
                setPerPageCount(4);
            } else {                                 // phone and smaller
                setPerPageCount(6);
            }
        };

        // Initial call
        updatePerPage();

        // Add event listener for window resize
        window.addEventListener('resize', updatePerPage);

        // Cleanup
        return () => window.removeEventListener('resize', updatePerPage);
    }, []);


    const [editionId, setEditionId] = useState(0); //TODO: set edition ID dynamically based on selection in the left list.

    // SLIDER
    const splideRef = useRef<any>(null);

    const splideOptions = {
        direction: 'ttb',
        wheel: true,
        arrows: false, // Disable default arrows
        pagination: true,
        perPage: perPageCount,
        gap: '2px',
        height: '30vh',
        breakpoints: {
            2560: { // 2xl
                height: '34vh',
            },
            1920: { // xl
                height: '34vh',
            },
            1440: { // lg
                height: '34vh',
            },
            1366: { // md
                height: '34vh',
            },
            1280: { // sm
                height: '34vh',
            },
            1194: { // ipad
                height: '34vh',
            },
            852: { // phone
                height: '30vh',
            },
        },

    };
    const goToPrev = () => {
        splideRef.current?.go('<');
    };
    const goToNext = () => {
        splideRef.current?.go('>');
    };

    const [isDownClicked, setIsDownClicked] = useState(false);
    const [isUpClicked, setIsUpClicked] = useState(false);


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
                    mt-[5%]
                    ">
                    <div className="flex justify-center">
                        <img
                            src={namethatimg}
                            alt="Image with aspect"
                            className="object-cover rounded overflow-visible
                                h-[32px] w-auto transition-all duration-300
                                phone:h-[32px] phone:w-auto
                                ipad:h-[64px] ipad:w-auto
                                sm:h-[64px] sm:w-auto
                                md:h-[78px] md:w-auto
                                lg:h-[64px] lg:w-auto
                                xl:h-[78px] xl:w-auto
                                2xl:h-[100px] 2xl:w-auto"
                        />
                    </div>
                </div>

                {/* BODY */}
                <div className="flex h-screen">
                    <div className="flex grow items-center justify-center">
                        <div className="replaceable-wrapper flex flex-col w-2/3
                            transition-all duration-300
                            phone:w-[55%]
                            ipad:w-[60%]
                            sm:w-[70%]
                            md:w-[60%]
                            lg:w-[60%]
                            xl:w-[55%]
                            2xl:w-[55%]">
                            {/*SLIDER*/}
                            <div className="flex justify-center items-center w-[85%]">
                                <button
                                    onClick={goToPrev}
                                    className="w-[7vh] h-auto max-w-[5vw]
                                        phone:w-[9vh]
                                        ipad:w-[7vh]">
                                    <img src={isUpClicked ? arrowDownClick : arrowDown}
                                         onMouseDown={() => setIsUpClicked(true)}
                                         onMouseUp={() => setIsUpClicked(false)}
                                         onMouseLeave={() => setIsUpClicked(false)}
                                         alt="Arrow Up"
                                         className="rotate-180 w-[7vh] h-auto max-w-[5vw]
                                        phone:w-[9vh]
                                        ipad:w-[7vh]" />
                                </button>
                            </div>
                            <div className="relative">
                                <Splide
                                    ref={splideRef}
                                    options={splideOptions}
                                    className="font-montserrat font-black leading-none py-[1vh]
                                        text-[length:min(12px,4vw)] whitespace-nowrap
                                        small-phone:text-[length:min(14px,4vw)]
                                        phone:text-[length:min(18px,4vw)]
                                        ipad:text-[length:min(24px,4vw)]
                                        sm:text-[length:min(24px,4vw)]
                                        md:text-[length:min(24px,4vw)]
                                        lg:text-[length:min(28px,4vw)]
                                        xl:text-[length:min(36px,4vw)]
                                        2xl:text-[length:min(48px,4vw)]"
                                    aria-label="Vertical Slider"
                                >
                                    <SplideSlide key="1">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item">
                                            <button onClick={() => setEditionId(1)}
                                                    className={`
                                                        ${editionId === 1
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>1980s Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="2">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(2)}
                                                    className={`
                                                        ${editionId === 2
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>1990s Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="3">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(3)}
                                                    className={`
                                                        ${editionId === 3
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>Chistmas Edition </button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="4">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(4)}
                                                    className={`
                                                        ${editionId === 4
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>Halloween Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="5">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(5)}
                                                    className={`
                                                        ${editionId === 5
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>Tom Cruise Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="6">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(6)}
                                                    className={`
                                                        ${editionId === 6
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>TV Show Edition</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="7">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(7)}
                                                    className={`
                                                        ${editionId === 7
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>1980s Edition 2</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="8">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(8)}
                                                    className={`
                                                        ${editionId === 8
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>1990s Edition 7</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="9">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(9)}
                                                    className={`
                                                        ${editionId === 9
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>Chistmas Edition 8</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="10">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(10)}
                                                    className={`
                                                        ${editionId === 10
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>Halloween Edition 7</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="11">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(11)}
                                                    className={`
                                                        ${editionId === 11
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>Tom Cruise Edition 6</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="12">
                                        <div className="h-full flex items-center justify-center
                                            text-white w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(12)}
                                                    className={`
                                                        ${editionId === 12
                                                        ? 'transition-all duration-0 text-[#FBD11E]'
                                                        : 'transition-all duration-300 text-white'
                                                    }`}>TV Show Edition 5</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="13">
                                        <div className="h-full flex items-center justify-center
                                            w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(13)}
                                                    className={`
                                                        ${editionId === 13
                                                                ? 'transition-all duration-0 text-[#FBD11E]'
                                                                : 'transition-all duration-300 text-white'
                                                    }`}>1980s Edition 4</button>
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide key="14">
                                        <div className="h-full flex items-center justify-center
                                            w-[85%] pt-[0.5vh] custom-splide-item ">
                                            <button onClick={() => setEditionId(14)}
                                                className={`
                                                ${editionId === 14
                                                    ? 'transition-all duration-0 text-[#FBD11E]'
                                                    : 'transition-all duration-300 text-white'
                                                }`}>
                                                1990s Edition 3</button>
                                        </div>
                                    </SplideSlide>

                                </Splide>
                            </div>
                            {/* Custom Navigation Buttons */}
                            {/*<div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">*/}
                            <div className="flex justify-center items-center w-[90%]">
                                <button
                                    onClick={goToNext}
                                    className="w-[7vh] h-auto  max-w-[5vw]
                                        phone:w-[9vh]
                                        ipad:w-[7vh]"
                                >
                                    <img src={isDownClicked ? arrowDownClick : arrowDown}
                                         alt="Arrow Down"
                                         onMouseDown={() => setIsDownClicked(true)}
                                         onMouseUp={() => setIsDownClicked(false)}
                                         onMouseLeave={() => setIsDownClicked(false)}
                                         className="w-[7vh] h-auto max-w-[5vw]
                                        phone:w-[9vh]
                                        ipad:w-[7vh]" />
                                </button>
                            </div>
                            {/*</div>*/}



                        </div>
                    </div>
                    <div className="grow flex items-center justify-center">
                        <div className="py-[2vh]
                            {/*phone:w-[25vh] phone:h-[25vh]*/}
                            {/*ipad:w-[50vh] ipad:h-[50vh]*/}
                            {/*sm:w-[492px] sm:h-[492px]*/}
                            {/*md:w-[370px] md:h-[370px]*/}
                            {/*lg:w-[492px] lg:h-[492px]*/}
                            {/*xl:w-[588px] xl:h-[588px]*/}
                            {/*2xl:w-[750px] 2xl:h-[750px]*/}
                            {/*w-[198px] h-[198px] aspect-square*/}
                            w-[50vh] h-auto max-w-[30vw]"> {/* TODO: add max-h-[60vh] */}
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
                    pb-[32px]
                    phone:pb-[32px]
                    ipad:pb-[64px]
                    sm:pb-[72x]
                    md:pb-[64px]
                    lg:pb-[72px]
                    xl:pb-[72px]
                    2xl:pb-[96px]">

                    {/* FOOTER HELP */}
                    <div className="flex
                        pl-[42px]
                        phone:pl-[42px]
                        ipad:pl-[74px]
                        sm:pl-[74x]
                        md:pl-[74px]
                        lg:pl-[72px]
                        xl:pl-[64px]
                        2xl:pl-[96px]">
                        <div className="gradient-btn-util flex justify-center items-center
                            rounded-[6px]
                            phone:w-[36px] phone:h-[36px] phone:rounded-[6px]
                            ipad:w-[50px] ipad:h-[50px] ipad:rounded-[8px]
                            sm:w-[50px] sm:h-[50px] sm:rounded-[8px]
                            md:w-[50px] md:h-[50px] md:rounded-[8px]
                            lg:w-[50px] lg:h-[50px] lg:rounded-[9px]
                            xl:w-[64px] xl:h-[64px] xl:rounded-[12px]
                            2xl:w-[84px] 2xl:h-[84px] 2xl:rounded-[16px]
                            w-[36px] h-[36px] max-h-[75vh] aspect-square">
                            <button className="p-0" onClick={() => setIsHelpOpen(true)}>
                                <img
                                    src={helpimg}
                                    alt="Image with aspect"
                                    className="h-full object-cover rounded
                                    w-[14px]
                                    phone:w-[14px]
                                    ipad:w-[19px]
                                    sm:w-[19px]
                                    md:w-[19px]
                                    lg:w-[19px]
                                    xl:w-[24px]
                                    2xl:w-[32px]"
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
                                cursor-pointer
                                rounded-[6px] px-[12px] py-[4px]
                                phone:rounded-[6px] phone:px-[12px] phone:py-[4px]
                                ipad:rounded-[8px] ipad:px-[17px] ipad:py-[6px]
                                sm:rounded-[8px] sm:px-[24px] sm:py-[6px]
                                md:rounded-[8px] md:px-[24px] md:py-[6px]
                                lg:rounded-[8px] lg:px-[24px] lg:py-[6px]
                                xl:rounded-[8px] xl:px-[24px] xl:py-[6px]
                                2xl:rounded-[8px] 2xl:px-[24px] 2xl:py-[6px]">
                                <div className="relative z-10 font-montserrat font-black
                                      phone:text-[18px]
                                      ipad:text-[24px]
                                      sm:text-[24px]
                                      md:text-[24px]
                                      lg:text-[24px]
                                      xl:text-[32px]
                                      2xl:text-[48px]">
                                START GAME
                                </div>
                            </button>
                        </div>
                    </div>

                    {/*// FOOTER SETTINGS*/}
                    <div className="flex
                        pr-[42px]
                        phone:pr-[42px]
                        ipad:pr-[74px]
                        sm:pr-[74x]
                        md:pr-[74px]
                        lg:pr-[72px]
                        xl:pr-[64px]
                        2xl:pr-[96px]">
                        <div className="gradient-btn-util flex justify-center items-center
                            rounded-[6px]
                            phone:w-[36px] phone:h-[36px] phone:rounded-[6px]
                            ipad:w-[50px] ipad:h-[50px] ipad:rounded-[8px]
                            sm:w-[50px] sm:h-[50px] sm:rounded-[8px]
                            md:w-[50px] md:h-[50px] md:rounded-[8px]
                            lg:w-[50px] lg:h-[50px] lg:rounded-[9px]
                            xl:w-[64px] xl:h-[64px] xl:rounded-[12px]
                            2xl:w-[84px] 2xl:h-[84px] 2xl:rounded-[16px]
                            w-[36px] h-[36px] max-h-[75vh] aspect-square">
                            <button className="p-0" onClick={toggleSettings}>
                                <img
                                    src={settingsimg}
                                    alt="Image with aspect"
                                    className="h-full object-cover rounded
                                        w-[20px]
                                        phone:w-[24px]
                                        ipad:w-[33px]
                                        sm:w-[33px]
                                        md:w-[33px]
                                        lg:w-[33px]
                                        xl:w-[42px]
                                        2xl:w-[56px]"
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