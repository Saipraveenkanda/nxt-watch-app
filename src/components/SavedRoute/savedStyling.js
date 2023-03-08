import styled from 'styled-components'

export const NoSavedVideosContainer = styled.div`
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  width: 83vw;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    width: 100vw;
  }
`
export const NoSavedVideoImage = styled.img`
  width: 30%;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const NoSavedVideosHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
`
export const NoSavedVideosDesc = styled.p`
  color: #64748b;
  font-size: 16px;
  font-weight: 500;
`
export const SavedVideosMainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9 ')};
  width: 100vw;
  min-height: 93vh;
  @media (max-width: 576px) {
    width: 100vw;
  }
`
export const SavedBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
  padding: 24px;
  padding-left: 5%;
`
export const FireIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #cbd5e1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`
export const SavedHeading = styled.h1`
  font-size: 34px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#0f0f0f')};
  font-weight: 700;
`
export const SavedVideosList = styled.ul`
  padding-left: 0;
`
