import { Link } from "react-router-dom";
import "./Header.css";

function Header({ title }) {
  return (
    <div>
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
        <Link style={{ marginRight: 20 }} to="/formulario">
          Cadastrar
        </Link>
      </nav>
      <h1>{title}</h1>
    </div>
  );
}
export default Header;
