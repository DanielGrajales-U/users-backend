require('dotenv').config()
const express = require('express')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

const app = express()
const PORT = process.env.PORT 

app.use('/api/v1', v1WorkoutRouter)

app.listen(PORT , () => {
    console.log(`Server Up in port ${PORT}`)
})