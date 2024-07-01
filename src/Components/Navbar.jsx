import React from 'react'
import arrow_right from '../assets/right_arrow.png';
import arrow_left from '../assets/left_arrow.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate()



    return (
        <div className='w-full flex justify-between items-center font-semibold '>
            <div className='flex items-center gap-2'>
                <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={arrow_left} alt='' />
                <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={arrow_right} alt='' />

            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium </p>
                <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'> Install App</p>
                <p className='bg-green-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>R</p>
            </div>
            <div>

            </div>
            <div className='flex items-center gap-2 mt-2'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>Sign Up</p>
                <p className='bg-black px-4 py-1 text-white rounded-2xl cursor-pointer'>Sign in</p>

            </div>

        </div>
    )
}

export default Navbar