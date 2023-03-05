import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdClose} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

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
    <BannerContainer>
      <BannerCloseCard>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <CloseButton type="button" onClick={this.closeBannerAd}>
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

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)

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
      <HomeRouteContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <VideoBannerContainer>
            {showBannerAd && this.showPopupAd()}
            <VideosContainer>
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
  }
}
export default HomeRoute
