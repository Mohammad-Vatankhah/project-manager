const companyReducer = (
  state = {
    companyData: [],
    loading: false,
    error: false,
    uploading: true,
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
      return {
        ...state,
        loading: false,
        error: true,
        uploaded: false,
        uploading: false,
      };
    case "UPDATING_C_START":
      return {
        ...state,
        loading: true,
        error: false,
        uploaded: false,
        uploading: true,
      };
    case "UPDATING_C_SUCCESS":
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
        uploading: false,
      };
    case "UPDATING_C_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        uploaded: false,
        uploading: false,
      };
    default:
      return state;
  }
};

export default companyReducer;
