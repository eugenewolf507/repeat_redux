export const ActionType = {
  FETCH_POSTS_START: "FETCH_POSTS_START",
  FETCH_POSTS_SUCESS: "FETCH_POSTS_SUCESS",
  FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR",
  DELETE_POSTS_START: "DELETE_POSTS_START",
  DELETE_POSTS_SUCESS: "DELETE_POSTS_SUCESS",
  DELETE_POSTS_ERROR: "DELETE_POSTS_ERROR",
  ADD_POST_START: "ADD_POST_START",
  ADD_POST_SUCESS: "ADD_POST_SUCESS",
  ADD_POST_ERROR: "ADD_POST_ERROR",
  CHANGE_TAG: "CHANGE_TAG",
};

export const fetchPostsStart = () => ({
  type: ActionType.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => ({
  type: ActionType.FETCH_POSTS_SUCESS,
  payload: { posts },
});

export const fetchPostsError = (error) => ({
  type: ActionType.FETCH_POSTS_ERROR,
  payload: { error },
});

export const deletePostStart = () => ({
  type: ActionType.DELETE_POSTS_START,
});

export const deletePostSuccess = (id) => ({
  type: ActionType.DELETE_POSTS_SUCESS,
  payload: { id },
});

export const deletePostError = (error) => ({
  type: ActionType.DELETE_POSTS_ERROR,
  payload: { error },
});

export const addPostStart = () => ({
  type: ActionType.ADD_POST_START,
});

export const addPostSuccess = (post) => ({
  type: ActionType.ADD_POST_SUCESS,
  payload: { post },
});

export const addPostError = (error) => ({
  type: ActionType.ADD_POST_ERROR,
  payload: { error },
});

export const changeTag = (tag) => ({
  type: ActionType.CHANGE_TAG,
  payload: tag,
});
