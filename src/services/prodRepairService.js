import http from '../helpers/http-common';

class ProductRepairService {
    getAll() {
      return http.get("/ProductRepair");
    }

    getById(id) {
      return http.get(`/ProductRepair/${id}`);
    }

    getByCode(code) {
      return http.get(`/ProductRepair/withCode?code=${code}`);
    }

    create(data) {
      return http.post("/ProductRepair", data);
    }
  
    update(id, data) {
      return http.put(`/ProductRepair/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/ProductRepair/${id}`);
    }
}
export default new ProductRepairService();