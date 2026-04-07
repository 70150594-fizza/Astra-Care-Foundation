import React from 'react';

export default function Contact() {
  const cardStyle = {
    background: '#002d25',
    border: '1px solid #004d40',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    color: 'white'
  };

  const inputStyle = {
    background: '#003d33',
    border: '1px solid #004d40',
    padding: '12px',
    borderRadius: '8px',
    color: 'white',
    width: '100%',
    marginBottom: '15px',
    outline: 'none'
  };

  return (
    <div style={{ background: '#001a15', minHeight: '100vh', padding: '60px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ display: 'flex', gap: '50px', maxWidth: '1100px', margin: '0 auto', flexWrap: 'wrap' }}>
        
        {/* LEFT SIDE: Info Cards */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={cardStyle}>
            <div style={{ fontSize: '24px' }}>📧</div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#ffc107' }}>Email</div>
              <div style={{ fontSize: '14px', color: '#8dbfb8' }}>support@astracare.org</div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontSize: '24px' }}>📍</div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#ffc107' }}>Location</div>
              <div style={{ fontSize: '14px', color: '#8dbfb8' }}>Lahore, Pakistan</div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ fontSize: '24px' }}>⏰</div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#ffc107' }}>Working Hours</div>
              <div style={{ fontSize: '14px', color: '#8dbfb8' }}>Mon - Fri, 9 AM - 6 PM</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div style={{ flex: '1.5', background: '#002d25', padding: '40px', borderRadius: '20px', border: '1px solid #004d40' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Send Message</h2>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
          </div>
          
          <input type="email" placeholder="Email" style={inputStyle} />
          
          <select style={inputStyle}>
            <option>Select Subject</option>
            <option>Donation Inquiry</option>
            <option>Student Support</option>
            <option>Volunteer</option>
          </select>

          <textarea placeholder="Your Message" rows="5" style={{ ...inputStyle, resize: 'none' }}></textarea>

          <button style={{ 
            width: '100%', padding: '14px', background: '#ffc107', color: '#001a15', 
            border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' 
          }}>
            SEND MESSAGE
          </button>
        </div>

      </div>
    </div>
  );
}