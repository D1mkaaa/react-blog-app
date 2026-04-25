import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    try {
      const params = {};
      if (limit !== -1) {
        params._limit = limit;
        params._page = page;
      }
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        { params }
      );
      return response;
    } catch (error) {
      console.error("Ошибка загрузки постов:", error);
      throw error;
    }
  }

  static async getByID(id) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return response;
    } catch (error) {
      console.error(`Ошибка загрузки поста ${id}:`, error);
      throw error;
    }
  }

  static async getCommentsByPostId(id) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      return response;
    } catch (error) {
      console.error(`Ошибка загрузки комментариев к посту ${id}:`, error);
      throw error;
    }
  }
}