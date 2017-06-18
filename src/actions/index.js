import axios from 'axios'

export function fetchUsers(){
	return {
		type: 'FETCH_USERS',
		payload: axios.get(`https://randomuser.me/api/?results=10`)
	}
}

export function fetchUser(user){
	return {
		type: 'FETCH_USER',
		payload: user
	}
}