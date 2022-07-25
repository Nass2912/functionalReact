import "./App.css";

import { useState } from "react";

import { SearchBox } from "./components/search-box/search-box.component";

const App = () => {

  const [searchField, setSearchField] = useState('');
  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
    };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex function-based</h1>

      <SearchBox
        className="monsters-search-box search"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
    </div>
  );
};

export default App;
