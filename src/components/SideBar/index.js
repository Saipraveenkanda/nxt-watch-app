import {Component} from 'react'
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

class SideBar extends Component {
  render() {
    return (
      <SidebarContainer className="sidebar-container">
        <NavigationItems>
          <NavListItem>
            <AiFillHome size={22} />
            <NavItemName>Home</NavItemName>
          </NavListItem>
          <NavListItem>
            <HiFire size={22} />
            <NavItemName>Trending</NavItemName>
          </NavListItem>
          <NavListItem>
            <SiYoutubegaming size={22} />
            <NavItemName>Gaming</NavItemName>
          </NavListItem>
          <NavListItem>
            <MdPlaylistAdd size={22} />
            <NavItemName>Saved Videos</NavItemName>
          </NavListItem>
        </NavigationItems>
        <FooterContainer>
          <FooterHeading>CONTACT US</FooterHeading>
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
          <FooterText>
            Enjoy! Now to see your channels and recommendations!
          </FooterText>
        </FooterContainer>
      </SidebarContainer>
    )
  }
}
export default SideBar
