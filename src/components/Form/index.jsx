import { useState } from "react";
import "./style.css";

export const Form = ({ addTransaction }) => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState("entrada");
  const hasAllValues = inputDescription !== "" && Number.isFinite(inputValue);

  const renderSubmit = (event) => {
    event.preventDefault();
    const isExpense = selectValue.toLocaleLowerCase() === "saida";
    const value = isExpense ? -inputValue : inputValue;
    addTransaction({
      description: inputDescription,
      value,
      type: selectValue,
    });
    setInputValue(0);
    setInputDescription("");
  };

  return (
    <form className="form" onSubmit={renderSubmit}>
      <fieldset className="form__description">
        <label className="form__description--label" htmlFor="name">
          Descrição
        </label>
        <input
          className="form__description--input"
          id="name"
          onChange={(event) => setInputDescription(event.target.value)}
          placeholder="Digite aqui sua descrição"
          required
          value={inputDescription}
        />
        <span className="form__description--span">Ex: Compras de Roupas</span>
      </fieldset>
      <div className="form__input__select">
        <fieldset className="form__input--value">
          <label className="form__input--label" htmlFor="value">
            Valor
          </label>
          <input
            className="form__input"
            type="text"
            id="value"
            onChange={(event) => setInputValue(Math.abs(event.target.value))}
            required
            value={inputValue}
          />
        </fieldset>
        <fieldset className="form__div--select">
          <label className="form__select--label" htmlFor="typeValue">
            Tipo de Valor
          </label>
          <select
            className="form__select"
            type="select"
            id="typeValue"
            onChange={(event) => setSelectValue(event.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>
        </fieldset>
      </div>
      <button disabled={!hasAllValues} className="btnPrimary" type="submit">
        Inserir valor
      </button>
    </form>
  );
};
