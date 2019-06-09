module.exports = {
  apiSuccess: res => data => res.json({code: 200, data}),
  apiFail: res => err => res.status(500).send({error: err.message}),
  error: res => (code, error) => res.status(code).json({code, error}),
}
