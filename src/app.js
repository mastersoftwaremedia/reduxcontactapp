import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'
import Users from './containers/users'
import UserProfile from './containers/userProfile'

class App extends Component{
	render(){
		return(
			<div>
				<nav>
					<div className="member">Meet Up Members</div> 					
					<Link to="/users" className="member2">Users</Link>
				</nav>
				<Route exact path="/users" component={Users} />
				<Route path="/users:_id" component={UserProfile} />
			</div>
		)
	}
}
export default App