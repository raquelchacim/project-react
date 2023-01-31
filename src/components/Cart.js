export default function Cart({}) {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => setVisibility(!isVisible)}>
        Show Cart
      </button>
      {isVisible && (
        <div style={styles.popup}>
          <p>Your cart items go here!</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  button: {
    backgroundColor: "lightgray",
    padding: "10px 15px",
    borderRadius: 5,
    cursor: "pointer",
  },
  popup: {
    backgroundColor: "white",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    padding: "20px",
    width: "300px",
  },
};

