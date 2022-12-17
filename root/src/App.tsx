import "./App.scss";

import { useEffect, useState } from "react";

import { Currency } from "./components/Currency";
import { CurrencyType } from "./components/Currency";
import axios from "axios";

// https://app.freecurrencyapi.com/dashboard

function App() {
  const [currencies, setCurrencies] = useState<CurrencyType | {}>({});

  const getCurrencies = async () => {
    const response = await axios.get(
      "https://api.freecurrencyapi.com/v1/latest",
      {
        headers: {
          apikey: "gwRkxLlgKJx36K810uCTKfZjz8ZsLqnGDPqDp0FH",
        },
      }
    );
    setCurrencies(() => response.data.data);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  console.log("Currencies");
  console.log(currencies);

  return (
    <div className="App">
      <button onClick={() => getCurrencies()}>G E T C U R R E N C Y</button>
      <Currency currencies={currencies} />
    </div>
  );
}

export default App;
