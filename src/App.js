import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/produtos/produtos";
import Cadastrar from "./pages/cadastroProdutos/FormulariodeCadastro";
import { ProductContext } from "./productContext/ProductContext";
import { useState } from "react";

function App() {
  const [produtos, setProdutos] = useState();

  return (
    <ProductContext.Provider value={{ produtos, setProdutos }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/formulariodeCadastro" element={<Cadastrar />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
