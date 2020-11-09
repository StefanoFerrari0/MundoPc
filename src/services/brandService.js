import http from '../helpers/http-common';

class BrandService {
    getAll() {
      return http.get("/Brand");
    }

    getById(id) {
      return http.get(`/Brand/${id}`);
    }

    create(data) {
      return http.post("/Brand", data);
    }
  
    update(id, data) {
      return http.put(`/Brand/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/Brand/${id}`);
    }
}
export default new BrandService();