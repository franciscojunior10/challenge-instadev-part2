import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import {get} from '../../utils/featchAPI'

import './FeedRoute.scss';

const FeedRoute = () => {

  const [users,setUsers] = useState([])
  const [stories, setStories] = useState([])
  const [posts, setPosts] = useState([])
  const [indexUserFeatched, setIndexUserFeatched] = useState(0)

  const getUserPostById = (postUserId) => users.find(user => postUserId === user.id)
  
  useEffect(()=>{
    get('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
    .then(data => setUsers(data))
  },[])

  useEffect(()=>{
    get('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
    .then(data => setStories(data))
  },[users])

  useEffect( () => {
    if(indexUserFeatched < users.length){
      get(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[indexUserFeatched].id}/posts`)
      .then(data => {
          setPosts([...posts, ...data])
          setIndexUserFeatched(indexUserFeatched+1)
      })
    }
  },[users, indexUserFeatched, posts])
  
  return (
    <div data-testid="feed-route">
      {(
        users.length > 0 && stories.length > 0) && (
        <Stories stories={stories} getUserHandler={getUserPostById} />
      )}
      {
       posts.length !== 0 ?
      <Posts posts={posts} getUserHandler={getUserPostById}/> :
      <Loading />}
    </div>
  )
}

export default FeedRoute;