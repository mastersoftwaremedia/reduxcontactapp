import React from 'react'

const UserProfile=(props)=>{
	const {user}=props
	return(
		user ?
			<div className="container">
				<img src={`${user.picture.large}`} alt="pic"/>
				<span>{`${user.name.title}, ${user.name.first} ${user.name.last}`}</span>
				<span>{user.email}</span>
			</div>
			: <h1>Select a member to start</h1>
	)
}

export default UserProfile