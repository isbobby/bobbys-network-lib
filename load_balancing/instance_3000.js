// make sure haproxy is installed in your environment 
// fire up the two instances first, they are bind to your local port 3000 and 4000
//
// eg node instance_3000.js
//    node instance_4000.js
//
// then fire up the haproxy using haproxy which follows the config file, run
//     haproxy -f ./tcp.cfg 
// or the following for HTTP (layer 7) load balancing
//     haproxy -f ./http.cfg
//
// Go to localhost:8888 (the port that the proxy is binded to), you will be served by
// one of the instances

const app = require('express')()
const port = process.env.PORT || 3000

app.get("/*", (req,res) => {
  res.send(`Served by ${port}`)  
})

app.listen(port, ()=>console.log(`listening on ${port}`))
