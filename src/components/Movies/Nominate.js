import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'

const Nominate = props => {
  const [dupe, setDupe] = useState(false)
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
        setDupe(true)
        return ('rip')
      }
    }
    list.push(movie.Title)
    props.setNominations(list)
  }

  return (
    <div>
      {dupe === true ? '' : <Button variant="primary" onClick={() => { selector(props.newMovie) }}>Nominate</Button>}
    </div>
  )
}

export default Nominate
