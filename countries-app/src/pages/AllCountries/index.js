import React from "react";

import CountryCard from "../../components/CountryCard";
import Filter from "../../components/Filter";
import Search from "../../components/Search";

import {
  getCountriesByName,
  getCountriesByRegion,
  getCountriesList,
} from "../../api";

import "./styles.scss";

class AllCountries extends React.Component {
  state = {
    isLoading: true,
    hasError: false,
    countries: [],
    regionFilter: null,
    searchQuery: null,
    pageSize: 8,
    currentLoadedItems: 0,
  };
  componentDidMount() {
    this.getCountries();
  }

  async getCountries() {
    try {
      const response = await getCountriesList();
      this.setState({
        isLoading: false,
        countries: response.data,
      });
    } catch {
      this.setState({
        hasError: true,
        isLoading: false,
        countries: [],
        regionFilter: null,
        searchQuery: null,
      });
    }
  }

  filterByRegion = async (value) => {
    try {
      const response = await getCountriesByRegion(value);
      this.setState({
        isLoading: false,
        countries: response.data,
        regionFilter: value,
        searchQuery: null,
      });
    } catch {
      this.setState({
        hasError: true,
        isLoading: false,
        countries: [],
        regionFilter: null,
        searchQuery: null,
      });
    }
  };

  filterByName = async (value) => {
    try {
      const name = value;
      const response = await getCountriesByName(name);
      this.setState({
        isLoading: false,
        countries: response.data,
        regionFilter: null,
        searchQuery: value,
      });
    } catch {
      this.setState({
        hasError: true,
        isLoading: false,
        countries: [],
        regionFilter: null,
        searchQuery: null,
      });
    }
  };

  handleDataChange = (value, src) => {
    this.setState(
      { isLoading: true, countries: [], currentLoadedItems: 0 },
      () => {
        if(!value){
          this.getCountries();
          return;
        }
        if (src === "filter") {
          this.filterByRegion(value);
        } else {
          this.filterByName(value);
        }
      }
    );
  };

  renderBody = () => {
    const { countries, isLoading, hasError } = this.state;
    if (isLoading) {
      return (
        <div className="alt-state">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
    if (countries.length) {
      return this.renderCountries();
    }

    if (hasError) {
      return <div className="alt-state">Something went wrong</div>;
    }

    if (!countries.length && !isLoading) {
      return <div className="alt-state">No countries found</div>;
    }
  };
  
  loadMore = () => {
    this.setState((prevState) => ({
      currentLoadedItems: prevState.currentLoadedItems + prevState.pageSize,
    }));
  };

  renderCountries = () => {
    const { countries, pageSize, currentLoadedItems } = this.state;
    const countriesToLoad = countries.slice(0, currentLoadedItems + pageSize);

    const cards = countriesToLoad.map((item, index) => {
      return (
        <div className="col-md-3 col-sm-4 col-12" key={`${index}-${item.name}`}>
          <CountryCard item={item} />
        </div>
      );
    });
    return cards;
  };

  render() {
    const { isLoading, countries, pageSize } = this.state;
    const hasMore = countries.length > pageSize;

    return (
      <section className="countries-list container">
        <div className="row countries-list__header ">
          <div className="countries-list__search col-md-4 col-12">
            <Search
              isDisabled={isLoading}
              onChangeHandler={(value) =>
                this.handleDataChange(value, "search")
              }
            />
          </div>
          <div className="countries-list__filter col-md-3 col-12">
            <Filter
              isDisabled={isLoading}
              onChangeHandler={(value) =>
                this.handleDataChange(value, "filter")
              }
            />
          </div>
        </div>
        <div className="row g-lg-5 g-md-4 g-1">{this.renderBody()}</div>
        {hasMore && (
          <div className="row g-lg-5 g-md-4 g-1">
            <div className="col-12 countries-list__load-more">
              <button className="btn main-btn shadow-sm" onClick={this.loadMore}>
                Load More
              </button>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default AllCountries;
