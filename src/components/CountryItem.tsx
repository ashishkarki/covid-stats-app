import React, { useState } from 'react'
import styled from '@emotion/styled'
import { CountryType } from '../types'

const ListItem = styled.li`
  list-style: none;
  flex: 0 0 45%;
  text-align: center;
  cursor: pointer;

  @media (min-width: 420px) {
    flex: 0 0 32%;
  }

  background-color: lightblue;
  border: 1px groove lightblue;
  border-radius: 3px;
  margin: 2px;
  padding: 2px;
`

interface ListContentProps {
  isActive: boolean
}

const ListContent = styled.div<ListContentProps>`
  background-color: ${(props) => (props.isActive ? 'lightgreen' : '#8bd4c5')};
  padding: 2px;
  height: 100%;
`

interface CountryItemProps {
  country: CountryType
  onCountryClick: (country: CountryType) => void
}

const CountryItem: React.FC<CountryItemProps> = ({
  country,
  onCountryClick,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleCountryClick = (country: CountryType) => {
    onCountryClick(country)

    setIsActive(!isActive)
  }

  return (
    <ListItem key={country.ID} onClick={() => handleCountryClick(country)}>
      <ListContent isActive={isActive}>
        <h4> {country.Country}</h4>
        <div>New Confirmed: {country.NewConfirmed}</div>
        <div>New Deaths: {country.NewDeaths}</div>
        <div>New Recovered: {country.NewRecovered}</div>
      </ListContent>
    </ListItem>
  )
}

export default CountryItem
