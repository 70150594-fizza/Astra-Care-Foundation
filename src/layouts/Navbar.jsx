export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px", background: "#eee" }}>
      <div style={{ fontWeight: "bold" }}>SHAJAR HOPE</div>
      <div>
        <span style={{ margin: "0 10px" }}>Home</span>
        <span style={{ margin: "0 10px" }}>About</span>
        <span style={{ margin: "0 10px" }}>Students</span>
      </div>
    </nav>
  );
}