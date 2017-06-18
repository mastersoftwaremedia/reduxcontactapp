import React,{Component} from 'react'
import Button from './button'
import UserItem from './userItem'

class Users extends Component{
  render() {
    const { users, fetchUsers, fetchUser } = this.props
    return (
      <div className='container'>
        <Button
          onClick={fetchUsers}
          text={'Fetch Users'}
          className={'btn btn-blue'}/>
        <div id={'users'}>
          {users.users.map((user, i) => {
            return <UserItem
              key={i}
              user={user}
              onClick={() => fetchUser(user)}/>
          })}
        </div>
      </div>
    )
  }
}

export default Users