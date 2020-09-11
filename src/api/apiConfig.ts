const apiConfig = {
  USERS_PAGE: (page?: number): string => `api/users?page=${page}`,
};

export default apiConfig;
