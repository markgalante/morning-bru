import React from "react";
import "./styles.css";
import Joke from "./components/Joke";
import News from "./components/News";

export default function App() {
  return (
    <div className="App">
      <News />
      <Joke />
    </div>
  );
}
