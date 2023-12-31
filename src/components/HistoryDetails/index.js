import {Component} from 'react'
import './index.css'
import Searching from '../SocialHistory'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
class HistoryDetails extends Component {
  state = {searchInput: '', copiedHistoryList: initialHistoryList}

  userSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = unq => {
    const {copiedHistoryList} = this.state
    const filteredUsersData = copiedHistoryList.filter(each => each.id !== unq)
    this.setState({copiedHistoryList: filteredUsersData})
  }

  render() {
    const {searchInput, copiedHistoryList} = this.state
    const searchedResult = copiedHistoryList.filter(search =>
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

        {copiedHistoryList.length > 0 ? (
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
        ) : (
          <div className="noHistory">
            <p>There is no history to show</p>
          </div>
        )}
        {searchedResult.length <= 0 ? (
          <div className="noHistory">
            <p>There is no history to show</p>
          </div>
        ) : null}
      </div>
    )
  }
}
export default HistoryDetails
