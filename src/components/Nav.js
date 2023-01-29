import coffeeLogo from "../images/logo.png";
import cart from "../images/cart.png";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: "2%",
        marginLeft: "2%",
        marginTop: "1%",
        marginBottom: "1%",
      }}
    >
      <div>
        <img style={{ width: "20%" }} src={coffeeLogo} alt="Logo" />
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyleType: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginRight: "20px" }}>
            <a
              style={{
                fontFamily: "raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                color: "#000",
                letterSpacing: "1.5px",
                textDecoration: "none",
              }}
              href="/"
            >
              HOME
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a
              style={{
                fontFamily: "raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                color: "#000",
                letterSpacing: "1.5px",
                textDecoration: "none",
              }}
              href="About"
            >
              ABOUT
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a
              style={{
                fontFamily: "raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                color: "#000",
                letterSpacing: "1.5px",
                textDecoration: "none",
              }}
              href="Store"
            >
              STORE
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a
              style={{
                fontFamily: "raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                color: "#000",
                letterSpacing: "1.5px",
                textDecoration: "none",
              }}
              href="#Contact"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img style={{ width: "25px", height: "25px" }} src={cart} alt="Cart" />
      </div>
      <style jsx>{`
        a:hover {
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
}
