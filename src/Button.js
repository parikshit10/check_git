import React from 'react';

const Button = () => 
{
	return(
		<div>
			<button input="button" onClick={() => {console.log(document.getElementById('profile1').value)}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black" >Search</button>
		</div>
		);
}
export default Button;