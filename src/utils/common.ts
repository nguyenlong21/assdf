import { getAccessToken, getRefreshToken, setToken, clearUserSession, getExpiredTime } from './localStorageHelper';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import { BASE_API_URL, MVC_URL } from './constants';

export const history = createBrowserHistory();

export const MaintainSession = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const isParams = urlParams.get('username');
  const token = getAccessToken(); //get info token
  const currentPath = window.location.pathname;
  const expiredTime = Date.parse(getExpiredTime()); //lấy hạn sử dụng của token
  const dateNow = Date.now();

  // if (token) {
  //   // Nếu token hết hạn thì đăng xuất về trang login của web MVC
  //   if (dateNow > expiredTime) {
  //     clearUserSession();
  //     history.push('/login');
  //     window.location.reload();
  //   }
  //   //check token tồn tại hay không nếu có thì trả về trang chủ không thì trang login
  //   if (currentPath === '/' || currentPath === '/login') {
  //     history.push('/');
  //   }
  //   if (currentPath === '/logout') {
  //     clearUserSession();
  //   }
  // } else {
  //   history.push('/login');
  // }

  if (process.env.NODE_ENV === 'production') {
    if (token) {
      // Nếu token hết hạn thì đăng xuất về trang login của web MVC
      if (dateNow > expiredTime) {
        clearUserSession();
        window.location.assign(`${MVC_URL}/Permission/Auth/Login`);
      }
      //check token tồn tại hay không nếu có thì trả về trang chủ không thì trang login
      if (currentPath === '/' || currentPath === '/login') {
        history.push('/');
      }

      if (currentPath === '/logout') {
        clearUserSession();
        window.location.assign(`${MVC_URL}/Permission/Auth/Logout`);
        window.location.reload();
      }
    } else {
      // nếu url == '/login?username=user&password=password thì không redirect
      if (!isParams) {
        if (currentPath === '/logout') {
          window.location.assign(`${MVC_URL}/Permission/Auth/Login`);
        } else window.location.assign(`${MVC_URL}/Permission/Auth/Logout`);
      }
    }
  } else if (process.env.NODE_ENV === 'development') {
    if (token) {
      // Nếu token hết hạn thì đăng xuất về trang login của web MVC
      if (dateNow > expiredTime) {
        clearUserSession();
        history.push('/login');
        window.location.reload();
      }
      //check token tồn tại hay không nếu có thì trả về trang chủ không thì trang login
      if (currentPath === '/' || currentPath === '/login') {
        history.push('/');
      }
      if (currentPath === '/logout') {
        clearUserSession();
      }
    } else {
      history.push('/login');
    }
  }
};

export const checkToken = () => {
  const token = getAccessToken();
  return token ? true : false;
};

export const setAuthHeader = () => {
  const token = getAccessToken();

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    addRefreshToken();
  }
};
export const removeAuthHeader = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const addRefreshToken = () => {
  let isRefreshing = false;
  const interceptor = axios.interceptors.response.use(
    (response) => {
      return response;
    },

    async (error) => {
      const originalRequest = error.response.config;

      if (error.response.status !== 401) {
        return Promise.reject(error);
      }
      if (error.response.status === 401 && originalRequest.url === `${BASE_API_URL}/Permission/Auth/RefreshToken`) {
        clearUserSession();
        // history.push('auth/login');
        return Promise.reject(error);
      }

      /*
       * When response code is 401, try to refresh the token.
       * Eject the interceptor so it doesn't loop in case
       * token refresh causes the 401 response
       */
      // axios.interceptors.response.eject(interceptor);
      if (error.response.status === 401) {
        if (!isRefreshing) {
          isRefreshing = true;
          return await axios
            .post(`${BASE_API_URL}/Permission/Auth/RefreshToken`, {
              accessToken: getAccessToken(),
              refreshToken: getRefreshToken(),
            })
            .then(({ data }) => {
              const result = data;
              setToken(result.data.accessToken);
              axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken.token}`;
              return axios(originalRequest);
            })
            .catch((error) => {
              return Promise.reject(error);
            })
            .finally(() => {
              isRefreshing = false;
            });
        }
      }
    },
  );
};
