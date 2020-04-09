import React, { Component } from "react";
import * as postOperations from "../../redux/posts/postsOperations";
import { connect } from "react-redux";

class PostEditor extends Component {
  state = { text: "", tag: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ text: "", tag: "" });
  };

  render() {
    const { text, tag } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="10"
          value={text}
          onChange={this.handleChange}
        ></textarea>
        <input
          type="text"
          name="tag"
          value={tag}
          onChange={this.handleChange}
        />
        <button type="submit">Add post</button>
      </form>
    );
  }
}

const mDTP = {
  onSubmit: postOperations.addPost,
};

export default connect(null, mDTP)(PostEditor);
