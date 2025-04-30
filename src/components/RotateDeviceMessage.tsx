import { useState, useEffect } from 'react';
import portraitVideo from '../img/portrait.mp4';

const RotateDeviceMessage = () => {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        console.log("Ratio: ", window.innerHeight > window.innerWidth);
        const checkOrientation = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };

        // Check orientation on mount and when window resizes
        checkOrientation();
        window.addEventListener('resize', checkOrientation);

        return () => window.removeEventListener('resize', checkOrientation);
    }, []);

    console.log("is portrait: ", isPortrait);

    if (!isPortrait) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-100 flex items-center justify-center">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[80vw] h-auto"
            >
                <source src={portraitVideo} type="video/mp4" />
            </video>
        </div>
);
};

export default RotateDeviceMessage;
