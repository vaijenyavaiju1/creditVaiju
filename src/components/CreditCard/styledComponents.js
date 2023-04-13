// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const FirstDiv = styled.div`
  background-color: #344e7a;
  height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`
export const OneDivOff = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
`
export const Hori = styled.hr`
  border: 2px solid #ffd773;
  width: 100px;
`
export const ImageCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 45%;
  width: 65%;
  border-radius: 12px;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
`
export const CardPara = styled.p`
  color: #ffffff;
`
export const SecondDiv = styled.div`
  background-color: #d3d9e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const SecondOneOff = styled.div`
  background-color: #ffffff;
  box-shadow: #c3cad9;
  padding: 20px;
  border-radius: 12px;
  border-width: 0px;
`
export const SecondHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  text-align: center;
`

export const SecondInput = styled.input`
  width: 90%;
  height: 35px;
  border: 1px solid #c3cad9;
  margin: 12px;
`
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NumberCon = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
`

export const NameCon = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`
