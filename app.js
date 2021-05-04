const express = require('express')
const app     = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.render('ColourPicker')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})