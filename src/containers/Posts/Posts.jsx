import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      { posts &&
        posts.map(post =>{
          const userData = getUserHandler(post.userId)
          return <Post key={post.id} postInfo={post} userInfo={userData} />
        })
      }
    </section>
  </div>
);

export default Posts;
