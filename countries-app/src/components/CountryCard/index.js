import { Link } from "react-router-dom";
import "./styles.scss";

function CountryCard(props) {
  const { item } = props;
  const { flag, name, population, capital, region } = item;
  return (
    <article className="country-card card ">
      <img src={flag} className="card-img-top country-card__flag" alt={name} />
      <div className="country-card__body">
        <Link to={`details/${name}`}  className ="country-card__title font--bold">
          <p >{name}</p>
        </Link>
        <div className="country-card__info">
          <span className="font--regular">Population:</span>
          <span className="font--light"> {population}</span>
        </div>
        <div className="country-card__info">
          <span className="font--regular">Region:</span>
          <span className="font--light"> {region}</span>
        </div>
        <div className="country-card__info">
          <span className="font--regular">Capital:</span>
          <span className="font--light"> {capital}</span>
        </div>
      </div>
    </article>
  );
}

export default CountryCard;
