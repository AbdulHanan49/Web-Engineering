import React from "react";

function UserInfoCard({ userData }) {
	return (
		<div className="datacontainer">
			{userData.avatar_url ? (<div className="dataitem"><img src={userData.avatar_url}alt="avatar" /></div>) : (<div></div>)}
			{userData.login ? (<div className="dataitem">Login :  {userData.login}</div>) : (<div></div>)}
			{userData.name ? (<div className="dataitem">Name :  {userData.name}</div>) : (<div></div>)}
			{userData.blog ? (<div className="dataitem">Blog:  {userData.blog}</div>) : (<div></div>)}
			{userData.location ? (<div className="dataitem">Location:  {userData.location}</div>):(<div></div>)}
			{userData.public_repos ? (<div className="dataitem">Public Repository:  {userData.public_repos}</div>):(<div></div>)}
			{userData.followers ? (<div className="dataitem">Followers:  {userData.followers}</div>):(<div></div>)}
            {userData.following ? (<div className="dataitem">Following:  {userData.following}</div>):(<div></div>)}
			{userData.html_url ? (<div className="dataitem" >URL: <a id="ur" href={userData.html_url}>Click Me</a></div>) : (<div></div>)}
		</div>
	);
}

export default UserInfoCard;
