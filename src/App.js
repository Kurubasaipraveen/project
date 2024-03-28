import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './component/Login'
import Home from './component/Home'
import QuizList from './component/QuizList'
import GameResult from './component/GameResult'
import GameReport from './component/GameReport'
import NotFound from './component/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route path="/quiz-game" component={QuizList} />
    <Route path="/game-results" component={GameResult} />
    <Route path="/game-report" component={GameReport} />
    <Redirect to="NotFound" component={NotFound} />
  </Switch>
)

export default App
