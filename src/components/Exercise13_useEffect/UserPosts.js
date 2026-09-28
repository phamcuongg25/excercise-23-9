import React, { useEffect, useState } from "react";

function UserPosts({ userId = 1 }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );

      const data = await response.json();
      setPosts(data);
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h3>User Posts - User {userId}</h3>

      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default UserPosts;
