import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  Form,
  WebsiteLogo,
  Label,
  InputStyle,
  LoginBtn,
  ShowPassCont,
  CheckBox,
  LabelCheck,
  ErrorMsg,
} from './loginStyling'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    isChecked: false,
  }

  onToggleCheckbox = event => {
    this.setState({isChecked: event.target.checked})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg, isChecked} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <Form onSubmit={this.onSubmitForm}>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Label htmlFor="username">USERNAME</Label>
          <InputStyle
            type="text"
            placeholder="Username"
            onChange={this.onChangeUserName}
            value={username}
          />
          <Label htmlFor="username">PASSWORD</Label>
          <InputStyle
            type={isChecked ? 'text' : 'password'}
            placeholder="Password"
            onChange={this.onChangePassword}
            value={password}
          />
          <ShowPassCont>
            <CheckBox
              type="checkbox"
              id="checkbox"
              onChange={this.onToggleCheckbox}
            />
            <LabelCheck htmlFor="checkbox">Show Password</LabelCheck>
          </ShowPassCont>
          <LoginBtn type="submit">Login</LoginBtn>
          {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </Form>
      </LoginContainer>
    )
  }
}
export default LoginRoute
