import React from 'react';
import Nav from './components/NavBar/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import ProtectedRoute from './components/ProtectedRoute/ProtetedRoute';
import Attendence from './pages/Attendence';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Registration />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route exact path='/' element={<ProtectedRoute />}>
					<Route path='/dashboard' element={<DashBoard />} />
					<Route path='/attendence' element={<Attendence />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
