import React from 'react';
import './signup.scss';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError';
import { Link } from 'react-router-dom';
import {auth,createUser} from '../../firebase/firebaseConfig';

const initialValues = {
    name: '',
    password: '',
    email: ''
} 

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Format').required('Required'),
    password: Yup.string().required('Required')
})

const onSubmit = async (values) => {
    console.log(values)
    const {name,email,password} = values

    try{
        const {user} = await auth.createUserWithEmailAndPassword(
            email,password
        );

        await createUser(user,{displayName:name});
    }
    catch(error){
        console.log(error);
    }
}

function SignUp() {
    return (
        <div className='sign-in-form'>
        <Formik 
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik => {
                    return(
                        <Form className='sign-up'>
                            <div className='join-heading'>
                                <span>SignUp</span>
                                |
                                <Link to='/sign-in'>
                                <span>SignIn</span>
                                </Link>
                            </div>
                            <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field 
                            type='text'
                            id='name'
                            name='name'
                            />
                            <ErrorMessage name='name' component={TextError}/>
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

                            <button type='submit' className='submit-button'>SignUp</button>
                        </Form>
                    )
                }
            }
        </Formik>
        </div>
    )
}

export default SignUp
