import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <div className="container">
      <div id="searchBox" className="row">
        <div className="col-4">
          <Form onSubmit={submitHandler} inline>
            <Form.Control
              type='text'
              name='q'
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='Search Products...'
              className='mr-sm-2 ml-sm-5'
              id='searchInput'
            ></Form.Control>
          </Form>
        </div>
        <div className="col-4">
          <Button id="searchButton" type='submit' className="btn-secondary">
            Search
         </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
