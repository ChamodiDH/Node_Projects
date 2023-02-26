const fs = require("fs")

const requestHandler = (req,res) => {
    const url = req.url
    const method = req.method
    if(url === '/'){

        res.setHeader('Content-Type','text/html')
        res.write('<html><Body><form action ="/message" method = "POST"><input type ="text", name="message"><button type="submit">send</button></form></Body></html>')
        return res.end()
    
    }
    
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', chunk => {
            body.push(chunk)
        })
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('details.txt', message, err => {
                res.statusCode = 302
                res.setHeader('Location','/')
                return res.end()
            })
             
            
    
        })
    
      
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html><Body><h1>Hello there..!</h1></Body></html>')
    res.end()
}

module.exports = {
    handler: requestHandler
}


