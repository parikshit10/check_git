import React from 'react';
const ProfileCard = (props) =>
{
	var users = props.user
	console.log(users)
	var imgSrc = users.avatar_url

	if(typeof(users.login) === "string")
	{
		return(
		<div className="bg-white mw5 ba b--black-10 mv4">
			<div className="pv2 ph3">
    		 	<h1 className="f6 tracked">{users.login}</h1>
  			</div>
			<img className="w-100 db" src={imgSrc} />
			<p className="link lh-title">Name: {users.name}</p>
			<p className="link lh-title">Followers: {users.followers}</p>
			<p className="link lh-title">Following: {users.following}</p>
			<p className="link lh-title">Public Repos: {users.public_repos}</p>

		</div>
		);
	}
	else
	{
		return(
			<div>
			</div>
			)
	}
	
	

		
}

export default ProfileCard;