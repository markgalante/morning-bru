import React from "react";
import { connect } from "react-redux";
import { fetchJokeRequest } from "../redux/jokes/jokesActions";

const Joke = ({ joke, isFetchingJoke, jokeError, fetchJokeRequest }) => {
  return isFetchingJoke ? (
    <h4>Loading</h4>
  ) : joke ? (
    <div>
      <h2>Chuck Norris whaaat?</h2>
      <p>{joke}</p>
      <button onClick={fetchJokeRequest}>Get joke</button>
    </div>
  ) : jokeError ? (
    <div>
      <h4>ERORR getting joke</h4>
      <button onClick={fetchJokeRequest}>Get joke</button>{" "}
    </div>
  ) : (
    <div>
      <p>No jokes yet</p>
      <button onClick={fetchJokeRequest}>Get joke</button>
    </div>
  );
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
