export const ButtonHomePage = ({ setHomePage }) => {
  return (
    <button
      className="btnPrimary"
      onClick={() => {
        setHomePage(false);
      }}
    >
      Iniciar
    </button>
  );
};

export const ButtonHome = ({ setHomePage }) => {
  return (
    <button
      className="btnHome"
      onClick={() => {
        setHomePage(true);
      }}
    >
      Inicio
    </button>
  );
};


