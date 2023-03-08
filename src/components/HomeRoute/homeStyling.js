import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 93vh;
  display: flex;
  flex-direction: row;
`
export const HomeRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoBannerContainer = styled.div`
  overflow-x: auto;
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
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
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
export const FailureContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 40%;
`
export const FailureHeading = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #0f0f0f;
`
export const FailureDescription = styled.p`
  width: 40%;
  text-align: center;
  font-size: 18px;
  color: #475569;
  font-weight: 500;
  margin-top: 0;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  width: 90px;
  height: 36px;
`
export const NoResultsContainer = styled.div`
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoResultImage = styled.img`
  width: 30%;
`
export const NoResultHeading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #181818;
  margin: 0;
`
export const NoResultDesc = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #64748b;
`
