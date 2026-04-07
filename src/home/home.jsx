import React from 'react';

export default function Home() {
  // Styles for the Stats Cards
  const statCardStyle = {
    background: '#003d33', border: '1px solid #005a4e', borderRadius: '12px',
    padding: '20px', textAlign: 'center', color: 'white', flex: 1, minWidth: '150px'
  };

  // Styles for Student Cards
  const studentCardStyle = {
    background: '#002d25', border: '1px solid #004d40', borderRadius: '15px',
    padding: '20px', color: 'white', position: 'relative'
  };

  return (
    <div style={{ background: '#001a15', minHeight: '100vh', padding: '40px 60px', fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. TOP STATS ROW */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <div style={statCardStyle}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>8</div>
          <div style={{ fontSize: '12px', color: '#8dbfb8', textTransform: 'uppercase' }}>Total Students</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>5</div>
          <div style={{ fontSize: '12px', color: '#8dbfb8', textTransform: 'uppercase' }}>Active Support</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffc107' }}>PKR 530,000</div>
          <div style={{ fontSize: '12px', color: '#8dbfb8', textTransform: 'uppercase' }}>Total Funded</div>
        </div>
        <div style={statCardStyle}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>3.62</div>
          <div style={{ fontSize: '12px', color: '#8dbfb8', textTransform: 'uppercase' }}>Avg GPA</div>
        </div>
      </div>

      {/* 2. SEARCH & ACTION BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Search by name or university..." 
          style={{ background: '#002d25', border: '1px solid #004d40', padding: '12px 20px', borderRadius: '30px', color: 'white', width: '300px', outline: 'none' }}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ background: '#ffc107', color: '#001a15', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            + Add Student
          </button>
        </div>
      </div>

      {/* 3. STUDENTS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
        
        {/* Student 1: Ahmed Khan */}
        <div style={studentCardStyle}>
          <h3 style={{ margin: '0 0 5px 0' }}>Ahmed Khan</h3>
          <p style={{ fontSize: '12px', color: '#ffc107', margin: '0 0 15px 0' }}>NUST</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
            <span style={{ color: '#8dbfb8' }}>Program</span>
            <span>Software Engineering</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
            <span style={{ color: '#8dbfb8' }}>GPA</span>
            <span>3.80</span>
          </div>
          <hr style={{ border: '0.5px solid #004d40', margin: '15px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>PKR 75,000</span>
            <span style={{ background: '#1b5e20', color: '#81c784', padding: '4px 12px', borderRadius: '20px', fontSize: '11px' }}>ACTIVE</span>
          </div>
        </div>

        {/* Student 2: Sana Fatima */}
        <div style={studentCardStyle}>
          <h3 style={{ margin: '0 0 5px 0' }}>Sana Fatima</h3>
          <p style={{ fontSize: '12px', color: '#ffc107', margin: '0 0 15px 0' }}>DOW MEDICAL</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
            <span style={{ color: '#8dbfb8' }}>Program</span>
            <span>MBBS</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
            <span style={{ color: '#8dbfb8' }}>GPA</span>
            <span>3.90</span>
          </div>
          <hr style={{ border: '0.5px solid #004d40', margin: '15px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>PKR 100,000</span>
            <span style={{ background: '#1b5e20', color: '#81c784', padding: '4px 12px', borderRadius: '20px', fontSize: '11px' }}>ACTIVE</span>
          </div>
        </div>

        {/* Student 3: Usman Ali */}
        <div style={studentCardStyle}>
          <h3 style={{ margin: '0 0 5px 0' }}>Usman Ali</h3>
          <p style={{ fontSize: '12px', color: '#ffc107', margin: '0 0 15px 0' }}>LUMS</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
            <span style={{ color: '#8dbfb8' }}>Program</span>
            <span>Business Admin</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
            <span style={{ color: '#8dbfb8' }}>GPA</span>
            <span>3.20</span>
          </div>
          <hr style={{ border: '0.5px solid #004d40', margin: '15px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>PKR 60,000</span>
            <span style={{ background: '#e65100', color: '#ffb74d', padding: '4px 12px', borderRadius: '20px', fontSize: '11px' }}>PENDING</span>
          </div>
        </div>

      </div>
    </div>
  );
}