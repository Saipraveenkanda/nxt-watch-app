import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 15vw;
  height: auto;
  display: flex;
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#f9f9f9 '};
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavigationItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  color: ${props => (props.isDarkTheme === true ? '#fff' : '#000')};
`
export const NavListItem = styled.li`
  background-color: ${props => {
    const {isDarkTheme} = props
    const color = isDarkTheme === true ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
  display: flex;
  align-items: center;
  padding-left: 18px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#181818')};
`
export const NavItemName = styled.p`
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  margin-left: 18px;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const FooterText = styled.p`
  font-size: 16px;
  font-weight: 500;
  width: 60%;
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#1e293b')};
`
export const FooterHeading = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#181818')};
`
export const FooterContainer = styled.div`
  padding-left: 20px;
`
export const IconImage = styled.img`
  width: 36px;
  margin-right: 10px;
`
