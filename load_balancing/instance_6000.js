const app = require('express')()
const port = process.env.PORT || 6000

app.get("/*", (req,res) => {
  res.send(`Served by ${port}`)  
})

app.listen(port, ()=>console.log(`listening on ${port}`))