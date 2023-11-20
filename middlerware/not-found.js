const notFound = (req,res) =>res.status(400).send('router does not exist')

module.exports = notFound