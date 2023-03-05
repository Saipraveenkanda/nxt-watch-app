import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {MdAccountCircle} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {
  MobileNavContainer,
  MediumNavContainer,
  NavigationBar,
  WebsiteLogo,
  MobileButtons,
  LogoutButton,
  LogoutPopup,
  LogoutCard,
  PopupButtons,
} from './headerStyling'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavigationBar>
      <Link to="/">
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </Link>
      <MediumNavContainer>
        <MobileButtons type="button" data-testid="theme">
          <FaMoon size={22} />
        </MobileButtons>
        <MobileButtons type="button">
          <MdAccountCircle size={22} />
        </MobileButtons>
        <Popup
          modal
          trigger={<LogoutButton type="button">Logout</LogoutButton>}
        >
          {close => (
            <LogoutPopup>
              <LogoutCard>
                <p>Are you sure you want to logout?</p>
                <div>
                  <PopupButtons cancel type="button" onClick={() => close()}>
                    Cancel
                  </PopupButtons>
                  <PopupButtons type="button" onClick={onClickLogout}>
                    Confirm
                  </PopupButtons>
                </div>
              </LogoutCard>
            </LogoutPopup>
          )}
        </Popup>
      </MediumNavContainer>
      <MobileNavContainer>
        <MobileButtons type="button">
          <FaMoon size={22} />
        </MobileButtons>
        <MobileButtons type="button">
          <GiHamburgerMenu size={22} />
        </MobileButtons>

        <Popup
          modal
          trigger={
            <MobileButtons type="button">
              <FiLogOut size={22} />
            </MobileButtons>
          }
        >
          {close => (
            <LogoutPopup>
              <LogoutCard>
                <p>Are you sure you want to logout?</p>
                <div>
                  <PopupButtons cancel type="button" onClick={() => close()}>
                    Cancel
                  </PopupButtons>
                  <PopupButtons type="button" onClick={onClickLogout}>
                    Confirm
                  </PopupButtons>
                </div>
              </LogoutCard>
            </LogoutPopup>
          )}
        </Popup>
      </MobileNavContainer>
    </NavigationBar>
  )
}
export default withRouter(Header)
