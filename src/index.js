import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import Movie from './components/Movie'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/movie/:movieId' component={Movie} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('main'))
