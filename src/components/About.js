import React, {useState, useEffect} from 'react';

function About() {
	const [aboutme, setAboutme] = useState();
	useEffect(() => {
		setAboutme(localStorage.getItem('aboutMe'));
	});
	return (
		<div>
			<p className='font-semibold font-serif text-2xl'>About Me</p>
			{aboutme != 'undefined' ? (
				<p>{aboutme}</p>
			) : (
				<p className='text-gray-400'>add about me...</p>
			)}
		</div>
	);
}

export default About;
