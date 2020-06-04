import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {

  const [follow,setFollow] = useState(false)
  const [like, setLike] = useState(false)
  const [likesCounter, setLikesCounter] = useState(postInfo.comments.length)

  function countLike(){
    like ? setLikesCounter(likesCounter-1) : setLikesCounter(likesCounter+1)
    setLike(!like)
  }

  return (
    <article className="post" data-testid="post">
      {userInfo &&
      <header className="post__header">
        <div className="user">
        <Link to={`/users/${userInfo.username}`} className="user__thumb">
          <img src={userInfo.avatar} alt={userInfo.name}/>
        </Link>
        <Link to={`/users/${userInfo.username}`} className="user__name">
            {userInfo.name}
        </Link>
        </div>
        <button className="post__context" onClick={()=>setFollow(!follow)}>
          {
          follow ?
          <span className="follow-btn is-following">Segindo</span> :
          <span className="follow-btn">seguir</span>
          }
        </button>
      </header>
      }
      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt=""/>
      </figure>
      {userInfo && postInfo.comments.length > 0 &&
      <nav className="post__controls">
        <button className="post__control" onClick={()=>countLike()}>
          {
          like ?
            <i className="fas fa-heart"></i> :
            <i className="far fa-heart"></i>
          }
        </button>
        <div className="post__status">
          <div className="user">
            <span>
            Curtido por <Link to="/">{postInfo.comments[0].name+" "}</Link> 
            e outra <Link to="/">{likesCounter} pessoa.</Link>
            </span>
          </div>
        </div>
      </nav>
      }
    </article>
  );
};


export default Post;
