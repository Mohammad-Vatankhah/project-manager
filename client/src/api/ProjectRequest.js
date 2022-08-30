import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getTimelinePost = (id) => API.get(`/project/${id}/timeLine`);
export const likePost = (id, currentUserId) =>
  API.put(`project/${id}/likeProject`, { currentUserId });

export const addComment = (id, data) =>
  API.put(`/project/${id}/addComment`, data);

export const getProject = (id) => API.get(`/project/${id}/getProject`);

export const getUserProject = (id) => API.get(`/project/${id}/getUserProjects`);
