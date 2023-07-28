import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header/";
import { HomePage } from "./pages/HomePage";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";
import { v4 as uuid } from "uuid";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [homePage, setHomePage] = useState(true);
  const [currentFilter, setCurrentFilter] = useState("todos");

  function addTransaction({ description, value, type }) {
    setListTransactions([
      ...listTransactions,
      {
        description,
        value,
        type,
        id: uuid(),
      },
    ]);
  }

  function removeTransaction(id) {
    const newList = listTransactions.filter(
      (transaction) => transaction.id !== id
    );
    setListTransactions(newList);
  }

  return homePage ? (
    <HomePage setHomePage={setHomePage} />
  ) : (
    <>
      <Header setHomePage={setHomePage} />
      <main className="main__container">
        <div>
          <Form addTransaction={addTransaction} />
          {listTransactions.length > 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </div>

        <div className="container__section">
          <div className="section__cards--elements">
            <h3 className="section__cards--title">Resumo Financeiro</h3>
            <button
              className={currentFilter === "todos" ? "btns active" : "btns"}
              onClick={() => setCurrentFilter("todos")}
            >
              Todos
            </button>
            <button
              className={currentFilter === "entradas" ? "btns active" : "btns"}
              onClick={() => setCurrentFilter("entradas")}
            >
              Entradas
            </button>
            <button
              className={currentFilter === "despesas" ? "btns active" : "btns"}
              onClick={() => setCurrentFilter("despesas")}
            >
              Despesas
            </button>
          </div>

          <List
            listTransactions={listTransactions}
            currentFilter={currentFilter}
            removeTransaction={removeTransaction}
          />
        </div>
      </main>
    </>
  );
}

export default App;
