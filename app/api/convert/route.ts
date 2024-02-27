import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // get ids and correncies from request
  const url = new URL(request.url);
  const ids = url.searchParams.get('ids');
  const vs_currencies = url.searchParams.get('vs_currencies');

  // get data from coingecko
  const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`);
  const data = response.data;
  
  // return the data as JSON
  return new NextResponse(JSON.stringify(data), {

    headers: {
      "content-type": "application/json",
    },
  });
  

}