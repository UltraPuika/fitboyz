import React, { useState, useEffect } from "react"
import WorkoutService from "../../services/WorkoutService"
import { useGlobalContext } from "../../context"

const Workout = () => {
   const { userId } = useGlobalContext()
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    getWorkouts()
  }, [])

  const getWorkouts = () => {
    WorkoutService.getWorkouts(userId).then((res) => {
      setWorkouts(res.data)
    })
  }
  return (
    <div>
      {workouts.map(
        ({ id, date, completedExercises }) => {
          return (
            <div key={id}>
              <div>{date}</div>
              <div>
                {completedExercises.map(
                  ({
                    id,
                    name,
                    completedSets,
                    completedReps,
                    amount,
                    unit,
                  }) => {
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
            </div>
          )
        }
      )}
    </div>
  )
}

export default Workout