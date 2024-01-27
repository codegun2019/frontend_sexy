// Feed.jsx
import React from 'react';

const Feed = ({ feed }) => {
  return (
    <div className="feed-item">
      <img src={feed.media_url} alt={feed.caption} />
      <p>{feed.caption}</p>
    </div>
  );
};

export default Feed;
