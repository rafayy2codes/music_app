import React, { useState } from 'react';
import spotify_logo from '../assets/spotify_logo.png';

const Chatbot = () => {
    const [isChatboxVisible, setIsChatboxVisible] = useState(false);


    const toggleChatbox = () => {
        setIsChatboxVisible(!isChatboxVisible);
    };

    return (
        <div className='size-16'>

            <div className='fixed bottom-6 right-6 z-50 cursor-pointer' onClick={toggleChatbox}>
                <img
                    className='w-12 h-auto transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-1'
                    src={spotify_logo}
                    alt='Spotify Logo'
                />
            </div>


            {isChatboxVisible && (
                <div className='fixed bottom-20 right-6 w-64 h-48 bg-white border border-gray-300 rounded-lg shadow-lg p-4'>
                    <div className='flex justify-between items-center mb-2'>
                        <h2 className='text-lg font-bold'>Chat</h2>
                        <button onClick={toggleChatbox} className='text-sm text-red-500'>
                            Close
                        </button>
                    </div>
                    <div className='h-32 overflow-y-auto'>
                        <p className='text-sm'>Hi! How can I help you?</p>

                    </div>
                    <input
                        type='text'
                        placeholder='Type a message...'
                        className='w-full mt-2 p-2 border border-gray-300 rounded'
                    />
                </div>
            )}
        </div>
    );
};

export default Chatbot;
