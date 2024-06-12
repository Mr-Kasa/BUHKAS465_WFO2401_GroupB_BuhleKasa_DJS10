import React from 'react';
import RenderToUI from './renderToUI';
import errorImage from '../error-message.png';

export default function ApiData() {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log('API response:', data);

        if (typeof data === 'object' && Object.keys(data).length > 0) {
          const postsArray = Object.values(data); 
          setPosts(postsArray);
        } else {
          setError('Invalid data format');
          console.error('Posts data is not an object or empty:', data);
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching the posts:', error);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <img src={errorImage} alt="Error" />;
  } else if (posts.length > 0) {
    return <RenderToUI posts={posts} />;
  } else {
    return <h3>Loading...</h3>;
  }
}
