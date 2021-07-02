import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Navbar from "./components/Navbar/navbar.component"
import Movies from './components/Movies/movies.component';
import Footer from './components/Footer/footer.component';
import MovieDetail from './components/MovieDetail/moviedetail.component';
import Search from "./components/Search/search.component"
import "./index.css"

ReactDOM.render(
    <Router>
      <Navbar />
      <Route path="/search/:name" exact >
        <Search/>
      </Route>
      <Route path="/:id" exact >
        <MovieDetail />
      </Route>
      <Route path = "/" exact>
        <Movies/>
      </Route>
      <Footer/>
    </Router>,
  document.getElementById("root")
);
