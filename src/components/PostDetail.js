import React, { Component } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPostById, deletePost } from "../services/postService";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  async componentDidMount() {
    const { id } = this.props.params;
    try {
      const post = await getPostById(id);
      this.setState({ post });
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  handleDelete = async () => {
    const { id } = this.props.params;
    try {
      await deletePost(id);
      this.props.navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  render() {
    const { post } = this.state;

    if (!post) return <p>Loading...</p>;

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to={`/posts/form/${post.id}`}>Edit</Link>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

// Wrap PostDetail with a function to use hooks
const PostDetailWrapper = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return <PostDetail {...props} params={params} navigate={navigate} />;
};

export default PostDetailWrapper;
