import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [duration, setDuration] = useState([]);
  const [currentTime, setCurrentTime] = useState([])

  const updateProgress = useCallback(
    () => {
    if (duration !== null  && currentTime !== null) {
      const elapsedTime = ((currentTime / duration) * 100);

      return `${elapsedTime.toFixed(2)}%`;
    }

    return '0%';
  }, [duration, currentTime]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`/userser/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.name}/>
            </Link>
            <Link to={`/userser/${user.username}`} className="user__name">
              {user.name}
            </Link>
          </div>
          <button className="story__close" onClick={()=>handleClose()}>
          <i className="fas fa-times"></i>
          </button>
        </header>
        <div className="story__progress">
          <div
              style={{ width: updateProgress()}}
              className="story__progress__elapsed"
            />
          </div>
      </div>
      {story.videoUrl &&
      (<div className="container">
        <section className="story__video__wrapper">
        <video
         autoPlay
         className="video-player"
         loop
          playsInline
          onLoadedMetadata={e => setDuration(e.target.duration)}
          src={story.videoUrl} onTimeUpdate={e => setCurrentTime(e.target.currentTime)}></video>
        </section>
      </div>)
      }
    </section>
  );
};

export default Story;
