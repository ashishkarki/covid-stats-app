export type GlobalType = {
  Date: string
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
}

export type CountryType = GlobalType & {
  Country: string
  CountryCode: string
  ID: string
  Premium: unknown
  Slug: string
}

export type ResponseDataType = {
  Countries: CountryType[]
  Date: string
  Global: GlobalType
  ID: string
  message: string
}
