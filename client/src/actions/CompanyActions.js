import * as CompanyApi from "../api/CompanyRequests";

export const getUserCompanies = (id) => async (dispatch) => {
  dispatch({ type: "COMPANY_START" });
  try {
    const { data } = await CompanyApi.getUserCompanies(id);
    dispatch({ type: "COMPANY_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "COMPANY_FAIL" });
  }
};

export const createCompany = (data) => async (dispatch) => {
  dispatch({ type: "CREATE_START" });
  try {
    const company = await CompanyApi.createCompany(data);
    dispatch({ type: "CREATE_SUCCESS", data: company.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "CREATE_FAIL" });
  }
};
