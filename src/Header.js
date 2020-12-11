import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <div style={{ display: "inline" }}>
                <h1 style={{ display: "inline" }}>WELCOME</h1>
            </div>
        </header>
    )
}

const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    paddingTop: "10px",
}



export default Header;