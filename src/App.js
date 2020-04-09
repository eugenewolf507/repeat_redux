import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Timer from "./components/Timer/TimerContainer";
import StepSelector from "./components/StepSelector/StepSelector";
import PostList from "./components/PostList/PostListContainer";
import TagFilter from "./components/TagFilter/TagFilter";
import TotalLikes from "./components/TotalLikes";
import PostEditor from "./components/PostEditor/PostEditor";
import * as postsOperations from "./redux/posts/postsOperations";
// import posts from "./posts.json";

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  // {
  //   console.log(this.props.fetchPosts);
  //   this.props.fetchPosts(posts);
  // }
  render() {
    return (
      <div className="App">
        <Timer />
        <StepSelector />
        <hr style={{ width: "100%" }} />
        <PostEditor />
        <TagFilter />
        <TotalLikes />
        <PostList />
      </div>
    );
  }
}

// export default App;

const mDTP = {
  fetchPosts: postsOperations.fetchPosts,
};

export default connect(null, mDTP)(App);
