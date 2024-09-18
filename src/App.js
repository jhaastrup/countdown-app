import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import WelcomeHome from './WelcomeHome';
import './App.css';

const App = () => {
    const [isLastDay, setIsLastDay] = useState(false);

    useEffect(() => {
        const targetDate = new Date('October 28, 2024 00:00:00').getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setIsLastDay(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {isLastDay ? <WelcomeHome /> : <Countdown />}
        </div>
    );
};

export default App;
