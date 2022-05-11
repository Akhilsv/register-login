import React from 'react';
import styled from 'styled-components';
// https://mavoix-video-signaling.vercel.app/?p=${phoneNumber}&mode=auto&type=c
export default function Footer() {
	return (
		<FooterBox>
			<FooterDetails>
				<Version>V2.0 Build# 121023</Version>

				<p> Designed and Developed by Mavoix Solutions</p>
				<a href='https://www.mavoix.in/' target='_blank' rel='noreferrer'>
					<img src='/Assets/mavoix.png' alt='logo' />
				</a>
			</FooterDetails>
		</FooterBox>
	);
}
const FooterBox = styled.footer`
	margin: 20px 0 0 0;
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 0;
	background: #dddddd;
`;
const FooterDetails = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #000;
	p {
		padding-right: 10px;
		font-size: 0.7rem;
	}
	img {
		width: 90px;
		object-fit: contain;
	}
`;
const Version = styled.p`
	font-size: 0.8rem;
`;
