import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [comment, setComment] = useState('')

  useEffect(() => {
  if (comment === '')
  setComment('comment')
})

  return (
    <div className="App">
        <p>
          Coming soon
        </p>
    </div>
  );
}

export default App;
