// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getCoord from "./helpers/maps"
const API_KEY = "pGVzIvhzUYF_JeNjMPus0vxbg55ZzA3AZlOeL_DJil3cmnWOZIm6ehX-mWiidWfBB6fG59r90xWT0nzeybV9uQQ-6aRxGbSBV2MpleS05WJTxYNSSX6q8vKcCgSmY3Yx"

type Data = {
  latitude: string;
  longitude: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const {origin, destination, travelMode, term, radius} = req.query;

  console.log(origin, destination, travelMode, term, radius)
  
  const midPoint: [number, number] = await getCoord(origin, destination, travelMode)

  const latitude = midPoint[0].toString();
  const longitude = midPoint[1].toString();

  console.log(latitude, longitude)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
  
  const response = await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&limit=4&latitude=${latitude}&longitude=${longitude}&radius=${radius}`, options)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const responseJSON = await response.json()

  res.status(200).send(responseJSON)
}


