module.exports = (err, _req, res, _next) => {
  if (err.notFound) {
    const { code, message } = err;
    return res.status(404).json({ err: { code, message } });
  }
  
  if (err.code) {
   const { code, message } = err;
   return res.status(422).json({ err: { code, message } });
 }
 
 return res.status(500).json({ message: 'Internal error' });
};