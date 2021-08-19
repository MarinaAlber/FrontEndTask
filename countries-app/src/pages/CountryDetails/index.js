import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { getBorderCountries, getCountryDetails } from "../../api";

import "./styles.scss";

class CountryDetails extends React.Component {
  state = {
    isLoading: true,
    hasError: false,
    country: null,
    borderCountries: [],
  };
  componentDidMount() {
    const { params } = this.props.match;
    const countryFullName = params.name;
    this.getDetails(countryFullName);
  }

  async getDetails(name) {
    try {
      const response = await getCountryDetails(name);
      const country = response.data && response.data[0];

      const borderCountries = country.borders.length
        ? await getBorderCountries(country.borders)
        : [];
      this.setState({
        isLoading: false,
        country,
        borderCountries:borderCountries.data,
      });
    } catch {
      this.setState({
        hasError: true,
        isLoading: false,
        countries: null,
        borderCountries: [],
      });
    }
  }

  renderBody = () => {
    const { country, isLoading, hasError } = this.state;
    if (isLoading) {
      return (
        <div className="alt-state">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
    if (country) {
      return this.renderDetails();
    }

    if (hasError) {
      return <div className="alt-state">Something went wrong</div>;
    }

    if (!country && !isLoading) {
      return <div className="alt-state">No Data found</div>;
    }
  };

  renderDetails = () => {
    const { country, borderCountries } = this.state;
    const {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
    } = country;
    return (
      <div className="row gx-lg-5 gx-md-4 gx-1 gy-4">
       <div className="col-md-6 col-12">
          <img className="country-details__flag" src={flag} alt={name} />
        </div>
        <div className="col-md-6 col-12 country-details__info-section">
          <div className="country-details__name font--bold">{name}</div>
          <div className="row gx-lg-5 gx-md-4 gx-1 gy-4">
            <div className="col-md-6 col-12 ">
              {this.renderInfoItem("Native Name", nativeName)}
              {this.renderInfoItem("Population", population)}
              {this.renderInfoItem("region", region)}
              {this.renderInfoItem("Sub Region", subregion)}
              {this.renderInfoItem("Capital", capital)}
            </div>
            <div className="col-md-6 col-12 ">
              {this.renderInfoItem("Top Level Domain", topLevelDomain)}
              {this.renderInfoItem("Currencies", currencies)}
              {this.renderInfoItem("Languages", languages)}
            </div>
          </div>
          <div className="row gx-lg-5 gx-md-4 gx-1 gy-4">
            <div className="col-12 ">
              {this.renderBorderCountries(borderCountries)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderInfoItem(title, data) {
    if (typeof data !== "object") {
      return (
        <div className="country-details__info">
          <span className="font--regular">{title}: </span>
          <span className="font--light">{data}</span>
        </div>
      );
    }

    const value =
      typeof data[0] !== "object"
        ? data.join(", ")
        : data.map((item) => item.name).join(", ");
    return (
      <div className="country-details__info">
        <span className="font--regular">{title}: </span>
        <span className="font--light">{value}</span>
      </div>
    );
  }

  renderBorderCountries(borders) {

    const borderItems = borders ? (
      borders.map((item) => (
        <div className="country-details__border-item" key={item.alpha3Code}>
          {item.name}
        </div>
      ))
    ) : (
      <div className="country-details__border-item">None</div>
    );
    return (
      <div className="country-details__borders">
        <span className="font--regular">Border Countries: </span>
        {borderItems}
      </div>
    );
  }
  render() {
    return (
      <section className="country-details container">
        <div className="row gx-lg-5 gx-md-4 gx-1">
          <div className="col-4">
            <Link className="country-details__btn btn main-btn" to="/">
              <FontAwesomeIcon
                icon={faLongArrowAltLeft}
                className="country-details__btn-icon"
              />
              Back
            </Link>
          </div>
        </div>
        {this.renderBody()}
      </section>
    );
  }
}

export default CountryDetails;
