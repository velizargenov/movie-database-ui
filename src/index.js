import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/movie/:movieId' component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('main'))
