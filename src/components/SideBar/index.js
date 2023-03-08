import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  SidebarContainer,
  NavigationItems,
  NavListItem,
  NavItemName,
  IconsContainer,
  FooterText,
  FooterHeading,
  FooterContainer,
  IconImage,
} from './sidebarStyling'
import NxtWatchContext from '../../context/NxtWatchContext'

const activeMenuConstant = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  saved: 'SAVED-VIDEOS',
}

class SideBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, activeMenuItem, changeActiveMenuItem} = value

          const iconColor = isDarkTheme ? '#424242' : '#7e858e'
          const iconActive = '#ff0b37'

          return (
            <SidebarContainer isDarkTheme={isDarkTheme}>
              <NavigationItems isDarkTheme={isDarkTheme}>
                <Link to="/" className="link-style">
                  <NavListItem
                    isDarkTheme={isDarkTheme}
                    isActive={activeMenuItem === activeMenuConstant.home}
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
                    <NavItemName
                      isActive={activeMenuItem === activeMenuConstant.home}
                    >
                      Home
                    </NavItemName>
                  </NavListItem>
                </Link>
                <Link to="/trending" className="link-style">
                  <NavListItem
                    isDarkTheme={isDarkTheme}
                    isActive={activeMenuItem === activeMenuConstant.trending}
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
                    <NavItemName
                      isActive={activeMenuItem === activeMenuConstant.trending}
                    >
                      Trending
                    </NavItemName>
                  </NavListItem>
                </Link>
                <Link to="/gaming" className="link-style">
                  <NavListItem
                    isDarkTheme={isDarkTheme}
                    isActive={activeMenuItem === activeMenuConstant.gaming}
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
                    <NavItemName
                      isActive={activeMenuItem === activeMenuConstant.gaming}
                    >
                      Gaming
                    </NavItemName>
                  </NavListItem>
                </Link>
                <Link to="/saved-videos" className="link-style">
                  <NavListItem
                    isDarkTheme={isDarkTheme}
                    isActive={activeMenuItem === activeMenuConstant.saved}
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
                    <NavItemName
                      isActive={activeMenuItem === activeMenuConstant.saved}
                    >
                      Saved Videos
                    </NavItemName>
                  </NavListItem>
                </Link>
              </NavigationItems>
              <FooterContainer>
                <FooterHeading isDarkTheme={isDarkTheme}>
                  CONTACT US
                </FooterHeading>
                <IconsContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsContainer>
                <FooterText isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </FooterText>
              </FooterContainer>
            </SidebarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default SideBar
