const express = require('express')
const port = process.env.PORT || 3033
const app = express()

app.get('/',(req,res)=>{
    res.type('text/plain')
    res.send('hellow')
})

if(require.main === module)
    app.listen(port,()=> console.log(`Express started in` + ` ${app.get('env')}` + 
    ` mode at http://localhost:${port}; `+` press Ctrl-C to terminate.`))
else
    module.exports = app
