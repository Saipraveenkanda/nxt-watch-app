import styled from 'styled-components'

export const GameVideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  list-style-type: none;
  margin-right: 14px;
  margin-bottom: 14px;
  padding: 12px;
  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0;
    padding: 12px;
  }
`
export const GameVideoThumbnail = styled.img`
  width: 100%;
`
export const GameTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#fff' : '#0f0f0f')};
`
export const GameViews = styled.p`
  font-size: 22px;
  color: #475569;
  margin-top: 0;
`
