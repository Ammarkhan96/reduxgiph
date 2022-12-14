import { useState } from 'react'
import './App.css'
import ActionCategory from './actions/ActionCategory';
import DisplayGifs from './components/DisplayGifs';

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h2>Giph Searching App</h2>
      
      <ActionCategory  setCategory={setCategory}/>
      <DisplayGifs category={category} />
    </div>
  )
}

export default App

