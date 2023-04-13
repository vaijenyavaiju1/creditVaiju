// Write your code here
import {useState} from 'react'

import {
  FirstDiv,
  Heading,
  Hori,
  ImageCon,
  CardPara,
  OneDivOff,
  SecondDiv,
  MainContainer,
  SecondOneOff,
  SecondHeading,
  SecondInput,
  InputDiv,
  NameCon,
  NumberCon,
} from './styledComponents'

const CreditCard = () => {
  const [number, userNumber] = useState('')
  const [name, userName] = useState('')

  const onChangeNumber = event => {
    userNumber(event.target.value)
  }

  const onChangeName = event => {
    userName(event.target.value)
  }

  return (
    <MainContainer>
      <FirstDiv>
        <OneDivOff>
          <Heading>Credit Card</Heading>
          <Hori />
        </OneDivOff>
        <ImageCon data-testid="creditCard">
          <NumberCon>{number}</NumberCon>
          <CardPara>CARDHOLDER NAME</CardPara>
          <NameCon>{name}</NameCon>
        </ImageCon>
      </FirstDiv>
      <SecondDiv>
        <SecondOneOff>
          <SecondHeading>Payment Method</SecondHeading>
          <InputDiv>
            <SecondInput
              placeholder="Card Number"
              onChange={onChangeNumber}
              value={number}
              type="text"
            />
            <SecondInput
              placeholder="Cardholder Name"
              onChange={onChangeName}
              value={name}
              type="text"
            />
          </InputDiv>
        </SecondOneOff>
      </SecondDiv>
    </MainContainer>
  )
}

export default CreditCard
