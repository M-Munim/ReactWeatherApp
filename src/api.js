export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'f0cc7138d8mshb09fb8cc178e6aap102985jsn13113e5da684',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  }
};

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }