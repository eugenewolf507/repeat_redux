import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Timer from "./components/Timer/TimerContainer";
import StepSelector from "./components/StepSelector/StepSelector";
import PostList from "./components/PostList/PostListContainer";
import TagFilter from "./components/TagFilter/TagFilter";
import TotalLikes from "./components/TotalLikes";
import { fetchPosts } from "./redux/posts/postsActions";
import posts from "./posts.json";

class App extends Component {
  componentDidMount() {
    console.log(this.props.fetchPosts);
    this.props.fetchPosts(posts);
  }
  render() {
    return (
      <div className="App">
        <Timer />
        <StepSelector />
        <hr style={{ width: "100%" }} />
        <TagFilter />
        <TotalLikes />
        <PostList />
      </div>
    );
  }
}

// const mDTP = (dispatch) => ({
//   fetchPosts: (posts) => dispatch(postsActions.fetchPosts()),
// });

const mDTP = {
  fetchPosts,
};

export default connect(null, mDTP)(App);
