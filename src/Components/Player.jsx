import React from 'react'
import { songsData } from '../assets/assets'
import shuffle_icon from '../assets/shuffle.png';
import prev_icon from '../assets/prev.png';
import play_icon from '../assets/play.png';
import next_icon from '../assets/next.png';
import mic_icon from '../assets/mic.png';
import queue_icon from '../assets/queue.png';
import speaker_icon from '../assets/speaker.png';
import volume_icon from '../assets/volume.png';
import mini_player_icon from '../assets/mini-player.png';
import zoom_icon from '../assets/zoom.png';
import loop_icon from '../assets/loop.png';





const Player = () => {
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={songsData[0].image} alt='jjjjj' />
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto '>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={shuffle_icon} alt='' />
                    <img className='w-4 cursor-pointer' src={prev_icon} alt='' />
                    <img className='w-4 cursor-pointer' src={play_icon} alt='' />
                    <img className='w-4 cursor-pointer' src={next_icon} alt='' />
                    <img className='w-4 cursor-pointer' src={loop_icon} alt='' />
                </div>
                <div className='flex items-center gap-5'>
                    <p>1:06</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='h-1 border-none w-20 bg-green-500 rounded-full' />
                    </div>
                    <p>3:20</p>

                </div>

            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4 ' src={play_icon} alt='' />
                <img className='w-4 ' src={mic_icon} alt='' />
                <img className='w-4 ' src={queue_icon} alt='' />
                <img className='w-4 ' src={speaker_icon} alt='' />
                <img className='w-4 ' src={volume_icon} alt='' />
                <div className='w-20 '>

                </div>
                <img className='w-4 ' src={mini_player_icon} alt='' />
                <img className='w-4 ' src={zoom_icon} alt='' />

            </div>
        </div>

    )
}

export default Player