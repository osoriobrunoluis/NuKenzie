import "./style.css";

function sumNumbers(numberList) {
  return numberList.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.value),
    0
  );
}

export const TotalMoney = ({ listTransactions }) => {
  return (
    <section className="cont">
      <div className="cont__div">
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <h3 className="cont__result">
        {sumNumbers(listTransactions).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h3>
    </section>
  );
};
