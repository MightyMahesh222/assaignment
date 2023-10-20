import {Component} from 'react'
import './index.css'
import Searching from '../SocialHistory'

class HistoryDetails extends Component {
  state = {searchInput: '', initialHistoryList: this.props}

  userSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = unq => {
    const {initialHistoryList} = this.props
    const filteredUsersData = initialHistoryList.filter(
      each => each.uniqueNo !== unq,
    )
    this.setState({initialHistoryList: filteredUsersData})
  }

  render() {
    const {searchInput, initialHistoryList} = this.state
    const searchedResult = initialHistoryList.filter(search =>
      search.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="mainContainer">
        <div className="searchContainer">
          <img
            className="historyImage"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="searchable">
            <div className="search">
              <img
                className="searchIcon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              onChange={this.userSearch}
            />
          </div>
        </div>

        <div className="historyContainer">
          <ul>
            {searchedResult.map(searched => (
              <Searching
                key={searched.id}
                unq={searched.id}
                Details={searched}
                deleting={this.deleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default HistoryDetails
