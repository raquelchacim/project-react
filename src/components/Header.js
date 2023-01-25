export default function Header({ children }) {
  return (
    <h1
      style={{
        fontFamily: "Belleza",
        fontWeight: 400,
        margin: "0px",
        fontSize: "65px",
        letterSpacing: "-0.5px",
        color: "#010101",
      }}
    >
      {children}
    </h1>
  );
}
