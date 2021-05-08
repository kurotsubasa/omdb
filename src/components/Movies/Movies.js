import React, { useState, useEffect } from 'react'

import Layout from '../shared/Layout'
// import Button from 'react-bootstrap/Button'
import Search from './Search.js'
import Nominate from './Nominate.js'

// import LetsFight from '../shared/LetsFight'
const Movies = props => {
  const [newMovie, setNewMovie] = useState(null)
  const [nominations, setNominations] = useState([])
  const [dupe, setDupe] = useState(false)
  useEffect(() => {
    setNominations(props.selected)
  }, [])

  console.log(newMovie)
  console.log(nominations)
  // const yourMovies = nominations.map(nom => (
  //   <li key={nom}>{nom}</li>
  // ))
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
        <ul>
          {nominations.length < 1 ? <li>no nominations</li> : nominations.map(nom => (
            <li key={nom}>{nom}</li>
          )) }
        </ul>
        <table className="table">
          <thead>
            <tr className="lay">
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Nominate</th>
            </tr>
          </thead>
          <tbody className="lay" key={newMovie.imdbId}>
            <tr>
              <td>{newMovie.Title || newMovie.Error}</td>
              <td>{newMovie.Year}</td>
              <td><Nominate newMovie={newMovie} nominations={nominations} setNominations={setNominations} msgAlert={props.msgAlert} dupe={dupe} setDupe={setDupe}></Nominate></td>
            </tr>
          </tbody>
        </table>
      </Layout>
    )
  }

  return (
    <Layout className="lay">
      <Search movies={newMovie} setMovies={setNewMovie} msgAlert={props.msgAlert} dupe={dupe} setDupe={setDupe}>
      </Search>
    </Layout>
  )
}

export default Movies
