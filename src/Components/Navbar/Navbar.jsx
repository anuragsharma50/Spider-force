import React from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';
import Chat from '../../assets/images/Icons/chat.png';
import Quote from '../../assets/images/Icons/quote.png';
import SpiderMan from '../../assets/images/Icons/spider-man.png';
import Comic from '../../assets/images/Icons/comic-book.png';
import Movie from '../../assets/images/Icons/movie.png';
import Music from '../../assets/images/Icons/music.png';
import Home from '../../assets/images/Icons/home.png';
import Menu from '../../assets/images/Icons/menu.png';

function Navbar() {
    return (
        <div className='nav-control'>
        <nav>
            <Link to='/home'>
                <li>
                    <img src={Home} alt=''/>
                    Home
                </li>
            </Link>

            <Link to='/songs'>
                <li>
                <img src={Music} alt=''/>
                    Songs
                </li>
            </Link>

            <Link to='/clip'>
                <li>
                <img src={Movie} alt=''/>
                    Movie Clip
                </li>
            </Link>

            <Link to='/comics'>
                <li>
                <img src={Comic} alt=''/>
                    Comics
                </li>
            </Link>

            <Link to='/characters'>
                <li>
                    <img src={SpiderMan} alt=''/>
                    Characters
                </li>
            </Link>

            <Link to='/quotes'>
                <li>
                    <img src={Quote} alt=''/>
                    Quotes
                </li>
            </Link>

            <Link to='/stories'>
                <li>
                    <img src={Chat} alt=''/>
                    Stories
                </li>
            </Link>

            <li className='credits'>
                <p>© Anurag Sharma</p>
                Icons by <a href='https://icons8.com'>Icons 8</a>
            </li>
            
        </nav>
            <img src={Menu} alt='' className='menu'/>
        </div>
    )
}

export default Navbar
