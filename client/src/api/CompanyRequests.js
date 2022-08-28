import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUserCompanies = (id) =>
  API.get(`/company/${id}/getUserCompanies`);

export const createCompany = (formData) =>
  API.post("/company/createCompany", formData);

export const getCompanyByUsername = (username) =>
  API.get(`/company/${username}/getCompanyByUsername`);
