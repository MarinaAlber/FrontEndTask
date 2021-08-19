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
  const countriesApi = `${process.env.REACT_APP_API_GET_COUNTRIES_BY_NAME}${countryName}`;
  return get(countriesApi);
}

export function getCountriesByRegion(region) {
  const countriesApi = `${process.env.REACT_APP_API_GET_COUNTRIES_BY_REGION}${region}`;
  return get(countriesApi);
}

export function getBorderCountries(borderCodes) {
  const codes = borderCodes.join(";");
  const bordersApi = `${process.env.REACT_APP_API_GET_COUNTRY_BORDERS}`;

  return get(bordersApi, {
    params: {
      codes,
      fields: "name;alpha3Code",
    },
  });
}
