export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "14px 27px",
        gap: "18px",
        height: "50px",
        color: "#fff",
        background: "#010101",
        borderRadius: "38px",
        border: "none",
      }}
    >
      {children}
    </button>
  );
}
