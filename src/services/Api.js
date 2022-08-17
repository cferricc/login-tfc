import axios from "axios"


  const api = axios.create({
    baseURL: 'http://ELB-TFC-1697556660.us-east-1.elb.amazonaws.com',
    })

export default api;
