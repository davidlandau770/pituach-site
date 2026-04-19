import type { CSSProperties, FC } from "react";

interface LoadingProps {
  text?: string;
  overlay?: boolean;
  size?: number;
  sx?: CSSProperties;
}

const Loading: FC<LoadingProps> = ({
  text = "טוען...",
  overlay = false,
  size = 40,
  sx,
}) => {
  const spinnerStyle: CSSProperties = {
    width: size,
    height: size,
    border: `${size / 10}px solid #ccc`,
    borderTopColor: "#000",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  };

  const containerStyle: React.CSSProperties = overlay
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255,255,255,0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }
    : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={{ direction: "rtl", ...containerStyle, ...sx }}>
        <div style={spinnerStyle}></div>
        <div>{text}</div>
      </div>
    </>
  );
};

export default Loading;
