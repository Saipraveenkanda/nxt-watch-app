import styled from 'styled-components'

export const NavigationBar = styled.nav`
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#f9f9f9 '};
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 12px 24px;
`

export const MobileNavContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileButtons = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 12px;
  height: 36px;
  width: 36px;
  cursor: pointer;
`
export const LogoutButton = styled(MobileButtons)`
  border: 1px solid #3b82f6;
  color: ${props => (props.isDarkTheme ? '#fff' : '#3b82f6')};
  font-size: 13px;
  font-weight: bold;
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#fff')};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  width: 120px;
  height: 32px;
  border: ${props =>
    props.isDarkTheme ? '1px solid #fff' : '1px solid #3b82f6'};
`
export const MediumNavContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`
export const WebsiteLogo = styled.img`
  width: 160px;
`
export const LogoutPopup = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoutCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#fff')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 150px;
`
export const PopupButtons = styled.button`
  background-color: ${props => (props.cancel ? 'transparent' : '#3b82f6')};
  color: ${props => (props.cancel ? '#64748b' : '#fff')};
  border: ${props => (props.cancel ? '1px solid #64748b' : 'none')};
  height: 36px;
  width: 90px;
  font-weight: bold;
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const ProfileImage = styled.img`
  width: 30px;
`
export const NavigationItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  color: ${props => (props.isDarkTheme === true ? '#fff' : '#000')};
`
export const NavListItem = styled.li`
  background-color: ${props => (props.darkBorder ? '#606060' : 'transparent')};
  /* background-color: ${props =>
    props.applyBorder ? '#e2e8f0' : 'transparent'}; */
  display: flex;
  align-items: center;
  padding-left: 18px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#181818')};
`
export const NavItemName = styled.p`
  font-size: 16px;
  font-weight: ${props => (props.applyBorder ? 'bold' : 'normal')};
  margin-left: 18px;
`
export const MobileMenuContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  width: 30%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const LogoutConfirmationText = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#1e293b')};
`
