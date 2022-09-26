import './App.css'
import Cat from './components/cats'

function App() {
  return (
    <div className="App">
      <Cat
        image="./assets/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

export default App
