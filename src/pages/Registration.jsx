import React from 'react';
import styled from 'styled-components';
import RegistrationForm from '../components/Registration/RegistrationForm';

const Registration = () => {
	return (
		<>
			<StyledContainer>
				<RegistrationForm />
			</StyledContainer>
		</>
	);
};

export default Registration;
const StyledContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	place-items: center;
  transition: all 0.5s ease ;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='100%' height='100%' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M-46.69 385.23L-46.69 385.23' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-46.69 385.23L71.38 497.88' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-46.69 385.23L84.29 650.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-46.69 385.23L-48.43 687.37' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-46.69 385.23L261.52 342.88' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.43 687.37L-48.43 687.37' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.43 687.37L84.29 650.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.43 687.37L71.38 497.88' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.43 687.37L211.36 707.46' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.43 687.37L241.59 518.47' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-48.43 687.37L364.28 708.27' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M71.38 497.88L71.38 497.88' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M71.38 497.88L84.29 650.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M71.38 497.88L241.59 518.47' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M84.29 650.36L84.29 650.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M84.29 650.36L211.36 707.46' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M261.52 342.88L261.52 342.88' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M261.52 342.88L404.09 349.83' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M261.52 342.88L241.59 518.47' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M241.59 518.47L241.59 518.47' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M241.59 518.47L385.08 528.41' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M241.59 518.47L211.36 707.46' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M241.59 518.47L84.29 650.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M241.59 518.47L364.28 708.27' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M211.36 707.46L211.36 707.46' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M211.36 707.46L364.28 708.27' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M211.36 707.46L385.08 528.41' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M211.36 707.46L71.38 497.88' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M404.09 349.83L404.09 349.83' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M404.09 349.83L539.4 359.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M404.09 349.83L385.08 528.41' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M404.09 349.83L241.59 518.47' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M385.08 528.41L385.08 528.41' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M385.08 528.41L553.58 537.59' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M385.08 528.41L364.28 708.27' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M385.08 528.41L261.52 342.88' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M364.28 708.27L364.28 708.27' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M364.28 708.27L553.58 537.59' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M539.4 359.18L539.4 359.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M539.4 359.18L653.38 360' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M539.4 359.18L553.58 537.59' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.58 537.59L553.58 537.59' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.58 537.59L671.87 548.68' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M653.38 360L653.38 360' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M653.38 360L799.89 363.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M653.38 360L671.87 548.68' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M653.38 360L553.58 537.59' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M671.87 548.68L671.87 548.68' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M671.87 548.68L708.65 670.85' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M708.65 670.85L708.65 670.85' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M708.65 670.85L787.62 681.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M708.65 670.85L553.58 537.59' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M708.65 670.85L846.43 501.45' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M708.65 670.85L959.89 511.98' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M708.65 670.85L653.38 360' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.72 196.02L832.72 196.02' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.72 196.02L799.89 363.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.72 196.02L978.93 91.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M832.72 196.02L653.38 360' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M799.89 363.9L799.89 363.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M799.89 363.9L846.43 501.45' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M846.43 501.45L846.43 501.45' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M846.43 501.45L959.89 511.98' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M787.62 681.56L787.62 681.56' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M787.62 681.56L671.87 548.68' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M978.93 91.16L978.93 91.16' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M978.93 91.16L1109.52 40.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M978.93 91.16L1094.66 214.67' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M993 402.61L993 402.61' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M993 402.61L1105.15 399.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M993 402.61L959.89 511.98' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M993 402.61L1101.09 500.23' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M993 402.61L846.43 501.45' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M959.89 511.98L959.89 511.98' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M959.89 511.98L1101.09 500.23' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1121.75 -86.54L1121.75 -86.54' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1121.75 -86.54L1109.52 40.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1121.75 -86.54L1279.91 -85.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1121.75 -86.54L1241.29 85.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1109.52 40.9L1109.52 40.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1109.52 40.9L1241.29 85.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1094.66 214.67L1094.66 214.67' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1094.66 214.67L1109.52 40.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1094.66 214.67L1105.15 399.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1094.66 214.67L1241.29 85.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1094.66 214.67L1297.73 201.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1105.15 399.22L1105.15 399.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1105.15 399.22L1101.09 500.23' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1105.15 399.22L959.89 511.98' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1101.09 500.23L1101.09 500.23' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1101.09 500.23L1155.16 680.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1101.09 500.23L1308.96 557.61' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1155.16 680.51L1155.16 680.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1155.16 680.51L1295.7 696.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1279.91 -85.91L1279.91 -85.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1279.91 -85.91L1398.95 -82.24' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1279.91 -85.91L1241.29 85.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1279.91 -85.91L1109.52 40.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1279.91 -85.91L1453.72 60.01' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1279.91 -85.91L1297.73 201.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1241.29 85.69L1241.29 85.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1241.29 85.69L1297.73 201.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1297.73 201.18L1297.73 201.18' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1297.73 201.18L1299.48 338.23' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1297.73 201.18L1433.84 224.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1297.73 201.18L1436.54 348.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1299.48 338.23L1299.48 338.23' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1299.48 338.23L1436.54 348.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1299.48 338.23L1433.84 224.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1299.48 338.23L1105.15 399.22' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.96 557.61L1308.96 557.61' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.96 557.61L1435.98 511.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.96 557.61L1295.7 696.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.96 557.61L1414.56 675.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.96 557.61L1155.16 680.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1295.7 696.89L1295.7 696.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1295.7 696.89L1414.56 675.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1295.7 696.89L1435.98 511.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1295.7 696.89L1564.86 658.75' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1398.95 -82.24L1398.95 -82.24' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1398.95 -82.24L1453.72 60.01' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1398.95 -82.24L1591.63 -60.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1398.95 -82.24L1241.29 85.69' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1453.72 60.01L1453.72 60.01' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1453.72 60.01L1564.86 90.98' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1453.72 60.01L1433.84 224.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1453.72 60.01L1591.63 -60.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1433.84 224.06L1433.84 224.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1433.84 224.06L1436.54 348.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1433.84 224.06L1609.66 190.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1436.54 348.91L1436.54 348.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1436.54 348.91L1572.49 349.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1436.54 348.91L1435.98 511.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1435.98 511.89L1435.98 511.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1435.98 511.89L1589.99 546.68' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1414.56 675.36L1414.56 675.36' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1414.56 675.36L1564.86 658.75' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1414.56 675.36L1435.98 511.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1414.56 675.36L1589.99 546.68' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1414.56 675.36L1155.16 680.51' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1591.63 -60.89L1591.63 -60.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1591.63 -60.89L1564.86 90.98' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1591.63 -60.89L1609.66 190.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1591.63 -60.89L1279.91 -85.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1564.86 90.98L1564.86 90.98' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1564.86 90.98L1609.66 190.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1609.66 190.93L1609.66 190.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1572.49 349.9L1572.49 349.9' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1572.49 349.9L1609.66 190.93' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1572.49 349.9L1433.84 224.06' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1572.49 349.9L1589.99 546.68' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1572.49 349.9L1435.98 511.89' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1589.99 546.68L1589.99 546.68' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1589.99 546.68L1564.86 658.75' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1589.99 546.68L1436.54 348.91' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1564.86 658.75L1564.86 658.75' stroke='%23132e65' stroke-width='1.5'%3e%3c/path%3e%3ccircle r='5' cx='-46.69' cy='385.23' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='-48.43' cy='687.37' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='71.38' cy='497.88' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='84.29' cy='650.36' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='261.52' cy='342.88' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='241.59' cy='518.47' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='211.36' cy='707.46' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='404.09' cy='349.83' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='385.08' cy='528.41' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='364.28' cy='708.27' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='539.4' cy='359.18' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='553.58' cy='537.59' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='653.38' cy='360' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='671.87' cy='548.68' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='708.65' cy='670.85' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='832.72' cy='196.02' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='799.89' cy='363.9' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='846.43' cy='501.45' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='787.62' cy='681.56' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='978.93' cy='91.16' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='993' cy='402.61' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='959.89' cy='511.98' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1121.75' cy='-86.54' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1109.52' cy='40.9' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1094.66' cy='214.67' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1105.15' cy='399.22' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1101.09' cy='500.23' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1155.16' cy='680.51' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1279.91' cy='-85.91' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1241.29' cy='85.69' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1297.73' cy='201.18' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1299.48' cy='338.23' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1308.96' cy='557.61' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1295.7' cy='696.89' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1398.95' cy='-82.24' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1453.72' cy='60.01' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1433.84' cy='224.06' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1436.54' cy='348.91' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1435.98' cy='511.89' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1414.56' cy='675.36' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1591.63' cy='-60.89' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1564.86' cy='90.98' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1609.66' cy='190.93' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1572.49' cy='349.9' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1589.99' cy='546.68' fill='%23132e65'%3e%3c/circle%3e%3ccircle r='5' cx='1564.86' cy='658.75' fill='%23132e65'%3e%3c/circle%3e%3cpath d='M-74.2 495.44L-74.2 495.44' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-74.2 495.44L59.35 532.45' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-74.2 495.44L-60.23 663.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M489.65 506.83L489.65 506.83' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M489.65 506.83L411.48 507.22' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M489.65 506.83L528.01 407.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M489.65 506.83L656.52 514.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M656.52 514.99L656.52 514.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M656.52 514.99L668.52 389.98' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M656.52 514.99L662.81 643.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M656.52 514.99L805.75 554.77' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M656.52 514.99L528.01 407.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M662.81 643.19L662.81 643.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M662.81 643.19L813.91 668.64' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M662.81 643.19L512.07 697.9' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M979.1 544.89L979.1 544.89' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M979.1 544.89L951.65 676.65' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M979.1 544.89L1108.59 642.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M979.1 544.89L1142.11 540.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1113.11 232.12L1113.11 232.12' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1113.11 232.12L1256.21 225.12' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1113.11 232.12L1126.95 407.31' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1113.11 232.12L1282.53 345.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1113.11 232.12L957.57 373.38' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1113.11 232.12L1308.65 46.41' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1253.94 -106.31L1253.94 -106.31' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1253.94 -106.31L1388.93 -49.51' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1253.94 -106.31L1308.65 46.41' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1253.94 -106.31L1450.16 53.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1253.94 -106.31L1256.21 225.12' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1253.94 -106.31L1584.23 -52.78' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1253.94 -106.31L1408.29 208.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1433.05 501.04L1433.05 501.04' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1433.05 501.04L1393.68 412.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1433.05 501.04L1577.25 540.49' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1433.05 501.04L1551.2 385.27' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1433.05 501.04L1546.92 638.77' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-60.23 663.54L-60.23 663.54' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-60.23 663.54L59.35 532.45' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-60.23 663.54L112.26 705.35' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-60.23 663.54L204.49 508.74' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-60.23 663.54L258.11 664.4' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M59.35 532.45L59.35 532.45' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M59.35 532.45L204.49 508.74' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M112.26 705.35L112.26 705.35' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M112.26 705.35L258.11 664.4' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M112.26 705.35L59.35 532.45' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M204.49 508.74L204.49 508.74' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M204.49 508.74L258.11 664.4' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M204.49 508.74L411.48 507.22' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M204.49 508.74L112.26 705.35' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M204.49 508.74L345.23 676.07' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M258.11 664.4L258.11 664.4' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M258.11 664.4L345.23 676.07' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M258.11 664.4L411.48 507.22' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M258.11 664.4L59.35 532.45' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M411.48 507.22L411.48 507.22' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M411.48 507.22L528.01 407.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M411.48 507.22L345.23 676.07' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M345.23 676.07L345.23 676.07' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M345.23 676.07L512.07 697.9' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M528.01 407.68L528.01 407.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M528.01 407.68L668.52 389.98' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M512.07 697.9L512.07 697.9' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M512.07 697.9L489.65 506.83' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M512.07 697.9L411.48 507.22' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M668.52 389.98L668.52 389.98' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M668.52 389.98L805.6 364.42' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M668.52 389.98L489.65 506.83' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M668.52 389.98L805.75 554.77' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M668.52 389.98L662.81 643.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M805.6 364.42L805.6 364.42' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M805.6 364.42L957.57 373.38' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M805.6 364.42L805.75 554.77' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M805.75 554.77L805.75 554.77' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M805.75 554.77L813.91 668.64' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M813.91 668.64L813.91 668.64' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M813.91 668.64L951.65 676.65' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M813.91 668.64L979.1 544.89' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M813.91 668.64L656.52 514.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M813.91 668.64L1108.59 642.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M957.57 373.38L957.57 373.38' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M951.65 676.65L951.65 676.65' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1126.95 407.31L1126.95 407.31' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1126.95 407.31L1142.11 540.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1126.95 407.31L1282.53 345.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1126.95 407.31L957.57 373.38' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1142.11 540.2L1142.11 540.2' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1142.11 540.2L1108.59 642.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1142.11 540.2L1250.48 541.89' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1142.11 540.2L1310.77 641.85' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1108.59 642.99L1108.59 642.99' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1108.59 642.99L951.65 676.65' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1108.59 642.99L1250.48 541.89' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.65 46.41L1308.65 46.41' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.65 46.41L1388.93 -49.51' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.65 46.41L1450.16 53.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1308.65 46.41L1256.21 225.12' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1256.21 225.12L1256.21 225.12' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1256.21 225.12L1282.53 345.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1282.53 345.17L1282.53 345.17' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1282.53 345.17L1393.68 412.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1282.53 345.17L1408.29 208.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1250.48 541.89L1250.48 541.89' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1250.48 541.89L1310.77 641.85' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1250.48 541.89L1126.95 407.31' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1250.48 541.89L1433.05 501.04' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1310.77 641.85L1310.77 641.85' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1310.77 641.85L1395.51 696.37' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1310.77 641.85L1433.05 501.04' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.93 -49.51L1388.93 -49.51' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.93 -49.51L1450.16 53.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1450.16 53.68L1450.16 53.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1450.16 53.68L1568.47 58.61' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1408.29 208.79L1408.29 208.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1408.29 208.79L1256.21 225.12' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1408.29 208.79L1450.16 53.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1408.29 208.79L1585.76 211.25' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1393.68 412.19L1393.68 412.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1393.68 412.19L1551.2 385.27' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1393.68 412.19L1250.48 541.89' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.51 696.37L1395.51 696.37' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.51 696.37L1546.92 638.77' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.51 696.37L1433.05 501.04' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.51 696.37L1250.48 541.89' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.51 696.37L1577.25 540.49' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.51 696.37L1393.68 412.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1584.23 -52.78L1584.23 -52.78' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1584.23 -52.78L1568.47 58.61' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1584.23 -52.78L1450.16 53.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1584.23 -52.78L1388.93 -49.51' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1584.23 -52.78L1585.76 211.25' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1584.23 -52.78L1308.65 46.41' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1584.23 -52.78L1408.29 208.79' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1568.47 58.61L1568.47 58.61' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1568.47 58.61L1585.76 211.25' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1585.76 211.25L1585.76 211.25' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1585.76 211.25L1551.2 385.27' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1585.76 211.25L1450.16 53.68' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1585.76 211.25L1393.68 412.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1551.2 385.27L1551.2 385.27' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1551.2 385.27L1577.25 540.49' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1577.25 540.49L1577.25 540.49' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1577.25 540.49L1546.92 638.77' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1577.25 540.49L1393.68 412.19' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1577.25 540.49L1310.77 641.85' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1546.92 638.77L1546.92 638.77' stroke='hsl(228.5%2c 77.2%25%2c 51.5%25)' stroke-width='1.5'%3e%3c/path%3e%3ccircle r='25' cx='-74.2' cy='495.44' fill='url(%23SvgjsRadialGradient1001)'%3e%3c/circle%3e%3ccircle r='25' cx='489.65' cy='506.83' fill='url(%23SvgjsRadialGradient1001)'%3e%3c/circle%3e%3ccircle r='25' cx='656.52' cy='514.99' fill='url(%23SvgjsRadialGradient1001)'%3e%3c/circle%3e%3ccircle r='25' cx='662.81' cy='643.19' fill='url(%23SvgjsRadialGradient1001)'%3e%3c/circle%3e%3ccircle r='25' cx='979.1' cy='544.89' fill='url(%23SvgjsRadialGradient1001)'%3e%3c/circle%3e%3ccircle r='25' cx='1113.11' cy='232.12' fill='url(%23SvgjsRadialGradient1001)'%3e%3c/circle%3e%3ccircle r='25' cx='1253.94' cy='-106.31' fill='url(%23SvgjsRadialGradient1001)'%3e%3c/circle%3e%3ccircle r='25' cx='1433.05' cy='501.04' fill='url(%23SvgjsRadialGradient1001)'%3e%3c/circle%3e%3ccircle r='5' cx='-60.23' cy='663.54' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='59.35' cy='532.45' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='112.26' cy='705.35' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='204.49' cy='508.74' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='258.11' cy='664.4' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='411.48' cy='507.22' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='345.23' cy='676.07' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='528.01' cy='407.68' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='512.07' cy='697.9' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='668.52' cy='389.98' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='805.6' cy='364.42' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='805.75' cy='554.77' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='813.91' cy='668.64' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='957.57' cy='373.38' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='951.65' cy='676.65' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1126.95' cy='407.31' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1142.11' cy='540.2' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1108.59' cy='642.99' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1308.65' cy='46.41' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1256.21' cy='225.12' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1282.53' cy='345.17' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1250.48' cy='541.89' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1310.77' cy='641.85' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1388.93' cy='-49.51' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1450.16' cy='53.68' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1408.29' cy='208.79' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1393.68' cy='412.19' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1395.51' cy='696.37' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1584.23' cy='-52.78' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1568.47' cy='58.61' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1585.76' cy='211.25' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1551.2' cy='385.27' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1577.25' cy='540.49' fill='%238b9ad9'%3e%3c/circle%3e%3ccircle r='5' cx='1546.92' cy='638.77' fill='%238b9ad9'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient id='SvgjsRadialGradient1001'%3e%3cstop stop-color='white' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%231735b3' offset='0.2'%3e%3c/stop%3e%3cstop stop-color='rgba(23%2c 53%2c 179%2c 0)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e");
`;