import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  const [showStory, setShowStory] = useState(false)
  const [storySelected, SetStorySelected] = useState([])
  const [userSelected, SetUserSelected] = useState([])
  

  function handdleStory(story){
    const user = getUserHandler(story.userId)

    SetUserSelected(user)
    SetStorySelected(story)
    setShowStory(!showStory)
  }
  
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            // eslint-disable-next-line array-callback-return
            stories.map((story,index) => {
              if(!!getUserHandler(story.userId)){
                const {avatar, name} = getUserHandler(story.userId)
                return(
                <button
                key={story.id}
                onClick={()=>handdleStory(story)}
                className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}>
                  <div className="user__thumb__wrapper">
                    <img src={avatar} alt={name} />
                  </div>
                </button>
              )
              }
            })
          }
        </div>
      </section>
      {showStory && (
        <Story
        user={userSelected}
        story={storySelected}
        handleClose={() => setShowStory(!showStory)}/>
        )}
    </React.Fragment>
  );
};
export default Stories;
