import React from 'react';

export default function SignIn() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', background: '#f8fafc' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 15px rgba(0,0,0,0.05)', width: '350px' }}>
        <h2 style={{ color: '#004d40', textAlign: 'center' }}>Welcome Back</h2>
        <input type="email" placeholder="Email" style={{ width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '8px' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '12px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '8px' }} />
        <button style={{ width: '100%', padding: '14px', background: '#ffc107', color: '#004d40', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          SIGN IN
        </button>
        <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '15px', color: '#999' }}>Dev: Fizza Azeem</p>
      </div>
    </div>
  );
}