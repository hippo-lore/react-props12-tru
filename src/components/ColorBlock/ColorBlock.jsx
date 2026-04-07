import { useState, useEffect } from "react";

function ColorBlock() {
  const [color, setColor] = useState("pink");

  const changeColor = () => {
    setColor(color === "pink" ? "purple" : "pink");
  };

  useEffect(() => {
    console.log("Поточний колір:", color);
  }, [color]);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      
      <div
        style={{
          width: "230px",
          height: "230px",
          margin: "0 auto",
          borderRadius: "20px",
          background:
            color === "pink"
              ? "linear-gradient(45deg, #ff0055, #ff1493)"
              : "linear-gradient(45deg, #6a00ff, #b300ff)",
          boxShadow:
            color === "pink"
              ? "0 0 30px #ff0055"
              : "0 0 30px #a100ff",
          transition: "0.3s"
        }}
      ></div>

      <button
        onClick={changeColor}
        style={{
          marginTop: "25px",
          padding: "12px 25px",
          border: "none",
          borderRadius: "12px",
          background: "linear-gradient(45deg, #ff0055, #a100ff)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 0 20px #ff00ff",
        }}
      >
        🎨 Змінити колір
      </button>

    </div>
  );
}

export default ColorBlock;