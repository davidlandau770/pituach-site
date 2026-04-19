import GenericTile from "../generic-tile/GenericTile";
import NavLink from "../../routes/components/NavLink";

export default function NavBar() {
  return (
    <GenericTile
      sx={{
        border: "0",
        borderRadius: "0",
        fontWeight: "bold",
        backgroundColor: "#434343",
        direction: "rtl",
        padding: "0 20px",
        borderBottom: "2px dotted #666",
        margin: "0",
      }}
    >
      <p style={{ color: "#aaaaaa73", fontSize: "1.4em", fontWeight: "100" }}>
        |
      </p>
      <NavLink to="/" color="#aaa">
        עמוד ראשי
      </NavLink>
      <p style={{ color: "#aaaaaa73", fontSize: "1.4em", fontWeight: "100" }}>
        |
      </p>
      <NavLink to="/logout" color="#aaa">
        יציאה
      </NavLink>
    </GenericTile>
  );
}
