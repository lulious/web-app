import {get, post} from '../utils/request';

export function getList() {
  return get('/api/getList');
}
export function login(data){
  return post('/user/login/', data);
}

export function register(data){
  return post('/register/', data);
}

export function code(data){
  return post('/code/', data);
}

export function join(data, token){
  return post('/join/', data, token);
}

export function getWorkDetail(data){
  return post('/getWorkDetail/', data);
}

export function addComment(data){
  return post('/addComment/', data);
}