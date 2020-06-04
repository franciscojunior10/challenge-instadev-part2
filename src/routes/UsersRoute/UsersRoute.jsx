import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

import {get} from '../../utils/featchAPI' 

const UsersRoute = () => {

  const [users,setUsers] = useState([])

  useEffect(()=>{
    get('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
    .then(data=> setUsers(data))
  },[])

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;