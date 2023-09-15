// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalTossed: 0,
    heads: 0,
    tails: 0,
    defaultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    this.setState(prevState => ({totalTossed: prevState.totalTossed + 1}))
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        defaultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({
        defaultImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {totalTossed, heads, tails, defaultImage} = this.state
    return (
      <div className="app-container">
        <div className="coin-toss-game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          <img src={defaultImage} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="toss-coin-button"
            onClick={this.tossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total:{totalTossed}</p>
            <p className="result">Heads:{heads}</p>
            <p className="result">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
