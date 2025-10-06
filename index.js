export default function handler(req, res) {
  const redirects = {
    '/wmknddn': 'https://osisgridaku.framer.ai',
    '/xdmfa': 'https://osisgridaku.framer.ai/home'
  }

  const target = redirects[req.url] || `https://osisgridaku.framer.ai${req.url === '/' ? '' : req.url}`

  // kalau kamu mau landing page sebelum redirect
  res.setHeader('Content-Type', 'text/html')
  res.end(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mengarahkan...</title>
      <meta http-equiv="refresh" content="3;url=${target}" />
      <style>
        body {
          font-family: sans-serif;
          background: #f9fafb;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: #333;
        }
        h1 { font-size: 1.5rem; margin-bottom: .5rem; }
        p { font-size: .9rem; color: #555; }
        a { color: #0070f3; text-decoration: none; }
      </style>
    </head>
    <body>
      <h1>Mengarahkan ke OSIS Gridaku...</h1>
      <p>Jika tidak otomatis, <a href="${target}">klik di sini</a>.</p>
    </body>
    </html>
  `)
}
