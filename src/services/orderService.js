import axios from 'axios';

const API_URL = 'https://your-backend-api.com';  // Pas dit aan naar jouw API URL

export default {
  getOrders() {
    return axios.get(`${API_URL}/orders`);
  },
  updateOrderStatus(orderId, status) {
    return axios.patch(`${API_URL}/orders/${orderId}`, { status });
  }
};
