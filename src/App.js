import React, {
  useState,
  useContext,
  BrowserRouter,
  Routes,
  Route,
} from "react";
import Home from "./pages/Home";
import Produtos from "./pages/produtos/produtos";
import Cadastrar from "./pages/cadastroProdutos/FormulariodeCadastro";

const ProductContext = React.createContext({
  produtos: [],
});

export function useProducts() {
  return useContext(ProductContext);
}

function App() {
  const [produtos, setProdutos] = useState([]);

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
