import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedRoute from './components/SavedRoute'
import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    saved: false,
    activeMenuItem: 'HOME',
  }

  onToggleThemeIcon = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideoItem = videoDetails => {
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, videoDetails],
    }))
  }

  removeVideoItem = videoDetails => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedList})
  }

  updateSavedVideosList = videoDetails => {
    const {saved} = this.state
    if (saved === true) {
      this.removeVideoItem(videoDetails)
    } else {
      this.addVideoItem(videoDetails)
    }
  }

  onToggleSaveIcon = videoDetails => {
    console.log(videoDetails)
    this.setState(
      prevState => ({saved: !prevState.saved}),
      this.updateSavedVideosList(videoDetails),
    )
  }

  changeActiveMenuItem = item => {
    this.setState({activeMenuItem: item})
  }

  render() {
    const {isDarkTheme, savedVideosList, saved, activeMenuItem} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          saved,
          activeMenuItem,
          isDarkTheme,
          savedVideosList,
          addVideoItem: this.addVideoItem,
          removeVideoItem: this.removeVideoItem,
          onToggleThemeIcon: this.onToggleThemeIcon,
          onToggleSaveIcon: this.onToggleSaveIcon,
          changeActiveMenuItem: this.changeActiveMenuItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedRoute} />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
