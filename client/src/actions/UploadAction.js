import * as UploadApi from "../api/UploadRequest";
export const uploadImage = (data) => async (dispatch) => {
  try {
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const uploadProject = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newProjectّ = await UploadApi.uploadProject(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newProjectّ.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
