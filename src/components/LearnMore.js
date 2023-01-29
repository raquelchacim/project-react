import Arrow from "../images/arrow.png";

export default function LearnMore({ children }) {
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <div
        style={{
          width: "50%",
          padding: "2%",
        }}
      >
        <p
          style={{
            fontFamily: "raleway",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "28px",
            color: "#000000",
            fontWeight: "light",
            textDecoration: "none",
          }}
        >
          Our coffee beans are carefully sourced from the finest producers
          around the world, and expertly roasted to bring out their unique and
          rich flavours.
        </p>
      </div>
      <div
        style={{
          width: "50%",
          padding: "2%",
        }}
      >
        <p
          style={{
            fontFamily: "Lora",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "28px",
            color: "#000000",
            fontWeight: "light",
          }}
        >
          The range of blends and flavors is sure to please even the most
          discerning coffee lover.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            style={{
              fontFamily: "raleway",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "20px",
              color: "#000000",
              fontWeight: "light",
              paddingRight: "2%",
              textDecoration: "none",
            }}
            href="About"
          >
            LEARN MORE
          </a>

          <img style={{ width: "15px", height: "15px" }} src={Arrow}></img>
        </div>
      </div>
    </div>
  );
}
