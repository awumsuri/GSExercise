import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configure from './app/config/configure'
import Login from './app/components/container/auth/Login'
import { Route } from 'react-router-dom'
import './app/css/theme.css'
import './app/css/App.css'

class App extends Component {
  render() {
    const store = configure.configureStore()
    return (
      <Provider store={store}>
         <Route path="/assessment" component={ Login } />
      </Provider>
    );
  }
}

export default App;
