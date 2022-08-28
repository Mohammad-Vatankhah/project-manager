import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
export const getUser = (id) => API.get(`/user/${id}/get`);

export const updateUser = (id, formData) =>
  API.put(`/user/${id}/update`, formData);

export const getAllUser = () => API.get("/user/allUsers");

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data);

export const unfollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);

export const getByUsername = (username) =>
  API.get(`user/${username}/getByUsername`);
