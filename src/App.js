import React, {
  useState,
  useContext,
  BrowserRouter,
  Routes,
  Route,
} from "react";
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import DetalheDoProduto from "./pages/DetalheDoProduto";
import Produtos from "./pages/Produtos";
import FormulariodeCadastro from "./pages/cadastroProdutos/FormulariodeCadastro";

const ProductContext = React.createContext({
  products: [],
});

export function useProducts() {
  return useContext(ProductContext);
}

function App() {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/detalhesProdutos" element={<DetalheDoProduto />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route
            path="/formulariodeCadastro"
            element={<FormulariodeCadastro />}
          />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
