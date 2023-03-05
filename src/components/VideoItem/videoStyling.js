import styled from 'styled-components'

export const VideoCard = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 20px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetail = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`
export const ChannelLogo = styled.img`
  width: 40px;
  align-self: flex-start;
  margin-right: 10px;
`
export const ViewsAndTime = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`
export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #181818;
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
