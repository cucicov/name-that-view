import './App.css'
import namethatimg from './img/namethat.png';
import helpimg from './img/help.png';
import settingsimg from './img/settings.png';

function App() {

    return (
        <>
            <div className="flex flex-col w-full border-2 border-purple-500 h-dvh">

                {/* HEADER */}
                <div className="
                    flex justify-center overflow-visible
                    phone:mt-[7px]
                    ipad:mt-[12px]
                    sm:mt-[16px]
                    md:mt-[24px]
                    2xl:mt-[36px]">
                    <div className="">
                        <img
                            src={namethatimg}
                            alt="Image with aspect"
                            className="w-full h-full object-cover rounded  overflow-visible
                                phone:h-[36px] phone:w-auto
                                ipad:h-[53px] ipad:w-auto
                                sm:h-[53px] sm:w-auto
                                md:h-[53px] md:w-auto
                                lg:h-[53px] lg:w-auto
                                xl:h-[64px] xl:w-auto
                                2xl:h-[84px] 2xl:w-auto  overflow-visible"
                        />
                    </div>
                </div>

                {/* BODY */}
                <div className="flex h-screen border-2 border-red-800">
                    <div className="border-2 border-green-400 grow flex items-center justify-center">
                        <div className="replaceable-wrapper border-1 border-gray-200">
                            {/*<div className="swiper">*/}
                            {/*    <!-- Additional required wrapper -->*/}
                            {/*    <div className="swiper-wrapper">*/}
                            {/*        <!-- Slides -->*/}
                            {/*        <div className="swiper-slide">Slide 1</div>*/}
                            {/*        <div className="swiper-slide">Slide 2</div>*/}
                            {/*        <div className="swiper-slide">Slide 3</div>*/}
                            {/*        ...*/}
                            {/*    </div>*/}
                            {/*    <!-- If we need pagination -->*/}
                            {/*    <div className="swiper-pagination"></div>*/}

                            {/*    <!-- If we need navigation buttons -->*/}
                            {/*    <div className="swiper-button-prev"></div>*/}
                            {/*    <div className="swiper-button-next"></div>*/}

                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="border-2 border-green-400 grow flex items-center justify-center">
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
                                alt="Image with aspect"
                                className="w-full h-full object-cover rounded"
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
                            <button className="p-0">
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
                                <span className="relative z-10
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
                            <button className="p-0">
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
        </>
    )
}

export default App
