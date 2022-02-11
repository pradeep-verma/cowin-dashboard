import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161625;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 40px;
`

export const ContentContainer = styled.div`
  width: 84%;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const LogoImage = styled.img`
  width: 50px;
  margin-right: 12px;
`

export const LogoText = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #2cc6c6;
  font-family: 'Roboto';
`

export const VaccinationTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: #cbd5e1;
  font-family: 'Roboto';
`

export const LoaderContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const FailureContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 350px;
`

export const FailureText = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Roboto';
`
