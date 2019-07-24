import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 7866b9466619e10a70ab244343909a078ebee5197d53415f1b0815deaa5d18f5'
  }
});
