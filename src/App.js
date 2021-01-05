import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

//import GameListPage from './pages/GameListPage'
//import LoginPage from './pages/LoginPage'
import GameplayPage from './pages/GameplayPage'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <GameplayPage/>
        </Route>
        {/*
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/play">
          <GameplayPage/>
        </Route>
        */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
