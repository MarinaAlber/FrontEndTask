import { get } from "./requestHelper";
export function getCountriesList() {
  const getAllCountriesApi = process.env.REACT_APP_API_GET_LIST;
  return get(getAllCountriesApi);
}

export function getCountryDetails(countryName) {
  const getCountryApi = `${process.env.REACT_APP_API_GET_COUNTRIES_BY_NAME}${countryName}`;
  return get(getCountryApi, {
    params: {
      fullName: true,
    },
  });
}

export function getCountriesByName(countryName) {
  const getCountriesApi = `${process.env.REACT_APP_API_GET_COUNTRIES_BY_NAME}${countryName}`;
  return get(getCountriesApi);
}

export function getCountriesByRegion(region) {
  const getCountriesApi = `${process.env.REACT_APP_API_GET_COUNTRIES_BY_REGION}${region}`;
  return get(getCountriesApi);
}
