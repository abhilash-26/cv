import React from 'react';
import {Link} from 'react-router-dom';
import {Navigate, useLocation} from 'react-router-dom';

function Navbar() {
	let location = useLocation();
	const handleLogout = () => {
		localStorage.setItem('isLogin', 0);
	};
	return (
		<div className='flex justify-around items-center bg-slate-500 h-10 text-white font-bold font-serif'>
			<Link to='/admin'>Admin</Link>
			<Link to='/'>View Cv</Link>
			<Link to='/login'>
				<p onClick={handleLogout}>Logout</p>
			</Link>
		</div>
	);
}

export default Navbar;
