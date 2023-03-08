import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import SideBar from '../SideBar'
import Header from '../Header'
import {
  VideoItemDetailsContainer,
  VideoContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  ViewsAndTime,
  ViewsText,
  ViewsLikesCard,
  VideoPlayer,
  LikesContainer,
  LikeButton,
  DisLikeButton,
  SavedButton,
  VideoDetailsContainer,
  ChannelContainer,
  ProfileImage,
  ChannelName,
  SubscriberCount,
} from './videoItemDetailsStyling'
import NxtWatchContext from '../../context/NxtWatchContext'

const videoApiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  pending: 'PENDING',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    videoApiStatus: videoApiConstant.initial,
    liked: false,
    disLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({videoApiStatus: videoApiConstant.pending})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const videoApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(videoApiUrl, options)
    const fetchedData = await response.json()
    const data = fetchedData.video_details
    if (response.ok === true) {
      const updatedData = {
        description: data.description,
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
        channel: {
          name: data.channel.name,
          profileImageUrl: data.channel.profile_image_url,
          subscriberCount: data.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updatedData,
        videoApiStatus: videoApiConstant.success,
      })
    } else {
      this.setState({videoApiStatus: videoApiConstant.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  retryVideo = () => {
    this.getVideoDetails()
  }

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
      <RetryButton type="button" onClick={this.retryVideo}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  likeToggle = () => {
    const {disLiked} = this.state
    if (disLiked === true) {
      this.setState({disLiked: false})
    }
    this.setState(prevState => ({
      liked: !prevState.liked,
    }))
  }

  unlikeToggle = () => {
    const {liked} = this.state
    if (liked === true) {
      this.setState({liked: false})
    }
    this.setState(prevState => ({
      disLiked: !prevState.disLiked,
    }))
  }

  renderVideoDetails = () => {
    const {videoDetails, liked, disLiked} = this.state
    const {
      id,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
      channel,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const formattedDate = formatDistanceToNow(new Date(publishedAt)).split(
      ' ',
    )[1]

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, onToggleSaveIcon, savedVideosList} = value

          const present = savedVideosList.find(each => each.id === id)

          return (
            <VideoContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <VideoPlayer>
                <ReactPlayer url={videoUrl} controls width="100%" />
              </VideoPlayer>
              <VideoDetailsContainer isDarkTheme={isDarkTheme}>
                <p>{title}</p>
                <ViewsLikesCard>
                  <ViewsAndTime>
                    <ViewsText>{viewCount} views</ViewsText>
                    <BsDot size={28} />
                    <p>{formattedDate} years ago</p>
                  </ViewsAndTime>
                  <LikesContainer>
                    <LikeButton
                      liked={liked}
                      type="button"
                      onClick={this.likeToggle}
                    >
                      <BiLike size={22} /> Like
                    </LikeButton>
                    <DisLikeButton
                      disLiked={disLiked}
                      type="button"
                      onClick={this.unlikeToggle}
                    >
                      <BiDislike size={22} /> Dislike
                    </DisLikeButton>
                    <SavedButton
                      saved={present}
                      type="button"
                      onClick={() => onToggleSaveIcon(videoDetails)}
                    >
                      <MdPlaylistAdd size={22} />
                      {present ? <p>Saved</p> : <p>Save</p>}
                    </SavedButton>
                  </LikesContainer>
                </ViewsLikesCard>
                <hr />
                <ChannelContainer>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ChannelName>{name}</ChannelName>
                    <SubscriberCount>
                      {subscriberCount} subscribers
                    </SubscriberCount>
                    <p>{description}</p>
                  </div>
                </ChannelContainer>
              </VideoDetailsContainer>
            </VideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderApiStatus = () => {
    const {videoApiStatus} = this.state

    switch (videoApiStatus) {
      case videoApiConstant.pending:
        return this.renderLoader()
      case videoApiConstant.success:
        return this.renderVideoDetails()
      case videoApiConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <VideoItemDetailsContainer>
          <SideBar />
          {this.renderApiStatus()}
        </VideoItemDetailsContainer>
      </div>
    )
  }
}
export default VideoItemDetails
