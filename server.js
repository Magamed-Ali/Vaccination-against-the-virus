
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.get('/brand', (req, res) => {
const brand = router.db.get('container_line')
    res.json(brand)
})


server.use(middlewares)
server.use(router)
server.listen(3000, () => {

    console.log('JSON Server is running')
})