import React, { Component, Fragment } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setUsers } from './actions'
import { getUsersFromAPI } from './actions'

class Users extends Component {

getUsers=()=> {
  this.props.getUsersFromAPI()
}
  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
          {/* Map through users here */}
          {this.props.users.map(user=>{
            return <div>
              <ol>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.website}</li>
              </ol>
              </div>
          })}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersFromAPI: () => dispatch(getUsersFromAPI())
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(Users);

