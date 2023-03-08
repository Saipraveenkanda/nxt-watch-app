import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoContainer = styled.div`
  width: 100vw;
  height: 93vh;
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media (max-width: 576px) {
    width: 100vw;
  }
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
export const ViewsAndTime = styled.div`
  color: #64748b;
  display: flex;
  align-items: center;
  margin: 0;
`
export const ViewsText = styled.p`
  margin-right: 0px;
`
export const ViewsLikesCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const VideoPlayer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeButton = styled.button`
  background-color: transparent;
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
  border: none;
  outline: none;
  cursor: pointer;
  width: 70px;
  display: flex;
  align-items: center;
  margin-right: 12px;
`
export const DisLikeButton = styled.button`
  background-color: transparent;
  color: ${props => (props.disLiked ? '#2563eb' : '#64748b')};
  border: none;
  outline: none;
  cursor: pointer;
  width: 70px;
  display: flex;
  align-items: center;
  margin-right: 12px;
`
export const SavedButton = styled.button`
  background-color: transparent;
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
  border: none;
  outline: none;
  cursor: pointer;
  width: 70px;
  display: flex;
  align-items: center;
  margin-right: 12px;
`

export const VideoDetailsContainer = styled.div`
  padding: 12px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000')};
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProfileImage = styled.img`
  width: 50px;
  margin-right: 12px;
`
export const ChannelName = styled.p`
  margin-top: 0;
`
export const SubscriberCount = styled.p`
  color: #64748b;
`
