import React, {useEffect, useState} from 'react';
import About from '../components/About';
import Profile from '../components/Profile';
import Employement from '../components/Employement';

function Cv() {
	return (
		<div className='flex ml-[10%] mr-[10%]  mt-[2%] min-h-lvh border-blue-500 border-b-2'>
			<div className='w-[30%] '>
				<Profile />
			</div>
			<div className='w-[70%] ml-20'>
				<div>
					<About />
					<br />
					<Employement />
				</div>
			</div>
		</div>
	);
}

export default Cv;
