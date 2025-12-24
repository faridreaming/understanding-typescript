import Header from './components/Header'
import goalsImg from './assets/goals.jpg'
import CourseGoals from './components/CourseGoals'
import { useState } from 'react'
import NewGoal from './components/NewGoal'

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

  function handleAddGoal(text: string, summary: string) {
    setGoals((prevGoals) =>
      prevGoals.concat({ id: Math.random(), title: text, description: summary })
    )
  }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: 'My goals' }}>
          <h1>My Goals</h1>
        </Header>
        <NewGoal onAdd={handleAddGoal} />
        <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </>
  )
}

export default App
