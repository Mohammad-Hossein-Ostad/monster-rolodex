import { useState, useEffect, ChangeEvent } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import Footer from "./components/footer/footer-section.component";

import { getData } from "./utils/data.utils";

import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [author, setAuthor] = useState("Mohammad Hossein Ostad");
  const [license, setlicense] = useState("All Rights Reserved");

  // Get current year
  const currentDate = new Date().getFullYear();

  // Fetch data
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
    }

    fetchUsers();
  }, []);

  // Filtered monsters state
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    // Update the actual state
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h2 className="app-title-top">WELCOME TO</h2>
      <h1 className="app-title-down">MONSTERS ROLODEX</h1>

      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />

      <Footer currentDate={currentDate} author={author} license={license} />
    </div>
  );
};

export default App;
