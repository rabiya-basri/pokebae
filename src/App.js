import axios from "axios";
import { useState } from "react";
import "./styles.css";

const App = () => {
  const [pokemon, setpokemon] = useState(" ");
  const [pokemondata, setpokemondata] = useState([]);
  const [pokemontype, setpokemontype] = useState("");
  const getpokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setpokemontype(res.data.types[0].type.name);
      setpokemondata(toArray);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const handelChange = (e) => {
    setpokemon(e.target.value.toLowerCase());
    getpokemon();
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    getpokemon();
  };
  return (
    <div className="App">
      <nav className="navbar-container">
        <header>POKEBAE</header>
      </nav>
      <form onSubmit={handelSubmit}>
        <div>
          <input
            type="text"
            onChange={handelChange}
            placeholder="enter pokemon name"
          />
        </div>
      </form>
      {pokemondata.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} alt="wrapper" />
            <div className="conatiner-text">
              <p>Type: {pokemontype}</p>
              <p>Height: {Math.round(data.height * 3.9)}</p>
              <p>Weight:{Math.round(data.weight / 4.3)} lbs</p>
              <p>Number of battels: {data.game_indices.length}</p>
            </div>
          </div>
        );
      })}
      <footer className="footer-wrapper">
        <h2>Connect me</h2>
        <a href="https://www.linkedin.com/in/rabiya-basri-55b368186/">
          <img
            alt="linkedin"
            src="https://cdn.pixabay.com/photo/2015/07/13/07/33/icons-842861_960_720.png"
          />
        </a>
        <a href="https://github.com/rabiya-basri">
          <img
            alt="github"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_960_720.png"
          />
        </a>
      </footer>
    </div>
  );
};
export default App;
