const initalState={
	users:[],
	loading:false,
	error:null
}
// REDCUER
function usersAll(state=initalState,action){
	let users
	switch (action.type) {
		case 'FETCH_USERS_PENDING':
			return { ...state, loading: true }
		case 'FETCH_USERS_FULFILLED':
			users = action.payload.data.results
			return { ...state, loading: false, users }
		case 'FETCH_USERS_REJECTED':
			return { ...state, loading: false, error:`${action.payload.message}`}
		default:
			return state
	}
}
export default usersAll
