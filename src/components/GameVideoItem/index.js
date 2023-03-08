import {Link} from 'react-router-dom'
import {
  GameVideoContainer,
  GameVideoThumbnail,
  GameTitle,
  GameViews,
} from './gameVideoStyling'
import NxtWatchContext from '../../context/NxtWatchContext'

const GameVideoItem = props => {
  const {gameDetail} = props
  const {id, thumbnailUrl, title, viewCount} = gameDetail

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GameVideoContainer>
            <Link to={`/videos/${id}`} className="link-style">
              <GameVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle isDarkTheme={isDarkTheme}>{title}</GameTitle>
              <GameViews>{viewCount} Watching Worldwide</GameViews>
            </Link>
          </GameVideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default GameVideoItem
