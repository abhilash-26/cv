import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';

function App() {
	return (
		// <BrowserRouter>
		// 	<Navbar />
		// 	<Routes>
		// 		<Route path='/' element={<Home />} />
		// 		<Route path='admin' element={<Admin />} />
		// 	</Routes>
		// </BrowserRouter>
		<div>
			<Home />
		</div>
	);
}

export default App;
