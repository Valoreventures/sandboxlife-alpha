
export async function POST(request) {
  console.log(request, 'req');
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/userss/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY!,
    },
    body: request.body,
  })
 
  const data = await res.json()
 
  return Response.json(data)
}