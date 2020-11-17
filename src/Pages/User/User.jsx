import React from 'react';
import './user.scss';
import { auth } from '../../firebase/firebaseConfig';
import { Link} from 'react-router-dom';

function User({user}) {

    const changeHandler = (e) => {
        const selectedFile = e.target.files[0]
        console.log(selectedFile);
    }

    return (
        <div className='user'>
            <h2>Hello, { user ? user.displayName : null } </h2>
            <div className='user-pic-change'>
                <img className='profile-pic' src={ user.photoURL } alt=''/>
                <input type="file" className='change-pic' accept="image/*" onChange={changeHandler} />
            </div>
            <button onClick={() => auth.sendPasswordResetEmail(user.email)}>Change Password</button>
            <br/>
            <Link to='/sign-in'>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </Link>
        </div>
    )
}

export default User;
