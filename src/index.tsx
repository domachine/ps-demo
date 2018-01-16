import * as React from 'react'
import { render } from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import CdsApp from '@domachine/cds-react'
import CdsNifty from '@domachine/cds-react-nifty'

const appDefinition = require('./app-definition.json')

const history = createBrowserHistory()

render(
  <CdsApp
    appDefinition={appDefinition}
    render={CdsNifty(history)}
    history={history}
  />,
  document.querySelector('#root')
)
