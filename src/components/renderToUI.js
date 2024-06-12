
import React from 'react';

export default function RenderToUI({ posts }) {
  const postElements = posts.map((post) => {
    if (post) {
      return (
        <div key={post.id} className="postCard">
          <h2 className="postTitle">{post.id}.  {post.title}</h2>
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
            
            </div>);
}
