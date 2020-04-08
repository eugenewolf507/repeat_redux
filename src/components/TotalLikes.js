import React from "react";
import { connect } from "react-redux";
import * as postSelectors from "../redux/posts/postsSelectors";

const TotalLikes = ({ likes }) => <h1>Total likes: {likes}</h1>;

const mapStateToProps = (state) => ({
  likes: postSelectors.countTotalLikes(state),
});

export default connect(mapStateToProps)(TotalLikes);
