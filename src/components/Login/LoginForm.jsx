import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Api_helper from '../../adapters/Api_helper';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage-fallback';

import {
	FormControl,
	StyledTextField,
	UserMessage,
} from '../Registration/RegistrationForm';

const LoginForm = () => {
	let navigate = useNavigate();
	const { apiCall } = Api_helper();
	const [username, setUsername] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [userMessage, setUserMessage] = useState(' ');

	//---------------Input onChange Handlers------------------
	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};
	const userNameHandler = (e) => {
		setUsername(e.target.value);
	};
	const phoneHandler = (e) => {
		setPhone(e.target.value);
	};

	//------Form Submite function-------------------
	const loginFormHandler = async (e) => {
		e.preventDefault();

		if (phone.length !== 10) {
			setUserMessage(`10 Digit phone Number please`);
		}
		const formData = {
			username,
			password,
			phone,
		};
		try {
			const response = await apiCall('login', formData);
			console.log(response);
			storage.setItem('token', response.data.Tokendata);
			navigate('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	let formValid =
		password.length > 0 && username.length > 0 && phone.length > 0;
	return (
		<FormControl onSubmit={loginFormHandler}>
			<h1>Login Form</h1>
			{userMessage ? <UserMessage>{userMessage}</UserMessage> : <p> </p>}
			<StyledTextField
				fullWidth
				id='Username'
				label='Username'
				variant='outlined'
				margin='dense'
				onChange={userNameHandler}
			/>
			<StyledTextField
				fullWidth
				id='Phone-Number'
				label='Phone-Number'
				type='number'
				variant='outlined'
				margin='dense'
				onChange={phoneHandler}
			/>
			<StyledTextField
				fullWidth
				id='Password'
				label='Password'
				type='password'
				variant='outlined'
				margin='dense'
				onChange={passwordHandler}
			/>

			<Button
				variant='contained'
				size='medium'
				disabled={!formValid}
				type='submit'>
				Submit
			</Button>
			<p>
				Don't have an accout? <Link to='/registration'>Register</Link>
			</p>
		</FormControl>
	);
};

export default LoginForm;
