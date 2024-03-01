import React, {useState, useEffect} from 'react';

function About() {
	const [name, setName] = useState();
	const [position, setPosition] = useState();
	const [aboutme, setAboutme] = useState();
	useEffect(() => {
		setName(localStorage.getItem('name'));
		setPosition(localStorage.getItem('designation'));
		setAboutme(localStorage.getItem('aboutMe'));
	});
	return (
		<div>
			<p className='font-semibold font-serif text-2xl'>About Me</p>
			<p>{aboutme}</p>
		</div>
	);
}

export default About;
