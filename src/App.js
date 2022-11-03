import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import DbProvider from "./components/contex";
import HomePage from "./components/HomePage";

function App() {
  return (
    <DbProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </DbProvider>
  );
}

export default App;
