import {configureStore} from '@reduxjs/toolkit';
import cvDetails from './features/cvdetails';

export const store = configureStore({
	reducer: {
		cvDetail: cvDetails,
	},
});
