import axiosBE from "./axios";

export const getPosts = async (params = {}) => {
  const { data = [] } = await axiosBE.get("/posts", { params });
  return data;
};

export const getPostById = async (id, params = {}) => {
  const post = await axiosBE.get(`/posts/${id}`, { params });
  return post;
};
