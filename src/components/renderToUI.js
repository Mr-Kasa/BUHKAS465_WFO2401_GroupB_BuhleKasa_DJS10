import React from 'react';
import PropTypes from 'prop-types';

export default function RenderToUI({ posts }) {
  if (!Array.isArray(posts) || posts.length === 0) {
    return <h3>No posts available</h3>;
  }

  const postElements = posts.map((post) => {
    if (post && post.id && post.title && post.body) {
      return (
        <div key={post.id} className="postCard">
          <h2 className="postTitle">{post.id}. {post.title}</h2>
          <p className="postBody">{post.body}</p>
        </div>
      );
    } else {
      console.error('Missing required post properties:', post);
      return null;
    }
  });

  return (
    <div>
      <h1>Posts</h1>
      {postElements}
    </div>
  );
}

RenderToUI.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};
