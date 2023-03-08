import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideosList,
  TrendingMainContainer,
  TrendingVideosContainer,
  TrendingBanner,
  FireIconContainer,
  TrendingHeading,
} from './trendingStyling'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  pending: 'PENDING',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {videosList: [], trendApiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  retryGetVideos = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({trendApiStatus: apiStatusConstants.pending})
    const token = Cookies.get('jwt_token')
    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(trendingApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
      }))
      this.setState({
        videosList: updatedData,
        trendApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({trendApiStatus: apiStatusConstants.failure})
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

  renderTrendingVideos = () => {
    const {videosList} = this.state
    return (
      <VideosList>
        {videosList.map(eachVideoItem => (
          <VideoItem videoDetails={eachVideoItem} key={eachVideoItem.id} />
        ))}
      </VideosList>
    )
  }

  renderTrendingApiStatus = () => {
    const {trendApiStatus} = this.state
    switch (trendApiStatus) {
      case apiStatusConstants.pending:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
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
              <TrendingMainContainer>
                <SideBar />
                <TrendingVideosContainer
                  data-testid="trending"
                  isDarkTheme={isDarkTheme}
                >
                  <TrendingBanner isDarkTheme={isDarkTheme}>
                    <FireIconContainer>
                      <HiFire size={40} color="#ff0000" />
                    </FireIconContainer>
                    <TrendingHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingBanner>
                  {this.renderTrendingApiStatus()}
                </TrendingVideosContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default TrendingRoute
