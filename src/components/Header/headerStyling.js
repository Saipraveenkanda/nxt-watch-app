import styled from 'styled-components'

export const NavigationBar = styled.nav`
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
  color: #3b82f6;
  font-size: 13px;
  font-weight: bold;
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  width: 120px;
  height: 32px;
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
  background-color: transparent;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoutCard = styled.div`
  background-color: #fff;
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
