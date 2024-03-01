import React, {useState, useEffect} from 'react';

function Employement() {
	const [employement, setEmployement] = useState(
		JSON.parse(localStorage.getItem('job'))
	);
	return (
		<div>
			<p className='font-semibold font-serif text-2xl'>Work History</p>
			<br />
			{employement?.map((item) => (
				<div>
					<p className='font-semibold text-lg'>{item.jobTitle}</p>
					<p className='font-semibold'>{item.company}</p>
					<p className=''>{item.jobDetails}</p>
					<br />
					<br />
				</div>
			))}
		</div>
	);
}

export default Employement;
