import React from 'react';
import Navbar from '../components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './Admin';
import Cv from './Cv';
import Login from './Login';
import ProtectedRoute from '../components/ProtectedRoute';

function Home() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path='/' element={<Cv />} />
				<Route path='/login' element={<Login />} />

				<Route
					path='admin'
					element={
						<ProtectedRoute>
							<Admin />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default Home;
