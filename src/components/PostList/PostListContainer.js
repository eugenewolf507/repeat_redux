import { connect } from "react-redux";
import { compose } from "redux";
import PostList from "./PostList";
import * as postSelectors from "../../redux/posts/postsSelectors";
import { deletePost } from "../../redux/posts/postsActions";
import withRenderLog from "../../hoc/withRenderLog";

const mapStateToProps = (state) => ({
  items: postSelectors.getPostsWithSelectedTag(state),
});

const mapDispatchToProps = { deletePost };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRenderLog)(PostList);
