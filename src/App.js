import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Cadastrar from "./pages/Cadastrar";
import DetalheDoProduto from "./pages/DetalheDoProduto";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import { ProductContext } from "./contexts/productContext";

function App() {
  const [product, setProduct] = useState();

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/detalhesProdutos" element={<DetalheDoProduto />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
