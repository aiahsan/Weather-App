import { create } from 'apisauce'
export const api = create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    headers: { Accept: 'application/vnd.github.v3+json' ,'Content-Type':'application/json'},
  })
