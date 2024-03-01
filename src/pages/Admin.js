import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setValues} from '../redux/features/cvdetails';
import Input from '../components/Input';

function Admin() {
	const [profile, setProfile] = useState({
		name:
			localStorage.getItem('name') == 'undefined'
				? ''
				: localStorage.getItem('name'),
		designation:
			localStorage.getItem('designation') == 'undefined'
				? ''
				: localStorage.getItem('designation'),
		phone:
			localStorage.getItem('phone') == 'undefined'
				? ''
				: localStorage.getItem('phone'),
		linkedinUrl:
			localStorage.getItem('phone') == 'undefined'
				? ''
				: localStorage.getItem('phone'),
		aboutMe:
			localStorage.getItem('aboutMe') == 'undefined'
				? ''
				: localStorage.getItem('aboutMe'),
	});
	const [job, setJob] = useState([{jobTitle: '', jobDetails: '', company: ''}]);
	const [skill, setSkill] = useState([]);
	const [hobby, setHobby] = useState([]);
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setProfile({[e.target.name]: e.target.value});
	};
	const handleSave = () => {
		dispatch(setValues({name: profile.name}));
		localStorage.setItem('name', profile.name);
		localStorage.setItem('designation', profile.designation);
		localStorage.setItem('phone', profile.phone);
		localStorage.setItem('linkedinUrl', profile.designation);
		localStorage.setItem('aboutMe', profile.aboutMe);
		let skillstring = JSON.stringify(skill);
		localStorage.setItem('skills', skillstring);
		let hobbytring = JSON.stringify(hobby);
		localStorage.setItem('hobby', hobbytring);
		let jobString = JSON.stringify(job);
		localStorage.setItem('job', jobString);
		alert('Details Saved');
	};
	const handleAddJob = () => {
		setJob([...job, {jobTitle: '', jobDetails: '', company: ''}]);
	};
	const handleChangeSkills = (e) => {
		const skills = e.target.value.split(' ');
		const filtereddata = skills.filter((item) => item != '');
		setSkill(filtereddata);
	};

	const handleChangeHobby = (e) => {
		const hobby = e.target.value.split(' ');
		const filtereddata = hobby.filter((item) => item != '');
		setHobby(filtereddata);
	};
	const handleChangeJob = (e, index) => {
		const allJob = [...job];
		allJob[index][e.target.name] = e.target.value;
		setJob(allJob);
	};
	return (
		<div className='flex-col justify-center content-center text-center items-center'>
			<p className='text-3xl font-bold capitalize'>Please enter the details</p>
			<div className='flex-col items-center justify-center text-center'>
				<div className='flex content-center justify-center'>
					<Input name='name' handleChange={handleChange} profile={profile} />
					<Input
						name='designation'
						handleChange={handleChange}
						profile={profile}
					/>
					<Input name='phone' handleChange={handleChange} profile={profile} />
					<Input name='aboutMe' handleChange={handleChange} profile={profile} />
				</div>
				<div className='flex flex-col items-center'>
					{job.map((item, index) => (
						<div className='flex flex-col items-center'>
							<Input
								name='jobTitle'
								handleChange={(e) => handleChangeJob(e, index)}
								profile={profile}
							/>
							<Input
								name='company'
								handleChange={(e) => handleChangeJob(e, index)}
								profile={profile}
							/>
							<Input
								name='jobDetails'
								handleChange={(e) => handleChangeJob(e, index)}
								profile={profile}
							/>
						</div>
					))}
					<div
						className=' p-1 border-t-2 border-b-2 border-dashed border-black capitalize h-max w-max hover:bg-sky-300 cursor-pointer'
						onClick={handleAddJob}>
						+ add employement
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<p className='font-light'>*enter skills seperated by space</p>
					<div class='w-72 m-5'>
						<div class='relative w-full min-w-[200px] h-10'>
							<input
								class='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900'
								placeholder=' '
								name='skill'
								// value={}
								onChange={handleChange}
								onBlur={handleChangeSkills}
							/>
							<label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
								Skill
							</label>
						</div>
					</div>
					<div className='flex'>
						{skill.map((item) => (
							<div className='bg-slate-400 m-1 w-max p-1 pl-2 pr-2 rounded-md'>
								{item}
							</div>
						))}
					</div>
				</div>

				<div className='flex flex-col justify-center items-center'>
					<p className='font-light'>*enter hobby seperated by space</p>
					<div class='w-72 m-5'>
						<div class='relative w-full min-w-[200px] h-10'>
							<input
								class='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900'
								placeholder=' '
								name='hobby'
								// value={}
								onChange={handleChange}
								onBlur={handleChangeHobby}
							/>
							<label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
								Hobby
							</label>
						</div>
					</div>
					<div className='flex '>
						{hobby.map((item) => (
							<div className='bg-slate-400 m-1 w-max p-1 pl-2 pr-2 rounded-md'>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>

			<button
				onClick={handleSave}
				className='bg-blue-700 rounded-md pl-3 pr-3 pt-1 pb-1 text-white capitalize'>
				save
			</button>
		</div>
	);
}

export default Admin;
