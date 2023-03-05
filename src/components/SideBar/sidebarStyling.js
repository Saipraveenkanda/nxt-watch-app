import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 15vw;
  height: 93vh;
  display: flex;
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
`
export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 18px;
  cursor: pointer;
`
export const NavItemName = styled.p`
  color: #181818;
  font-size: 16px;
  font-weight: 500;
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
  color: #1e293b;
  width: 60%;
`
export const FooterHeading = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #181818;
`
export const FooterContainer = styled.div`
  padding-left: 20px;
`
export const IconImage = styled.img`
  width: 36px;
  margin-right: 10px;
`
