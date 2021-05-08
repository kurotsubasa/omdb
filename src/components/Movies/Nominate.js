import Button from 'react-bootstrap/Button'
import React from 'react'

const Nominate = props => {
  console.log(props.newMovie)
  console.log(props.nominations)
  const list = props.nominations
  const selector = (movie) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === movie.Title) {
        props.msgAlert({
          heading: 'You have already nominated that movie',
          message: 'Try another one',
          variant: 'danger'
        })
        props.setDupe(true)
        return ('rip')
      }
    }
    list.push(movie.Title)
    props.setNominations(list)
  }

  return (
    <div>
      {props.dupe === true ? <Button variant="secondary" onClick={() => { props.setDupe(false) }}>Is this not nominated yet?</Button> : <Button variant="primary" onClick={() => { selector(props.newMovie) }}>Nominate</Button>}
    </div>
  )
}

export default Nominate
