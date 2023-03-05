import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 16px 0px #bfbfbfbf;
  height: 45%;
  padding-left: 32px;
  padding-right: 32px;
`
export const WebsiteLogo = styled.img`
  width: 60%;
  align-self: center;
  padding: 24px;
  box-sizing: border-box;
`
export const Label = styled.label`
  color: #616e7c;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const InputStyle = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #475569;
  outline: none;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  height: 44px;
  margin-top: 16px;
`
export const ShowPassCont = styled.div`
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input`
  height: 18px;
  width: 18px;
  margin-right: 8px;
`
export const LabelCheck = styled.label`
  margin-bottom: 0;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-weight: bold;
`
