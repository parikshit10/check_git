import React from 'react';
const SearchBox = (props) =>
{
	var prof = "profile" + props.userNum;
	return(
		<div>
			<label className="f6 b db mb2">Git Profile {props.userNum}</label>
			<textarea id={prof} name="ggit" className="db border-box hover-black w-50 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
		</div>
		)
}

export default SearchBox;