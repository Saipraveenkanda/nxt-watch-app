import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdClose} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MainContainer,
  BannerText,
  BannerLogo,
  BannerContainer,
  BannerButton,
  BannerCloseCard,
  CloseButton,
  SearchBarContainer,
  VideosContainer,
  SearchInput,
  SearchButton,
  HomeRouteContainer,
  VideoBannerContainer,
  VideosList,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  NoResultsContainer,
  NoResultImage,
  NoResultHeading,
  NoResultDesc,
} from './homeStyling'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  pending: 'PENDING',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    showBannerAd: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.pending})
    const {searchInput} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
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
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  closeBannerAd = () => {
    this.setState({showBannerAd: false})
  }

  showPopupAd = () => (
    <BannerContainer data-testid="banner">
      <BannerCloseCard>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseButton
          data-testid="close"
          type="button"
          onClick={this.closeBannerAd}
        >
          <MdClose size={22} />
        </CloseButton>
      </BannerCloseCard>
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <BannerButton type="button">GET IT NOW</BannerButton>
    </BannerContainer>
  )

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderNoSearchResults = () => (
    <NoResultsContainer>
      <NoResultImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultHeading>No Search results found</NoResultHeading>
      <NoResultDesc>
        Try different key words or remove search filter
      </NoResultDesc>
      <RetryButton type="button">Retry</RetryButton>
    </NoResultsContainer>
  )

  renderVideosList = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoSearchResults()
    }
    return (
      <VideosList>
        {videosList.map(eachVideoItem => (
          <VideoItem videoDetails={eachVideoItem} key={eachVideoItem.id} />
        ))}
      </VideosList>
    )
  }

  searchVideos = () => {
    this.getHomeVideos()
  }

  retryGetVideos = () => {
    this.getHomeVideos()
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={failureImgUrl} alt="failure view" />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.retryGetVideos}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.pending:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {showBannerAd} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeRouteContainer>
              <Header />
              <MainContainer>
                <SideBar />
                <VideoBannerContainer>
                  {showBannerAd && this.showPopupAd()}
                  <VideosContainer isDarkTheme={isDarkTheme} data-testid="home">
                    {/* Search bar container */}
                    <SearchBarContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onSearchInputChange}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.searchVideos}
                      >
                        <AiOutlineSearch size={20} />
                      </SearchButton>
                    </SearchBarContainer>
                    {/* videos list will be rendered here */}
                    {this.renderApiStatus()}
                  </VideosContainer>
                </VideoBannerContainer>
              </MainContainer>
            </HomeRouteContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default HomeRoute
