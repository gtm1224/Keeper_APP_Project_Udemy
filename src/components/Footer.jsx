import React from "react";

const cur = new Date().getFullYear();
const footer_str = "Copyright ⓒ"+cur;
function Footer(){
    return <footer>
        <p>{footer_str}</p>
    </footer>
}

export default Footer;