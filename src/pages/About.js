import Nav from "../components/Nav";
import Header from "../components/Header";
import Button from "../components/Button";
import logo1 from "../images/gourmet.jpg";
import logo2 from "../images/delicious.jpg";
import aboutImage from "../images/aboutus.jpg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      {" "}
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
            marginRight: "5%",
            marginLeft: "2%",
          }}
        >
          {" "}
          <Header>About Us</Header>
          <p
            style={{
              fontFamily: "raleway",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "26px",
              lineHeight: "30px",
              color: "#000000",
            }}
          >
            We bring you the convenience and delicious taste of freshly-ground,
            high-quality coffee in every scoop.
            <p
              style={{
                fontFamily: "raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#000000",
              }}
            >
              Our coffee beans are carefully sourced from the finest producers
              around the world, and expertly roasted to bring out their unique
              and rich flavors. We take great care in the selection of our
              beans, to ensure that our customers get the best taste and
              quality.
            </p>
            <p
              style={{
                fontFamily: "raleway",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#000000",
              }}
            >
              From rich and bold dark roasts to smooth and creamy medium roasts,
              we have a blend for every taste Try our unique flavored blends
              like French Vanilla, Hazelnut, or Caramel Cream, and experience a
              new dimension of coffee taste.
            </p>
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
            backgroundImage: `url(${aboutImage})`,
            MaxWidth: "100%",
            height: "100VH",
            backgroundSize: "cover",
            backgroundRepeat: "noRepeat",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>{" "}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
