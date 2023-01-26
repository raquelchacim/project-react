import Button from "../components/Button";

export default function Item({ name, price, imageUrl }) {
  return (
    <div>
      <img style={{ width: "100%" }} src={imageUrl} alt={name} />
      <div style={{ paddingBottom: "10%" }}>
        {" "}
        <p
          style={{
            fontFamily: "raleway",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            color: "#000000",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "raleway",
            fontWeight: "400",
            fontSize: "16px",
            color: "#000000",
          }}
        >
          {price}
        </p>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
}
