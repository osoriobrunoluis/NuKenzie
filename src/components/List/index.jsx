import { Card } from "../Card";
import "./style.css";
import NoCard from "../../assets/NoCard.png";

export const List = ({
  listTransactions,
  currentFilter,
  removeTransaction,
}) => {
  const list = listTransactions.filter((transaction) => {
    if (currentFilter === "entradas") {
      return transaction.type === "entrada";
    }
    if (currentFilter === "despesas") {
      return transaction.type === "saida";
    }

    return true;
  });

  return (
    <section className="section__cards">
      {list.length > 0 ? (
        <>
          {list.map((transaction) => (
            <Card
              key={transaction.id}
              onRemove={() => removeTransaction(transaction.id)}
              description={transaction.description}
              type={transaction.type}
              value={transaction.value}
            />
          ))}
        </>
      ) : (
        <ul className="section__cards--ul">
          <h2 className="section__cards--text">
            Você ainda não possui nenhum lançamento
          </h2>
          <img className="logoVazia" src={NoCard} alt="logoCardVazio" />
          <img className="logoVazia" src={NoCard} alt="logoCardVazio" />
          <img className="logoVazia" src={NoCard} alt="logoCardVazio" />
        </ul>
      )}
    </section>
  );
};
