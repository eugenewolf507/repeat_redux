export const ActionType = {
  FETCH_POSTS: "FETCH_POSTS",
  CHANGE_TAG: "CHANGE_TAG",
  DELETE_POST: "DELETE_POST",
};

export const fetchPosts = (posts) => ({
  type: ActionType.FETCH_POSTS,
  payload: posts,
});

export const deletePost = (id) => ({
  type: ActionType.DELETE_POST,
  payload: id,
});

export const changeTag = (tag) => ({
  type: ActionType.CHANGE_TAG,
  payload: tag,
});
