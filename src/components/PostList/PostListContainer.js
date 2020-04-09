import { connect } from "react-redux";
import { compose } from "redux";
import PostList from "./PostList";
import * as postSelectors from "../../redux/posts/postsSelectors";
import * as postsOperations from "../../redux/posts/postsOperations";
import withRenderLog from "../../hoc/withRenderLog";

const mapStateToProps = (state) => ({
  items: postSelectors.getPostsWithSelectedTag(state),
});

const mapDispatchToProps = { onDeletePost: postsOperations.deletePost };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRenderLog)(PostList);
