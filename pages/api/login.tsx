
export async function POST(request) {
  console.log(request, 'req');
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
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

// API Endpoint for Translate

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const link = `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`;
//     try {
//       const response = await fetch(link, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             // 'API-Key': process.env.DATA_API_KEY!,
//           },
//           body: req.body,
//         })
//       const data = response;
//       res.status(200).json(data);
//     } catch (e: any) {
//       const requestObj = {
//         body: req.body,
//         method: req.method,
//         url: '/users/login`;',
//         userid: req.cookies ? req.cookies.userId : '',
//       };
//       const responseCode = e?.response?.status || 500;
//       const responseMessage = e?.message || 'Request failed, Please try again';
//       // Logger.error(e, requestObj);
//       return res.status(responseCode).json({ message: responseMessage });
//     }
//   } else {
//     return res.status(405).json({
//       message: '/users/login`; Method Not Allowed',
//     });
//   }
// }
