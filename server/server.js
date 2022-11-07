const path = require ('path')
const express = require ('express')
const app = express ()
const publicPath = path.join(__dirname, '..', 'public') // .. get out of server and look for public
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

app.get('*', (req,res) => {
    res.sendFile(path.join(publicPath), 'index.html')  // * is to makes sure index is the default page
})


app.listen(port, function() {
    console.log(`server is running on port ${port}`)
})