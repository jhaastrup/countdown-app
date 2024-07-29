import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const targetDate = new Date('September 27, 2024 00:00:00').getTime();

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

    return (
        <div className="text-center p-10 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl mb-5 text-indigo-600">
                Days till <span className="text-pink-600 underline font-extrabold">Raro</span> is back
            </h1>
            <div className="flex justify-center space-x-4">
                <div className="bg-gray-200 p-5 rounded-md shadow-md">
                    <span className="text-2xl text-red-500 font-bold">{timeLeft.days}</span> <span className="block text-lg">Days</span>
                </div>
                <div className="bg-gray-200 p-5 rounded-md shadow-md">
                    <span className="text-2xl text-red-500 font-bold">{timeLeft.hours}</span> <span className="block text-lg">Hours</span>
                </div>
                <div className="bg-gray-200 p-5 rounded-md shadow-md">
                    <span className="text-2xl text-red-500 font-bold">{timeLeft.minutes}</span> <span className="block text-lg">Minutes</span>
                </div>
                <div className="bg-gray-200 p-5 rounded-md shadow-md">
                    <span className="text-2xl text-red-500 font-bold">{timeLeft.seconds}</span> <span className="block text-lg">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
