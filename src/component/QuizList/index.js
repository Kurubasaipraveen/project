import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import GameItem from '../GameItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class GameList extends Component {
  state = {GameData: [], isLoading: true}

  componentDidMount() {
    this.getGameData()
  }

  getGameData = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/assess/questions'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = data.GameItem.map(eachItem => ({
      id: eachItem.id,
      options: eachItem.option,
      optionType: eachItem.options_type,
      questionText: eachItem.question_text,
    }))
    this.setState({GameData: updatedData, isLoading: false})
  }

  render() {
    const {GameData} = this.state
    const {isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          GameData.map(item => <GameItem GameData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default GameList
