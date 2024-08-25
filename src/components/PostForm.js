// src/components/PostForm.js
import React, { Component } from "react";
import { createPost, updatePost, getPostById } from "../services/postService";
import { useParams, useNavigate } from "react-router-dom";

class PostForm extends Component {
  state = {
    title: "",
    content: "",
    error: null,
  };

  async componentDidMount() {
    const id = this.props.id;
    if (id) {
      try {
        const post = await getPostById(id);
        this.setState({ title: post.title, content: post.content });
      } catch (error) {
        this.setState({ error: "Error fetching post" });
      }
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    const id = this.props.id;

    if (!title || !content) {
      this.setState({ error: "Title and content are required" });
      return;
    }

    try {
      if (id) {
        await updatePost(id, { title, content });
      } else {
        await createPost({ title, content });
      }
      this.props.navigate("/");
    } catch (error) {
      this.setState({ error: "Error saving post" });
    }
  };

  render() {
    const { title, content, error } = this.state;

    return (
      <div>
        <h2>{this.props.id ? "Edit Post" : "Create Post"}</h2>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              name="content"
              value={content}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

const PostFormWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return <PostForm id={id} navigate={navigate} />;
};

export default PostFormWrapper;
