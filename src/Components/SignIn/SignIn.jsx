import React from 'react';
import './sign-in.scss';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError';
import Google from '../../assets/images/Icons/google.png';
import { signInWithGoogle } from '../../firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebaseConfig';

const initialValues = {
    password: '',
    email: ''
} 

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password:  Yup.string().required('Required')
})

const onSubmit = async (values) => {
    console.log(values)

    const {email,password} = values;

    try{
        await auth.signInWithEmailAndPassword(
            email,password
        )
    }
    catch(error){
        console.log(error);
    }
}

function SignIn() {
    return (
        <Formik 
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik => {
                    return(
                        <Form className='sign-in'>
                            <div className='join-heading'>
                                <Link to='/sign-up'>
                                <span>SignUp</span>
                                </Link>
                                |
                                <span>SignIn</span>
                            </div>

                            <div className='form-control'>
                            <label htmlFor='email'>Email</label>
                            <Field 
                            type='email'
                            id='email'
                            name='email'
                            />
                            <ErrorMessage name='email' component={TextError}/>
                            </div>

                            <div className='form-control'>
                            <label htmlFor='password'>Password</label>
                            <Field 
                            type='password'
                            id='password'
                            name='password'
                            />
                            <ErrorMessage name='password' component={TextError}/>
                            </div>

                            <button type='submit' className='submit-button'>SignIn</button>
                            <button type='button' className='sign-in-google' onClick={signInWithGoogle}>Sign In with Google <img src={Google} alt='' /></button>        
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default SignIn
