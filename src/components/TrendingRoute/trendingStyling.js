import styled from 'styled-components'

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
export const VideosList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0;
  padding: 12px;
`
export const TrendingMainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const TrendingVideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 85vw;
  @media (max-width: 576px) {
    width: 100vw;
  }
`
export const TrendingBanner = styled.div`
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
export const TrendingHeading = styled.h1`
  font-size: 34px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#0f0f0f')};
  font-weight: 700;
`
