import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/records/';


class RecordService {
  getContent() {
    return axios.get(API_URL, { headers: authHeader() })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Erro ao obter a lista de itens:', error);
      });
  }
}

export default new RecordService();