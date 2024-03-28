import Header from '../Header'
import './index.css'

const GameItem = props => {
  const {GameData} = props
  const {id, questionType, options, optionType, text} = GameData
  return (
    <>
      <Header />
      <div className='item-container'>
        <h1 className='head'>{optionType.text}</h1>
      </div>
    </>
  )
}

export default GameItem
