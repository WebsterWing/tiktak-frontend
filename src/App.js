import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import GameListPage from './components/pages/GameListPage'
import LoginPage from './components/pages/LoginPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <GameListPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
