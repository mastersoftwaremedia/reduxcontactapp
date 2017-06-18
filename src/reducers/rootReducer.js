import {combineReducers} from 'redux'
import usersAll from './usersAll'
import userProfile from './userProfile'

const rootReducer=combineReducers({
	usersAll:usersAll,
	userProfile:userProfile
})
export default rootReducer