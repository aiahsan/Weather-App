import { create } from 'apisauce'
export const apiDatabase = create({
    baseURL: 'https://weather-app-ali.herokuapp.com/api/v1/',
    headers: { Accept: 'application/vnd.github.v3+json' ,'Content-Type':'application/json'},
  })
