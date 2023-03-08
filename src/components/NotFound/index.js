import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
  NotFoundMainContainer,
} from './notFoundStyling'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <>
    <Header />
    <NotFoundMainContainer>
      <SideBar />
      <NotFoundContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundDesc>
          we are sorry, the page you requested could not be found.
        </NotFoundDesc>
      </NotFoundContainer>
    </NotFoundMainContainer>
  </>
)
export default NotFound
