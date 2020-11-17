import React from 'react';
import '../SignIn/sign-in.scss';
import SignUp from '../SignUp/SignUp';
import Google from '../../images/Icons/google.png';

function Content() {
    return (
        <div className='sign-in-up'>
            {/* <div class='body-content'>
                <h3>SignUp</h3>
                <div class='input-control'>
                    <label>NAME</label>
                    <input type="text" id='name' />
                </div>
                <div class='input-control'>
                    <label>PASSWORD</label>
                    <input type="password" id='name' />
                </div>
                <div class='input-control'>
                    <label>EMAIL</label>
                    <input type="email" id='name' />
                </div>
                <button>Sign Up</button>
            </div> */}

            <SignUp />

            <div class='body-content'>
                <h3>SignIn</h3>
                <div class='input-control'>
                    <label>EMAIL</label>
                    <input type="email" id='name' />
                </div>
                <div class='input-control'>
                    <label>PASSWORD</label>
                    <input type="password" id='name' />
                </div>
                <button>Sign In</button>
                <button className='sign-in-google'>Sign In with Google <img src={Google} alt='' /></button>
            </div>
        </div>
    )
}

export default Content
