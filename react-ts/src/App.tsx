import Header from './components/Header'
import goalsImg from './assets/goals.jpg'
import CourseGoals from './components/CourseGoals'

function App() {
  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: 'My goals' }}>
          <h1>My Goals</h1>
        </Header>
        <CourseGoals
          goals={[
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
          ]}
        />
      </main>
    </>
  )
}

export default App
