import { useForm } from "react-hook-form";

function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <br />
        <label>
          Preço:
          <input type="text" {...register("preco", { required: true })} />
          {errors.preco && <span>{errors.preco.message}</span>}
        </label>
        <br />
        <label>
          Descrição:
          <input type="text" {...register("descricao", { required: true })} />
          {errors.descricao && <span>{errors.descricao.message}</span>}
        </label>
        <br />
        <label>
          Imagem:
          <input type="text" {...register("url", { required: true })} />
          {errors.url && <span>{errors.url.message}</span>}
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Forms;
