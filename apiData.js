import React from "react";

export default function ApiData() {

  React.useEffect(() => {
    async function postData() {
      let data 
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
         data = await response.json();
        console.log(`Data successfully retrieved from API.`);
      } 
      catch (err) {
        console.log(err.message);
      }
      return data
    }
    postData();
  }, []);

 
}
