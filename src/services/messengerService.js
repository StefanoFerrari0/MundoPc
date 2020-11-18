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

    sendFeedback (variables) {
      window.emailjs.send(
        //service_id       template_id
        'service_u9e7d0c', 'template_jtxh4ni',
        variables
      ).then(res => {
        console.log('Email enviado!')
      }).catch(err => 
        console.error('Bueno algo fallo. Aquí hay algunos detalles de lo que ocurrió:', err)
      )
    }
}
export default new MessengerService();