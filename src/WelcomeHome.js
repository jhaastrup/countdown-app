import React from 'react';
import Confetti from 'react-confetti';

const WelcomeHome = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <Confetti />
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="text-center p-5 sm:p-10 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-indigo-600">Welcome Home, Baby!</h1>
                    <p className="text-2xl sm:text-3xl text-pink-600">❤️ 🎉</p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeHome;
