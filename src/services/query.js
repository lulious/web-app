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

export function getWorkDetail(id){
  return get(`/EduPlat/public_Detail_Class/${id}`);
}

export function getComments(id, page){
  return get(`/comment/`,{
    video: id,
    page:page
  });
}

export function addComment(data){
  return post('/comment/', data);
}