import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home, Browse, Signin, Signup} from './pages'

function App() {
  return (
    <Router>
      <Routes>
      <Route path={ROUTES.HOME} exact element={<Home/>}/>
      <Route path={ROUTES.BROWSE} exact element={<Browse/>}/>
      <Route path={ROUTES.SIGN_IN} exact element={<Signin/>}/>
      <Route path={ROUTES.SIGN_UP} exact element={<Signup/>}/>
      </Routes>
    </Router>
    )

}


export default App;
