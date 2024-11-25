const { apiRequest } = require(".");

export const AddNotification = async (notification) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/notifications/add-notification", notification);

export const GetAllNotifications = async () => apiRequest("get", "https://project-management-d5e2.onrender.com/api/notifications/get-all-notifications");

export const MarkNotificationAsRead = async (id) => apiRequest("post", "https://project-management-d5e2.onrender.com/api/notifications/mark-as-read");

export const DeleteAllNotifications = async () => apiRequest("delete", "https://project-management-d5e2.onrender.com/api/notifications/delete-all-notifications");
