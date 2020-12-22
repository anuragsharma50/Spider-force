import React from 'react';
import './home.scss';
import Home1 from '../../assets/images/home/home1.jpg';
import Home2 from '../../assets/images/home/home2.jpg';
import Home3 from '../../assets/images/home/home3.jpg';
import Home4 from '../../assets/images/home/home4.jpg';
import Home5 from '../../assets/images/home/home5.jpg';
import Home6 from '../../assets/images/home/home6.jpg';
import Home7 from '../../assets/images/home/home7.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <div className='join'>
                <div className='content'>
                    <h2>Join the fans of Spider-man</h2> 
                    <Link to='/sign-up'>
                        <button>Join Us</button>
                    </Link>
                </div>
                <img src={Home1} alt="spidey"/>
            </div>

            <div className='join music'>
                <div className='content'>
                    <h2>Listen Spider-man Songs</h2> 
                    <Link to='/songs'>
                        <button>Listen</button>
                    </Link>
                </div>
                <img src={Home2} alt="spidey"/>
            </div>

            <div className='join video'>
                <div className='content'>
                    <h2>Watch Spider-man Clips</h2> 
                    <Link to='/videos'>
                        <button>Watch Now</button>
                    </Link>
                </div>
                <img src={Home3} alt="miles"/>
            </div>

            <div className='join comic'>
                <div className='content'>
                    <h2>Read Spider-man Comics</h2> 
                    <Link to='/comics'>
                        <button>Read Now</button>
                    </Link>
                </div>
                <img src={Home4} alt="Ghost Spider"/>
            </div>

            <div className='join home-character'>
                <div className='content'>
                    <h2>Know more about different Spider-Mans/Womes</h2> 
                    <Link to='/characters'>
                        <button>See Characters</button>
                    </Link>
                </div>
                <img src={Home5} alt="spiders"/>
            </div>

            <div className='join home-quotes'>
                <div className='content'>
                    <h2>Read Spider-man Quotes</h2> 
                    <Link to='/quotes'>
                        <button>Read Now</button>
                    </Link>
                </div>
                <img src={Home6} alt="spidey"/>
            </div>

            <div className='join home-stories'>
                <div className='content'>
                    <h2>share you'r Spider-man related story</h2> 
                    <Link to='/stories'>
                        <button>Share Now</button>
                    </Link>
                </div>
                <img src={Home7} alt="stories"/>
            </div>

        </div>
    )
}

export default Home
