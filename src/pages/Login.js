import React, {useState} from 'react';
import Input from '../components/Input';

function Login() {
	const [loginState, setLoginState] = useState(localStorage.getItem('isLogin'));
	const handleLogin = () => {
		localStorage.setItem('isLogin', 1);
		setLoginState(true);
	};
	const handleLogout = () => {
		localStorage.setItem('isLogin', 0);
		setLoginState(false);
	};
	return (
		<div className='flex flex-col justify-center content-center items-center text-center'>
			<p className='font-serif text-4xl'>Sign In</p>
			{loginState == 1 ? (
				<button
					className='bg-red-500 p-2 pl-4 pr-4 rounded-lg text-white font-medium font-serif'
					onClick={handleLogout}>
					Logout
				</button>
			) : (
				<button
					className='bg-blue-500 p-2 pl-4 pr-4 rounded-lg text-white font-medium font-serif'
					onClick={handleLogin}>
					Login
				</button>
			)}
		</div>
	);
}

export default Login;
