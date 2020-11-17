import React, { useEffect,useState } from 'react';
import Logo from '../../assets/images/logo.png';
import './header.scss';
import {Link} from 'react-router-dom';

function Header({user}) {

    const [firstWord, setFirstWord] = useState('')

    useEffect(() => {
        if(user){
            if(user.displayName){
                setFirstWord(user.displayName[0].toUpperCase())
            }
        }
    }, [user])
    return (
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt="logo" id='logo-img' />
                <p></p>
            </div>
            <div className='login'>
            {
                user ? <button className='logged logged-in'>{user.displayName}</button> : <Link to='/sign-up'><button className='logged logged-out'>Join</button></Link>
            }
            {
                user ? user.photoURL ? <Link to='/user'><img className='profile-pic' src={user.photoURL} alt="Profile-pic"/></Link> : <Link to='/user'><div className='default-profile'>{firstWord}</div></Link> : null
            }
            </div>
            
        </div>
    )
}

export default Header;
