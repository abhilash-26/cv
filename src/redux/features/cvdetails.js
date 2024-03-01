// Action creators are generated for each case reducer function

import {createSlice} from '@reduxjs/toolkit';

const cvDetailsSlice = createSlice({
	name: 'cvDetails',
	initialState: {
		name: {name: localStorage.getItem('name')},
		designation: localStorage.getItem('designation'),
		task: [],
	},
	reducers: {
		setValues: (state, action) => {
			state.name = action.payload;
			state.task.push('new');
		},
	},
});

export const {setValues} = cvDetailsSlice.actions;

export default cvDetailsSlice.reducer;
