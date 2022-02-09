const express = require('express')
const res = require('express/lib/response')

const app = express()

app.listen(3000, () => {
    console.log('Server started on port 3000...')
})