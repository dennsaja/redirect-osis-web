export default function handler(req, res) {
  const path = req.url === '/' ? '' : req.url
  const target = `https://osisgridaku.framer.ai${path}`
  res.writeHead(301, { Location: target })
  res.end()
}
