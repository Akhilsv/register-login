import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Menu_Data } from './Data';

export default function SideMenu() {
	return (
		<SideMenuConatiner>
			<SideMenuBox>
				{Menu_Data &&
					Menu_Data.map((item) => {
						return (
							<MenuItem
								key={item.id}
								to={`${item.link}`}
								activeclassname='active'>
								<Icon>
									<img src={`/assets/${item.icon}`} alt='logo' />
								</Icon>
								<Title>{item.name}</Title>
							</MenuItem>
						);
					})}
			</SideMenuBox>
		</SideMenuConatiner>
	);
}
const SideMenuConatiner = styled.aside`
	width: 180px;
	min-width: 110px;
	max-width: 180px;
	height: 100%;
	background-color: #4c9d91;
`;
const SideMenuBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
`;
const MenuItem = styled(NavLink)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	text-decoration: none;
	padding: 10px;
	color: #333;
	position: relative;
	&.active {
		color: #01a9f3;
		transition-duration: 0.4s;
		background: #f4f4f5;
		p {
			color: #000;
		}
		&::before {
			content: '';
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: #4c9d91;
			position: absolute;
			bottom: 43%;
			right: 15px;
			transition-duration: 0.4s;
		}
	}
`;
const Icon = styled.div`
	display: grid;
	place-items: center;
	img {
		width: 25px;
		object-fit: contain;
		margin-right: 15px;
	}
`;
const Title = styled.p`
	color: #fff;
	font-size: 0.9rem;
	font-weight: 600;
	letter-spacing: 1px;
`;
