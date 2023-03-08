import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  VideoCard,
  Thumbnail,
  VideoDetail,
  VideoDetailTextContent,
  ViewsAndTime,
  VideoTitle,
  ChannelName,
  ViewsText,
} from './savedVideoStyling'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
  } = videoDetails
  const {name} = channel
  const formattedDate = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="link-style">
            <VideoCard>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetail>
                <VideoDetailTextContent isDarkTheme={isDarkTheme}>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <ChannelName>{name}</ChannelName>
                  <ViewsAndTime>
                    <ViewsText>{viewCount} views</ViewsText>
                    <BsDot size={28} />
                    <p>{formattedDate} years ago</p>
                  </ViewsAndTime>
                </VideoDetailTextContent>
              </VideoDetail>
            </VideoCard>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default SavedVideoItem
