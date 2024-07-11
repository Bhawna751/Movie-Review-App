import axios from 'axios';
export default axios.create({
    baseURL:' https://da08-103-161-223-11.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning":"true"}
});