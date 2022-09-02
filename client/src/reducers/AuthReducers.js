const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    case "UPDATING_START":
      return { ...state, loading: true, error: false };
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "UPDATING_FAIL":
      return { ...state, loading: false, error: true };
    case "FOLLOW_USER":
      console.log(action.data);

      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            followings: [...state.authData.user.followings, action.data],
          },
        },
      };
    case "UNFOLLOW_USER":
      console.log(action.data);
      return {
        ...state,
        authData: {
          ...state.authData,
          user: {
            ...state.authData.user,
            followings: [
              ...state.authData.user.followings.filter(
                (personId) => personId !== action.data
              ),
            ],
          },
        },
      };
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, loading: false, error: false };
    default:
      return state;
  }
};

export default authReducer;
