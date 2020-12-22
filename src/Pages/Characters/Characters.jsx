import React from 'react';
import './characters.scss';
import Peter from '../../assets/images/card1.jpg';
import Miles from '../../assets/images/card2.jpg';

function Characters() {
    return (
        <div className='characters'>
            <h2>Characters</h2>
            <div className='cards'>
                <div className='character'>
                    <img src={Peter} alt="peter"/>
                    <h4>Peter Parker</h4>
                </div>
                <div className='character'>
                    <img src={Miles} alt="miles"/>
                    <h4>Miles Morales</h4>
                </div>
            </div>
        </div>
    )
}

export default Characters
