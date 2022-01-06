import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          {/*Aca deben ir los links de navegacion*/}
          
              <Link to='/page1'>Page 1</Link>
            
              <Link to='/page2'>Page 2</Link>
          
        </nav>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/page1' />
            <Page1 />
          </Route>
          <Route exact path='/page1'>
            <Redirect to='/page1' />
            <Page1 />
          </Route>
          <Route exact path='/page2'>
            <Redirect to='/page2' />
            <Page2 />
          </Route>
          <Route  path='*'>
            <Redirect to='/notfound' />
            <NotFound/>
          </Route>
        </Switch>
        {/* Aca tienes que agreager algo para que las rutas funcionen*/}
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
