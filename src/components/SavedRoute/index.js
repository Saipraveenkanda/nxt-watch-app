import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoItem from '../SavedVideoItem'
import {
  NoSavedVideosContainer,
  NoSavedVideoImage,
  NoSavedVideosHeading,
  NoSavedVideosDesc,
  SavedVideosMainContainer,
  SavedVideosContainer,
  SavedBanner,
  FireIconContainer,
  SavedHeading,
  SavedVideosList,
} from './savedStyling'

const SavedRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value

      const renderNoVideos = () => (
        <NoSavedVideosContainer isDarkTheme={isDarkTheme}>
          <NoSavedVideoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosHeading>No saved videos found</NoSavedVideosHeading>
          <NoSavedVideosDesc>
            You can save your videos while watching them
          </NoSavedVideosDesc>
        </NoSavedVideosContainer>
      )

      const renderSavedVideosList = () => {
        if (savedVideosList.length === 0) {
          return renderNoVideos()
        }
        return (
          <SavedVideosList>
            {savedVideosList.map(each => (
              <SavedVideoItem videoDetails={each} key={each.id} />
            ))}
          </SavedVideosList>
        )
      }

      return (
        <>
          <Header />
          <SavedVideosMainContainer>
            <SideBar />
            <SavedVideosContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              <SavedBanner isDarkTheme={isDarkTheme}>
                <FireIconContainer>
                  <HiFire size={40} color="#ff0000" />
                </FireIconContainer>
                <SavedHeading isDarkTheme={isDarkTheme}>
                  Saved Videos
                </SavedHeading>
              </SavedBanner>
              <div>{renderSavedVideosList()}</div>
            </SavedVideosContainer>
          </SavedVideosMainContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedRoute
