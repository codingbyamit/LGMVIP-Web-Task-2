import React from "react";

function Navbar() {
    function handle(e) {
        e.nativeEvent.srcElement.innerHTML = "Button";
        console.log(e.nativeEvent.srcElement);
    }
    return (
        <div id="navbar">
            <nav>
                <h2>Random Users</h2>
                <button onClick={handle}>Get Users</button>
            </nav>
        </div>
    );
}

export default Navbar;
