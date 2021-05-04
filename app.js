const express = require('express')
const app     = express()
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.render('ColourPicker')
})

app.listen(port, () => {
    console.log('Listening on port 3000')
})