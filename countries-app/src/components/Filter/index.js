import BootstrapSelect from "react-bootstrap-select-dropdown";

import "./styles.scss"

function Filter(props) {
  const { isDisabled, onChangeHandler } = props;
  const data = [
    { labelKey: "Africa", value: "Africa" },
    { labelKey: "Americas", value: "Americas" },
    { labelKey: "Asia", value: "Asia" },
    { labelKey: "Europe", value: "Europe" },
    { labelKey: "Oceania", value: "Oceania" },
  ];
  return (
    <BootstrapSelect
      className="filter-select"
      disabled={isDisabled}
      options={data}
      placeholder="Filter by Region"
      onChange={(e) =>
        e.selectedValue.length && onChangeHandler(e.selectedValue[0])
      }
    />
  );
}

export default Filter;
