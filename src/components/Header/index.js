import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd, MdClose} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

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
  ProfileImage,
  NavigationItems,
  NavListItem,
  NavItemName,
  MobileMenuContainer,
  CloseButton,
  LogoutConfirmationText,
} from './headerStyling'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const activeMenuConstant = {
    home: 'HOME',
    trending: 'TRENDING',
    gaming: 'GAMING',
    saved: 'SAVED-VIDEOS',
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isDarkTheme,
          onToggleThemeIcon,
          activeMenuItem,
          changeActiveMenuItem,
        } = value
        const applyToHome = activeMenuItem === 'HOME'
        const applyToTrending = activeMenuItem === 'TRENDING'
        const applyToGame = activeMenuItem === 'GAMING'
        const applyToSaved = activeMenuItem === 'SAVED-VIDEOS'

        const iconColor = isDarkTheme ? '#424242' : '#7e858e'
        const iconActive = '#ff0b37'

        const websiteUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavigationBar isDarkTheme={isDarkTheme}>
            <Link to="/">
              <WebsiteLogo src={websiteUrl} alt="website logo" />
            </Link>
            <MediumNavContainer>
              <MobileButtons
                type="button"
                data-testid="theme"
                onClick={onToggleThemeIcon}
              >
                {isDarkTheme ? (
                  <FiSun size={22} color="#fff" />
                ) : (
                  <FaMoon size={22} />
                )}
              </MobileButtons>
              <MobileButtons type="button">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </MobileButtons>
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutPopup isDarkTheme={isDarkTheme}>
                    <LogoutCard isDarkTheme={isDarkTheme}>
                      <LogoutConfirmationText isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout?
                      </LogoutConfirmationText>
                      <div>
                        <PopupButtons
                          cancel
                          type="button"
                          onClick={() => close()}
                        >
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
              <MobileButtons type="button" onClick={onToggleThemeIcon}>
                <FaMoon size={22} />
              </MobileButtons>
              <Popup
                modal
                trigger={
                  <MobileButtons type="button">
                    <GiHamburgerMenu size={22} />
                  </MobileButtons>
                }
              >
                {close => (
                  <MobileMenuContainer isDarkTheme={isDarkTheme}>
                    <CloseButton type="button" onClick={() => close()}>
                      <MdClose
                        size={30}
                        color={isDarkTheme ? '#fff' : '#000'}
                      />
                    </CloseButton>
                    <div>
                      <NavigationItems isDarkTheme={isDarkTheme}>
                        <Link to="/" className="link-style">
                          <NavListItem
                            applyBorder={applyToHome}
                            isDarkTheme={isDarkTheme}
                            onClick={() =>
                              changeActiveMenuItem(activeMenuConstant.home)
                            }
                          >
                            <AiFillHome
                              size={22}
                              color={
                                activeMenuItem === activeMenuConstant.home
                                  ? iconActive
                                  : iconColor
                              }
                            />
                            <NavItemName applyBorder={applyToHome}>
                              Home
                            </NavItemName>
                          </NavListItem>
                        </Link>
                        <Link to="/trending" className="link-style">
                          <NavListItem
                            applyBorder={applyToTrending}
                            isDarkTheme={isDarkTheme}
                            onClick={() =>
                              changeActiveMenuItem(activeMenuConstant.trending)
                            }
                          >
                            <HiFire
                              size={22}
                              color={
                                activeMenuItem === activeMenuConstant.trending
                                  ? iconActive
                                  : iconColor
                              }
                            />
                            <NavItemName applyBorder={applyToTrending}>
                              Trending
                            </NavItemName>
                          </NavListItem>
                        </Link>
                        <Link to="/gaming" className="link-style">
                          <NavListItem
                            applyBorder={applyToGame}
                            isDarkTheme={isDarkTheme}
                            onClick={() =>
                              changeActiveMenuItem(activeMenuConstant.gaming)
                            }
                          >
                            <SiYoutubegaming
                              size={22}
                              color={
                                activeMenuItem === activeMenuConstant.gaming
                                  ? iconActive
                                  : iconColor
                              }
                            />
                            <NavItemName applyBorder={applyToGame}>
                              Gaming
                            </NavItemName>
                          </NavListItem>
                        </Link>
                        <Link to="/saved-videos" className="link-style">
                          <NavListItem
                            applyBorder={applyToSaved}
                            isDarkTheme={isDarkTheme}
                            onClick={() =>
                              changeActiveMenuItem(activeMenuConstant.saved)
                            }
                          >
                            <MdPlaylistAdd
                              size={22}
                              color={
                                activeMenuItem === activeMenuConstant.saved
                                  ? iconActive
                                  : iconColor
                              }
                            />
                            <NavItemName applyBorder={applyToSaved}>
                              Saved Videos
                            </NavItemName>
                          </NavListItem>
                        </Link>
                      </NavigationItems>
                    </div>
                  </MobileMenuContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <MobileButtons type="button">
                    <FiLogOut size={22} />
                  </MobileButtons>
                }
              >
                {close => (
                  <LogoutPopup isDarkTheme={isDarkTheme}>
                    <LogoutCard isDarkTheme={isDarkTheme}>
                      <p>Are you sure you want to logout?</p>
                      <div>
                        <PopupButtons
                          cancel
                          type="button"
                          onClick={() => close()}
                        >
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
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
