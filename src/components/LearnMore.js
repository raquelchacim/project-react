export default function LearnMore({ children }) {
  return (
    <div
      style={{
        display: "flex",
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
      </div>
    </div>
  );
}
