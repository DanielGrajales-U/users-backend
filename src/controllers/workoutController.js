const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.send({ status: 'OK', data: allWorkouts})
}

const getOneWorkout = (req, res) => {
    const oneWorkout = workoutService.getOneWorkout()
    res.send(`Get workout ${req.params.workoutId}`)
}

const createNewWorkout = (req, res) => {
    const newWorkout = workoutService.createNewWorkout()
    res.send('User Created')
}

const updateOneWorkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout()
    res.send(`Workout updated ${req.params.workoutId}`)
}

const deleteOneWorkout = (req, res) => {
    const deleteWorkout = workoutService.deleteOneWorkout()
    res.send(`Workout deleted ${req.params.workoutId}`)
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}