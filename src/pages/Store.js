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
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <p
          style={{
            fontFamily: "Lora",
            fontSize: "55px",
            color: "#000000",
            fontWeight: "light",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          Store
        </p>
        <p
          style={{
            fontFamily: "raleway",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            color: "#000000",
            fontWeight: "light",
          }}
        >
          From rich and bold dark roasts to smooth and creamy medium roasts, we
          have a blend for every taste.
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
  {
    name: "French Delight Blend",
    price: 29.99,
    imageUrl: "Images/frenchdelight.png",
  },
  {
    name: "Blueberry Cream Blend",
    price: 29.99,
    imageUrl: "Images/blueberrycream.png",
  },
  {
    name: "Pumpking Spice Blend",
    price: 29.99,
    imageUrl: "Images/pumpkinspice.png",
  },
  {
    name: "Caramel Blend",
    price: 29.99,
    imageUrl: "Images/caramelblend.png",
  },
  {
    name: "Cinnamon Blend",
    price: 29.99,
    imageUrl: "Images/cinnamonblend.png",
  },
];
