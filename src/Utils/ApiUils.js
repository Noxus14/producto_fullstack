import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';

const fetch = (endpoint) => {
return axios
    .get(endpoint)
    .then((res) => res)
    .catch((err) => {
    console.error(
        'Error catch in Apiutils at fetch method. It will be thrown...');
    throw err;
    });
}

export const getPoints = (user = '', apiKey = '', table = '') => {
    //const query = `https://${user}.carto.com/api/v2/sql?api_key=${apiKey}&q=SELECT latitude, longitude FROM ${table}`;
    const query = `http://localhost:4000/api/fullstack/points`;
    return fetch(query)
      .then(res=> {
        const data = [];
        res.data.forEach(point=>{
          data.push({lat: point.latitude, lng: point.longitude})
      });
      return data;
      });
  };

export const getDecode = (lat, lng) => {
    const query = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
    return fetch(query)
      .then(res=> { 
      return res.data.display_name;
      });
}