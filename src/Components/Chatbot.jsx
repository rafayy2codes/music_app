import React from 'react'
import spotify_logo from '../assets/spotify_logo.png';



const Chatbot = () => {



    return (
        <div className='size-16  '>
            <div className='fixed bottom-6 right-6 z-50 cursor-pointer'>
                <img className='w-12 h-auto transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-1' src={spotify_logo} alt='' />
            </div>
        </div>
    )
}

export default Chatbot