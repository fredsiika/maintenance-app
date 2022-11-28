import axios from 'axios'

export const options = {
    method: 'POST',
    url: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '27ac56314cmsh70e12fc1f8e9739p170816jsnd3d0bd5be5be',
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    },
    data: '{"limit":50,"offset":0,"postal_code":"75069","status":["for_sale","ready_to_build"],"sort":{"direction":"desc","field":"list_date"}}'
  };

// Create instance called instance
const instance = axios.create({
    baseURL: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'realty-in-us.p.rapidapi.com',
        'x-rapidapi-key': "27ac56314cmsh70e12fc1f8e9739p170816jsnd3d0bd5be5be"
    },
});

export default {
    getData: () =>
    axios({
        'method':'POST',
        'url':'https://example.com/query',
        'headers': {
            'content-type':'application/json',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': "27ac56314cmsh70e12fc1f8e9739p170816jsnd3d0bd5be5be"
        },
        'params': {
            'search':'parameter',
        },
    })
}