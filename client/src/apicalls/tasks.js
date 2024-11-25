import { apiRequest } from ".";

export const CreateTask = async (task) =>
  apiRequest("post", "https://project-management-d5e2.onrender.com/api/tasks/create-task", task);

export const GetAllTasks = async (filters) =>
  apiRequest("post", "https://project-management-d5e2.onrender.com/api/tasks/get-all-tasks", filters);

export const UpdateTask = async (task) =>
  apiRequest("post", "https://project-management-d5e2.onrender.com/api/tasks/update-task", task);

export const DeleteTask = async (id) =>
  apiRequest("post", "https://project-management-d5e2.onrender.com/api/tasks/delete-task", { _id: id });

export const UploadImage = async (payload) => {
  return apiRequest("post", "https://project-management-d5e2.onrender.com/api/tasks/upload-image", payload);
};
