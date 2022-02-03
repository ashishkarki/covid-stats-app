import styled from '@emotion/styled'

import { CountryType } from '../types'
import CountryItem from './CountryItem'

interface CountryListProps {
  countries: CountryType[]
  onCountryClick: (country: CountryType) => void
}

const ListWrapper = styled.ul`
  padding: 2px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  border: 2px solid blueviolet;
`

const CountryList: React.FC<CountryListProps> = ({
  countries,
  onCountryClick,
}) => {
  return (
    <ListWrapper>
      {countries.map((country) => (
        <CountryItem
          country={country}
          onCountryClick={onCountryClick}
          key={country.ID}
        />
      ))}
    </ListWrapper>
  )
}

export default CountryList
