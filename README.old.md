Objetivo? 

Cadastrar entradas e saidas e renderizar em tela; 

components necessário:
 - header logo e botao 
 - form input 
 - totalMoney
 - list
 - card

<!-- app.jsx preciso conter um state que tenha entradas e saidas
    - const [listTransactions, setListTransactions] = useState ([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 }
    ]) -->
           
Crie um componente Form, para cadastrar novas Entradas e Saídas, com o seguinte formato:
<!-- Input para pegar o valor. -->
<!-- Input para pegar a descrição. -->
<!-- Select para escolher entre entrada e saída. -->
<!-- Button para enviar as informações captadas no formulário. -->

Crie o componente List que receberá o state listTransactions por prop.
  