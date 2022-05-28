import React, { useState, useEffect } from "react"
import WorkoutService from "../../services/WorkoutService"

const Workout = () => {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    getWorkouts()
  }, [])

  const getWorkouts = () => {
    const id = parseInt(sessionStorage.getItem("token"))
    WorkoutService.getWorkouts(id).then((res) => {
      setWorkouts(res.data)
    })
  }
    const deleteWorkout = (id) => {
      WorkoutService.deleteWorkout(id).then((res) => {
        getWorkouts()
      })
    }

  return (
    <div>
      {workouts.map(({ id, date, completedExercises }) => {
        return (
          <div key={id}>
            <div>{date}</div>
            <div>
              {completedExercises.map(
                ({ id, name, completedSets, completedReps, amount, unit }) => {
                  return (
                    <div key={id}>
                      <div>{name}</div>
                      <div>{completedSets}</div>
                      <div>{completedReps}</div>
                      <div>{amount}</div>
                      <div>{unit}</div>
                    </div>
                  )
                }
              )}
            </div>
            <button type="button" onClick={() => deleteWorkout(id)}>
              Delete workout
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Workout
