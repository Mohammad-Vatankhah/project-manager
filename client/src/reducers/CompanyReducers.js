const companyReducer = (
  state = {
    companyData: [],
    loading: false,
    error: false,
    uploading: false,
    uploaded: false,
  },
  action
) => {
  switch (action.type) {
    case "COMPANY_START":
      return {
        ...state,
        loading: true,
        error: false,
        uploaded: false,
        uploading: false,
      };
    case "COMPANY_SUCCESS":
      return {
        ...state,
        companyData: action.data,
        loading: false,
        error: false,
        uploaded: true,
      };
    case "COMPANY_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        uploaded: false,
        uploading: false,
      };
    case "CREATE_START":
      return {
        ...state,
        loading: false,
        error: false,
        uploading: true,
        uploaded: false,
      };
    case "CREATE_SUCCESS":
      return {
        ...state,
        companyData: [action.data, ...state.companyData],
        loading: false,
        error: false,
        uploading: false,
        uploaded: true,
      };
    case "CREATE_FAIL":
      return { ...state, loading: false, error: true, uploaded: false };
    case "UPDATING_START":
      return { ...state, loading: true, error: true, uploaded: false, uploading: true };
    case "UPDATING_SUCCESS":
      const company = state.companyData.findIndex(
        (obj) => obj._id === action.data._id
      );
      state.companyData[company] = action.data;
      return {
        ...state,
        companyData: state.companyData,
        loading: false,
        error: false,
        uploaded: true,
      };
    default:
      return state;
  }
};

export default companyReducer;
