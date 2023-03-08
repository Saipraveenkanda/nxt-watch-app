import styled from 'styled-components'

export const VideoCard = styled.li`
  width: 85vw;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  @media (max-width: 576px) {
    width: 100vw;
    flex-direction: column;
  }
`
export const Thumbnail = styled.img`
  width: 350px;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const VideoDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  @media (max-width: 576px) {
    margin-top: 14px;
    margin-left: 5px;
  }
`
export const VideoDetailTextContent = styled.div`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000')};
`
export const ViewsAndTime = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`
export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  margin-top: 0;
  margin-bottom: 0;
`
export const ChannelName = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  margin-top: 4px;
`
export const ViewsText = styled.p`
  margin-right: 0px;
`
