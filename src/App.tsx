import React, { useState } from 'react';
import List from './components/List'
import './App.css';
import AddToList from './components/AddToList'

export interface peopleState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<peopleState["people"]>([
    {
      name:"John",
      age:67,
      url:'https://www.thesprucecrafts.com/thmb/mV2QJX4iOPaNBeD_vs16b98oolA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp174aa8cftdc200_Medium_134723-4131c855d1d243eab9d1bacde61069ec.jpg',
      note:"John is nice dude"
    }
  ])
  return (
    <div className="App">
      <h2>
        My first typescript project
      </h2>
      <List people={people} />
      <AddToList people={people} setPeople = {setPeople} />

    </div>
  );
}

export default App;
