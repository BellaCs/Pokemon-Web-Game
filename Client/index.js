const http = require('http')
const fs = require('fs')
const mime = require('mime-types')



const server = http.createServer((req, res) => {
  fs.createReadStream('./src/html/index.html').pipe(res)
})

server.listen(process.env.PORT || 2000)
