import Header from "../components/Header";
import Button from "../components/Button";
import LearnMore from "../components/LearnMore";
import headerImage from "../images/main.jpg";
import logo1 from "../images/gourmet.jpg";
import logo2 from "../images/delicious.jpg";
import Item from "../components/Item";
import Arrow from "../images/arrow.png";
import Beans1 from "../images/coffeebeans.jpg";
import Beans2 from "../images/coffeebeans2.jpg";
import Instagram from "../components/Instagram";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <section>
      <section>
        <Nav></Nav>
      </section>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "block",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "2%",
            marginLeft: "2%",
          }}
        >
          {" "}
          <Header>The Pure Coffee Co.</Header>
          <p
            style={{
              fontFamily: "raleway",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "22px",
              lineHeight: "26px",
              color: "#000000",
            }}
          >
            We bring you the convenience and delicious taste of freshly-ground,
            high-quality coffee in every scoop.
          </p>
          <Button onClick={() => console.log("button")}>Shop Now</Button>
          <p
            style={{
              fontFamily: "raleway",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "28px",
              color: "#000000",
              fontWeight: "light",
            }}
          >
            We've been mentioned in the press.
          </p>
          <div>
            <div>
              <img src={logo1} style={{ width: "20%" }} />
              <img src={logo2} style={{ width: "20%" }} />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            backgroundImage: `url(${headerImage})`,
            MaxWidth: "100%",
            height: "100VH",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <section>
        {" "}
        <div>
          <LearnMore />
          <hr
            style={{
              marginRight: "2%",
              marginLeft: "2%",
            }}
          ></hr>
        </div>
      </section>{" "}
      <section
        style={{
          marginRight: "2%",
          marginLeft: "2%",
          paddingTop: "2%",
          paddingBottom: "5%",
        }}
      >
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
          OUR STORE
        </p>
        <p
          style={{
            fontFamily: "Lora",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "26px",
            color: "#000000",
            fontWeight: "light",
          }}
        >
          Here are the best seller from our varieties
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
              paddingRight: "1%",
              textDecoration: "none",
            }}
            href="store"
          >
            VIEW ALL
          </a>

          <img style={{ width: "15px", height: "15px" }} src={Arrow}></img>
        </div>
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
      <section
        style={{
          marginRight: "2%",
          marginLeft: "2%",
          marginBottom: "2%",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "30%",
            height: "500px",
            paddingRight: "2%",
          }}
          src={Beans1}
        ></img>
        <img
          style={{
            objectFit: "cover",
            width: "70%",
            height: "500px",
          }}
          src={Beans2}
        ></img>
      </section>
      <section>
        {" "}
        <hr
          style={{
            marginRight: "2%",
            marginLeft: "2%",
          }}
        ></hr>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Lora",
            fontWeight: "400",
            fontSize: "50px",
            color: "#000000",
            fontWeight: "light",
          }}
        >
          “
        </p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Lora",
            fontWeight: "400",
            fontSize: "25px",
            color: "#000000",
            fontWeight: "light",
            letterSpacing: "0.5px",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          The coffee packaging has a lovely design specific to what the blend is
          made with. And we even got a free sample bag of Caramel coffee beans
          to taste with our order too. Have yet to try the coffee... but I'm
          sure we will be ordering again!
        </p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Lora",
            fontWeight: "400",
            fontSize: "50px",
            color: "#000000",
            fontWeight: "light",
          }}
        >
          ”
        </p>{" "}
        <hr
          style={{
            marginRight: "2%",
            marginLeft: "2%",
          }}
        ></hr>
      </section>
      <Instagram></Instagram>
      <Contact></Contact>
      <Footer></Footer>
    </section>
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
