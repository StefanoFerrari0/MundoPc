import http from '../helpers/http-common';

class ProductService {
    getAll() {
      return http.get("/Product");
    }

    getById(id) {
      return http.get(`/Product/${id}`);
    }

    getByCode(code) {
      return http.get(`/Product/withCode?code=${code}`);
    }

    create(data) {
      return http.post("/Product", data);
    }
  
    update(id, data) {
      return http.put(`/Product/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/Product/${id}`);
    }
}
export default new ProductService();