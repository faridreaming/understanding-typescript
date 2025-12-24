import Header from './components/Header'
import goalsImg from './assets/goals.jpg'
import CourseGoals from './components/CourseGoals'
import { useState } from 'react'

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Financial freedom',
      description: 'Have financial freedom',
    },
    {
      id: 2,
      title: 'Being more discipline',
      description: 'Develop better habits and consistency',
    },
  ])

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id))
  }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: 'My goals' }}>
          <h1>My Goals</h1>
        </Header>
        <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </>
  )
}

export default App
