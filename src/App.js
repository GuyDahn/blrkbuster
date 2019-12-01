import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Catalog from './components/Catalog'
import Landing from './components/Landing'
import MovieDetail from './components/MovieDetail'



class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 0, isRented: false, title: "Halloween", year: 1978,
          img: "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
          descrShort: "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
          trailer: 'xHuOtLTQ_1I'
        },
        {
          id: 1, isRented: false, title: "The Exorcist", year: 1973,
          img: "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
          descrShort: "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.",
          trailer: 'a8g3h2JaVE4'
        },
        {
          id: 2, isRented: false, title: "The Texas Chain Saw Massacre ", year: 1974,
          img: "https://m.media-amazon.com/images/M/MV5BZDI3OWE0ZWMtNGJjOS00N2E4LWFiOTAtZjQ4OTNiNzIwN2NkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
          descrShort: "Two siblings and three of their friends en route to visit their grandfather's grave in Texas end up falling victim to a family of cannibalistic psychopaths and must survive the terrors of Leatherface and his family.",
          trailer: 'T3TILW0O_C0'
        },
        {
          id: 3, isRented: false, title: "Dawn of the Dead ", year: 1978,
          img: "https://m.media-amazon.com/images/M/MV5BMzc1YTIyNjctYzhlNy00ZmYzLWI2ZWQtMzk4MmQwYzA0NGQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
          descrShort: "Following an ever-growing epidemic of zombies that have risen from the dead, two Philadelphia S.W.A.T. team members, a traffic reporter, and his television executive girlfriend seek refuge in a secluded shopping mall.",
          trailer: 'fEPIOdFtQ0Y'
        },
        {
          id: 4, isRented: false, title: "Zombie", year: 1979,
          img: "https://m.media-amazon.com/images/M/MV5BYjhiMjMxZGEtY2VmZC00OTVmLWExNTQtYmUyNjZiNDJlMWM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,630,1000_AL_.jpg",
          descrShort: "Strangers searching for a young woman's missing father arrive at a tropical island where a doctor desperately seeks the cause and cure of a recent epidemic of the undead.",
          trailer: 'e3Nl_TCQXuw'
        },
        {
          id: 5, isRented: false, title: "Suspiria ", year: 1977,
          img: "https://m.media-amazon.com/images/M/MV5BMjRiYTNjODctNGU1Ni00NDg3LTk0NGUtMWU0NjgyZTAyYmNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
          descrShort: "An American newcomer to a prestigious German ballet academy comes to realize that the school is a front for something sinister amid a series of grisly murders.",
          trailer: 'hPs2ExUL_bc'
        },
        {
          id: 6, isRented: false, title: "Alien",
          img: "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", year: 1979,
          descrShort: "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.",
          trailer: 'LjLamj-b0I8'
        },
        {
          id: 7, isRented: false, title: "The Evil Dead", year: 1981,
          img: "https://m.media-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
          descrShort: "Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.",
          trailer: 'NL6mioAlpJk'
        },
        {
          id: 8, isRented: false, title: "The Wicker Man", year: 1973,
          img: "https://m.media-amazon.com/images/M/MV5BOWIzY2QyNDQtOWI3Ni00MjEwLTlhYTgtZTgyMThiY2JkMTY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR0,0,182,268_AL_.jpg",
          descrShort: "A Police Sergeant is sent to a Scottish island village in search of a missing girl who the townsfolk claim never existed. Stranger still are the rites that take place there.",
          trailer: 'a-tDnavDCwI'
        },
        {
          id: 9, isRented: false, title: "The Devil Rides Out", year: 1968,
          img: "https://m.media-amazon.com/images/M/MV5BOWEwMjRhMWMtZTk3My00MzBiLWFmODctNmQ0NjkzZjMzM2U1XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_UX182_CR0,0,182,268_AL_.jpg",
          descrShort: "Devil worshipers plan to convert two new victims.",
          trailer: 'LCZnuo1vuWU'
        },
        {
          id: 10, isRented: false, title: "Day of the Dead", year: 1985,
          img: "https://m.media-amazon.com/images/M/MV5BNWVmMzlhZGYtMWRiOS00MGIwLTk5YTAtZGE4OTcyYjU3YzZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
          descrShort: "A small group of military officers and scientists dwell in an underground bunker as the world above is overrun by zombies.",
          trailer: '5g9XorBCikM'
        },
        {
          id: 11, isRented: false, title: "Videodrome", year: 1983,
          img: "https://m.media-amazon.com/images/M/MV5BNzdlNDk0YTMtNWJjOS00NzhlLThiOTAtZDUyOWNkNDQ2NmU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
          descrShort: "When he acquires a different kind of show for his station, a sleazy cable-TV programmer begins to see his life and the future of media spin out of control in a terrifying new reality.",
          trailer: 'UFHey3utk0I'
        },
        {
          id: 12, isRented: false, title: "The Shining", year: 1980,
          img: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg",
          descrShort: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
          trailer: '5Cb3ik6zP2I'
        },
        {
          id: 13, isRented: false, title: "The Beyond", year: 1981,
          img: "https://m.media-amazon.com/images/M/MV5BZWI0NWQzZWUtOWM4Yy00MjlmLWE5NzUtNDVlMWVhODE3ZmFmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR3,0,140,209_AL_.jpg",
          descrShort: "A young woman inherits an old hotel in Louisiana where, following a series of supernatural 'accidents', she learns that the building was built over one of the entrances to Hell.",
          trailer: 'ef0oH3ZizfI'
        }
      ],
      budget: 66.6
    };
  }

  rentMovie = (event) => {
    if (this.state.budget - 12.6 > 0) {
      let movies = [...this.state.movies]
      let movieIndex = movies.findIndex(i => i.id == event.target.id)

      let budget = this.state.budget -= 6.66 * 2
      movies[movieIndex].isRented = !movies[movieIndex].isRented
      this.setState({
        movies,
        budget
      })
    } else {
      alert("Reload funds to my bitcoin wallet: \n aS355dsgfqq32SSDssd63sad3SAd24d4D666")
    }
  }

  returnMovie = (event) => {
    let movies = [...this.state.movies]
    let movieIndex = movies.findIndex(i => i.id == event.target.id)

    let budget = this.state.budget += 6.66 * 2
    movies[movieIndex].isRented = !movies[movieIndex].isRented
    this.setState({
      movies,
      budget
    })
  }



  render() {
    return (
      <Router>
        <div className="App" >
          <div id="main-links">
            <div className="side-nav">
              <Link to="/">HOME</Link>
              <Link to="/catalog">BROWSE</Link>
            </div>
            <Link to="/"><div className="logo"><img src={require('../src/blrk-logo.png')} /></div></Link>
          </div>
          <Route path="/" exact component={Landing} />
          <Route path="/catalog" exact render={() => <Catalog movies={this.state.movies} rentMovie={this.rentMovie} returnMovie={this.returnMovie} budget={this.state.budget} />} />
          <Route path="/movies/:movieId" exact render={({ match }) => <MovieDetail match={match} state={this.state.movies} />} />
        </div>
      </Router>
    )
  }
}

export default App;
