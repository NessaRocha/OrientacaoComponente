import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1>{title}</h1>
      <nav>
        <Link to="home">Home</Link>
        <Link to="produtos">Produtos</Link>
        <Link to="detalhesProdutos">DetalheDoProduto</Link>
        <Link to="cadastrar">Cadastrar</Link>
      </nav>
    </div>
  );
}
export default Header;
