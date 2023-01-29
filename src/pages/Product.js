import Nav from "../components/Nav";
import Item from "../components/Item";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Store() {
  return (
    <div>
      {" "}
      <section>
        <Nav></Nav>
      </section>
      <section
        style={{
          marginRight: "2%",
          marginLeft: "2%",
        }}
      >
        <p
          style={{
            fontFamily: "Lora",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "60px",
            color: "#000000",
            fontWeight: "light",
          }}
        >
          Store
        </p>
      </section>
      <section
        style={{
          paddingLeft: "2%",
          paddingRight: "2%",
          paddingBottom: "2%",
          display: "grid",
          flexDirection: "row",
          gridTemplateColumns: "repeat(3, 1fr)",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        {data.map((product) => (
          <Item
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          ></Item>
        ))}
      </section>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

const data = [
  {
    name: "Mint Chocolate Blend",
    price: 29.99,
    imageUrl: "Images/mintchocolate.png",
  },
];
