import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {
  VideoCard,
  Thumbnail,
  VideoDetail,
  ChannelLogo,
  ViewsAndTime,
  VideoTitle,
  ChannelName,
  ViewsText,
} from './videoStyling'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const formattedDate = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]

  return (
    <Link to={`${id}`}>
      <VideoCard>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetail className="video-details-card">
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <div>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <ViewsAndTime>
              <ViewsText>{viewCount} views</ViewsText>
              <BsDot size={28} />
              <p>{formattedDate} years ago</p>
            </ViewsAndTime>
          </div>
        </VideoDetail>
      </VideoCard>
    </Link>
  )
}
export default VideoItem

/*
channel: {name: 'CyberEye', profileImageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png'}
id: "9420a07a-df83-419e-a46e-ed308103e829"
publishedAt: "Apr 23, 2020"
thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-cyber-eye-img.png"
title: "Avinash Dara, CyberEye | Smart Campus - A Deployment Perspective | The Things Virtual Conference"
viewCount: "23K"
*/

/* import {formatDistanceToNow} from 'date-fns'
console.log(formatDistanceToNow(new Date(2021, 8, 20))) */
