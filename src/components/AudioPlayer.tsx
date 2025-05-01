import { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ audioUrl }: { audioUrl: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Set duration when audio metadata is loaded
        const audio = audioRef.current;
        audio?.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });

        // Update current time
        audio?.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
        });

        return () => {
            audio?.removeEventListener('loadedmetadata', () => {});
            audio?.removeEventListener('timeupdate', () => {});
        };
    }, []);

    // Format time in minutes:seconds
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow">
            <audio ref={audioRef} src={audioUrl} />

            {/* Progress Bar */}
            <input
                type="range"
                value={currentTime}
                max={duration}
                onChange={handleProgress}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />

            {/* Time Display */}
            <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
            </div>

            {/* Play/Pause Button */}
            <button
                onClick={togglePlay}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default AudioPlayer;