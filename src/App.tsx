import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ContainerLayout from "./layouts/ContainerLayout";
import Home from "./pages/Home";
import PoemsList from "./pages/PoemsList";
import CreditsList from "./pages/CreditsList";
import PoemPage from "./pages/PoemPage";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [poemsData, setPoemsData] = useState([]);

  const url = "https://api.jsonbin.io/v3/b/656b45d90574da7622cf41c2";


  useEffect(() => {
    const newFetchPoems = async () => {
      const result = await fetch(url);
      result.json().then((json) => {
        setPoemsData(json.record.poems);
      });
    };
    newFetchPoems();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
 
          <Route element={<ContainerLayout />}>
          <Route index element={<PoemsList poemsData={poemsData} />} />
            <Route path="lista" element={<PoemsList poemsData={poemsData} />} />
            <Route
              path="kredyty"
              element={<CreditsList poemsData={poemsData} />}
            />
          </Route>
          <Route path=":id" element={<PoemPage poemsData={poemsData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
