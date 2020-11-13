import http from '../helpers/http-common';

class TechnicalServiceService {
    getAll() {
      return http.get("/TechnicalService");
    }

    getById(id) {
      return http.get(`/TechnicalService/${id}`);
    }

    getByCode(code) {
      return http.get('/TechnicalService/withCode?code=' + code);
    }

    create(data) {
      return http.post("/TechnicalService", data);
    }
  
    update(id, data) {
      return http.put(`/TechnicalService/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/TechnicalService/${id}`);
    }
}
export default new TechnicalServiceService();