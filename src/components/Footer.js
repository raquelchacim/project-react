import coffeeLogo2 from "../images/logo2.png";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        width: "100%",
        paddingTop: "1%",
        paddingBottom: "1%",
      }}
    >
      <img style={{ width: "15%" }} src={coffeeLogo2} alt="Logo" />
    </div>
  );
}
