import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastrar from "./Pages/Cadastrar";
import DetalheDoProduto from "./Pages/DetalheDoProduto";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/detalhesProdutos" element={<DetalheDoProduto />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
