import './App.css'
import Cat from './components/cats'

function App() {
  return (
    <div className="App">
      <Cat
        image="../src/assets/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Cat 
        image="../src/assets/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-6424"
        email="fluffykins@catnap.meow"
      />
      <Cat 
        image="../src/assets/felix.png"
        name="Felix"
        phone="(212) 555-4324"
        email="felix@catnap.meow"
      />
      <Cat 
        image="../src/assets/pumpkin.png"
        name="Pumpkin"
        phone="(212) 555-3214"
        email="pumpkin@catnap.meow"
      />
    </div>
  )
}

export default App
