import {get, post} from '../utils/request';

export function getList() {
  return get('/api/getList');
}
export function login(data){
  return post('/user/login', data);
}

export function register(data){
  return post('/user/register', data);
}

export function code(data){
  return post('/user/code', data);
}

export function join(data){
  return post('/join', data);
}
