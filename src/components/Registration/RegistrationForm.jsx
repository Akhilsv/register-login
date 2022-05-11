import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Api_helper from '../../adapters/Api_helper';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage-fallback';
const RegistrationForm = () => {
	let navigate = useNavigate();
	const { apiCall } = Api_helper();
	const [username, setUsername] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userMessage, setUserMessage] = useState(' ');

	//---------------Input onChange Handlers------------------
	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};
	const confirmPasswordHandler = (e) => {
		setConfirmPassword(e.target.value);
	};
	const userNameHandler = (e) => {
		setUsername(e.target.value);
	};
	const phoneHandler = (e) => {
		setPhone(e.target.value);
	};

	//------Form Submite function-------------------
	const registerFormHandler = async (e) => {
		e.preventDefault();
		const formData = {
			username,
			password,
			phone,
		};
		if (password !== confirmPassword) {
			return setUserMessage(`Password Doesn't Match`);
		} else if (phone.length !== 10) {
			return setUserMessage(`10 Digit phone Number please`);
		} else {
			try {
				const response = await apiCall('register', formData);
				console.log(response.data.Tokendata);
				storage.setItem('token', response.data.Tokendata);
				navigate('/dashboard');
			} catch (error) {
				setUserMessage(error.response.data);
			}
		}
	};

	let formValid =
		password.length > 0 &&
		confirmPassword.length > 0 &&
		username.length > 0 &&
		phone.length > 0;

	return (
		<FormControl onSubmit={registerFormHandler}>
			<h1>Register Form</h1>
			{userMessage ? <UserMessage>{userMessage}</UserMessage> : <p> </p>}
			<StyledTextField
				fullWidth
				id='Username'
				label='Username'
				variant='outlined'
				onChange={userNameHandler}
				margin='dense'
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
			<StyledTextField
				fullWidth
				id='Confirm-Password'
				label='Confirm-Password'
				type='password'
				variant='outlined'
				margin='dense'
				onChange={confirmPasswordHandler}
			/>
			<Button
				variant='contained'
				size='medium'
				type='submit'
				disabled={!formValid}>
				Submit
			</Button>
			<p>
				Already have an accout? <Link to='/login'>Sign-In</Link>
			</p>
		</FormControl>
	);
};

export const FormControl = styled.form`
	background: #fdfcfc;
	padding: 20px;
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	h1 {
		font-size: 1.5rem;
		margin: 15px 0;
	}
	button {
		font-weight: 600;
		margin: 15px;
	}
	p {
		font-weight: 500;
		letter-spacing: 1px;
	}
	a {
		color: #f8657e;
		text-decoration: none;
		font-weight: 700;
		transition: all 0.5s ease;
		:hover {
			color: #ffc2cc;
		}
	}
`;
export const UserMessage = styled.p`
	height: 15px;
	color: red;
	margin-bottom: 25px;
`;
export const StyledTextField = styled(TextField)`
	margin-bottom: 20px !important;
	input {
		color: #000000;
		font-weight: 600;
		height: 18px;
	}
	label {
		font-weight: 600;
		letter-spacing: 1px;
	}
`;
export default RegistrationForm;
