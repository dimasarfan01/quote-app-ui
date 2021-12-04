import callAPI from '../config/api';

const ROOT_API = import.meta.env.VITE_PUBLIC_API;
const API_VERSION = 'api/v1';

export const postSignUpUser = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
};

export const postSignInUser = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
};

export const checkExistedEmail = async (data) => {
  const url = `${ROOT_API}/${API_VERSION}/user/check-email`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
};
