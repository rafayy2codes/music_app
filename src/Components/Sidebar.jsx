import React from 'react';
import home_icon from '../assets/home.png';
import search_icon from '../assets/search.png';
import stack_icon from '../assets/stack.png';
import right_arrow_icon from '../assets/right_arrow.png';
import plus_icon from '../assets/plus.png';

const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6 h-6' src={home_icon} alt="Home" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6 h-6' src={search_icon} alt="Search" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded flex flex-col'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8 h-8' src={stack_icon} alt='Library' />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5 h-5' src={right_arrow_icon} alt='Right Arrow' />
                        <img className='w-5 h-5' src={plus_icon} alt='Add' />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1'>
                    <h1>Create your playlist</h1>
                    <p className='font-light'>It's easy, we will help</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1'>
                    <h1>Lets find some podcasts to follow</h1>
                    <p className='font-light'>We will update you with new episodes </p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse latest</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
