import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchPoems } from "./services/apiPoems.jsx";
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


  useEffect(() => {
    fetchPoems.then((data: {record: Object[]}) => {
      setPoemsData(data.record.poems);
      console.log(data)
    });
  }, []);

  let data = require(`./data/data.json`);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home poemsData={poemsData} />} />
          <Route element={<ContainerLayout />}>
            <Route
              path="lista"
              element={<PoemsList poemsData={poemsData} />}
            />
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
