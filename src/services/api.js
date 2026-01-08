const API_URL = "https://python.sicsglobal.com/userdetails_api/users";

export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};
