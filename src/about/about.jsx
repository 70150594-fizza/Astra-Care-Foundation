export default function About() {
  return (
    <div style={{ maxWidth: '900px', margin: '50px auto', padding: '30px', borderLeft: '10px solid #002147', background: '#fff', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#002147' }}>About Shajar Hope Alliance</h1>
      <p style={{ lineHeight: '1.8', color: '#444' }}>
        Our mission is to ensure that financial hardship never limits education. We believe every student deserves a chance to shine regardless of their financial background.
      </p>
      <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3 style={{ color: '#002147' }}>Our Mission</h3>
          <p>Providing interest-free financial assistance to deserving individuals.</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3 style={{ color: '#002147' }}>Our Vision</h3>
          <p>A world where talent is never wasted because of financial hurdles.</p>
        </div>
      </div>
    </div>
  );
}