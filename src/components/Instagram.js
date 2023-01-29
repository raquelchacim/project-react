import Insta from "../images/instagram.jpg";
import Arrow from "../images/arrow.png";

export default function Instagram({}) {
  return (
    <div
      style={{
        backgroundImage: `url(${Insta})`,
        marginRight: "2%",
        marginLeft: "2%",
        marginTop: "2%",
        height: "300px",
        backgroundSize: "cover",
        padding: "10%",
      }}
    >
      <p
        style={{
          fontFamily: "Lora",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "40px",
          color: "#000000",
          fontWeight: "light",
        }}
      >
        Get inspired from our Instagram
      </p>
      <p
        style={{
          fontFamily: "raleway",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
          color: "#000000",
          fontWeight: "light",
        }}
      >
        If you use the hashtag #purecoffeeco on Instagram, well spotlight you.
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
          }}
          href="https://pluralsight.com"
        >
          LEARN MORE
        </a>

        <img style={{ width: "15px", height: "15px" }} src={Arrow}></img>
      </div>
    </div>
  );
}
