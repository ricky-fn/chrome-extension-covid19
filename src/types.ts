export interface ApiResponse {
  timestamp: string,
  countries: Record<string, {
    name: string,
    flag: string,
    altNames: string[],
    reports: number,
    cases: number,
    deaths: number,
    recovered: number,
    lat: number,
    lng: number,
    deltaCases: null | number,
    deltaDeaths: null | number,
    deltaRecovered: number,
    casesPerOneMillion: number,
    deathsPerOneMillion: number,
    totalTests: number,
    testsPerOneMillion: number,
    population: number,
    vaccinated: number,
    deltaVaccinated: number,
    vaccinatedPerOneMillion: number,
  }>,
  worldwide: {
    reports: number,
    deaths: number,
    recovered: number,
    vaccinated: number,
  },
  countriesSortedByActive: string[],
  max: string,
  search: {
    iso: string,
    name: string,
    total: string[]
  }[]
}