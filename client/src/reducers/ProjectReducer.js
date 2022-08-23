const projectReducer = (
  state = {
    project: [],
    loading: false,
    error: false,
    uploading: false,
    uploaded: false,
  },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, uploading: true, error: false, uploaded: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        project: [action.data, ...state.project],
        uploading: false,
        error: false,
        uploaded: true,
      };
    case "UPLOAD_FAIL":
      return { ...state, error: true, uploading: false, uploaded: false };

    default:
      return state;
  }
};

export default projectReducer;
