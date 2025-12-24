import Header from './components/Header'
import goalsImg from './assets/goals.jpg'

function App() {
  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: 'My goals' }}>
          <h1>My Goals</h1>
        </Header>
      </main>
    </>
  )
}

export default App
