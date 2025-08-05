// src/components/Footer.jsx
import React from 'react';
function Footer() {
  return (
    <>
    <footer style={{ padding: '1rem', background: '#eee', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} My Website</p>
    </footer>
   
    </>
  );
}
export default Footer;
