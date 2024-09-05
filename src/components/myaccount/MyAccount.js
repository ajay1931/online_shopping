import React, { useState } from 'react';
import './MyAccount.css';
import { RxCross2 } from 'react-icons/rx';
import supabase from '../../supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';

const MyAccount = ({ isOpen, setIsOpen }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); 

    const [loginType, setLoginType] = useState(true);

    const dispatch = useDispatch();

    const signup = async () => {
        const { data, error } = await supabase.auth.signUp({
            name,
            email,
            password,
        });
        console.log(data, error);
        if (data.user) {
            alert("Account created. Please verify your email.");
        }
    }

    const login = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        console.log(data, error);
        if (error) {
            alert(error?.message);
            return;
        }
        dispatch(setUser(data.user));
    }

    return isOpen ? (
        <div className='myaccount'>
            <div className='myaccount_model'>
                <h1>{loginType ? 'Sign In' : 'Sign Up'}</h1>
                {!loginType && (
                    <input
                        placeholder='Name'
                        type='text'
                        required
                        className='input_name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}
                <input
                    placeholder='Email ID'
                    type='email'
                    required
                    className='input_id'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder='Password'
                    type='password'
                    required
                    className='input_password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='terms_and_conditions'>
                    By continuing, you agree to our {' '}
                    <span style={{ color: 'blue' }}>Terms of use</span> and 
                    <span style={{ color: 'blue' }}> Privacy policy</span>{' '}
                </p>
                {loginType ? (
                    <button onClick={login}>Sign In</button>
                ) : (
                    <button onClick={signup}>Sign Up</button>
                )}
                {loginType ? (
                    <p className='input_signup' onClick={() => setLoginType(false)}>
                        Create an account
                    </p>
                ) : (
                    <p className='input_signup' onClick={() => setLoginType(true)}>
                        Already a customer
                    </p>
                )}
                <div className='close' onClick={() => setIsOpen(false)}>
                    <RxCross2 />
                </div>
            </div>
        </div>
    ) : (<></>);
}

export default MyAccount;
