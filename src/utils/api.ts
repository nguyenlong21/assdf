import axios from 'axios';
import { setAuthHeader, removeAuthHeader } from './common';
import { BASE_API_URL, BASE_AUTH_API_URL } from 'utils/constants';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const get = async (
  baseApi: string,
  url: string,
  // params : string,
  shouldSetAuthHeader = true,
  shouldRemoveAuthHeader = false,
) => {
  if (shouldSetAuthHeader) {
    setAuthHeader();
  }
  if (shouldRemoveAuthHeader) {
    removeAuthHeader();
  }

  return await axios.get(baseApi + '/' + url);
};

export const deleted = async (
  url: string,
  // params : string,
  shouldSetAuthHeader = true,
  shouldRemoveAuthHeader = false,
) => {
  if (shouldSetAuthHeader) {
    setAuthHeader();
  }
  if (shouldRemoveAuthHeader) {
    removeAuthHeader();
  }

  return await axios.delete(BASE_API_URL + '/' + url);
};

export const downloadFile = async (
  url: string,
  // params : string,
  shouldSetAuthHeader = true,
  shouldRemoveAuthHeader = false,
) => {
  if (shouldSetAuthHeader) {
    setAuthHeader();
  }
  if (shouldRemoveAuthHeader) {
    removeAuthHeader();
  }
  await axios({
    url: BASE_API_URL + '/' + url,
    method: 'GET',
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const fileName = response.headers['content-disposition'].split(';')[1].replace('filename=', '');
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName); //or any other extension
    document.body.appendChild(link);
    link.click();
  });
};

export async function post<T = unknown>(
  baseApi: string,
  url: string,
  params: T,
  shouldSetAuthHeader = true,
  shouldRemoveAuthHeader = false,
) {
  if (shouldSetAuthHeader) {
    setAuthHeader();
  }
  if (shouldRemoveAuthHeader) {
    removeAuthHeader();
  }
  // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  return await axios.post(baseApi + '/' + url, params).catch((e) => {
    if (e.response) {
      if (e.response.status === 500) {
        // history.push('/500');
        // window.location.reload();
      }
      return e.response;
    }
  });
}

export async function put<T = unknown>(
  baseApi: string,
  url: string,
  params: T,
  shouldSetAuthHeader = true,
  shouldRemoveAuthHeader = false,
) {
  if (shouldSetAuthHeader) {
    setAuthHeader();
  }
  if (shouldRemoveAuthHeader) {
    removeAuthHeader();
  }
  return await axios.put(baseApi + '/' + url, params).catch((e) => {
    if (e.response) {
      if (e.response.status === 500) {
        // history.push('/500');
        // window.location.reload();
      }
      return e.response;
    }
  });
}
