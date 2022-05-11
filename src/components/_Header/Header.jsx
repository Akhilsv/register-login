import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
	MdOutlinePerson,
	MdLogout,
	MdOutlineFeedback,
	MdOutlineInsertDriveFile,
} from 'react-icons/md';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';

// import useClickOutside from '../../hooks/useClickOutside';

export default function Header() {
	const [isOpen, setOpen] = useState(false);
	const navigate = useNavigate();

	/* 	useClickOutside(modalRef, () => {
		if (isOpen) setOpen(false);
	}); */
	return (
		<HeaderContainer>
			<Logo>
				<img src='/assets/logo.png' alt='sdsd' />
			</Logo>
			<Text>Student Management Platform</Text>
			<MenuBox>
				<FaListUl onClick={() => setOpen(!isOpen)} color='#6AC261' />
			</MenuBox>
			{isOpen && (
				<DropBox ref={modalRef}>
					<DropItem>
						<Icon>
							<MdOutlinePerson />
						</Icon>
						<NavLink
							style={{ textDecoration: 'none', color: '#333', width: '100%' }}
							to={`/profile`}
							onClick={() => setOpen(false)}>
							Profile
						</NavLink>
					</DropItem>
					<DropItem>
						<Icon>
							<MdOutlineFeedback />
						</Icon>
						FeedBack
					</DropItem>
					<DropItem>
						<Icon>
							<MdOutlineInsertDriveFile />
						</Icon>
						<a
							href='https://kushala.co.in/terms.html'
							target='_blank'
							rel='noopener noreferrer'>
							Terms & Conditions
						</a>
					</DropItem>
					<DropItem>
						<Icon>
							<BiMessageRoundedDetail />
						</Icon>
						About us
					</DropItem>
					<DropItem
						onClick={() => {
							deleteAllCookies();
							navigate('/login');
						}}>
						<Icon>
							<MdLogout />
						</Icon>
						Logout
					</DropItem>
				</DropBox>
			)}
		</HeaderContainer>
	);
}
const Text = styled.div`
	font-size: 2rem;
	font-weight: 600;
	color: #ffffff;
`;
const HeaderContainer = styled.header`
	width: 100%;
	height: 75px;
	background-color: #6d5295;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;
const Logo = styled.div`
	width: 180px;
	height: 100%;
	display: grid;
	place-items: center;
	img {
		width: 80px;
		height: 60px;
	}
`;
const MenuBox = styled.div`
	width: 100px;
	height: 100%;
	display: grid;
	place-items: center;
	font-size: 1.8rem;
	cursor: pointer;
`;
const DropBox = styled.div`
	width: 200px;
	position: absolute;
	top: 75px;
	right: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	z-index: 5;
`;
const DropItem = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 10px;
	cursor: pointer;
	font-size: 0.9rem;
	a {
		text-decoration: none;
		color: inherit;
	}
	&:hover {
		background-color: #e7e7e7;
	}
`;
const Icon = styled.div`
	font-size: 1.2rem;
	display: grid;
	place-items: center;
	margin-right: 10px;
`;
