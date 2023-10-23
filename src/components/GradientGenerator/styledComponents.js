import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  font-size: 24px;
`

export const DirectionsDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`

export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  text-align: center;
  font-size: 24px;
  line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding: 15px;
  margin: 10px;
  outline: none;
  cursor: pointer;
`
