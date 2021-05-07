import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'
import Button from 'react-bootstrap/Button'

// import LetsFight from '../shared/LetsFight'
const Movies = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios(`${apiUrl}/movies`)
      .then(res => setMovies(res.data.movies))
      .catch()
  }, [])

  const moviess = movies.map(movie => {
    return (
      <tbody className="lay" key={movie._id}>
        <tr>
          <td><Link to={`/movies/${movie._id}`}>{movie.name}<br></br></Link>
            <Button variant="secondary" onClick={() => { props.setSelected(movie._id, movie.skill) }}>Select</Button></td>
          <td>{movie.description}</td>
        </tr>
      </tbody>
    )
  })
  let movieName = ''

  if (props.selected) {
    const selectedmovie = movies.find(movie => movie._id === props.selected)
    if (selectedmovie !== undefined) {
      movieName = selectedmovie.name
    }
  }

  return (
    <Layout className="lay">
      <h4>movies</h4>
      <h5>Please pick a selected movie</h5>
      <h5>Go to the skills tab and add a skill to your movie</h5>
      <p>Currently Selected: {movieName}</p>
      <table className="table">
        <thead>
          <tr className="lay">
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Hp</th>
            <th scope="col">Mp</th>
            <th scope="col">Str</th>
          </tr>
        </thead>
        {moviess}
      </table>
    </Layout>
  )
}

export default Movies
