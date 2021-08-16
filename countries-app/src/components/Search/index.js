import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";
class Search extends React.Component {
  state = { value: "" };
  timeOutID = null;
  setValue = (value) => {
    this.setState({ value }, () => {
      
        this.timeOutID && clearTimeout(this.timeOutID);
        this.timeOutID = setTimeout(
          () => this.props.onChangeHandler(value),
          500
        );
      
    });
  };

  onSubmitHandler = () => {
    this.props.onChangeHandler(this.state.value);
  };

  render() {
    const { isDisabled } = this.props;
    const { value } = this.state;

    return (
      <div className="country-search ">
        <label htmlFor="country-search-input">
          <span className="sr-only">Search for a country</span>
        </label>

        <FontAwesomeIcon className="country-search__icon" icon={faSearch} />
        <input
          disabled={isDisabled}
          id="country-search-input"
          type="text"
          value={value}
          placeholder="Search for a country..."
          className="form-control form-control-sm country-search__input shadow-lg"
          onChange={(e) => this.setValue(e.target.value)}
        ></input>
      </div>
    );
  }
}

export default Search;
