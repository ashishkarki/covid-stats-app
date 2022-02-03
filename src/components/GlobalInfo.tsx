import styled from '@emotion/styled'
import React from 'react'

interface GlobalInfoProps {
  newConfirmed: number
  newDeaths: number
  newRecovered: number
}

const intlNumberFormatter = (num: number) => new Intl.NumberFormat().format(num)

const Wrapper = styled.div`
  text-align: center;
`

const GlobalInfo: React.FunctionComponent<GlobalInfoProps> = ({
  newConfirmed,
  newDeaths,
  newRecovered,
}) => {
  return (
    <Wrapper>
      <h1>Global Covid Tracker</h1>
      <h3>New Confirmed: {intlNumberFormatter(newConfirmed)}</h3>
      <h3>New Deaths: {intlNumberFormatter(newDeaths)}</h3>
      <h3>New Recovered: {intlNumberFormatter(newRecovered)}</h3>
    </Wrapper>
  )
}

export default GlobalInfo
