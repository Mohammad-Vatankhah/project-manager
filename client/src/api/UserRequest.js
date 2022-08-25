import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (id) => API.get(`/user/${id}`);

export const updateUser = (id, formData) => API.put(`/user/${id}/update`, formData);
