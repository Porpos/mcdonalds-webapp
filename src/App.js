import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Meals from "./Pages/MealsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </>
  );
}

export default App;
