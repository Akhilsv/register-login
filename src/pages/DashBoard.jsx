import React from 'react';
import styled from 'styled-components';
import GraphChart from '../components/DashBoard/GraphChart';
import PieCharts from '../components/DashBoard/PieCharts';
const DashBoard = () => {
	return (
		<Container>
			<h1>DashBoard</h1>
			<PieCharts />
			<GraphChart />
		</Container>
	);
};

export default DashBoard;
export const Container = styled.div`
	width: calc;
	height: 100%;
	padding: 20px;
	overflow-y: scroll;
`;
