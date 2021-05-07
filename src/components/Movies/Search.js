import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import apiUrl from '../../apiConfig'
import apiKey from '../../apiKey'
import Layout from '../shared/Layout'

const Search = props => {
  const [movie, setMovie] = useState({ title: '' })

  const handleChange = event => {
    setMovie({ ...movie, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
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

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Your movie"
          value={movie.title}
          name="title"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  )
}

export default Search
