import React, { Component, Fragment } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';


class Users extends Component {
state = {
  users: []
}

getUsers=()=> {
}
  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.state.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
          {/* Map through users here */}
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
    setUsers: (users) => dispatchEvent(setUsers(users))
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(Users);
