import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import defatulImage from '../../assets/img/profile-placeholder.png'

const User = ({ infoUser })  => {
  const location = useLocation()

  const {avatar, name, username, } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link className="user" to={`${location.pathname}/${username}`}>
          <div className="user__thumb">
            {
            avatar ?
            <img src={avatar} alt={name} /> :
            <img src={defatulImage} alt={name} />
            }
          </div>
          <div className="user__name">{infoUser.name}</div>
        </Link>
      </header>
    </article>
  )
};

export default User;
