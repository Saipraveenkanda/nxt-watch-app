import React from 'react'

const NxtWatchContext = React.createContext({
  activeMenuItem: 'HOME',
  saved: false,
  savedVideosList: [],
  isDarkTheme: false,
  onToggleThemeIcon: () => {},
  onToggleSaveIcon: () => {},
  addVideoItem: () => {},
  removeVideoItem: () => {},
  changeActiveMenuItem: () => {},
})

export default NxtWatchContext
