import React, { useState, useEffect } from 'react'

import Layout from '../shared/Layout'
// import Button from 'react-bootstrap/Button'
import Search from './Search.js'

// import LetsFight from '../shared/LetsFight'
const Movies = props => {
  const [newMovie, setNewMovie] = useState(null)
  useEffect(() => {
  }, [])
  //
  // const selector = (title) => {
  //   const currentMovies = props.selected
  // }
  console.log(newMovie)

  // const foundMovie = () => {
  //   return (
  //     <tbody className="lay" key={newMovie.imdbId}>
  //       <tr>
  //         <td>{newMovie.Title}</td>
  //         <td>{newMovie.Year}</td>
  //       </tr>
  //     </tbody>
  //   )
  // }

  if (newMovie) {
    return (
      <Layout className="lay">
        <Search movies={newMovie} setMovies={setNewMovie} msgAlert={props.msgAlert}>
        </Search>
        <table className="table">
          <thead>
            <tr className="lay">
              <th scope="col">Name</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody className="lay" key={newMovie.imdbId}>
            <tr>
              <td>{newMovie.Title}</td>
              <td>{newMovie.Year}</td>
            </tr>
          </tbody>
        </table>
      </Layout>
    )
  }

  return (
    <Layout className="lay">
      <Search movies={newMovie} setMovies={setNewMovie} msgAlert={props.msgAlert}>
      </Search>
    </Layout>
  )
}

export default Movies
