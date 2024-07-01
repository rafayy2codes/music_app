import React from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import Albumcontent from './Albumcontent'; // Correct import and naming
import SongsItems from './SongsItems'; // Correct import and naming

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item) => (
                        <Albumcontent
                            key={item.id} // Use item.id as key
                            id={item.id}
                            name={item.name}
                            desc={item.desc}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's Trend Lists</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item) => (
                        <SongsItems
                            key={item.id} // Use item.id as key
                            id={item.id}
                            name={item.name}
                            desc={item.desc}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DisplayHome;
