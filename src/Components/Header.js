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
    </div>
  );
}
export default Header;
