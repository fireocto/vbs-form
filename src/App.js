import { useState } from "react"
import './App.css';

function App() {
  const displayData = ({ name, age, bio }) => {
    alert('You submitted: ')
  }
  return (
      <FormData
          fields={['name', 'age', 'bio']}
          onSubmit={}
        );
}

export default App;
