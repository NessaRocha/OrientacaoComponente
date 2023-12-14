import Header from "../../components/header/Header";
import Formes from "../../components/formes/Formes";
import "./FormularioCadastro.css";

function Cadastro() {
  const handleFormSubmit = (novoProduto) => {
    console.log("Novo produto enviado:", novoProduto);
  };

  return (
    <>
      <Header title={"CADASTRO DE PRODUTOS"} />
      <div className="container">
        <div className="half">
          <img
            alt="imagem"
            src="https://media.gazetadopovo.com.br/2021/05/07120112/rivetti-santa-catarina-loja-3-960x540.jpg"
          ></img>
        </div>
        <div className="half">
          <div className="half-content">
            <Formes FormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
