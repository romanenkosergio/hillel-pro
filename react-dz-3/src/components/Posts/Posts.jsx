import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const renderedPosts = posts
    .filter((post) => post.userId === parseInt(userId))
    .map((post) => <Post key={post.id} post={post}>{post.title}</Post>)

  return <div className="row">{renderedPosts}</div>;
};

export default Posts;
