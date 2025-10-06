export default function handler(req, res) {
  const redirects = {
    '/wmknddn': 'https://osisgridaku.framer.ai',
    '/xdmfa': 'https://osisgridaku.framer.ai/home'
  }

  const target = redirects[req.url] || `https://osisgridaku.framer.ai${req.url === '/' ? '' : req.url}`
  res.writeHead(301, { Location: target })
  res.end()
}
