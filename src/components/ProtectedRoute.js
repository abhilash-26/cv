import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';

function ProtectedRoute({children}) {
	let location = useLocation();
	if (
		localStorage.getItem('isLogin') == 0 ||
		!localStorage.getItem('isLogin')
	) {
		return <Navigate to='/login' state={{from: location}} replace />;
	}
	return children;
}

export default ProtectedRoute;
