import http from '../helpers/http-common';

class CategoryService {
    getAll() {
      return http.get("/Category");
    }

    getById(id) {
      return http.get(`/Category/${id}`);
    }

    create(data) {
      return http.post("/Category", data);
    }
  
    update(id, data) {
      return http.put(`/Category/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/Category/${id}`);
    }
}
export default new CategoryService();