module.exports = (err, _req, res, _next) => {
 if (err.code) {
   const { code, message } = err;
   return res.status(422).json({ err: { code, message } });
 }
  return res.status(500).json({ message: 'Internal error' });
};