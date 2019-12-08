import React from "react";
import { FetchMovie } from "../fetchServices/FetchMovie";
import { Link } from "react-router-dom";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: []
    };
  }

  componentDidMount() {
    FetchMovie().then(movie => this.setState({ allMovies: movie }));
  }

  render() {
    const mapMovie = this.state.allMovies.map(movie => {
      return (
        <>
          <Link to="/SingleMovie">
            <div className="imgs">
              <img src={movie.image.medium} />
              <br />
              <span id="movieName" className="center">
                {movie.name}
              </span>
            </div>
          </Link>
        </>
      );
    });
    return (
      <>
        <h1 className="center">Popular Shows</h1>
        <div className="container1">{mapMovie}</div>
      </>
    );
  }
}

export default Movies;
