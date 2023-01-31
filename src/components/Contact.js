import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // form code here
  };

  return (
    <section
      id="Contact"
      style={{
        fontFamily: "raleway",
        fontSize: "14px",
        backgroundColor: "#fff",
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingTop: "1.5%",
        paddingBottom: "3%",
        scrollBehavior: "smooth",
      }}
    >
      {" "}
      <hr
        style={{
          marginBottom: "2%",
        }}
      ></hr>
      <p
        style={{
          fontFamily: "Lora",
          fontSize: "40px",
          color: "#000000",
          fontWeight: "light",
          marginTop: "0%",
          marginBottom: "3%",
        }}
      >
        Get in touch
      </p>{" "}
      <div
        style={{
          paddingLeft: "2%",
          paddingRight: "2%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  paddingBottom: "15px",
                  marginRight: "1%",
                }}
              >
                <label
                  style={{
                    fontFamily: "raleway",
                    fontSize: "14px",
                    color: "#000000",
                    fontWeight: "light",
                  }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    fontFamily: "raleway",
                    fontSize: "14px",
                    border: "none",
                    borderBottom: "1px solid #000000",
                    fontSize: "16px",
                    color: "#000000",
                    backgroundColor: "#fff",
                    marginTop: "0.5%",
                    marginBottom: "0.5%",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "15px",
                  width: "100%",
                }}
              >
                <label
                  style={{
                    fontFamily: "raleway",
                    fontSize: "14px",
                    fontFamily: "raleway",
                    fontSize: "14px",
                    color: "#000000",
                    fontWeight: "light",
                  }}
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{
                    fontFamily: "raleway",
                    fontSize: "14px",
                    border: "none",
                    borderBottom: "1px solid #000000",
                    fontSize: "16px",
                    color: "#000000",
                    backgroundColor: "#fff",
                    marginTop: "0.5%",
                    marginBottom: "0.5%",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "15px",
            }}
          >
            <label
              style={{
                fontFamily: "raleway",
                fontSize: "14px",
                color: "#000000",
                fontWeight: "light",
              }}
            >
              EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                fontFamily: "raleway",
                fontSize: "14px",
                border: "none",
                borderBottom: "1px solid #000000",
                fontSize: "16px",
                color: "#000000",
                backgroundColor: "#fff",
                marginTop: "0.5%",
                marginBottom: "0.5%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              style={{
                fontFamily: "raleway",
                fontSize: "14px",
                color: "#000000",
                fontWeight: "light",
              }}
            >
              MESSAGE
            </label>
            <textarea
              style={{
                fontFamily: "raleway",
                fontSize: "14px",
                border: "1px solid #000000",
                fontSize: "16px",
                color: "#000000",
                backgroundColor: "#fff",
                marginTop: "1%",
                marginBottom: "2%",
                resize: "none",
                height: "100px",
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "14px 27px",
                gap: "18px",
                height: "40px",
                color: isHovered ? "#000" : "#fff",
                background: isHovered ? "#fff" : "#000",
                border: isHovered ? "2px solid #000" : "none",
                borderRadius: "38px",
                cursor: "pointer",
                boxShadow: isActive ? "inset 0 0 50px #d7d7d7" : "none",
              }}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
