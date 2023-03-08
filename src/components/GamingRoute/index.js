import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import GameVideoItem from '../GameVideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingBanner,
  GamingIconContainer,
  GamingHeading,
  GamingMainContainer,
  GamingVideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  GameVideosList,
} from './gamingStyling'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  pending: 'PENDING',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {videosList: [], gameApiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  retryGetVideos = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({gameApiStatus: apiStatusConstants.pending})
    const token = Cookies.get('jwt_token')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: updatedData,
        gameApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({gameApiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <RetryButton type="button" onClick={this.retryGetVideos}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderGamingVideos = () => {
    const {videosList} = this.state
    return (
      <GameVideosList>
        {videosList.map(eachItem => (
          <GameVideoItem gameDetail={eachItem} key={eachItem.id} />
        ))}
      </GameVideosList>
    )
  }

  renderGamingApiStatus = () => {
    const {gameApiStatus} = this.state
    switch (gameApiStatus) {
      case apiStatusConstants.pending:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <GamingMainContainer>
                <SideBar />
                <GamingVideosContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="gaming"
                >
                  <GamingBanner isDarkTheme={isDarkTheme}>
                    <GamingIconContainer>
                      <SiYoutubegaming size={40} color="#ff0000" />
                    </GamingIconContainer>
                    <GamingHeading isDarkTheme={isDarkTheme}>
                      Gaming
                    </GamingHeading>
                  </GamingBanner>
                  {this.renderGamingApiStatus()}
                </GamingVideosContainer>
              </GamingMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default GamingRoute
