import http from '../helpers/http-common';

class MessengerService {
    getAll() {
      return http.get("/Messenger");
    }

    getById(id) {
      return http.get(`/Messenger/${id}`);
    }

    create(data) {
      return http.post("/Messenger", data);
    }
  
    update(id, data) {
      return http.put(`/Messenger/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/Messenger/${id}`);
    }
}
export default new MessengerService();