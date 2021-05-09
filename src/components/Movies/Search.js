import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
import apiKey from '../../apiKey'
// import Layout from '../shared/Layout'

const Search = props => {
  const [movie, setMovie] = useState({ title: '' })

  const handleChange = event => {
    setMovie({ ...movie, [event.target.name]: event.target.value })
    handleSubmit()
  }

  const handleSubmit = event => {
    // event.preventDefault()
    console.log(movie)
    const urlMovie = movie.title.replace(/ /g, '+')

    axios({
      url: `${apiUrl}t=${urlMovie}${apiKey}`,
      method: 'GET'
    })
      .then((res) => {
        props.setMovies(res.data)
        console.log(res.data)
      })
      .catch(() => props.msgAlert({
        heading: 'Couldnt find your movie',
        message: 'Are you logged in',
        variant: 'danger'
      }))
  }

  const resetSearch = (e) => {
    e.preventDefault()
    e.target.form.elements.title.value = ''
  }

  return (
    <Form onSubmit={handleSubmit} onReset={resetSearch}>
      <Form.Control
        placeholder="Your movie"
        value={movie.title}
        name="title"
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
      <Button onClick={resetSearch} type="submit" >Clear search</Button>
    </Form>
  )
}

export default Search
