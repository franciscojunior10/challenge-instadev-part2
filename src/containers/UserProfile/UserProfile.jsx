import React from 'react';

import './UserProfile.scss';

import defatulImage from '../../assets/img/profile-placeholder.png'

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
              {
                avatar ?
                <img src={avatar} alt={name}/> :
                <img src={defatulImage} alt={name}/> 
              }
              </div>
            </div>
            <p className="user__name">
              {name}
              <span>{`@${username}`}</span>
            </p>
          </div>
        </div>
    </section>
  )
};

export default UserProfile;
