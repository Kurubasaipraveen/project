import {Link, withRouter} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="bg">
    <Header />
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/quiz-game-start-the-quiz-img.png"
        className="image"
        alt="start quiz game"
      />
      <h1 className="head">How Many Of These Questions Do You Actually Know</h1>
      <p className="para">
        Test Your Self these easy quiz questions and answers
      </p>
      <Link to="/quiz-game" className="nav-link">
        <button type="button" className="btn">
          Start Quiz
        </button>
      </Link>
    </div>
  </div>
)

export default withRouter(Home)
