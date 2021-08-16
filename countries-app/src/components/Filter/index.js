import BootstrapSelect from "react-bootstrap-select-dropdown";

import "./styles.scss"

function Filter(props) {
  const { isDisabled, onChangeHandler } = props;
  const data = [
    { labelKey: "Africa", value: "Africa" },
    { labelKey: "America", value: "America" },
    { labelKey: "Asia", value: "Asia" },
    { labelKey: "Europe", value: "Europe" },
    { labelKey: "Oceania", value: "Oceania" },
  ];
  return (
    <BootstrapSelect
      className="filter-select shadow-lg"
      disabled={isDisabled}
      options={data}
      placeholder="Filter"
      onChange={(e) =>
        e.selectedValue.length && onChangeHandler(e.selectedValue[0])
      }
    />
  );
}

export default Filter;
