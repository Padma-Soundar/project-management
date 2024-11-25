const { apiRequest } = require(".");

export const CreateProject = async (project) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/projects/create-project", project);

export const GetAllProjects = async (filters) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/projects/get-all-projects", filters);

export const GetProjectById = async (id) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/projects/get-project-by-id", { _id: id });

export const EditProject = async (project) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/projects/edit-project", project);

export const DeleteProject = async (id) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/projects/delete-project", { _id: id });

export const GetProjectsByRole = async (userId) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/projects/get-projects-by-role", { userId });

export const AddMemberToProject = async (data) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/projects/add-member", data);

export const RemoveMemberFromProject = async (data) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/projects/remove-member", data);
