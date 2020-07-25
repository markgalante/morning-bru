import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJokeRequest } from "../../redux/jokes/jokesActions";
import MiniSpinner from '../Spinners/MiniSpinner';
import "./joke.styles.css";

const Joke = ({ joke, isFetchingJoke, jokeError, fetchJokeRequest }) => {
  useEffect(() => {
    fetchJokeRequest();
  }, [fetchJokeRequest]);

  return isFetchingJoke ? (
    <div className="joke-container">
      <h2 className="joke-header">Chucking Hilarous</h2>
      <MiniSpinner />
    </div>
  ) : joke ? (
    <div className="joke-container">
      <h2 className="joke-header">Chucking Hilarous</h2>
      <p className="joke">{joke}</p>
      <button className="joke-fetch-button" onClick={fetchJokeRequest}>Get joke</button>
    </div>
  ) : (
        <div>
          <h4>ERORR getting joke</h4>
          <button onClick={fetchJokeRequest}>Get joke</button>{" "}
        </div>
      )
};

const mapStateToProps = state => ({
  isFetchingJoke: state.jokes.isFetchingJoke,
  joke: state.jokes.joke,
  jokeError: state.jokes.jokeError
});

const mapDispatchToProps = dispatch => ({
  fetchJokeRequest: () => dispatch(fetchJokeRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Joke);
