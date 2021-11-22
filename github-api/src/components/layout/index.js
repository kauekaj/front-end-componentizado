import React, { children } from "react";

function Layout( { children } ) {
    return (
        <section>
            <header>header</header>
            {children}
        </section>
    );
}

export default Layout;