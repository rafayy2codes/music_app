import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, songsData } from '../assets/assets';
import spotify_logo from '../assets/spotify_logo.png';
import clock_icon from '../assets/clock_icon.png';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumId = parseInt(id, 10); // Ensure the id is an integer
    const albumdata = albumsData.find(album => album.id === albumId);

    if (!albumdata) {
        return (
            <div>
                <Navbar />
                <p>Album not found</p>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className='mt-10 flex flex-col md:flex-row md:gap-8 gap-4 items-center md:items-end'>
                <img className='w-full md:w-auto' src={albumdata.image} alt={albumdata.name} />
                <div className='flex flex-col items-center md:items-start'>
                    <p className='text-center md:text-left'>Playlist</p>
                    <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center md:text-left'>{albumdata.name}</h2>
                    <h4 className='text-center md:text-left'>{albumdata.desc}</h4>
                    <p className='mt-1 flex items-center justify-center md:justify-start'>
                        <img className='inline-block w-5 mr-2' src={spotify_logo} alt='Spotify Logo' />
                        <b>Spotify</b>
                        <span className='mx-1'>•</span> 10,000,000
                        <span className='mx-1'>•</span> <b>50 Songs,</b>
                        About 5 hours
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] text-sm md:text-base'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={clock_icon} alt='Clock Icon' />
            </div>
            <hr />
            {songsData.map((item, index) => (
                <div key={item.id} className='grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                    <p className='text-white flex items-center'>
                        <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt={item.name} />
                        {item.name}
                    </p>
                    <p>{albumdata.name}</p> {/* This will show the album name */}
                    <p className='hidden sm:block'>{item.dateAdded || 'Unknown Date'}</p>
                    <p className='text-xs text-center'>{item.duration}</p>
                </div>
            ))}
        </>
    );
};

export default DisplayAlbum;
