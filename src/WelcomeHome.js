import React from 'react';
import Confetti from 'react-confetti';

const WelcomeHome = () => {
    return (
        <div className="text-center p-10 bg-white rounded-lg shadow-lg relative">
            <Confetti />
            <h1 className="text-5xl font-bold mb-5 text-indigo-600">Welcome Home, Baby!</h1>
            <p className="text-3xl text-pink-600">❤️ 🎉</p>
        </div>
    );
};

export default WelcomeHome;
