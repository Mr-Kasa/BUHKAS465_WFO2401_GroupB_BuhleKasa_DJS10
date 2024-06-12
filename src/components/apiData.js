import React from 'react';
import RenderToUI from './renderToUI';
import errorImage from '../error-message.png';

export default function ApiData() {
  // State to store the fetched posts data
  const [posts, setPosts] = React.useState([]);
  // State to store any error message encountered during the fetch
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // Function to fetch posts data from the API
    const fetchPosts = async () => {
      try {
        // Fetch data from the API
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Check if the response status is not OK
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Parse the response JSON
        const data = await res.json();
        console.log('API response:', data);

        // Validate that the data is an array and not empty
        if (Array.isArray(data) && data.length > 0) {
          // Set the fetched posts data to state
          setPosts(data);
        } else {
          // Set error message for invalid data format or empty response
          setError('Invalid data format or empty response');
          console.error('Invalid data format or empty response:', data);
        }
      } catch (error) {
        // Set error message if fetch fails
        setError(error.message);
        console.error('Error fetching the posts:', error);
      }
    };

    // Invoke the fetchPosts function to fetch data
    fetchPosts();
  }, []); // Empty dependency array ensures this effect runs only once

  // Render error image if there's an error
  if (error) {
    return <img src={errorImage} alt="Error" />;
  } 
  // Render the posts using the RenderToUI component if posts are available
  else if (posts.length > 0) {
    return <RenderToUI posts={posts} />;
  } 
  // Render a loading message while the data is being fetched
  else {
    return <h3>Loading...</h3>;
  }
}
