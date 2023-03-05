import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HomeRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoBannerContainer = styled.div`
  width: 85vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const BannerText = styled.p`
  font-size: 20px;
`
export const BannerLogo = styled.img`
  width: 140px;
`
export const BannerContainer = styled.div`
  height: 250px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media (max-width: 768px) {
    width: 100vw;
    padding: 24px;
  }
`
export const BannerButton = styled.button`
  background-color: transparent;
  color: #181818;
  border: 1px solid #181818;
  width: 160px;
  height: 44px;
  font-size: 16px;
  font-weight: 700;
`
export const BannerCloseCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 24px;
  @media (max-width: 576px) {
    padding: 0;
  }
`
export const SearchBarContainer = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  width: 40%;
  height: 36px;
  border: 1px solid #909090;
  background-color: #fff;
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 576px && max-width:768px) {
    width: 60%;
  }
`
export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 16px;
  color: #909090;
  font-weight: 500;
  padding: 16px;
`
export const SearchButton = styled.button`
  height: 100%;
  width: 80px;
  background-color: #f1f1f1;
  border: none;
  border-left: 1px solid #909090;
  cursor: pointer;
`
export const VideosList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0;
`
