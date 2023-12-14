import CardProduto from "../../components/cardProduto/CardProduto";
import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import { ProductContext } from "../../productContext/ProductContext";
import "./produtos.css";
import { UseDebounce } from "../../hooks/UseDebounce";

function Produtos() {
  const [data, setData] = useState([]);
  const productContext = useContext(ProductContext);

  const fetchProducts = async () => {
    const result = await fetch("http://localhost:3000/produtos");
    const produtos = await result.json();
    console.log(produtos);
    setData(produtos);
    productContext.setProducts(produtos);
  };
  UseDebounce({
    func: () => fetchProducts(),
    time: 1000,
  });

  return (
    <>
      <Header title={"Produtos"} />
      <div className="container">
        <div className="card-container">
          {data &&
            data.map((produto) => (
              <CardProduto
                key={produto.id}
                nome={produto.name}
                preco={produto.price}
                descricao={produto.description}
                fotoUrl={produto.photo_url}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Produtos;
