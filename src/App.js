import "./App.css";
 
import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

import { useState, useEffect } from "react";

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  }

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, [])

  return(
    <div className="App">
      <h1 className="app-title">Monsters Rolodex Functional</h1>

      <SearchBox 
        className="monsters-search-box search"
        handleChange = {onSearchChange}
        placeholder = "search monsters"
        />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
};

export default App;

