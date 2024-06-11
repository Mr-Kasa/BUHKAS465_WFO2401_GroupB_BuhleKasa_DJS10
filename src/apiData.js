export const apiData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};
