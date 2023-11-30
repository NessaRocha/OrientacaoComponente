import { Link } from "react-router-dom";
import "./Header.css";

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
        <Link style={{ marginRight: 20 }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: 20 }} to="/home">
          Home
        </Link>
        <Link style={{ marginRight: 20 }} to="/produtos">
          Produtos
        </Link>
        <Link style={{ marginRight: 20 }} to="/detalhesProdutos">
          DetalheDoProduto
        </Link>
        <Link style={{ marginRight: 20 }} to="/cadastrar">
          Cadastrar
        </Link>
      </nav>
    </div>
  );
}
export default Header;
