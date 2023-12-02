import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import {fetchPoems} from "./api/fetchPoems";
import RootLayout from "./layouts/RootLayout";
import ContainerLayout from "./layouts/ContainerLayout";
import Home from "./pages/Home";
import PoemsList from "./pages/PoemsList";
import CreditsList from "./pages/CreditsList";
import PoemPage from "./pages/PoemPage";
import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const [poemsData, setPoemsData] = useState([])


  useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/656b45d90574da7622cf41c2');
        const finalResponse = await response.json();
        setPoemsData(finalResponse);

        console.log(poemsData)
      } catch(err) {
        console.log(err);
      }
    }
  }, []);




  let data = require(`./data/data.json`);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home poemsData={data.poems} />} />
          <Route element={<ContainerLayout />}>
            <Route
              path="lista"
              element={<PoemsList poemsData={data.poems} />}
            />
            <Route
              path="kredyty"
              element={<CreditsList poemsData={data.poems} />}
            />
          </Route>
          <Route path=":id" element={<PoemPage poemsData={data.poems} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
