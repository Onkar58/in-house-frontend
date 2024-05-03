import axios from "axios";

const _axios = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL,
  timeout: 5000,
});
// _axios.defaults.timeout = 5000;
_axios.interceptors.request.use(
  (req) => {
    document.getElementById("loader").classList.add("showSpinner");
    console.log("Request Passed", req);
    return req;
  },
  (error) => {
    console.log("Error in interceptor Req", error);
    return error;
  },
);
_axios.interceptors.response.use(
  (req) => {
    document.getElementById("loader").classList.remove("showSpinner");
    console.log("Response Passed", req);
    return req?.data;
  },
  (error) => {
    console.log("Error in interceptor Res", error);
    return error;
  },
);

export { _axios };
