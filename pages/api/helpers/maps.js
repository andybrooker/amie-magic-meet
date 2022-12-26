var  polyline = require("@mapbox/polyline")

const GOOGLE_API_KEY = 'AIzaSyCNZwx5SCn1ECQOYHRp9SZGfIcNs5pNAy0'

const getRoute = async (origin, destination, transportType) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=${transportType}&key=${GOOGLE_API_KEY}`)
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  
  
  const getMidpoint = async (jsonResponse) => {
    const array = await polyline.decode(jsonResponse.routes[0].overview_polyline.points);
    const length = await array.length;
    const midPoint = await array[parseInt(length / 2)];
    return midPoint;
  }
  
module.exports = async (origin, destination, transportType) => {
    try {
        const jsonResponse = await getRoute(origin, destination, transportType);
        const midPoint = await getMidpoint(jsonResponse);
        return midPoint;
    } catch (error) {
        console.log(error);
    }
  }

