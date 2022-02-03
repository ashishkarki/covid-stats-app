import { Global, css } from '@emotion/react'
import { useEffect, useState } from 'react'
import BarChart from './components/BarChart'
import CountryList from './components/CountryList'
import GlobalInfo from './components/GlobalInfo'
import { CountryType, ResponseDataType } from './types'

const App: React.FunctionComponent = () => {
  const [appState, setAppState] = useState<ResponseDataType | undefined>(
    undefined,
  )

  const [activeCountries, setActiveCountries] = useState<CountryType[]>([])

  const fetchData = async () => {
    const result = await fetch(`https://api.covid19api.com/summary`)
    const data: ResponseDataType = await result.json()

    setAppState(data)
  }

  const handleCountryClick = (country: CountryType) => {
    const countryIndex = activeCountries.findIndex(
      (activeCoun) => activeCoun.ID === country.ID,
    )

    if (countryIndex > -1) {
      const tempActiveCountries = [...activeCountries]
      tempActiveCountries.splice(countryIndex, 1)

      setActiveCountries(tempActiveCountries)
    } else {
      setActiveCountries([...activeCountries, country])
      console.log(`active countries: ${activeCountries}`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <Global
        styles={css`
          body {
            background-color: #c7db96;
          }
        `}
      />

      {appState ? (
        <>
          <GlobalInfo
            newConfirmed={appState?.Global.NewConfirmed}
            newDeaths={appState?.Global.NewDeaths}
            newRecovered={appState?.Global.NewRecovered}
          />

          {activeCountries.length > 0 ? (
            <BarChart countries={activeCountries} />
          ) : null}

          <CountryList
            countries={appState.Countries}
            onCountryClick={handleCountryClick}
          />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default App
