import {api} from './baseUrl';
import {apiDatabase} from './baseUrldatabase'

  const login =async (data)=>{
   return await apiDatabase.post('/users/login',data) 
}
  const register =async (data)=>{
   return await apiDatabase.post('/users/register',data) 
}
  const getData =async (city)=>{
   return await api.get('/forecast?q='+city+'&appid=150e865a5f9e3ce89b2f5c418d2fb1b8') 
}

export const repository= {
   login,
   register,
   getData
}