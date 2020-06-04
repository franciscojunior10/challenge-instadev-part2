import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import {get} from '../../utils/featchAPI' 

const ProfileRoute = () => {

  const location = useLocation()
  const [profile,setProfile] = useState({})
  const [userPosts, setUserPosts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const userName = location.pathname.split("/")[2]
    get(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${userName}`)
    .then(data=>setProfile(data[0]))
  })

  useEffect(() => {
    if(profile.id){
      get(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${profile.id}/posts`)
      .then(data=>{
        setUserPosts(data)
        setLoading(false)
      })
    }
  }, [profile])
  
  return  (<div data-testid="profile-route">
        {
         loading ?
         <Loading />:
        <>
          <UserProfile
          avatar={profile.avatar}
          name={profile.name}
          username={profile.username} />
          <UserPosts posts={userPosts} />
        </>
        }
    </div>)
  
}

export default ProfileRoute;
