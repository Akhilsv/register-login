import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import storage from 'local-storage-fallback';
import Header from '../_Header/Header';
import SideMenu from '../_SideMenu/SideMenu';

const ProtectedRoute = ({ Component, ...rest }) => {
	let token = storage.getItem('token');
	//-----------------------------------------
	return (
		<>
			<Header />
			<MainConatiner>
				<SideMenu />
				{token ? <Outlet /> : <Navigate to='/login' />}
			</MainConatiner>
		</>
	);
};

export default ProtectedRoute;
const MainConatiner = styled.div`
	width: 100%;
	height: calc(100vh - 75px);
	background-color: #ffffff;
	display: flex;
`;
