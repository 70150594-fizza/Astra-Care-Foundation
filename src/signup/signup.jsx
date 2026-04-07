import React from 'react';

export default function SignUp() {
  const socialBtn = {
    width: '100%', padding: '10px', margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer', fontSize: '14px'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '85vh', background: '#f8fafc' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 25px rgba(0,0,0,0.1)', width: '400px' }}>
        <h2 style={{ color: '#004d40', textAlign: 'center' }}>Create Account</h2>
        
        <button style={socialBtn}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="" /> Sign up with Google
        </button>
        <button style={socialBtn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" width="16" alt="" /> Sign up with Apple
        </button>

        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
          <hr style={{ flex: 1, border: '0.1px solid #eee' }} />
          <span style={{ padding: '0 10px', fontSize: '11px', color: '#aaa' }}>OR</span>
          <hr style={{ flex: 1, border: '0.1px solid #eee' }} />
        </div>

        <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd', borderRadius: '8px' }} />
        <input type="email" placeholder="Email" style={{ width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd', borderRadius: '8px' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', margin: '8px 0', border: '1px solid #ddd', borderRadius: '8px' }} />
        
        <button style={{ width: '100%', padding: '14px', background: '#004d40', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '10px' }}>
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
}