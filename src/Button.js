import React from 'react';

const Button = (props) => 
{
	var handleToUpdate = props.handler
	var sel = "profile" + props.userNum;
	return(
		<div>
			<button input="button" onClick={() => {handleToUpdate(document.getElementById(sel).value)}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black" >Search</button>
		</div>
		);
}
export default Button;