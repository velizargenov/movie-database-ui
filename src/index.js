import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'react-dom'

import App from './components/App'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('main'))
