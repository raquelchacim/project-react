import Header from "../components/Header";
import Button from "../components/Button";
import LearnMore from "../components/LearnMore";
import headerImage from "../images/main.jpg";
import logo1 from "../images/gourmet.jpg";
import logo2 from "../images/delicious.jpg";

export default function Home() {
  return (
    <section>
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
        </div>
      </section>
    </section>
  );
}
