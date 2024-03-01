import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

function Profile() {
	const [name, setName] = useState();
	const [position, setPosition] = useState();
	const [aboutme, setAboutme] = useState();
	const [linkedinUrl, setlinkedinUrl] = useState();
	const [phone, setPhone] = useState();
	const [skills, setSkills] = useState([]);
	const [hobby, setHobby] = useState([]);
	useEffect(() => {
		setName(localStorage.getItem('name'));
		const pos =
			localStorage.getItem('designation') != 'undefined'
				? localStorage.getItem('designation')
				: '';
		setPosition(pos);
		setAboutme(localStorage.getItem('aboutMe'));
		setlinkedinUrl(localStorage.getItem('linkedinUrl'));
		const mobile =
			localStorage.getItem('phone') != 'undefined'
				? localStorage.getItem('phone')
				: '';
		setPhone();
		setSkills(JSON.parse(localStorage.getItem('skills')));
		setHobby(JSON.parse(localStorage.getItem('hobby')));
	});
	return (
		<div className='bg-[#084C40] text-white rounded-tl-lg pt-5 w-[100%] min-h-lvh flex flex-col text-center items-center'>
			{name != 'undefined' && (
				<p className='text-5xl font-bold capitalize'>{name}</p>
			)}
			{name == 'undefined' && (
				<p className='text-gray-400'>Name goes here...</p>
			)}
			<br />
			<p className='border-b-2 border-white w-[20%]'></p>
			<br />
			<p>{position}</p>
			<p>{phone}</p>
			{/* <a href={'https://www.zomato.com/india'} target='tab'>
				linkdin
			</a> */}
			<br />
			<p className='text-xl font-semibold'>Skills</p>
			<p className='border-b-2 border-white w-[20%]'></p>
			{skills.length == 0 && <p className='text-gray-400'>add skills</p>}

			{skills?.map((item) => (
				<p className='capitalize'>{item}</p>
			))}
			<br />
			<p className='text-xl font-semibold'>Hobby</p>
			<p className='border-b-2 border-white w-[20%]'></p>
			{hobby.length == 0 && <p className='text-gray-400'>add hobby</p>}

			{hobby?.map((item) => (
				<p className='capitalize'>{item}</p>
			))}
		</div>
	);
}

export default Profile;
