import { Routes, Route, Link } from 'react-router-dom';

// SAARI IMPORTS YAHAN HAIN
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import SignIn from './signin/signin';
import SignUp from './signup/signup';

function App() {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#001a15' }}>
      
      {/* PROFESSIONAL NAVBAR */}
      <nav style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '15px 60px', background: '#002d25', color: 'white', 
        borderBottom: '2px solid #ffc107', position: 'sticky', top: 0, zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#ffc107', color: '#002d25', padding: '5px 10px', borderRadius: '4px', fontWeight: '900' }}>AC</div>
          <span style={{ fontWeight: '800', fontSize: '20px', letterSpacing: '1px' }}>ASTRA CARE</span>
        </div>

        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/about" style={navLinkStyle}>About</Link>
          <Link to="/contact" style={navLinkStyle}>Contact</Link>
          
          <div style={{ height: '20px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
          
          <Link to="/signin" style={navLinkStyle}>Log In</Link>
          <Link to="/signup">
            <button style={{ 
              background: '#ffc107', border: 'none', padding: '10px 20px', 
              borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', color: '#002d25' 
            }}>
              JOIN US
            </button>
          </Link>
        </div>
      </nav>

      {/* DEVELOPER STRIP */}
      <div style={{ background: '#ffc107', padding: '4px 60px', fontSize: '11px', color: '#002d25', textAlign: 'right', fontWeight: 'bold' }}>
        LOGGED AS: FIZZA AZEEM | SENIOR DEVELOPER
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#001a15', color: '#8dbfb8', textAlign: 'center', padding: '30px', borderTop: '1px solid #004d40' }}>
        <p style={{ margin: 0 }}>© 2026 Astra Care Foundation. All rights reserved.</p>
        <p style={{ fontSize: '12px', marginTop: '5px' }}>Designed & Coded by <span style={{ color: '#ffc107' }}>Fizza Azeem</span></p>
      </footer>
    </div>
  );
}

export default App;