// src/components/PostList.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../services/postService";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const posts = await getPosts();
      this.setState({ posts });
    } catch (error) {
      this.setState({ error: "Error fetching posts" });
    }
  }

  render() {
    const { posts, error } = this.state;

    return (
      <div>
        <h2>Blog Posts</h2>
        {error && <p>{error}</p>}
        {posts.length === 0 ? (
          <p>No posts to display</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                {/* <p>{post.content.slice(0, 100)}...</p>{" "}
                Assuming you want a preview */}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default PostList;
