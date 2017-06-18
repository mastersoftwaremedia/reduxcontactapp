import { connect } from 'react-redux'
import Users from '../components/users'
import { fetchUsers, fetchUser } from '../actions'

const mapStateToProps = (state) => ({
  users: state.usersAll
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers:() => {
      dispatch(fetchUsers())
    },
    fetchUser:(user) => {
      dispatch(fetchUser(user))
    }
  }
}

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

export default UsersContainer