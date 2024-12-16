import { Route, Routes } from "react-router-dom";
import Redes from "./components/Redes/Redes";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="*" element={<h1>No existe la pagina</h1>} />
      </Routes>
    </>
  );
}

export default App;
