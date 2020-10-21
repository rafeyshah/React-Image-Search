import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qfzABGfcea8G3wsd9X8J42DkLALWe8nRJkAfJitbK4k'
    }
});