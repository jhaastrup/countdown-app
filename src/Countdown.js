import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const targetDate = new Date('November 12, 2024 00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const emojis = ['🥰', '💕', '❤️', '😍', '😘'];

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-pink-500 relative">
            <div className="fixed inset-0 flex justify-center items-center">
                <div className="text-center p-6 bg-white rounded-lg shadow-lg z-10">
                    <h1 className="text-2xl sm:text-4xl mb-5 text-indigo-600">
                        Days till <span className="text-pink-600 underline font-extrabold">Raro</span> is back
                    </h1>
                    <div className="flex justify-center flex-wrap space-x-2 sm:space-x-4">
                        {Object.entries(timeLeft).map(([key, value]) => (
                            <div key={key} className="bg-gray-200 p-3 sm:p-5 rounded-md shadow-md m-1">
                                <span className="text-lg sm:text-2xl text-red-500 font-bold">{value}</span>
                                <span className="block text-sm sm:text-lg capitalize">{key}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Emoji Background */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    {Array.from({ length: 30 }).map((_, index) => {
                        const left = Math.floor(Math.random() * 100); // Random left position (0% to 100%)
                        const top = Math.floor(Math.random() * 100); // Random top position (0% to 100%)
                        const emoji = emojis[Math.floor(Math.random() * emojis.length)]; // Random emoji

                        return (
                            <span
                                key={index}
                                className={`absolute`}
                                style={{
                                    left: `${left}%`,
                                    top: `${top}%`,
                                    transform: 'translate(-50%, -50%)', // Center the emoji at the position
                                    fontSize: '2rem', // Adjust emoji size as needed
                                    opacity: 0.2 // Set opacity for subtlety
                                }}
                            >
                                {emoji}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Countdown;
