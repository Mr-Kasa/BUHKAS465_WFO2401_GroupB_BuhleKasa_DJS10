import React from 'react';
import PropTypes from 'prop-types';

export default function RenderToUI({ posts }) {
  // Check if the posts prop is a valid array and not empty
  if (!Array.isArray(posts) || posts.length === 0) {
    return <h3>No posts available</h3>;
  }

  // Map through the posts array to create an array of JSX elements
  const postElements = posts.map((post) => {
    // Check if the post object has the required properties
    if (post && post.id && post.title && post.body) {
      return (
        <div key={post.id} className="postCard">
          <h2 className="postTitle">{post.id}. {post.title}</h2>
          <p className="postBody">{post.body}</p>
        </div>
      );
    } else {
      // Log an error if the post object is missing required properties
      console.error('Missing required post properties:', post);
      return null;
    }
  });

  // Return the list of posts wrapped in a containing div
  return (
    <div>
      <h1>Posts</h1>
      {postElements}
    </div>
  );
}

// Define propTypes for the component to enforce the shape of the posts prop
RenderToUI.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};
