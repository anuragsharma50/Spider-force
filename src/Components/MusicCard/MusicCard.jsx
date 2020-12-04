import React from 'react';
import './music-card.scss';

function MusicCard({song,playSong}) {
    return (
        <div className='music-card' onClick={() => playSong(song.Song)}>
            <img src={song.Image} alt='abcd' />
            <div className='card-data'>
                <h2>{song.Name}</h2>
                <p>{song.Artist}</p>
            </div>
        </div>
    )
}

export default MusicCard
