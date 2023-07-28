import "./style.css";
import lixeira from "../../assets/trash.png";

export const Card = ({ description, value, type, onRemove }) => {
  return (
    <div className={type === "saida" ? "card__border--grey" : "card"}>
      <div className="card__elements">
        <div className="elements__description__type">
          <p className="card__description">{description}</p>
          <p className="card__type">{type}</p>
        </div>
        <div className="card__value__remove">
          <p className="card__value">R$ {value}</p>
          <button className="btn__remove" onClick={onRemove}>
            <img src={lixeira} alt="lixeira" />
          </button>
        </div>
      </div>
    </div>
  );
};
