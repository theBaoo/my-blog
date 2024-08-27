import React from 'react';

function Footer() {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f1f1f1', marginTop: '2rem' }}>
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </footer>
    );
}

export default Footer;