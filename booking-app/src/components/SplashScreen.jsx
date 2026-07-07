import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <img
        src="/splash.jpg"
        alt="Detailly Splash"
        style={{
          width: "50%",
          maxWidth: "430px",
          minWidth: "260px",
          height: "auto",
          objectFit: "contain",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}